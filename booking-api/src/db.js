const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const TIMEZONE = process.env.BUSINESS_TIMEZONE || 'America/Chicago';
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

async function getServiceTypes() {
  const { rows } = await pool.query(
    `select slug, name, description, duration_minutes
     from service_types
     where active = true
     order by sort_order asc`
  );
  return rows;
}

async function getServiceBySlug(slug) {
  const { rows } = await pool.query(
    `select id, slug, name, duration_minutes
     from service_types
     where slug = $1 and active = true`,
    [slug]
  );
  return rows[0] || null;
}

// One candidate slot per hour on the hour, matching AMW's prior Cal.com
// cadence. Change SLOT_STEP_MINUTES to offer finer-grained slots later.
const SLOT_STEP_MINUTES = 60;

async function getAvailableSlots(serviceSlug, dateStr) {
  const service = await getServiceBySlug(serviceSlug);
  if (!service) return [];

  const { rows: hoursRows } = await pool.query(
    `select start_time, end_time, is_open
     from business_hours
     where day_of_week = extract(dow from $1::date at time zone $2)`,
    [dateStr, TIMEZONE]
  );
  const hours = hoursRows[0];
  if (!hours || !hours.is_open) return [];

  const { rows: boundsRows } = await pool.query(
    `select
       ($1::date::text || ' ' || $2::text)::timestamp at time zone $3 as day_start,
       ($1::date::text || ' ' || $4::text)::timestamp at time zone $3 as day_end`,
    [dateStr, hours.start_time, TIMEZONE, hours.end_time]
  );
  const { day_start: dayStart, day_end: dayEnd } = boundsRows[0];

  const { rows: slotRows } = await pool.query(
    `select gs as slot_start
     from generate_series($1::timestamptz, $2::timestamptz - interval '1 minute', ($3 || ' minutes')::interval) as gs`,
    [dayStart, dayEnd, SLOT_STEP_MINUTES]
  );

  const now = new Date();
  const durationMs = service.duration_minutes * 60 * 1000;
  const dayEndMs = new Date(dayEnd).getTime();

  const candidates = slotRows
    .map((r) => new Date(r.slot_start))
    .filter((slot) => slot.getTime() + durationMs <= dayEndMs)
    .filter((slot) => slot.getTime() > now.getTime());

  if (candidates.length === 0) return [];

  const { rows: overlapRows } = await pool.query(
    `select time_range from bookings
     where status = 'confirmed'
       and time_range && tstzrange($1::timestamptz, $2::timestamptz, '[)')`,
    [candidates[0].toISOString(), new Date(dayEndMs).toISOString()]
  );

  const isFree = (slotStart, slotEnd) =>
    !overlapRows.some((r) => rangesOverlap(r.time_range, slotStart, slotEnd));

  return candidates
    .filter((slot) => isFree(slot, new Date(slot.getTime() + durationMs)))
    .map((slot) => slot.toISOString());
}

// Parses Postgres's tstzrange text form, e.g. '["2026-08-01 13:00:00+00","2026-08-01 14:00:00+00")'
function rangesOverlap(pgRangeText, slotStart, slotEnd) {
  const match = /\[?"?([^",]+)"?,\s*"?([^",)\]]+)"?[)\]]?/.exec(pgRangeText);
  if (!match) return false;
  const existingStart = new Date(match[1]).getTime();
  const existingEnd = new Date(match[2]).getTime();
  return slotStart.getTime() < existingEnd && existingStart < slotEnd.getTime();
}

class BookingError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.status = status;
  }
}

async function createBooking({ serviceSlug, startTimeIso, customerName, customerEmail, customerPhone, customerAddress, notes }) {
  if (!customerName || !customerName.trim()) {
    throw new BookingError('Name is required');
  }
  if (!customerEmail || !EMAIL_RE.test(customerEmail)) {
    throw new BookingError('A valid email is required');
  }
  if (!customerPhone || !customerPhone.trim()) {
    throw new BookingError('Phone number is required');
  }
  if (!customerAddress || !customerAddress.trim()) {
    throw new BookingError('Service address is required');
  }
  const startTime = new Date(startTimeIso);
  if (Number.isNaN(startTime.getTime()) || startTime.getTime() <= Date.now()) {
    throw new BookingError('That time has already passed');
  }

  const service = await getServiceBySlug(serviceSlug);
  if (!service) {
    throw new BookingError('Unknown service type');
  }

  const endTime = new Date(startTime.getTime() + service.duration_minutes * 60 * 1000);

  const client = await pool.connect();
  try {
    await client.query('begin');

    const { rows: overlapRows } = await client.query(
      `select 1 from bookings
       where status = 'confirmed'
         and time_range && tstzrange($1::timestamptz, $2::timestamptz, '[)')
       for update`,
      [startTime.toISOString(), endTime.toISOString()]
    );
    if (overlapRows.length > 0) {
      throw new BookingError('That time was just booked by someone else -- please pick another slot', 409);
    }

    let inserted;
    try {
      const result = await client.query(
        `insert into bookings (service_type_id, customer_name, customer_email, customer_phone, customer_address, notes, start_time, end_time)
         values ($1, $2, $3, $4, $5, $6, $7, $8)
         returning id, cancel_token, start_time, end_time`,
        [
          service.id,
          customerName.trim(),
          customerEmail.trim().toLowerCase(),
          customerPhone.trim(),
          customerAddress.trim(),
          notes || null,
          startTime.toISOString(),
          endTime.toISOString(),
        ]
      );
      inserted = result.rows[0];
    } catch (err) {
      if (err.code === '23P01') {
        // exclusion_violation -- the GiST constraint caught a race the
        // row-lock above missed (shouldn't happen given the FOR UPDATE
        // lock, but this is the real backstop against double-booking).
        throw new BookingError('That time was just booked by someone else -- please pick another slot', 409);
      }
      throw err;
    }

    await client.query('commit');

    return {
      bookingId: inserted.id,
      cancelToken: inserted.cancel_token,
      serviceName: service.name,
      startTime: inserted.start_time,
      endTime: inserted.end_time,
    };
  } catch (err) {
    await client.query('rollback');
    throw err;
  } finally {
    client.release();
  }
}

async function cancelBooking(bookingId, cancelToken) {
  const { rowCount } = await pool.query(
    `update bookings set status = 'cancelled'
     where id = $1 and cancel_token = $2 and status = 'confirmed'`,
    [bookingId, cancelToken]
  );
  return rowCount > 0;
}

module.exports = {
  pool,
  BookingError,
  getServiceTypes,
  getServiceBySlug,
  getAvailableSlots,
  createBooking,
  cancelBooking,
};

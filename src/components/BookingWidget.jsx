import React, { useEffect, useMemo, useState } from 'react';
import { FaCalendarCheck, FaCheckCircle, FaChevronLeft, FaChevronRight, FaClock } from 'react-icons/fa';
import { SUPABASE_URL, SUPABASE_ANON_KEY, supabaseHeaders, parsePostgrestError } from '../lib/supabaseBooking';
import { sendBookingConfirmationEmails } from '../lib/bookingEmail';
import { trackPhoneClick } from '../utils/analytics';

function formatDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function formatDayLabel(date) {
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

function formatSlotTime(iso) {
  return new Date(iso).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'America/Chicago',
  });
}

function formatSlotFull(iso) {
  return new Date(iso).toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'America/Chicago',
    timeZoneName: 'short',
  });
}

// 14 upcoming days for the date strip, so the customer picks a day before
// slots are fetched (rather than loading every day's availability at once).
function upcomingDays(count = 14) {
  const days = [];
  const today = new Date();
  for (let i = 0; i < count; i += 1) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

export default function BookingWidget() {
  const [step, setStep] = useState('service'); // service | datetime | details | confirmed
  const [services, setServices] = useState([]);
  const [servicesError, setServicesError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const days = useMemo(() => upcomingDays(), []);
  const [selectedDate, setSelectedDate] = useState(days[0]);
  const [slots, setSlots] = useState([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [slotsError, setSlotsError] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', notes: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [confirmed, setConfirmed] = useState(null);

  useEffect(() => {
    if (!SUPABASE_URL) return;
    fetch(`${SUPABASE_URL}/service_types?select=slug,name,description,duration_minutes&active=eq.true&order=sort_order`, {
      headers: supabaseHeaders(),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(await parsePostgrestError(res, 'Could not load services'));
        return res.json();
      })
      .then(setServices)
      .catch((err) => setServicesError(err.message));
  }, []);

  useEffect(() => {
    if (step !== 'datetime' || !selectedService) return undefined;
    let cancelled = false;
    setSlotsLoading(true);
    setSlotsError(null);
    setSelectedSlot(null);

    fetch(`${SUPABASE_URL}/rpc/get_available_slots`, {
      method: 'POST',
      headers: supabaseHeaders(),
      body: JSON.stringify({
        p_service_slug: selectedService.slug,
        p_date: formatDateKey(selectedDate),
      }),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(await parsePostgrestError(res, 'Could not load availability'));
        return res.json();
      })
      .then((rows) => {
        if (!cancelled) setSlots((rows || []).map((r) => r.slot_start));
      })
      .catch((err) => {
        if (!cancelled) setSlotsError(err.message);
      })
      .finally(() => {
        if (!cancelled) setSlotsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [step, selectedService, selectedDate]);

  const handleShiftDay = (delta) => {
    const idx = days.findIndex((d) => formatDateKey(d) === formatDateKey(selectedDate));
    const nextIdx = idx + delta;
    if (nextIdx >= 0 && nextIdx < days.length) setSelectedDate(days[nextIdx]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch(`${SUPABASE_URL}/rpc/create_booking`, {
        method: 'POST',
        headers: supabaseHeaders(),
        body: JSON.stringify({
          p_service_slug: selectedService.slug,
          p_start_time: selectedSlot,
          p_customer_name: form.name,
          p_customer_email: form.email,
          p_customer_phone: form.phone,
          p_customer_address: form.address,
          p_notes: form.notes || null,
        }),
      });
      if (!res.ok) {
        throw new Error(await parsePostgrestError(res, 'Something went wrong. Please call (936) 331-1339 instead.'));
      }
      const rows = await res.json();
      const result = Array.isArray(rows) ? rows[0] : rows;
      setConfirmed({
        serviceName: result.service_name,
        startTime: result.start_time,
        endTime: result.end_time,
        bookingId: result.booking_id,
        cancelToken: result.cancel_token,
      });
      setStep('confirmed');

      // Best-effort: the booking is already saved, so a failed email
      // shouldn't block the confirmation screen the customer sees.
      sendBookingConfirmationEmails({
        bookingId: result.booking_id,
        cancelToken: result.cancel_token,
        serviceName: result.service_name,
        startTime: result.start_time,
        endTime: result.end_time,
        customerName: form.name,
        customerEmail: form.email,
        customerPhone: form.phone,
        customerAddress: form.address,
        notes: form.notes,
      }).catch((err) => console.error('[booking] confirmation email failed:', err));
    } catch (err) {
      setSubmitError(err.message);
      if (err.message.includes('booked by someone else')) {
        // Slot vanished between load and submit -- bounce back so the
        // customer picks a still-open time instead of retrying a dead one.
        setStep('datetime');
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return (
      <div className="text-center py-16 px-4">
        <p className="text-gray-600">
          Online booking is temporarily unavailable. Please call{' '}
          <a href="tel:+19363311339" onClick={() => trackPhoneClick('booking_widget')} className="text-red-500 font-bold">(936) 331-1339</a> to schedule.
        </p>
      </div>
    );
  }

  if (step === 'confirmed' && confirmed) {
    return (
      <div className="text-center py-12 px-4">
        <FaCheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-blue-900 mb-2">Appointment Confirmed</h3>
        <p className="text-gray-700 mb-1">{confirmed.serviceName}</p>
        <p className="text-gray-700 font-semibold mb-4">{formatSlotFull(confirmed.startTime)}</p>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          A confirmation email is on its way. Need to reschedule or cancel? Use the link in that email, or call
          (936) 331-1339.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8">
      {step === 'service' && (
        <div>
          {servicesError && <p className="text-red-600 text-center mb-4">{servicesError}</p>}
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((svc) => (
              <button
                key={svc.slug}
                type="button"
                onClick={() => {
                  setSelectedService(svc);
                  setStep('datetime');
                }}
                className="text-left border-2 border-gray-200 hover:border-red-500 rounded-xl p-5 transition"
              >
                <h4 className="font-bold text-blue-900 mb-1">{svc.name}</h4>
                <p className="text-sm text-gray-600 mb-3">{svc.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500">
                  <FaClock className="w-3 h-3" /> {svc.duration_minutes} min
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 'datetime' && selectedService && (
        <div>
          <button
            type="button"
            onClick={() => setStep('service')}
            className="text-sm text-blue-700 hover:text-blue-900 mb-4 inline-flex items-center gap-1"
          >
            <FaChevronLeft className="w-3 h-3" /> Change service
          </button>
          <h4 className="font-bold text-blue-900 mb-4">{selectedService.name}</h4>

          <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
            <button
              type="button"
              onClick={() => handleShiftDay(-1)}
              aria-label="Previous day"
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 flex-shrink-0"
            >
              <FaChevronLeft className="w-3 h-3" />
            </button>
            {days.map((d) => {
              const isSelected = formatDateKey(d) === formatDateKey(selectedDate);
              return (
                <button
                  key={formatDateKey(d)}
                  type="button"
                  onClick={() => setSelectedDate(d)}
                  className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm font-semibold transition ${
                    isSelected ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {formatDayLabel(d)}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => handleShiftDay(1)}
              aria-label="Next day"
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 flex-shrink-0"
            >
              <FaChevronRight className="w-3 h-3" />
            </button>
          </div>

          {slotsLoading && <p className="text-gray-500 text-center py-8">Loading available times...</p>}
          {slotsError && <p className="text-red-600 text-center py-8">{slotsError}</p>}
          {!slotsLoading && !slotsError && slots.length === 0 && (
            <p className="text-gray-500 text-center py-8">No openings this day -- try another date.</p>
          )}
          {!slotsLoading && slots.length > 0 && (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {slots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => {
                    setSelectedSlot(slot);
                    setStep('details');
                  }}
                  className="border-2 border-gray-200 hover:border-red-500 rounded-lg py-2 text-sm font-semibold text-blue-900 transition"
                >
                  {formatSlotTime(slot)}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {step === 'details' && selectedService && selectedSlot && (
        <form onSubmit={handleSubmit}>
          <button
            type="button"
            onClick={() => setStep('datetime')}
            className="text-sm text-blue-700 hover:text-blue-900 mb-4 inline-flex items-center gap-1"
          >
            <FaChevronLeft className="w-3 h-3" /> Change time
          </button>
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="font-bold text-blue-900">{selectedService.name}</p>
            <p className="text-sm text-gray-700">{formatSlotFull(selectedSlot)}</p>
          </div>

          {submitError && <p className="text-red-600 mb-4">{submitError}</p>}

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-bold text-blue-900 mb-1" htmlFor="booking-name">Full Name</label>
              <input
                id="booking-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-blue-900 mb-1" htmlFor="booking-phone">Phone</label>
              <input
                id="booking-phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold text-blue-900 mb-1" htmlFor="booking-address">
              Service Address
            </label>
            <input
              id="booking-address"
              type="text"
              required
              placeholder="Street address, city, zip"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold text-blue-900 mb-1" htmlFor="booking-email">Email</label>
            <input
              id="booking-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold text-blue-900 mb-1" htmlFor="booking-notes">
              Anything we should know?
            </label>
            <textarea
              id="booking-notes"
              rows="3"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-red-500 disabled:opacity-60 text-white px-6 py-4 rounded-lg hover:bg-red-600 transition font-bold text-lg"
          >
            <FaCalendarCheck className="w-5 h-5" />
            {submitting ? 'Booking...' : 'Confirm Appointment'}
          </button>
        </form>
      )}
    </div>
  );
}

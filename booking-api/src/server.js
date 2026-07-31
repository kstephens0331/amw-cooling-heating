require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { BookingError, getServiceTypes, getAvailableSlots, createBooking, cancelBooking } = require('./db');
const { sendBookingEmails } = require('./email');

const app = express();
app.use(express.json());

const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'https://amwairconditioning.com,https://www.amwairconditioning.com')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      // Allow same-origin/non-browser requests (no Origin header) and
      // anything in ALLOWED_ORIGINS. Reject everything else so this API
      // can't be casually embedded/scraped from an arbitrary third-party site.
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error('Not allowed by CORS'));
    },
  })
);

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG_RE = /^[a-z0-9-]+$/;

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.get('/api/services', async (_req, res, next) => {
  try {
    const services = await getServiceTypes();
    res.json(services);
  } catch (err) {
    next(err);
  }
});

app.get('/api/availability', async (req, res, next) => {
  try {
    const { service, date } = req.query;
    if (typeof service !== 'string' || !SLUG_RE.test(service)) {
      return res.status(400).json({ error: 'Invalid or missing "service" query param' });
    }
    if (typeof date !== 'string' || !DATE_RE.test(date)) {
      return res.status(400).json({ error: 'Invalid or missing "date" query param (expected YYYY-MM-DD)' });
    }
    const slots = await getAvailableSlots(service, date);
    res.json({ slots });
  } catch (err) {
    next(err);
  }
});

// Booking creation is the one endpoint that actually writes data and
// sends email, so it gets its own tighter rate limit -- generous enough
// for a real customer retrying a mistyped email, tight enough to blunt
// a scripted spam/abuse attempt against a publicly reachable endpoint.
const bookingLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 8,
  standardHeaders: true,
  legacyHeaders: false,
});

app.post('/api/bookings', bookingLimiter, async (req, res, next) => {
  try {
    const { service, startTime, name, email, phone, address, notes } = req.body || {};
    if (typeof service !== 'string' || !SLUG_RE.test(service)) {
      return res.status(400).json({ error: 'Invalid or missing "service"' });
    }
    if (typeof startTime !== 'string') {
      return res.status(400).json({ error: 'Invalid or missing "startTime"' });
    }

    const booking = await createBooking({
      serviceSlug: service,
      startTimeIso: startTime,
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      customerAddress: address,
      notes,
    });

    // Respond as soon as the booking is durably saved; email delivery
    // failing shouldn't turn a successful booking into an error response
    // for the customer (it's still logged server-side either way).
    res.status(201).json({
      bookingId: booking.bookingId,
      cancelToken: booking.cancelToken,
      serviceName: booking.serviceName,
      startTime: booking.startTime,
      endTime: booking.endTime,
    });

    sendBookingEmails({
      bookingId: booking.bookingId,
      cancelToken: booking.cancelToken,
      serviceName: booking.serviceName,
      startTime: booking.startTime,
      endTime: booking.endTime,
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      customerAddress: address,
      notes,
    }).catch((err) => console.error('[email] unexpected error sending booking emails:', err));
  } catch (err) {
    next(err);
  }
});

app.post('/api/bookings/:id/cancel', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { cancelToken } = req.body || {};
    if (!cancelToken) {
      return res.status(400).json({ error: 'Missing cancelToken' });
    }
    const cancelled = await cancelBooking(id, cancelToken);
    if (!cancelled) {
      return res.status(404).json({ error: 'Booking not found, already cancelled, or token mismatch' });
    }
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
});

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  if (err instanceof BookingError) {
    return res.status(err.status).json({ error: err.message });
  }
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({ error: 'Forbidden' });
  }
  console.error('[server] unhandled error:', err);
  res.status(500).json({ error: 'Something went wrong. Please call (936) 331-1339 instead.' });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`AMW booking API listening on port ${port}`);
});

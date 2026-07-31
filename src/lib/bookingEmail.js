import emailjs from '@emailjs/browser';

// The site is a static export (no API routes), and the booking backend is
// plain PostgREST with no server-side code of its own to hold a secret mail
// API key -- so booking emails go out via EmailJS, which is designed to send
// mail straight from the browser: the public key is safe to expose, and the
// actual send happens through EmailJS's own service using templates
// configured in the EmailJS dashboard, not a key we control server-side.
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const CUSTOMER_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID || '';
const ADMIN_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

const ADMIN_EMAIL = 'admin@amwairconditioning.com';
const SITE_URL = 'https://amwairconditioning.com';

function isConfigured() {
  return Boolean(SERVICE_ID && CUSTOMER_TEMPLATE_ID && ADMIN_TEMPLATE_ID && PUBLIC_KEY);
}

function formatWhen(startTime, endTime) {
  const dateFmt = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'America/Chicago',
    timeZoneName: 'short',
  });
  const endFmt = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'America/Chicago',
  });
  return `${dateFmt.format(new Date(startTime))} - ${endFmt.format(new Date(endTime))}`;
}

// Fire-and-forget from the caller's point of view -- the booking is already
// saved in the database by the time this runs, so an email failure shouldn't
// block showing the customer their confirmation. Errors are only logged.
export async function sendBookingConfirmationEmails(booking) {
  if (!isConfigured()) {
    console.warn('[booking-email] EmailJS not configured -- skipping confirmation emails for booking', booking.bookingId);
    return;
  }

  const when = formatWhen(booking.startTime, booking.endTime);
  const cancelUrl = `${SITE_URL}/cancel-appointment?id=${booking.bookingId}&token=${booking.cancelToken}`;

  const customerSend = emailjs.send(
    SERVICE_ID,
    CUSTOMER_TEMPLATE_ID,
    {
      to_email: booking.customerEmail,
      customer_name: booking.customerName,
      service_name: booking.serviceName,
      appointment_when: when,
      customer_address: booking.customerAddress,
      cancel_url: cancelUrl,
    },
    { publicKey: PUBLIC_KEY }
  );

  const adminSend = emailjs.send(
    SERVICE_ID,
    ADMIN_TEMPLATE_ID,
    {
      to_email: ADMIN_EMAIL,
      customer_name: booking.customerName,
      customer_email: booking.customerEmail,
      customer_phone: booking.customerPhone,
      customer_address: booking.customerAddress,
      service_name: booking.serviceName,
      appointment_when: when,
      notes: booking.notes || '(none)',
    },
    { publicKey: PUBLIC_KEY }
  );

  const results = await Promise.allSettled([customerSend, adminSend]);
  results.forEach((r, i) => {
    if (r.status === 'rejected') {
      console.error(`[booking-email] failed to send ${i === 0 ? 'customer' : 'admin'} email for booking ${booking.bookingId}:`, r.reason);
    }
  });
}

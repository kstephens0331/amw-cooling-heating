const { Resend } = require('resend');

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const FROM = process.env.BOOKING_FROM_EMAIL || 'AMW Cooling & Heating <bookings@stephenscode.dev>';
const ADMIN_EMAIL = process.env.BOOKING_ADMIN_EMAIL || 'admin@amwairconditioning.com';
const SITE_URL = process.env.PUBLIC_SITE_URL || 'https://amwairconditioning.com';

function formatWhen(startTime, endTime) {
  const fmt = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'America/Chicago',
    timeZoneName: 'short',
  });
  return `${fmt.format(new Date(startTime))} - ${new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'America/Chicago' }).format(new Date(endTime))}`;
}

async function sendBookingEmails(booking) {
  if (!resend) {
    console.warn('[email] RESEND_API_KEY not set -- skipping email send for booking', booking.bookingId);
    return;
  }

  const when = formatWhen(booking.startTime, booking.endTime);
  const cancelUrl = `${SITE_URL}/cancel-appointment?id=${booking.bookingId}&token=${booking.cancelToken}`;

  const customerEmail = resend.emails.send({
    from: FROM,
    to: booking.customerEmail,
    subject: `Appointment confirmed: ${booking.serviceName}`,
    text: [
      `Hi ${booking.customerName},`,
      '',
      `Your appointment with AMW Cooling & Heating LLC is confirmed.`,
      '',
      `Service: ${booking.serviceName}`,
      `When: ${when}`,
      `Address: ${booking.customerAddress}`,
      '',
      `Need to cancel? ${cancelUrl}`,
      '',
      `Questions? Call (936) 331-1339 or email admin@amwairconditioning.com.`,
      '',
      `- AMW Cooling & Heating LLC`,
    ].join('\n'),
  });

  const adminEmail = resend.emails.send({
    from: FROM,
    to: ADMIN_EMAIL,
    subject: `New booking: ${booking.serviceName} - ${booking.customerName}`,
    text: [
      `New appointment booked through the website:`,
      '',
      `Service: ${booking.serviceName}`,
      `When: ${when}`,
      `Customer: ${booking.customerName}`,
      `Email: ${booking.customerEmail}`,
      `Phone: ${booking.customerPhone}`,
      `Address: ${booking.customerAddress}`,
      booking.notes ? `Notes: ${booking.notes}` : null,
    ]
      .filter(Boolean)
      .join('\n'),
  });

  const results = await Promise.allSettled([customerEmail, adminEmail]);
  results.forEach((r, i) => {
    if (r.status === 'rejected') {
      console.error(`[email] failed to send ${i === 0 ? 'customer' : 'admin'} email for booking ${booking.bookingId}:`, r.reason);
    }
  });
}

module.exports = { sendBookingEmails };

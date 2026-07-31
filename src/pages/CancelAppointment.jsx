import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';
import Footer from '../components/Footer';
import { LocalBusinessSchema } from '../components/StructuredData';
import SEO from '../components/SEO';
import { SUPABASE_URL, SUPABASE_ANON_KEY, supabaseHeaders, parsePostgrestError } from '../lib/supabaseBooking';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const FRIENDLY_FALLBACK = 'Something went wrong. Please call (936) 331-1339 instead.';

export default function CancelAppointment() {
  const router = useRouter();

  // The static export bakes this page with no query string known yet, and
  // router.isReady can flip to true on the very first client render when the
  // URL has no query params at all -- gating on a mounted flag (always false
  // until after the first effect) guarantees the first client render matches
  // the exported HTML exactly, avoiding a hydration mismatch either way.
  const [mounted, setMounted] = useState(false);

  // Captured once into state, then the URL itself is scrubbed. id/token are
  // the sole authorization credential for cancel_booking -- leaving them in
  // the visible URL means every pageview/analytics script on the site
  // (GA4 included) reports them as part of page_location.
  const [creds, setCreds] = useState({ id: null, token: null });

  useEffect(() => {
    if (!router.isReady) return;
    const { id, token } = router.query;
    setCreds({
      id: typeof id === 'string' ? id : null,
      token: typeof token === 'string' ? token : null,
    });
    setMounted(true);
    if (window.location.search) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [router.isReady, router.query]);

  const [status, setStatus] = useState('confirm'); // confirm | cancelling | success | error
  const [error, setError] = useState(null);

  const handleCancel = async () => {
    setStatus('cancelling');
    setError(null);

    let res;
    try {
      res = await fetch(`${SUPABASE_URL}/rpc/cancel_booking`, {
        method: 'POST',
        headers: supabaseHeaders(),
        body: JSON.stringify({ p_booking_id: creds.id, p_cancel_token: creds.token }),
      });
    } catch (_networkErr) {
      setError(FRIENDLY_FALLBACK);
      setStatus('error');
      return;
    }

    try {
      if (!res.ok) {
        throw new Error(await parsePostgrestError(res, FRIENDLY_FALLBACK));
      }
      let cancelled;
      try {
        cancelled = await res.json();
      } catch (_parseErr) {
        throw new Error(FRIENDLY_FALLBACK);
      }
      if (!cancelled) {
        throw new Error('This appointment was already cancelled, or the link has expired.');
      }
      setStatus('success');
    } catch (err) {
      setError(err.message || FRIENDLY_FALLBACK);
      setStatus('error');
    }
  };

  const linkIsValid = UUID_RE.test(creds.id || '') && UUID_RE.test(creds.token || '');
  const missingConfig = !SUPABASE_URL || !SUPABASE_ANON_KEY;

  return (
    <div className="bg-white text-gray-800 font-sans">
      <LocalBusinessSchema />
      <SEO
        title="Cancel Appointment | AMW Cooling & Heating | Conroe TX"
        description="Cancel a scheduled HVAC appointment with AMW Cooling & Heating."
        canonical="https://amwairconditioning.com/cancel-appointment"
      />

      <main>
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-white to-red-500"></div>

        <section className="bg-blue-900 py-12 md:py-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Cancel Appointment</h1>
            <p className="text-blue-100">AMW Cooling & Heating LLC</p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-md mx-auto px-4 text-center">
            {!mounted ? null : missingConfig ? (
              <div>
                <FaExclamationTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <p className="text-gray-700">
                  Online cancellation is temporarily unavailable. Please call{' '}
                  <a href="tel:+19363311339" className="text-red-500 font-bold">(936) 331-1339</a> and we'll cancel it for you.
                </p>
              </div>
            ) : !linkIsValid ? (
              <div>
                <FaExclamationTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <p className="text-gray-700">
                  This cancellation link looks incomplete. Please use the link from your confirmation email, or call{' '}
                  <a href="tel:+19363311339" className="text-red-500 font-bold">(936) 331-1339</a>.
                </p>
              </div>
            ) : status === 'confirm' || status === 'cancelling' ? (
              <div>
                <p className="text-gray-700 mb-6">Are you sure you want to cancel this appointment?</p>
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={status === 'cancelling'}
                  className="w-full inline-flex items-center justify-center gap-2 bg-red-500 disabled:opacity-60 text-white px-6 py-4 rounded-lg hover:bg-red-600 transition font-bold text-lg"
                >
                  {status === 'cancelling' ? 'Cancelling...' : 'Yes, Cancel My Appointment'}
                </button>
              </div>
            ) : status === 'success' ? (
              <div>
                <FaCheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-blue-900 mb-2">Appointment Cancelled</h2>
                <p className="text-gray-700">
                  Need to schedule a new time? Visit our{' '}
                  <a href="/contact#book-a-service" className="text-blue-700 font-semibold underline">booking page</a>{' '}
                  or call <a href="tel:+19363311339" className="text-red-500 font-bold">(936) 331-1339</a>.
                </p>
              </div>
            ) : (
              <div>
                <FaTimesCircle className="w-14 h-14 text-red-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-blue-900 mb-2">Couldn't Cancel</h2>
                <p className="text-gray-700">{error}</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

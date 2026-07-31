// Booking backend is a self-hosted Supabase/PostgREST instance
// (booking.amwairconditioning.com) -- plain fetch with apikey/Authorization
// headers, matching PostgREST's REST + RPC conventions directly, rather
// than pulling in the @supabase/supabase-js SDK for a handful of endpoints.
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export function supabaseHeaders() {
  return {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json',
  };
}

// PostgREST's error shape is {code, details, hint, message} -- surface
// .message (that's what the create_booking/cancel_booking RPC functions
// raise as friendly, customer-facing text) rather than the whole object.
export async function parsePostgrestError(res, fallback) {
  try {
    const data = await res.json();
    return data.message || fallback;
  } catch (_) {
    return fallback;
  }
}

# AMW Booking API

Self-hosted replacement for Calendly/Cal.com -- no third-party scheduling
platform, no per-seat or commercial-feature licensing. Three fixed services
(Service or Repair Visit, Free Estimate, Maintenance/Tune-Up), real
availability backed by Postgres, double-booking prevented at the database
level (a GiST exclusion constraint, not just an app-level check).

## What's actually live

The production system is **not** the Express API in this directory -- it's a
self-hosted Supabase-style stack (plain Postgres + PostgREST, fronted by
Caddy behind Cloudflare) running on its own VM at
`https://booking.amwairconditioning.com`, built out separately. The website's
`BookingWidget` (`src/components/BookingWidget.jsx`) talks to that PostgREST
instance directly over `NEXT_PUBLIC_SUPABASE_URL` /
`NEXT_PUBLIC_SUPABASE_ANON_KEY` -- there is no server of this repo's own in
the request path.

- **`db/supabase-schema.sql`** is the source of truth for what's deployed on
  that live database -- tables (`service_types`, `business_hours`,
  `bookings`, `booking_rate_limits`), RLS policies, and the
  `get_available_slots` / `create_booking` / `cancel_booking` RPC functions.
  Keep this file in sync any time the live schema changes (it's applied
  directly via `psql`, not through a migration runner).
- **`src/`** (the Express API), **`db/init.sql`**, and `Dockerfile` /
  `docker-compose.yml` are an earlier prototype of the same idea, built
  before the PostgREST deployment existed. They were never deployed and are
  kept only as a reference for the booking logic (see `src/email.js` for
  the original Resend-based confirmation email approach, since superseded
  by client-side EmailJS -- see `src/lib/bookingEmail.js` at the site root).

## Known gaps that need infrastructure-level access (not fixable from here)

These were found in an end-to-end audit of the live booking system. Fixed
directly in `db/supabase-schema.sql` / on the live database: no rate
limiting on `create_booking` (fixed -- 5 successful bookings per IP per 15
minutes, tracked in `booking_rate_limits`), no cancellation page (fixed --
`/cancel-appointment`), no confirmation/notification emails (fixed --
client-side EmailJS, see `.env.example` at the site root for the 4 values
needed).

Two things remain that require access this project doesn't have (whoever
manages the `booking.amwairconditioning.com` VM -- Caddy config and/or
Cloudflare dashboard -- needs to make these changes):

1. **CORS is wide open.** Every response includes
   `Access-Control-Allow-Origin: *`, confirmed via a request with a
   deliberately foreign `Origin` header. This is coming from PostgREST/Caddy
   in front of it, not from anything in this repo. It should be restricted
   to `https://amwairconditioning.com` (and any staging/preview hostnames
   that legitimately need it) at the Caddy config level, since PostgREST
   itself doesn't offer per-origin allowlisting.
2. **No rate limiting on read endpoints.** `create_booking` is now
   protected (see above), but plain table reads like `/service_types` and
   the `/rpc/get_available_slots` endpoint have no throttling at all --
   confirmed by firing 15 rapid requests and getting 200s the whole way.
   This isn't something a SECURITY DEFINER function can fix for a direct
   table read; it needs a rate-limiting rule at the Cloudflare or Caddy
   layer in front of `booking.amwairconditioning.com` (Cloudflare's WAF
   rate-limiting rules are the natural place, since Cloudflare is already
   in front of this deployment).

## Updating business hours or services

Both are plain tables on the live database, not code -- connect via the
documented SSH tunnel and update `business_hours` or `service_types`
directly. No rebuild or redeploy needed; PostgREST reads them live on every
request (after `NOTIFY pgrst, 'reload schema';` if you change table
structure, not just row data).

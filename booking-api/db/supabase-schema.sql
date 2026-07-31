-- AMW Cooling & Heating LLC -- booking schema for the self-hosted
-- Supabase/PostgREST instance at booking.amwairconditioning.com.
--
-- This is the PostgREST-flavored counterpart to init.sql (which targets
-- the standalone Express API). Same data model, but exposed directly via
-- PostgREST: RLS policies gate table access, and get_available_slots /
-- create_booking / cancel_booking are SECURITY DEFINER RPC functions
-- callable at /rest/v1/rpc/<name> using the anon key -- no Express layer
-- in front of this deployment.
--
-- Applied directly via psql against the live database on 2026-07-31.

create extension if not exists "btree_gist";
create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------
-- service_types
-- ---------------------------------------------------------------------
create table if not exists service_types (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text,
  duration_minutes int not null check (duration_minutes > 0),
  sort_order int not null default 0,
  active boolean not null default true
);

insert into service_types (slug, name, description, duration_minutes, sort_order)
values
  ('service', 'Service or Repair Visit', 'Book a technician to diagnose and repair your heating or cooling system.', 60, 1),
  ('estimate', 'Free Estimate (New System)', 'Get a free, no-obligation estimate on a new AC or heating system.', 45, 2),
  ('maintenance', 'Maintenance / Tune-Up', 'Seasonal maintenance and tune-up to keep your system running efficiently.', 45, 3)
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  duration_minutes = excluded.duration_minutes,
  sort_order = excluded.sort_order;

-- ---------------------------------------------------------------------
-- business_hours -- closed Sunday, 8am-5pm Mon-Sat. Edit directly in the
-- table if hours change; no redeploy needed.
-- ---------------------------------------------------------------------
create table if not exists business_hours (
  day_of_week int primary key check (day_of_week between 0 and 6),
  start_time time not null,
  end_time time not null,
  is_open boolean not null default true
);

insert into business_hours (day_of_week, start_time, end_time, is_open) values
  (0, '08:00', '17:00', false),
  (1, '08:00', '17:00', true),
  (2, '08:00', '17:00', true),
  (3, '08:00', '17:00', true),
  (4, '08:00', '17:00', true),
  (5, '08:00', '17:00', true),
  (6, '08:00', '17:00', true)
on conflict (day_of_week) do nothing;

-- ---------------------------------------------------------------------
-- bookings -- name/email/phone/address required, notes optional.
-- ---------------------------------------------------------------------
create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  service_type_id uuid not null references service_types(id),
  customer_name text not null,
  customer_email text not null,
  customer_phone text not null,
  customer_address text not null,
  notes text,
  start_time timestamptz not null,
  end_time timestamptz not null,
  status text not null default 'confirmed' check (status in ('confirmed', 'cancelled')),
  cancel_token uuid not null default gen_random_uuid(),
  created_at timestamptz not null default now(),
  time_range tstzrange generated always as (tstzrange(start_time, end_time, '[)')) stored
);

create index if not exists bookings_start_time_idx on bookings (start_time);

do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'no_overlapping_confirmed_bookings'
  ) then
    alter table bookings
      add constraint no_overlapping_confirmed_bookings
      exclude using gist (time_range with &&)
      where (status = 'confirmed');
  end if;
end $$;

-- ---------------------------------------------------------------------
-- booking_rate_limits -- one row per successful booking, keyed by the
-- client's IP (via Cloudflare's cf-connecting-ip header, which PostgREST
-- exposes to functions through the request.headers GUC). create_booking
-- below caps a single IP at 5 successful bookings per 15 minutes.
-- ---------------------------------------------------------------------
create table if not exists booking_rate_limits (
  id bigserial primary key,
  client_ip text not null,
  attempted_at timestamptz not null default now()
);

create index if not exists booking_rate_limits_ip_time_idx on booking_rate_limits (client_ip, attempted_at);

-- ---------------------------------------------------------------------
-- RLS -- service_types/business_hours readable directly (no sensitive
-- data). bookings has zero direct-access policies for anon; everything
-- goes through the RPC functions below.
-- ---------------------------------------------------------------------
alter table service_types enable row level security;
alter table business_hours enable row level security;
alter table bookings enable row level security;

drop policy if exists "public read active service types" on service_types;
create policy "public read active service types" on service_types
  for select using (active = true);

drop policy if exists "public read business hours" on business_hours;
create policy "public read business hours" on business_hours
  for select using (true);

revoke all on bookings from anon, authenticated;
grant select on service_types to anon, authenticated;
grant select on business_hours to anon, authenticated;

-- booking_rate_limits holds visitor IPs -- lock it down the same way as
-- bookings. Only the SECURITY DEFINER functions below ever touch it.
alter table booking_rate_limits enable row level security;
revoke all on booking_rate_limits from anon, authenticated;

-- ---------------------------------------------------------------------
-- get_available_slots(service_slug, date) -> setof timestamptz
-- ---------------------------------------------------------------------
create or replace function get_available_slots(
  p_service_slug text,
  p_date date,
  p_timezone text default 'America/Chicago'
)
returns table (slot_start timestamptz)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_duration int;
  v_dow int;
  v_start time;
  v_end time;
  v_is_open boolean;
  v_day_start timestamptz;
  v_day_end timestamptz;
  v_slot timestamptz;
  v_slot_end timestamptz;
  v_now timestamptz := now();
begin
  select duration_minutes into v_duration
    from service_types where slug = p_service_slug and active = true;
  if v_duration is null then
    return;
  end if;

  v_dow := extract(dow from p_date);
  select start_time, end_time, is_open into v_start, v_end, v_is_open
    from business_hours where day_of_week = v_dow;
  if v_is_open is not true then
    return;
  end if;

  v_day_start := (p_date::text || ' ' || v_start::text)::timestamp at time zone p_timezone;
  v_day_end := (p_date::text || ' ' || v_end::text)::timestamp at time zone p_timezone;

  for v_slot in
    select generate_series(v_day_start, v_day_end - interval '1 minute', interval '60 minutes')
  loop
    v_slot_end := v_slot + make_interval(mins => v_duration);
    continue when v_slot_end > v_day_end;
    continue when v_slot <= v_now;

    if not exists (
      select 1 from bookings b
      where b.status = 'confirmed'
        and b.time_range && tstzrange(v_slot, v_slot_end, '[)')
    ) then
      slot_start := v_slot;
      return next;
    end if;
  end loop;
end;
$$;

grant execute on function get_available_slots(text, date, text) to anon, authenticated;

-- ---------------------------------------------------------------------
-- create_booking -- name/email/phone/address all required, notes optional.
-- ---------------------------------------------------------------------
create or replace function create_booking(
  p_service_slug text,
  p_start_time timestamptz,
  p_customer_name text,
  p_customer_email text,
  p_customer_phone text,
  p_customer_address text,
  p_notes text default null
)
returns table (booking_id uuid, cancel_token uuid, service_name text, start_time timestamptz, end_time timestamptz)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_service_id uuid;
  v_service_name text;
  v_duration int;
  v_end_time timestamptz;
  v_new_id uuid;
  v_new_token uuid;
  v_client_ip text;
  v_recent_bookings int;
begin
  -- Housekeeping: drop rate-limit rows older than a day so this table never grows unbounded.
  delete from booking_rate_limits where attempted_at < now() - interval '1 day';

  v_client_ip := coalesce(
    current_setting('request.headers', true)::json ->> 'cf-connecting-ip',
    split_part(current_setting('request.headers', true)::json ->> 'x-forwarded-for', ',', 1),
    'unknown'
  );

  -- Serialize concurrent calls from the same IP for the rest of this
  -- transaction, so the count-check below can't race with another
  -- in-flight request's not-yet-committed insert (an xact-scoped advisory
  -- lock auto-releases at commit/rollback, matching PostgREST's
  -- one-transaction-per-request model exactly).
  perform pg_advisory_xact_lock(hashtext('booking_rate_limit:' || v_client_ip));

  -- Rate limit is counted against successful bookings only (a raised exception
  -- rolls back everything in this function call, so a row logged before a later
  -- exception would vanish with it -- checked here, recorded only on success below).
  select count(*) into v_recent_bookings
    from booking_rate_limits
    where client_ip = v_client_ip
      and attempted_at > now() - interval '15 minutes';

  if v_recent_bookings >= 5 then
    raise exception 'Too many booking attempts -- please wait a few minutes and try again, or call (936) 331-1339.';
  end if;

  if p_customer_name is null or length(trim(p_customer_name)) = 0 then
    raise exception 'Name is required';
  end if;
  if p_customer_email is null or p_customer_email !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' then
    raise exception 'A valid email is required';
  end if;
  if p_customer_phone is null or length(trim(p_customer_phone)) = 0 then
    raise exception 'Phone number is required';
  end if;
  if p_customer_address is null or length(trim(p_customer_address)) = 0 then
    raise exception 'Service address is required';
  end if;
  if p_start_time <= now() then
    raise exception 'That time has already passed';
  end if;

  select id, name, duration_minutes into v_service_id, v_service_name, v_duration
    from service_types where slug = p_service_slug and active = true;
  if v_service_id is null then
    raise exception 'Unknown service type';
  end if;

  v_end_time := p_start_time + make_interval(mins => v_duration);

  if exists (
    select 1 from bookings b
    where b.status = 'confirmed'
      and b.time_range && tstzrange(p_start_time, v_end_time, '[)')
  ) then
    raise exception 'That time was just booked by someone else -- please pick another slot';
  end if;

  begin
    insert into bookings (service_type_id, customer_name, customer_email, customer_phone, customer_address, notes, start_time, end_time)
    values (v_service_id, trim(p_customer_name), lower(trim(p_customer_email)), trim(p_customer_phone), trim(p_customer_address), p_notes, p_start_time, v_end_time)
    returning bookings.id, bookings.cancel_token into v_new_id, v_new_token;
  exception when exclusion_violation then
    raise exception 'That time was just booked by someone else -- please pick another slot';
  end;

  insert into booking_rate_limits (client_ip) values (v_client_ip);

  booking_id := v_new_id;
  cancel_token := v_new_token;
  service_name := v_service_name;
  start_time := p_start_time;
  end_time := v_end_time;
  return next;
end;
$$;

grant execute on function create_booking(text, timestamptz, text, text, text, text, text) to anon, authenticated;

-- ---------------------------------------------------------------------
-- cancel_booking -- requires the exact cancel_token issued at booking time.
-- ---------------------------------------------------------------------
create or replace function cancel_booking(
  p_booking_id uuid,
  p_cancel_token uuid
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_updated int;
begin
  update bookings
    set status = 'cancelled'
    where id = p_booking_id
      and cancel_token = p_cancel_token
      and status = 'confirmed';
  get diagnostics v_updated = row_count;
  return v_updated > 0;
end;
$$;

grant execute on function cancel_booking(uuid, uuid) to anon, authenticated;

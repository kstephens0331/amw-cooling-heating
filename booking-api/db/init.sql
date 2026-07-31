-- AMW Cooling & Heating LLC -- self-hosted booking API schema.
-- Runs automatically on first container start (mounted into
-- /docker-entrypoint-initdb.d/ by docker-compose.yml) against a fresh
-- Postgres data volume. To apply changes to an already-initialized
-- database, connect and run the relevant statements by hand instead --
-- Postgres only runs initdb scripts once, on an empty data directory.

create extension if not exists "btree_gist";
create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------
-- service_types: AMW's three bookable services.
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
-- business_hours: one row per day of week (0 = Sunday ... 6 = Saturday).
-- Closed Sunday, 8am-5pm Mon-Sat -- edit directly in the DB if hours
-- change, no code deploy needed.
-- ---------------------------------------------------------------------
create table if not exists business_hours (
  day_of_week int primary key check (day_of_week between 0 and 6),
  start_time time not null,
  end_time time not null,
  is_open boolean not null default true
);

insert into business_hours (day_of_week, start_time, end_time, is_open) values
  (0, '08:00', '17:00', false), -- Sunday: closed
  (1, '08:00', '17:00', true),
  (2, '08:00', '17:00', true),
  (3, '08:00', '17:00', true),
  (4, '08:00', '17:00', true),
  (5, '08:00', '17:00', true),
  (6, '08:00', '17:00', true)
on conflict (day_of_week) do nothing;

-- ---------------------------------------------------------------------
-- bookings
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

-- The real double-booking guard, enforced by Postgres itself so a race
-- between two near-simultaneous requests can never both succeed -- the
-- API's own pre-check (in src/db.js) exists only to return a friendly
-- error before this constraint would otherwise fire.
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

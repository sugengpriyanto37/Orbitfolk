create extension if not exists pgcrypto;

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  phone text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.destinations (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  city text not null,
  country text not null,
  month text not null,
  dates text not null,
  badge text not null,
  image_url text not null,
  blurb text not null,
  intro text not null,
  published boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.trip_plans (
  id uuid primary key default gen_random_uuid(),
  destination_id uuid not null references public.destinations(id) on delete cascade,
  name text not null,
  price_cents integer not null check (price_cents >= 0),
  currency text not null default 'USD',
  features jsonb not null default '[]'::jsonb,
  available_spots integer not null default 25 check (available_spots >= 0),
  created_at timestamptz not null default now(),
  unique (destination_id, name)
);

create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  destination_id uuid not null references public.destinations(id),
  trip_plan_id uuid not null references public.trip_plans(id),
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'cancelled')),
  guest_name text not null,
  guest_email text not null,
  notes text,
  total_cents integer not null check (total_cents >= 0),
  currency text not null default 'USD',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  first_name text not null,
  last_name text,
  email text not null,
  phone text,
  topic text not null,
  nomad_type text not null,
  message text not null,
  created_at timestamptz not null default now()
);

create index bookings_user_id_idx on public.bookings(user_id);
create index bookings_status_idx on public.bookings(status);
create index trip_plans_destination_id_idx on public.trip_plans(destination_id);

alter table public.profiles enable row level security;
alter table public.destinations enable row level security;
alter table public.trip_plans enable row level security;
alter table public.bookings enable row level security;
alter table public.contact_messages enable row level security;

create policy "Users can read their own profile"
  on public.profiles for select to authenticated
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

create policy "Anyone can read published destinations"
  on public.destinations for select to anon, authenticated
  using (published = true);

create policy "Anyone can read plans for published destinations"
  on public.trip_plans for select to anon, authenticated
  using (exists (
    select 1 from public.destinations d
    where d.id = destination_id and d.published = true
  ));

create policy "Users can read their own bookings"
  on public.bookings for select to authenticated
  using (auth.uid() = user_id);

create policy "Users can create their own bookings"
  on public.bookings for insert to authenticated
  with check (auth.uid() = user_id);

create policy "Users can update their own bookings"
  on public.bookings for update to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Anyone can submit a contact message"
  on public.contact_messages for insert to anon, authenticated
  with check (user_id is null or user_id = auth.uid());

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, email)
  values (new.id, new.raw_user_meta_data ->> 'full_name', new.email);
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

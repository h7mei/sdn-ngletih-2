-- SDN Ngletih 1 schema
-- Safe to re-run: tables/indexes use "if not exists", policies and triggers are dropped first.

-- beritas
create table if not exists public.beritas (
  id bigserial primary key,
  judul text not null,
  slug text not null unique,
  isi text not null,
  gambar text,
  gambar2 text,
  gambar3 text,
  tanggal date not null,
  kategori text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- galeris
create table if not exists public.galeris (
  id bigserial primary key,
  judul text not null,
  gambar text not null,
  deskripsi text,
  tanggal date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- prestasis
create table if not exists public.prestasis (
  id bigserial primary key,
  judul text not null,
  nama text not null,
  tingkat text not null,
  tahun integer not null,
  kategori text not null check (kategori in ('Akademik', 'Non Akademik')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ekstrakurikulers
create table if not exists public.ekstrakurikulers (
  id bigserial primary key,
  nama text not null,
  deskripsi text not null,
  icon text,
  warna text,
  urutan integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- sarpras
create table if not exists public.sarpras (
  id bigserial primary key,
  nama text not null,
  icon text,
  deskripsi text not null,
  gambar text,
  gambar2 text,
  gambar3 text,
  urutan integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Indexes for the orderings used by the site
create index if not exists beritas_tanggal_idx on public.beritas (tanggal desc);
create index if not exists galeris_tanggal_idx on public.galeris (tanggal desc);
create index if not exists prestasis_tahun_idx on public.prestasis (tahun desc);
create index if not exists ekstrakurikulers_urutan_idx on public.ekstrakurikulers (urutan);
create index if not exists sarpras_urutan_idx on public.sarpras (urutan);

-- Keep updated_at current on every update
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

do $$
declare
  t text;
begin
  foreach t in array array['beritas', 'galeris', 'prestasis', 'ekstrakurikulers', 'sarpras'] loop
    execute format('drop trigger if exists set_updated_at on public.%I', t);
    execute format(
      'create trigger set_updated_at before update on public.%I for each row execute function public.set_updated_at()',
      t
    );
  end loop;
end;
$$;

-- RLS: anyone can read, only logged-in admins can write
alter table public.beritas enable row level security;
alter table public.galeris enable row level security;
alter table public.prestasis enable row level security;
alter table public.ekstrakurikulers enable row level security;
alter table public.sarpras enable row level security;

do $$
declare
  t text;
begin
  foreach t in array array['beritas', 'galeris', 'prestasis', 'ekstrakurikulers', 'sarpras'] loop
    execute format('drop policy if exists "Public can read %s" on public.%I', t, t);
    execute format('create policy "Public can read %s" on public.%I for select using (true)', t, t);

    execute format('drop policy if exists "Authenticated can insert %s" on public.%I', t, t);
    execute format('create policy "Authenticated can insert %s" on public.%I for insert to authenticated with check (true)', t, t);

    execute format('drop policy if exists "Authenticated can update %s" on public.%I', t, t);
    execute format('create policy "Authenticated can update %s" on public.%I for update to authenticated using (true) with check (true)', t, t);

    execute format('drop policy if exists "Authenticated can delete %s" on public.%I', t, t);
    execute format('create policy "Authenticated can delete %s" on public.%I for delete to authenticated using (true)', t, t);
  end loop;
end;
$$;

-- Storage buckets
insert into storage.buckets (id, name, public)
values
  ('berita', 'berita', true),
  ('galeri', 'galeri', true),
  ('sarpras', 'sarpras', true),
  ('assets', 'assets', true) -- site images (logo, hero, ...), uploaded by scripts/upload-assets.mjs
on conflict (id) do nothing;

-- Storage policies: public read, authenticated write
do $$
declare
  b text;
begin
  foreach b in array array['berita', 'galeri', 'sarpras'] loop
    execute format('drop policy if exists "Public read %s" on storage.objects', b);
    execute format('create policy "Public read %s" on storage.objects for select using (bucket_id = %L)', b, b);

    execute format('drop policy if exists "Authenticated upload %s" on storage.objects', b);
    execute format('create policy "Authenticated upload %s" on storage.objects for insert to authenticated with check (bucket_id = %L)', b, b);

    execute format('drop policy if exists "Authenticated update %s" on storage.objects', b);
    execute format('create policy "Authenticated update %s" on storage.objects for update to authenticated using (bucket_id = %L) with check (bucket_id = %L)', b, b, b);

    execute format('drop policy if exists "Authenticated delete %s" on storage.objects', b);
    execute format('create policy "Authenticated delete %s" on storage.objects for delete to authenticated using (bucket_id = %L)', b, b);
  end loop;
end;
$$;

-- assets bucket: public read; writes only via the service role (scripts/upload-assets.mjs)
drop policy if exists "Public read assets" on storage.objects;
create policy "Public read assets" on storage.objects for select using (bucket_id = 'assets');

-- SDN Ngletih 1 schema

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

-- RLS
alter table public.beritas enable row level security;
alter table public.galeris enable row level security;
alter table public.prestasis enable row level security;
alter table public.ekstrakurikulers enable row level security;
alter table public.sarpras enable row level security;

-- Public SELECT
create policy "Public can read beritas" on public.beritas for select using (true);
create policy "Public can read galeris" on public.galeris for select using (true);
create policy "Public can read prestasis" on public.prestasis for select using (true);
create policy "Public can read ekstrakurikulers" on public.ekstrakurikulers for select using (true);
create policy "Public can read sarpras" on public.sarpras for select using (true);

-- Authenticated INSERT/UPDATE/DELETE
create policy "Authenticated can insert beritas" on public.beritas for insert to authenticated with check (true);
create policy "Authenticated can update beritas" on public.beritas for update to authenticated using (true) with check (true);
create policy "Authenticated can delete beritas" on public.beritas for delete to authenticated using (true);

create policy "Authenticated can insert galeris" on public.galeris for insert to authenticated with check (true);
create policy "Authenticated can update galeris" on public.galeris for update to authenticated using (true) with check (true);
create policy "Authenticated can delete galeris" on public.galeris for delete to authenticated using (true);

create policy "Authenticated can insert prestasis" on public.prestasis for insert to authenticated with check (true);
create policy "Authenticated can update prestasis" on public.prestasis for update to authenticated using (true) with check (true);
create policy "Authenticated can delete prestasis" on public.prestasis for delete to authenticated using (true);

create policy "Authenticated can insert ekstrakurikulers" on public.ekstrakurikulers for insert to authenticated with check (true);
create policy "Authenticated can update ekstrakurikulers" on public.ekstrakurikulers for update to authenticated using (true) with check (true);
create policy "Authenticated can delete ekstrakurikulers" on public.ekstrakurikulers for delete to authenticated using (true);

create policy "Authenticated can insert sarpras" on public.sarpras for insert to authenticated with check (true);
create policy "Authenticated can update sarpras" on public.sarpras for update to authenticated using (true) with check (true);
create policy "Authenticated can delete sarpras" on public.sarpras for delete to authenticated using (true);

-- Storage buckets
insert into storage.buckets (id, name, public)
values
  ('berita', 'berita', true),
  ('galeri', 'galeri', true),
  ('sarpras', 'sarpras', true)
on conflict (id) do nothing;

-- Storage policies: public read
create policy "Public read berita" on storage.objects
  for select using (bucket_id = 'berita');
create policy "Public read galeri" on storage.objects
  for select using (bucket_id = 'galeri');
create policy "Public read sarpras" on storage.objects
  for select using (bucket_id = 'sarpras');

-- Storage policies: authenticated write
create policy "Authenticated upload berita" on storage.objects
  for insert to authenticated with check (bucket_id = 'berita');
create policy "Authenticated update berita" on storage.objects
  for update to authenticated using (bucket_id = 'berita') with check (bucket_id = 'berita');
create policy "Authenticated delete berita" on storage.objects
  for delete to authenticated using (bucket_id = 'berita');

create policy "Authenticated upload galeri" on storage.objects
  for insert to authenticated with check (bucket_id = 'galeri');
create policy "Authenticated update galeri" on storage.objects
  for update to authenticated using (bucket_id = 'galeri') with check (bucket_id = 'galeri');
create policy "Authenticated delete galeri" on storage.objects
  for delete to authenticated using (bucket_id = 'galeri');

create policy "Authenticated upload sarpras" on storage.objects
  for insert to authenticated with check (bucket_id = 'sarpras');
create policy "Authenticated update sarpras" on storage.objects
  for update to authenticated using (bucket_id = 'sarpras') with check (bucket_id = 'sarpras');
create policy "Authenticated delete sarpras" on storage.objects
  for delete to authenticated using (bucket_id = 'sarpras');

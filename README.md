# SDN Ngletih 1 (Next.js + Supabase)

Clone website sekolah SDN Ngletih 1 menggunakan Next.js App Router dan Supabase.

## Setup

### 1. Buat proyek Supabase

1. Buat project baru di [supabase.com](https://supabase.com)
2. Buka **SQL Editor**, jalankan isi file `supabase/migrations/001_schema.sql`
3. Pastikan storage buckets `berita`, `galeri`, `sarpras`, dan `assets` tersedia (script SQL membuatnya; jika belum, buat manual di **Storage** dan set **Public**)
4. (Opsional) Jalankan `supabase/seed.sql` untuk data contoh — **menghapus isi tabel konten terlebih dahulu**
5. Di **Authentication → Users**, buat user admin (email + password)

### 2. Environment

```bash
cp .env.example .env.local
```

Isi:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Nilai URL dan anon key ada di Supabase **Project Settings → API**.

`SUPABASE_SERVICE_ROLE_KEY` hanya dibutuhkan untuk `scripts/upload-assets.mjs`. Jangan diberi awalan `NEXT_PUBLIC_`.

### 3. Install & jalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Admin login: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

## Struktur singkat

- `app/(public)/` — halaman publik
- `app/admin/` — dashboard & CRUD (berita, galeri, prestasi, ekstrakurikuler, sarpras)
- `lib/supabase/` — client browser, server, middleware session
- `supabase/migrations/` — skema tabel + RLS + storage policies
- `supabase/seed.sql` — data contoh
- `scripts/upload-assets.mjs` — upload gambar ke Supabase Storage

## Gambar

Semua gambar disimpan di Supabase Storage, bukan di `public/`:

- Bucket `assets` — gambar situs (logo, hero, kepala sekolah, standar pelayanan, dll.), dipakai lewat `assetUrl("nama-file.jpg")` dari `lib/utils.ts`. Untuk mengganti gambar, upload file baru dengan nama yang sama di **Storage → assets**.
- Bucket `berita`, `galeri`, `sarpras` — gambar konten yang diupload dari halaman admin.

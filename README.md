# SDN Ngletih 1 (Next.js + Supabase)

Clone website sekolah SDN Ngletih 1 menggunakan Next.js App Router dan Supabase.

## Setup

### 1. Buat proyek Supabase

1. Buat project baru di [supabase.com](https://supabase.com)
2. Buka **SQL Editor**, jalankan isi file `supabase/migrations/001_schema.sql`
3. Pastikan storage buckets `berita`, `galeri`, dan `sarpras` tersedia (script SQL membuatnya; jika belum, buat manual di **Storage** dan set **Public**)
4. Di **Authentication → Users**, buat user admin (email + password)

### 2. Environment

```bash
cp .env.example .env.local
```

Isi:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Nilai URL dan anon key ada di Supabase **Project Settings → API**.

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
- `public/assets/` — CSS, JS, gambar dari website lama

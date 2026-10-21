export type Berita = {
  id: number;
  judul: string;
  slug: string;
  isi: string;
  gambar: string | null;
  gambar2: string | null;
  gambar3: string | null;
  tanggal: string;
  kategori: string | null;
  created_at: string;
  updated_at: string;
};

export type Galeri = {
  id: number;
  judul: string;
  gambar: string;
  deskripsi: string | null;
  tanggal: string | null;
  created_at: string;
  updated_at: string;
};

export type Prestasi = {
  id: number;
  judul: string;
  nama: string;
  tingkat: string;
  tahun: number;
  kategori: "Akademik" | "Non Akademik";
  created_at: string;
  updated_at: string;
};

export type Ekstrakurikuler = {
  id: number;
  nama: string;
  deskripsi: string;
  icon: string | null;
  warna: string | null;
  urutan: number;
  created_at: string;
  updated_at: string;
};

export type Sarpras = {
  id: number;
  nama: string;
  icon: string | null;
  deskripsi: string;
  gambar: string | null;
  gambar2: string | null;
  gambar3: string | null;
  urutan: number;
  created_at: string;
  updated_at: string;
};

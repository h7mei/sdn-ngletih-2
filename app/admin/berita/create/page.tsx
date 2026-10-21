import Link from "next/link";
import { createBerita } from "../actions";

export default function CreateBeritaPage() {
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="card border-0 shadow-sm" style={{ borderRadius: 15 }}>
          <div className="card-header text-white" style={{ background: "#0d6efd", borderRadius: "15px 15px 0 0" }}>
            <h4 className="mb-0">Tambah Berita</h4>
          </div>
          <div className="card-body p-4">
            <form action={createBerita} encType="multipart/form-data">
              <div className="mb-3">
                <label htmlFor="judul" className="form-label fw-semibold">Judul Berita</label>
                <input type="text" className="form-control" id="judul" name="judul" required />
              </div>
              <div className="mb-3">
                <label htmlFor="kategori" className="form-label fw-semibold">Kategori</label>
                <select className="form-select" id="kategori" name="kategori">
                  <option value="">-- Pilih Kategori --</option>
                  <option value="Sekolah">Sekolah</option>
                  <option value="Prestasi">Prestasi</option>
                  <option value="Kegiatan">Kegiatan</option>
                  <option value="Pengumuman">Pengumuman</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="tanggal" className="form-label fw-semibold">Tanggal Berita</label>
                <input type="date" className="form-control" id="tanggal" name="tanggal" defaultValue={today} required />
              </div>
              <div className="mb-3">
                <label htmlFor="isi" className="form-label fw-semibold">Isi Berita</label>
                <textarea className="form-control" id="isi" name="isi" rows={10} required />
              </div>
              <div className="mb-3">
                <label htmlFor="gambar" className="form-label fw-semibold">Gambar 1</label>
                <input type="file" className="form-control" id="gambar" name="gambar" accept=".jpg,.jpeg,.png,.webp" />
              </div>
              <div className="mb-3">
                <label htmlFor="gambar2" className="form-label fw-semibold">Gambar 2</label>
                <input type="file" className="form-control" id="gambar2" name="gambar2" accept=".jpg,.jpeg,.png,.webp" />
              </div>
              <div className="mb-3">
                <label htmlFor="gambar3" className="form-label fw-semibold">Gambar 3</label>
                <input type="file" className="form-control" id="gambar3" name="gambar3" accept=".jpg,.jpeg,.png,.webp" />
              </div>
              <div className="d-flex justify-content-between">
                <Link href="/admin/berita" className="btn btn-secondary">← Kembali</Link>
                <button type="submit" className="btn btn-primary">Simpan Berita</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { createPrestasi } from "../actions";

export default function CreatePrestasiPage() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-primary text-white"><h4 className="mb-0">Tambah Prestasi</h4></div>
          <div className="card-body p-4">
            <form action={createPrestasi}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Judul</label>
                <input type="text" name="judul" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Nama (bisa multi-baris)</label>
                <textarea name="nama" className="form-control" rows={4} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Tingkat</label>
                <input type="text" name="tingkat" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Tahun</label>
                <input type="number" name="tahun" className="form-control" defaultValue={year} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Kategori</label>
                <select name="kategori" className="form-select" required defaultValue="Akademik">
                  <option value="Akademik">Akademik</option>
                  <option value="Non Akademik">Non Akademik</option>
                </select>
              </div>
              <div className="d-flex justify-content-between">
                <Link href="/admin/prestasi" className="btn btn-secondary">← Kembali</Link>
                <button type="submit" className="btn btn-primary">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

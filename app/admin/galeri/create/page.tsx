import Link from "next/link";
import { createGaleri } from "../actions";

export default function CreateGaleriPage() {
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-primary text-white"><h4 className="mb-0">Tambah Galeri</h4></div>
          <div className="card-body p-4">
            <form action={createGaleri} encType="multipart/form-data">
              <div className="mb-3">
                <label className="form-label fw-semibold">Judul</label>
                <input type="text" name="judul" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Deskripsi</label>
                <textarea name="deskripsi" className="form-control" rows={4} />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Tanggal</label>
                <input type="date" name="tanggal" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Gambar *</label>
                <input type="file" name="gambar" className="form-control" accept=".jpg,.jpeg,.png,.webp" required />
              </div>
              <div className="d-flex justify-content-between">
                <Link href="/admin/galeri" className="btn btn-secondary">← Kembali</Link>
                <button type="submit" className="btn btn-primary">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

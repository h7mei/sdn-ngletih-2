import Link from "next/link";
import { createSarpras } from "../actions";

export default function CreateSarprasPage() {
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-primary text-white"><h4 className="mb-0">Tambah Sarpras</h4></div>
          <div className="card-body p-4">
            <form action={createSarpras} encType="multipart/form-data">
              <div className="mb-3">
                <label className="form-label fw-semibold">Nama</label>
                <input type="text" name="nama" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Icon</label>
                <input type="text" name="icon" className="form-control" placeholder="bi bi-building" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Deskripsi</label>
                <textarea name="deskripsi" className="form-control" rows={5} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Urutan</label>
                <input type="number" name="urutan" className="form-control" defaultValue={0} />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Gambar 1</label>
                <input type="file" name="gambar" className="form-control" accept=".jpg,.jpeg,.png,.webp" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Gambar 2</label>
                <input type="file" name="gambar2" className="form-control" accept=".jpg,.jpeg,.png,.webp" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Gambar 3</label>
                <input type="file" name="gambar3" className="form-control" accept=".jpg,.jpeg,.png,.webp" />
              </div>
              <div className="d-flex justify-content-between">
                <Link href="/admin/sarpras" className="btn btn-secondary">← Kembali</Link>
                <button type="submit" className="btn btn-primary">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

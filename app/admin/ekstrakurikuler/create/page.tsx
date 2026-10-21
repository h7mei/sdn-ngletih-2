import Link from "next/link";
import { createEkstrakurikuler } from "../actions";

export default function CreateEkstraPage() {
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-primary text-white"><h4 className="mb-0">Tambah Ekstrakurikuler</h4></div>
          <div className="card-body p-4">
            <form action={createEkstrakurikuler}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Nama</label>
                <input type="text" name="nama" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Deskripsi</label>
                <textarea name="deskripsi" className="form-control" rows={4} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Icon (Bootstrap Icons class)</label>
                <input type="text" name="icon" className="form-control" placeholder="bi bi-music-note-beamed" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Warna (CSS class)</label>
                <input type="text" name="warna" className="form-control" placeholder="warna-biru" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Urutan</label>
                <input type="number" name="urutan" className="form-control" defaultValue={0} />
              </div>
              <div className="d-flex justify-content-between">
                <Link href="/admin/ekstrakurikuler" className="btn btn-secondary">← Kembali</Link>
                <button type="submit" className="btn btn-primary">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Ekstrakurikuler } from "@/lib/types";
import { updateEkstrakurikuler } from "../../actions";

type Props = { params: Promise<{ id: string }> };

export default async function EditEkstraPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from("ekstrakurikulers").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();
  const item = data as Ekstrakurikuler;
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-primary text-white"><h4 className="mb-0">Edit Ekstrakurikuler</h4></div>
          <div className="card-body p-4">
            <form action={updateEkstrakurikuler}>
              <input type="hidden" name="id" value={item.id} />
              <div className="mb-3">
                <label className="form-label fw-semibold">Nama</label>
                <input type="text" name="nama" className="form-control" defaultValue={item.nama} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Deskripsi</label>
                <textarea name="deskripsi" className="form-control" rows={4} defaultValue={item.deskripsi} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Icon</label>
                <input type="text" name="icon" className="form-control" defaultValue={item.icon ?? ""} />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Warna</label>
                <input type="text" name="warna" className="form-control" defaultValue={item.warna ?? ""} />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Urutan</label>
                <input type="number" name="urutan" className="form-control" defaultValue={item.urutan} />
              </div>
              <div className="d-flex justify-content-between">
                <Link href="/admin/ekstrakurikuler" className="btn btn-secondary">← Kembali</Link>
                <button type="submit" className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

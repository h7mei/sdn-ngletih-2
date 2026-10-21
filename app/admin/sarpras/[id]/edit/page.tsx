import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Sarpras } from "@/lib/types";
import { storagePublicUrl } from "@/lib/utils";
import { updateSarpras } from "../../actions";

type Props = { params: Promise<{ id: string }> };

export default async function EditSarprasPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from("sarpras").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();
  const item = data as Sarpras;
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-primary text-white"><h4 className="mb-0">Edit Sarpras</h4></div>
          <div className="card-body p-4">
            <form action={updateSarpras} encType="multipart/form-data">
              <input type="hidden" name="id" value={item.id} />
              <div className="mb-3">
                <label className="form-label fw-semibold">Nama</label>
                <input type="text" name="nama" className="form-control" defaultValue={item.nama} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Icon</label>
                <input type="text" name="icon" className="form-control" defaultValue={item.icon ?? ""} />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Deskripsi</label>
                <textarea name="deskripsi" className="form-control" rows={5} defaultValue={item.deskripsi} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Urutan</label>
                <input type="number" name="urutan" className="form-control" defaultValue={item.urutan} />
              </div>
              {(["gambar", "gambar2", "gambar3"] as const).map((field, i) => (
                <div className="mb-3" key={field}>
                  <label className="form-label fw-semibold">Gambar {i + 1}</label>
                  {item[field] && (
                    <div className="mb-2">
                      <img src={storagePublicUrl(item[field], "sarpras")} alt="" style={{ maxHeight: 100 }} className="rounded" />
                    </div>
                  )}
                  <input type="file" name={field} className="form-control" accept=".jpg,.jpeg,.png,.webp" />
                </div>
              ))}
              <div className="d-flex justify-content-between">
                <Link href="/admin/sarpras" className="btn btn-secondary">← Kembali</Link>
                <button type="submit" className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

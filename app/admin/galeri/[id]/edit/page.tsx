import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Galeri } from "@/lib/types";
import { storagePublicUrl } from "@/lib/utils";
import { updateGaleri } from "../../actions";

type Props = { params: Promise<{ id: string }> };

export default async function EditGaleriPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from("galeris").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();
  const item = data as Galeri;
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-primary text-white"><h4 className="mb-0">Edit Galeri</h4></div>
          <div className="card-body p-4">
            <form action={updateGaleri} encType="multipart/form-data">
              <input type="hidden" name="id" value={item.id} />
              <div className="mb-3">
                <label className="form-label fw-semibold">Judul</label>
                <input type="text" name="judul" className="form-control" defaultValue={item.judul} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Deskripsi</label>
                <textarea name="deskripsi" className="form-control" rows={4} defaultValue={item.deskripsi ?? ""} />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Tanggal</label>
                <input type="date" name="tanggal" className="form-control" defaultValue={item.tanggal ?? ""} />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Gambar</label>
                <div className="mb-2">
                  <img src={storagePublicUrl(item.gambar, "galeri")} alt="" style={{ maxHeight: 120 }} className="rounded" />
                </div>
                <input type="file" name="gambar" className="form-control" accept=".jpg,.jpeg,.png,.webp" />
              </div>
              <div className="d-flex justify-content-between">
                <Link href="/admin/galeri" className="btn btn-secondary">← Kembali</Link>
                <button type="submit" className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

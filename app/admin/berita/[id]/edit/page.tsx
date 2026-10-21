import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Berita } from "@/lib/types";
import { storagePublicUrl } from "@/lib/utils";
import { updateBerita } from "../../actions";

type Props = { params: Promise<{ id: string }> };

export default async function EditBeritaPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from("beritas").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();
  const berita = data as Berita;

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="card border-0 shadow-sm" style={{ borderRadius: 15 }}>
          <div className="card-header text-white" style={{ background: "#0d6efd", borderRadius: "15px 15px 0 0" }}>
            <h4 className="mb-0">Edit Berita</h4>
          </div>
          <div className="card-body p-4">
            <form action={updateBerita} encType="multipart/form-data">
              <input type="hidden" name="id" value={berita.id} />
              <div className="mb-3">
                <label htmlFor="judul" className="form-label fw-semibold">Judul Berita</label>
                <input type="text" className="form-control" id="judul" name="judul" defaultValue={berita.judul} required />
              </div>
              <div className="mb-3">
                <label htmlFor="kategori" className="form-label fw-semibold">Kategori</label>
                <select className="form-select" id="kategori" name="kategori" defaultValue={berita.kategori ?? ""}>
                  <option value="">-- Pilih Kategori --</option>
                  <option value="Sekolah">Sekolah</option>
                  <option value="Prestasi">Prestasi</option>
                  <option value="Kegiatan">Kegiatan</option>
                  <option value="Pengumuman">Pengumuman</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="tanggal" className="form-label fw-semibold">Tanggal Berita</label>
                <input type="date" className="form-control" id="tanggal" name="tanggal" defaultValue={berita.tanggal} required />
              </div>
              <div className="mb-3">
                <label htmlFor="isi" className="form-label fw-semibold">Isi Berita</label>
                <textarea className="form-control" id="isi" name="isi" rows={10} defaultValue={berita.isi} required />
              </div>
              {(["gambar", "gambar2", "gambar3"] as const).map((field, i) => (
                <div className="mb-3" key={field}>
                  <label htmlFor={field} className="form-label fw-semibold">Gambar {i + 1}</label>
                  {berita[field] && (
                    <div className="mb-2">
                      <img src={storagePublicUrl(berita[field], "berita")} alt="" style={{ maxHeight: 120 }} className="rounded" />
                    </div>
                  )}
                  <input type="file" className="form-control" id={field} name={field} accept=".jpg,.jpeg,.png,.webp" />
                </div>
              ))}
              <div className="d-flex justify-content-between">
                <Link href="/admin/berita" className="btn btn-secondary">← Kembali</Link>
                <button type="submit" className="btn btn-primary">Update Berita</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

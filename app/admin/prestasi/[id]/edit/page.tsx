import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Prestasi } from "@/lib/types";
import { updatePrestasi } from "../../actions";

type Props = { params: Promise<{ id: string }> };

export default async function EditPrestasiPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from("prestasis").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();
  const item = data as Prestasi;
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-primary text-white"><h4 className="mb-0">Edit Prestasi</h4></div>
          <div className="card-body p-4">
            <form action={updatePrestasi}>
              <input type="hidden" name="id" value={item.id} />
              <div className="mb-3">
                <label className="form-label fw-semibold">Judul</label>
                <input type="text" name="judul" className="form-control" defaultValue={item.judul} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Nama</label>
                <textarea name="nama" className="form-control" rows={4} defaultValue={item.nama} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Tingkat</label>
                <input type="text" name="tingkat" className="form-control" defaultValue={item.tingkat} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Tahun</label>
                <input type="number" name="tahun" className="form-control" defaultValue={item.tahun} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Kategori</label>
                <select name="kategori" className="form-select" defaultValue={item.kategori} required>
                  <option value="Akademik">Akademik</option>
                  <option value="Non Akademik">Non Akademik</option>
                </select>
              </div>
              <div className="d-flex justify-content-between">
                <Link href="/admin/prestasi" className="btn btn-secondary">← Kembali</Link>
                <button type="submit" className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

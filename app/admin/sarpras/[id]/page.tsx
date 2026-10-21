import Link from "next/link";
import { notFound } from "next/navigation";
import AdminNav from "@/components/admin/AdminNav";
import { createClient } from "@/lib/supabase/server";
import type { Sarpras } from "@/lib/types";
import { storagePublicUrl } from "@/lib/utils";

type Props = { params: Promise<{ id: string }> };

export default async function ShowSarprasPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from("sarpras").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();
  const item = data as Sarpras;
  const images = [item.gambar, item.gambar2, item.gambar3].filter(Boolean) as string[];
  return (
    <div className="bg-light min-vh-100">
      <AdminNav />
      <div className="container py-4" style={{ maxWidth: 900 }}>
        <div className="d-flex justify-content-between mb-3">
          <Link href="/admin/sarpras" className="btn btn-secondary btn-sm">← Kembali</Link>
          <Link href={`/admin/sarpras/${item.id}/edit`} className="btn btn-warning btn-sm">Edit</Link>
        </div>
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">
            <h3>{item.icon ? <i className={item.icon + " me-2"} /> : null}{item.nama}</h3>
            {images.length > 0 && (
              <div className="row g-3 my-3">
                {images.map((img, i) => (
                  <div className="col-md-4" key={i}>
                    <img src={storagePublicUrl(img, "sarpras")} className="img-fluid rounded" alt={item.nama} />
                  </div>
                ))}
              </div>
            )}
            <p>{item.deskripsi}</p>
            <p className="text-muted">Urutan: {item.urutan}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

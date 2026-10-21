import Link from "next/link";
import { notFound } from "next/navigation";
import AdminNav from "@/components/admin/AdminNav";
import { createClient } from "@/lib/supabase/server";
import type { Galeri } from "@/lib/types";
import { formatDate, storagePublicUrl } from "@/lib/utils";

type Props = { params: Promise<{ id: string }> };

export default async function ShowGaleriPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from("galeris").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();
  const item = data as Galeri;
  return (
    <div className="bg-light min-vh-100">
      <AdminNav />
      <div className="container py-4" style={{ maxWidth: 800 }}>
        <div className="d-flex justify-content-between mb-3">
          <Link href="/admin/galeri" className="btn btn-secondary btn-sm">← Kembali</Link>
          <Link href={`/admin/galeri/${item.id}/edit`} className="btn btn-warning btn-sm">Edit</Link>
        </div>
        <div className="card border-0 shadow-sm">
          <img src={storagePublicUrl(item.gambar, "galeri")} className="card-img-top" alt={item.judul} style={{ maxHeight: 400, objectFit: "cover" }} />
          <div className="card-body">
            <h3>{item.judul}</h3>
            <p className="text-muted">{item.tanggal ? formatDate(item.tanggal) : "-"}</p>
            <p>{item.deskripsi}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import AdminNav from "@/components/admin/AdminNav";
import { createClient } from "@/lib/supabase/server";
import type { Prestasi } from "@/lib/types";

type Props = { params: Promise<{ id: string }> };

export default async function ShowPrestasiPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from("prestasis").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();
  const item = data as Prestasi;
  return (
    <div className="bg-light min-vh-100">
      <AdminNav />
      <div className="container py-4" style={{ maxWidth: 800 }}>
        <div className="d-flex justify-content-between mb-3">
          <Link href="/admin/prestasi" className="btn btn-secondary btn-sm">← Kembali</Link>
          <Link href={`/admin/prestasi/${item.id}/edit`} className="btn btn-warning btn-sm">Edit</Link>
        </div>
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">
            <span className="badge bg-success mb-2">{item.kategori}</span>
            <h3>{item.judul}</h3>
            <p><strong>Nama:</strong></p>
            <p style={{ whiteSpace: "pre-line" }}>{item.nama}</p>
            <p><strong>Tingkat:</strong> {item.tingkat}</p>
            <p><strong>Tahun:</strong> {item.tahun}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

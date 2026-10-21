import Link from "next/link";
import { notFound } from "next/navigation";
import AdminNav from "@/components/admin/AdminNav";
import { createClient } from "@/lib/supabase/server";
import type { Ekstrakurikuler } from "@/lib/types";

type Props = { params: Promise<{ id: string }> };

export default async function ShowEkstraPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from("ekstrakurikulers").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();
  const item = data as Ekstrakurikuler;
  return (
    <div className="bg-light min-vh-100">
      <AdminNav />
      <div className="container py-4" style={{ maxWidth: 800 }}>
        <div className="d-flex justify-content-between mb-3">
          <Link href="/admin/ekstrakurikuler" className="btn btn-secondary btn-sm">← Kembali</Link>
          <Link href={`/admin/ekstrakurikuler/${item.id}/edit`} className="btn btn-warning btn-sm">Edit</Link>
        </div>
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">
            <h3>{item.icon ? <i className={item.icon + " me-2"} /> : null}{item.nama}</h3>
            <p>{item.deskripsi}</p>
            <p><strong>Warna:</strong> {item.warna ?? "-"}</p>
            <p><strong>Urutan:</strong> {item.urutan}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

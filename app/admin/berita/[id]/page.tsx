import Link from "next/link";
import { notFound } from "next/navigation";
import AdminNav from "@/components/admin/AdminNav";
import { createClient } from "@/lib/supabase/server";
import type { Berita } from "@/lib/types";
import { formatDate, storagePublicUrl } from "@/lib/utils";

type Props = { params: Promise<{ id: string }> };

export default async function ShowBeritaPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from("beritas").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();
  const berita = data as Berita;
  const images = [berita.gambar, berita.gambar2, berita.gambar3].filter(Boolean) as string[];

  return (
    <div className="bg-light min-vh-100">
      <AdminNav websiteHref="/berita" />
      <div className="container py-4" style={{ maxWidth: 900 }}>
        <div className="d-flex justify-content-between mb-3">
          <Link href="/admin/berita" className="btn btn-secondary btn-sm">← Kembali</Link>
          <Link href={`/admin/berita/${berita.id}/edit`} className="btn btn-warning btn-sm">Edit</Link>
        </div>
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">
            <span className="badge bg-primary mb-2">{berita.kategori ?? "-"}</span>
            <h2 className="fw-bold">{berita.judul}</h2>
            <p className="text-muted">
              <i className="bi bi-calendar-event me-1" />
              {formatDate(berita.tanggal)}
            </p>
            {images.length > 0 && (
              <div className="row g-3 mb-4">
                {images.map((img, i) => (
                  <div className="col-md-4" key={i}>
                    <img src={storagePublicUrl(img, "berita")} className="img-fluid rounded" alt={berita.judul} />
                  </div>
                ))}
              </div>
            )}
            <p style={{ whiteSpace: "pre-line" }}>{berita.isi}</p>
            <p className="text-muted small">Slug: {berita.slug}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import type { Berita } from "@/lib/types";
import { formatDate, storagePublicUrl } from "@/lib/utils";
import "@/styles/berita.css";

export const metadata: Metadata = {
  title: "Berita Terkini | SDN Ngletih 1",
};

export default async function BeritaPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("beritas")
    .select("*")
    .order("tanggal", { ascending: false });

  const beritas = (data ?? []) as Berita[];

  return (
    <>

      <section className="berita-hero">
        <div className="container text-center">
          <span className="berita-badge">
            <i className="bi bi-newspaper me-2" />
            Informasi Sekolah
          </span>
          <h1 className="berita-title">Berita Terkini</h1>
          <p className="berita-subtitle">
            Informasi kegiatan, prestasi, dan berbagai aktivitas terbaru SDN
            Ngletih 1.
          </p>
        </div>
      </section>

      {beritas.length === 0 ? (
        <section className="news-section">
          <div className="container">
            <div className="news-card text-center py-5">
              <p className="text-muted mb-0">Belum ada berita tersedia.</p>
            </div>
          </div>
        </section>
      ) : (
        beritas.map((berita) => {
          const images = [berita.gambar, berita.gambar2, berita.gambar3].filter(
            Boolean
          ) as string[];

          return (
            <section className="news-section" key={berita.id}>
              <div className="container">
                <div className="news-card">
                  <span className="news-category">
                    {berita.kategori ?? "Informasi Sekolah"}
                  </span>
                  <h2 className="news-title">{berita.judul}</h2>
                  <div className="news-meta">
                    <span>
                      <i className="bi bi-calendar-event" />{" "}
                      {formatDate(berita.tanggal)}
                    </span>
                    <span>
                      <i className="bi bi-person-circle" /> Admin
                    </span>
                  </div>

                  {images.length > 0 && (
                    <div className="row g-3 mt-2 mb-4">
                      {images.map((img, i) => (
                        <div className="col-md-4" key={i}>
                          <img
                            src={storagePublicUrl(img, "berita")}
                            className="img-fluid news-gallery"
                            alt={berita.judul}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <p style={{ whiteSpace: "pre-line" }}>{berita.isi}</p>
                </div>
              </div>
            </section>
          );
        })
      )}
    </>
  );
}

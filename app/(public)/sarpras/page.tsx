import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import type { Sarpras } from "@/lib/types";
import { storagePublicUrl } from "@/lib/utils";
import "@/styles/sarpras.css";

export const metadata: Metadata = {
  title: "Sarana & Prasarana | SDN Ngletih 1",
};

export default async function SarprasPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("sarpras")
    .select("*")
    .order("urutan", { ascending: true });

  const items = (data ?? []) as Sarpras[];

  return (
    <>

      <section className="sarpras-hero">
        <div className="container text-center">
          <span className="section-badge">Fasilitas Sekolah</span>
          <h1 className="sarpras-title">
            Sarana &amp; <span>Prasarana</span>
          </h1>
          <p className="sarpras-subtitle">
            SDN Ngletih 1 memiliki berbagai fasilitas yang mendukung kegiatan
            belajar mengajar, pembinaan karakter, serta pengembangan potensi
            peserta didik.
          </p>
        </div>
      </section>

      <section className="sarpras-section">
        <div className="container">
          {items.length === 0 ? (
            <div className="text-center py-5">
              <p>Data sarana dan prasarana belum tersedia.</p>
            </div>
          ) : (
            items.map((item) => {
              const images = [item.gambar, item.gambar2, item.gambar3].filter(
                Boolean
              ) as string[];

              return (
                <div className="sarpras-card" key={item.id}>
                  <h2>
                    {item.icon ? <i className={item.icon} /> : null} {item.nama}
                  </h2>

                  {images.length > 0 && (
                    <div className="row g-3 mb-4">
                      {images.map((img, i) => (
                        <div className="col-md-4" key={i}>
                          <img
                            src={storagePublicUrl(img, "sarpras")}
                            className="img-fluid sarpras-img"
                            alt={item.nama}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <p>{item.deskripsi}</p>
                </div>
              );
            })
          )}
        </div>
      </section>
    </>
  );
}

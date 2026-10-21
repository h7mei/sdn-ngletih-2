import type { Metadata } from "next";
import "@/styles/informasi.css";

export const metadata: Metadata = {
  title: "Maklumat Pelayanan | SDN Ngletih 1",
};

export default function Page() {
  return (
    <>
{/* ==========================
        NAVBAR
========================== */}



{/* ==========================
            HERO
========================== */}

<section className="info-hero">

    <div className="container">

        <div className="text-center">

            <span className="section-badge">

                Informasi Pelayanan

            </span>

            <h1 className="info-title">

                Maklumat

                <span>Pelayanan</span>

            </h1>

            <p className="info-text">

                Maklumat pelayanan merupakan bentuk komitmen SDN Ngletih 1
                dalam memberikan pelayanan pendidikan yang berkualitas,
                transparan, cepat, serta sesuai dengan standar pelayanan
                yang telah ditetapkan.

            </p>

        </div>

    </div>

</section>

{/* ==========================
        MAKLUMAT
========================== */}

<section className="service-list">

    <div className="container">

        <div className="service-box">

            <h2 className="text-center">

                Maklumat Pelayanan SDN Ngletih 1

            </h2>

            <p className="text-center text-muted mb-4">

                Berikut merupakan dokumen resmi Maklumat Pelayanan
                SDN Ngletih 1.

            </p>

            <img
                src="/assets/images/maklumat-pelayanan.jpg"
                className="img-fluid"
                alt="Maklumat Pelayanan" />

            <div className="text-center mt-4">

                <a href="/assets/images/maklumat-pelayanan.jpg"
                    target="_blank"
                    className="btn btn-info-modern">

                    <i className="bi bi-arrows-fullscreen me-2"></i>

                    Lihat Gambar Penuh

                </a>

            </div>

        </div>

    </div>

</section>

{/* ==========================
        INFORMASI
========================== */}

<section className="py-5">

    <div className="container">

        <div className="information-box">

            <div className="row">

                <div className="col-lg-2 text-center">

                    <i className="bi bi-patch-check-fill display-2 text-success"></i>

                </div>

                <div className="col-lg-10">

                    <h3>

                        Makna Maklumat Pelayanan

                    </h3>

                    <p>

                        Maklumat Pelayanan merupakan pernyataan resmi
                        penyelenggara pelayanan kepada masyarakat
                        mengenai kesanggupan dalam melaksanakan pelayanan
                        sesuai dengan standar pelayanan yang telah
                        ditetapkan.

                    </p>

                    <p className="mb-0">

                        SDN Ngletih 1 berkomitmen memberikan pelayanan
                        yang cepat, transparan, akuntabel, ramah,
                        serta senantiasa melakukan perbaikan kualitas
                        pelayanan secara berkelanjutan.

                    </p>

                </div>

            </div>

        </div>

    </div>

</section>

{/* ==========================
        FOOTER
========================== */}
    </>
  );
}

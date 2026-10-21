import type { Metadata } from "next";
import "@/styles/informasi.css";

export const metadata: Metadata = {
  title: "IKM | SDN Ngletih 1",
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

                Indeks

                <span>Kepuasan Masyarakat</span>

            </h1>

            <p className="info-text">

                Indeks Kepuasan Masyarakat (IKM) merupakan
                salah satu indikator untuk mengukur tingkat
                kepuasan masyarakat terhadap kualitas pelayanan
                yang diberikan oleh SDN Ngletih 1.

            </p>

        </div>

    </div>

</section>

{/* ==========================
        APA ITU IKM
========================== */}

<section className="service-list">

    <div className="container">

        <div className="service-box">

            <div className="row align-items-center">

                <div className="col-lg-5">

                    <img
                        src="/assets/images/ikm.jpg"
                        alt="IKM" />

                </div>

                <div className="col-lg-7">

                    <h2>

                        Apa itu IKM?

                    </h2>

                    <p>

                        Indeks Kepuasan Masyarakat (IKM) merupakan
                        hasil pengukuran tingkat kepuasan masyarakat
                        terhadap pelayanan yang diberikan oleh
                        penyelenggara pelayanan publik.

                    </p>

                    <p>

                        Melalui survei IKM, SDN Ngletih 1 dapat
                        mengetahui kualitas pelayanan yang telah
                        diberikan sekaligus menjadi bahan evaluasi
                        untuk meningkatkan mutu pelayanan kepada
                        peserta didik, orang tua, maupun masyarakat.

                    </p>

                </div>

            </div>

        </div>

    </div>

</section>

{/* ==========================
        TUJUAN
========================== */}

<section className="py-5">

    <div className="container">

        <div className="text-center mb-5">

            <span className="section-badge">

                Tujuan

            </span>

            <h2 className="section-title">

                Tujuan Survei IKM

            </h2>

        </div>

        <div className="row g-4">

            <div className="col-lg-4">

                <div className="info-card-page text-center">

                    <i className="bi bi-graph-up-arrow display-4 text-primary"></i>

                    <h3 className="mt-3">

                        Evaluasi Pelayanan

                    </h3>

                    <p>

                        Mengukur kualitas pelayanan sekolah
                        berdasarkan penilaian masyarakat.

                    </p>

                </div>

            </div>

            <div className="col-lg-4">

                <div className="info-card-page text-center">

                    <i className="bi bi-lightbulb-fill display-4 text-warning"></i>

                    <h3 className="mt-3">

                        Perbaikan Layanan

                    </h3>

                    <p>

                        Menjadi dasar peningkatan mutu pelayanan
                        secara berkelanjutan.

                    </p>

                </div>

            </div>

            <div className="col-lg-4">

                <div className="info-card-page text-center">

                    <i className="bi bi-people-fill display-4 text-success"></i>

                    <h3 className="mt-3">

                        Kepuasan Masyarakat

                    </h3>

                    <p>

                        Mewujudkan pelayanan publik yang
                        profesional, transparan, dan berkualitas.

                    </p>

                </div>

            </div>

        </div>

    </div>

</section>

{/* ==========================
        HASIL SURVEI
========================== */}

<section className="py-5 bg-light">

    <div className="container">

        <div className="information-box text-center">

            <i className="bi bi-bar-chart-fill display-1 text-primary mb-3"></i>

            <h2>

                Hasil Survei IKM

            </h2>

            <p className="mt-3">

                Saat ini hasil Survei Indeks Kepuasan Masyarakat
                masih dalam proses pengumpulan data.

            </p>

            <p>

                Nilai IKM beserta laporan hasil survei akan
                dipublikasikan pada halaman ini setelah proses
                pengolahan data selesai dilakukan.

            </p>

            <a href="#"
                className="btn btn-info-modern mt-3">

                <i className="bi bi-clipboard-check me-2"></i>

                Isi Survei IKM

            </a>

        </div>

    </div>

</section>

{/* ==========================
        FOOTER
========================== */}
    </>
  );
}

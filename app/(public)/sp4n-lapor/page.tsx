import type { Metadata } from "next";
import "@/styles/informasi.css";
import { assetUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "SP4N-LAPOR | SDN Ngletih 1",
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

    <div className="container text-center">

        <span className="section-badge">

            Pelayanan Pengaduan Nasional

        </span>

        <h1 className="info-title">

            SP4N

            <span>LAPOR!</span>

        </h1>

        <p className="info-text">

            Sistem Pengelolaan Pengaduan Pelayanan Publik Nasional
            yang dapat digunakan masyarakat untuk menyampaikan
            aspirasi maupun pengaduan kepada instansi pemerintah.

        </p>

    </div>

</section>

{/* ==========================
        PENJELASAN
========================== */}

<section className="service-list">

    <div className="container">

        <div className="service-box">

            <div className="row align-items-center">

                <div className="col-lg-5 text-center">

                    <img src={assetUrl("sp4n-lapor.png")}
                        className="img-fluid"
                        alt="SP4N LAPOR" />

                </div>

                <div className="col-lg-7">

                    <h2>

                        Apa itu SP4N-LAPOR!?

                    </h2>

                    <p>

                        SP4N-LAPOR! merupakan layanan penyampaian
                        aspirasi dan pengaduan masyarakat secara
                        online yang dikelola Pemerintah Republik Indonesia.

                    </p>

                    <p>

                        Melalui sistem ini masyarakat dapat
                        menyampaikan laporan mengenai pelayanan publik,
                        termasuk pelayanan pendidikan pada SDN Ngletih 1.

                    </p>

                    <a href="https://www.lapor.go.id/"
                        target="_blank"
                        className="btn btn-info-modern mt-3">

                        <i className="bi bi-box-arrow-up-right me-2"></i>

                        Kunjungi Website SP4N-LAPOR!

                    </a>

                </div>

            </div>

        </div>

    </div>

</section>

{/* ==========================
        MANFAAT
========================== */}

<section className="py-5 bg-light">

    <div className="container">

        <div className="text-center mb-5">

            <span className="section-badge">

                Manfaat

            </span>

            <h2 className="section-title">

                Mengapa Menggunakan SP4N-LAPOR!?

            </h2>

        </div>

        <div className="row g-4">

            <div className="col-lg-4">

                <div className="info-card-page text-center">

                    <i className="bi bi-chat-left-text-fill display-4 text-primary"></i>

                    <h3 className="mt-3">

                        Aspirasi

                    </h3>

                    <p>

                        Menyampaikan saran dan masukan
                        untuk peningkatan pelayanan publik.

                    </p>

                </div>

            </div>

            <div className="col-lg-4">

                <div className="info-card-page text-center">

                    <i className="bi bi-shield-check display-4 text-success"></i>

                    <h3 className="mt-3">

                        Transparan

                    </h3>

                    <p>

                        Seluruh laporan diproses secara
                        terbuka dan dapat dipantau.

                    </p>

                </div>

            </div>

            <div className="col-lg-4">

                <div className="info-card-page text-center">

                    <i className="bi bi-lightning-charge-fill display-4 text-warning"></i>

                    <h3 className="mt-3">

                        Cepat

                    </h3>

                    <p>

                        Laporan diteruskan kepada
                        instansi yang berwenang.

                    </p>

                </div>

            </div>

        </div>

    </div>

</section>

{/* ==========================
        ALUR
========================== */}

<section className="py-5">

    <div className="container">

        <div className="information-box">

            <h2 className="mb-4">

                Alur Penyampaian Pengaduan

            </h2>

            <div className="row text-center">

                <div className="col-lg-3">

                    <i className="bi bi-pencil-square display-4 text-primary"></i>

                    <h5 className="mt-3">

                        1. Tulis Laporan

                    </h5>

                </div>

                <div className="col-lg-3">

                    <i className="bi bi-send-fill display-4 text-success"></i>

                    <h5 className="mt-3">

                        2. Kirim

                    </h5>

                </div>

                <div className="col-lg-3">

                    <i className="bi bi-search display-4 text-warning"></i>

                    <h5 className="mt-3">

                        3. Verifikasi

                    </h5>

                </div>

                <div className="col-lg-3">

                    <i className="bi bi-check-circle-fill display-4 text-danger"></i>

                    <h5 className="mt-3">

                        4. Tindak Lanjut

                    </h5>

                </div>

            </div>

        </div>

    </div>

</section>

{/* ==========================
        CTA
========================== */}

<section className="py-5">

    <div className="container">

        <div className="information-box text-center">

            <i className="bi bi-megaphone-fill display-1 text-primary mb-4"></i>

            <h2>

                Sampaikan Aspirasi Anda

            </h2>

            <p>

                Mari bersama-sama meningkatkan kualitas pelayanan
                publik dengan menyampaikan kritik, saran,
                maupun pengaduan melalui SP4N-LAPOR!.

            </p>

            <a href="https://www.lapor.go.id/"
                target="_blank"
                className="btn btn-info-modern mt-3">

                <i className="bi bi-box-arrow-up-right me-2"></i>

                Buka SP4N-LAPOR!

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

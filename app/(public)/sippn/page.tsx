import type { Metadata } from "next";
import "@/styles/informasi.css";

export const metadata: Metadata = {
  title: "SIPPN | SDN Ngletih 1",
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

        <div className="row align-items-center">

            <div className="col-lg-12 text-center">

                <span className="section-badge">

                    Informasi Pelayanan

                </span>

                <h1 className="info-title">

                    SIPPN

                    <span>Pelayanan Publik Nasional</span>

                </h1>

                <p className="info-text">

                    Sistem Informasi Pelayanan Publik Nasional
                    (SIPPN) merupakan portal resmi Kementerian
                    PANRB yang menyediakan informasi mengenai
                    standar pelayanan publik seluruh instansi
                    pemerintah di Indonesia.

                </p>

            </div>
        </div>

    </div>

</section>

{/* ==========================
    APA ITU SIPPN
========================== */}

<section className="service-list">

    <div className="container">

        <div className="service-box">

            <div className="row align-items-center">

                <div className="col-lg-5">

                    <img
                        src="/assets/images/sippn.png"
                        alt="SIPPN" />

                </div>

                <div className="col-lg-7">

                    <h2>

                        Apa itu SIPPN?

                    </h2>

                    <p>

                        SIPPN (Sistem Informasi Pelayanan Publik Nasional)
                        merupakan sistem informasi nasional yang
                        dikelola oleh Kementerian Pendayagunaan Aparatur
                        Negara dan Reformasi Birokrasi (Kementerian PANRB).

                    </p>

                    <p>

                        Melalui SIPPN masyarakat dapat memperoleh
                        informasi mengenai standar pelayanan,
                        persyaratan, prosedur, waktu pelayanan,
                        biaya pelayanan, hingga dasar hukum
                        pelayanan publik yang disediakan oleh
                        instansi pemerintah.

                    </p>

                    <a
                        href="https://sippn.menpan.go.id/instansi/sdn-ngletih-1-1893413"
                        target="_blank"
                        className="btn btn-info-modern mt-3">

                        <i className="bi bi-box-arrow-up-right me-2"></i>

                        Kunjungi Website SIPPN

                    </a>

                </div>

            </div>

        </div>

    </div>

</section>

{/* ==========================
        CARA MENGAKSES
========================== */}

<section className="py-5">

    <div className="container">

        <div className="text-center mb-5">

            <span className="section-badge">

                Panduan

            </span>

            <h2 className="section-title">

                Cara Mengakses SIPPN

            </h2>

        </div>

        <div className="row g-4">

            <div className="col-lg-3">

                <div className="info-card-page text-center">

                    <i className="bi bi-1-circle-fill display-4 text-primary"></i>

                    <h3 className="mt-3">

                        Buka Website

                    </h3>

                    <p>

                        Klik tombol
                        <strong>Kunjungi Website SIPPN</strong>.

                    </p>

                </div>

            </div>

            <div className="col-lg-3">

                <div className="info-card-page text-center">

                    <i className="bi bi-2-circle-fill display-4 text-success"></i>

                    <h3 className="mt-3">

                        Cari Instansi

                    </h3>

                    <p>

                        Ketik nama
                        <strong>SDN Ngletih 1</strong>
                        pada kolom pencarian.

                    </p>

                </div>

            </div>

            <div className="col-lg-3">

                <div className="info-card-page text-center">

                    <i className="bi bi-3-circle-fill display-4 text-warning"></i>

                    <h3 className="mt-3">

                        Pilih Layanan

                    </h3>

                    <p>

                        Pilih jenis pelayanan
                        yang dibutuhkan.

                    </p>

                </div>

            </div>

            <div className="col-lg-3">

                <div className="info-card-page text-center">

                    <i className="bi bi-4-circle-fill display-4 text-danger"></i>

                    <h3 className="mt-3">

                        Ikuti Prosedur

                    </h3>

                    <p>

                        Bacalah seluruh informasi
                        pelayanan yang tersedia.

                    </p>

                </div>

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

            <div className="row align-items-center">

                <div className="col-lg-2 text-center">

                    <i className="bi bi-info-circle-fill display-2 text-primary"></i>

                </div>

                <div className="col-lg-10">

                    <h3>

                        Informasi

                    </h3>

                    <p className="mb-0">

                        Seluruh informasi pelayanan publik SDN Ngletih 1
                        dapat diakses melalui website sekolah maupun
                        melalui Sistem Informasi Pelayanan Publik Nasional
                        (SIPPN). Apabila terdapat kendala, masyarakat dapat
                        menghubungi pihak sekolah melalui menu
                        <strong>Kontak</strong> atau
                        <strong>Pengaduan</strong>.

                    </p>

                </div>

            </div>

        </div>

    </div>

</section>

{/* ==========================
        FOOTER
========================== */}



{/* Bootstrap */}
    </>
  );
}

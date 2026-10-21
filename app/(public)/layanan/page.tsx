import type { Metadata } from "next";
import "@/styles/layanan.css";
import { assetUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "SILADIK | SDN Ngletih 1",
};

export default function Page() {
  return (
    <>
{/* ==========================
            NAVBAR
    =========================== */}

    

    {/* ===========================
            HERO
    ============================ */}

    <section className="layanan-hero">

        <div className="container">

            <div className="row align-items-center">

                <div className="col-lg-7">

                    <span className="layanan-badge">

                        <i className="bi bi-grid-fill me-2"></i>

                        Pelayanan Digital Sekolah

                    </span>

                    <h1 className="layanan-title">

                        Layanan

                        <span>SDN Ngletih 1</span>

                    </h1>

                    <p className="layanan-text">

                        SDN Ngletih 1 menyediakan berbagai layanan administrasi
                        sekolah secara mudah, cepat, transparan, dan dapat
                        diakses secara daring melalui Sistem Layanan Digital
                        (SILADIK).

                    </p>

                    <a href="#siladik"
                        className="btn btn-warning btn-lg">

                        <i className="bi bi-arrow-down-circle me-2"></i>

                        Lihat Layanan

                    </a>

                </div>

                <div className="col-lg-5 text-center">

                    <img src={assetUrl("service.png")}
                        className="img-fluid layanan-image"
                        alt="Layanan" />

                </div>

            </div>

        </div>

    </section>

    {/* ===========================
            SILADIK
    ============================ */}

    <section id="siladik"
        className="siladik-section">

        <div className="container">

            <div className="text-center mb-5">

                <span className="section-badge">

                    Pelayanan Sekolah

                </span>

                <h2 className="section-title">

                    SILADIK

                </h2>

                <p className="section-subtitle">

                    Sistem Layanan Digital SDN Ngletih 1
                    menyediakan pelayanan administrasi
                    sekolah secara online.

                </p>

            </div>

            <div className="row g-4">

                {/* Card 1 */}

                <div className="col-lg-6">

                    <div className="layanan-card">

                        <div className="layanan-icon">

                            <i className="bi bi-patch-check-fill"></i>

                        </div>

                        <h3>

                            Legalisasi Ijazah / STTB

                        </h3>

                        <p>

                            Pelayanan legalisasi ijazah atau STTB
                            bagi alumni SDN Ngletih 1 secara
                            online maupun langsung di sekolah.

                        </p>

                        <ul>

                            <li>

                                Persyaratan

                            </li>

                            <li>

                                Alur Pelayanan

                            </li>

                            <li>

                                Gratis

                            </li>

                            <li>

                                Estimasi 2–3 Hari

                            </li>

                        </ul>

                        <a href="/legalisasi"
                            className="btn btn-primary w-100 mt-4">

                            Detail Layanan

                        </a>

                    </div>

                </div>

                {/* Card 2 */}

                <div className="col-lg-6">

                    <div className="layanan-card">

                        <div className="layanan-icon bg-success">

                            <i className="bi bi-arrow-left-right"></i>

                        </div>

                        <h3>

                            Mutasi Siswa

                        </h3>

                        <p>

                            Pelayanan mutasi masuk dan mutasi keluar
                            bagi peserta didik SDN Ngletih 1.

                        </p>

                        <ul>

                            <li>

                                Persyaratan

                            </li>

                            <li>

                                Alur Pelayanan

                            </li>

                            <li>

                                Gratis

                            </li>

                            <li>

                                Estimasi 1–2 Hari

                            </li>

                        </ul>

                        <a href="/mutasi"
                            className="btn btn-primary w-100 mt-4">

                            Detail Layanan

                        </a>

                    </div>

                </div>

            </div>

        </div>

    </section>

    {/* ===========================
            INFORMASI
    ============================ */}

    <section className="layanan-info">

        <div className="container">

            <div className="row">

                <div className="col-lg-12">

                    <div className="info-box">

                        <i className="bi bi-info-circle-fill"></i>

                        <div>

                            <h4>

                                Informasi Pelayanan

                            </h4>

                            <p>

                                Seluruh layanan administrasi SDN Ngletih 1
                                tidak dipungut biaya (GRATIS).
                                Pastikan seluruh dokumen persyaratan telah
                                dipersiapkan sebelum mengajukan layanan.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>

    {/* ===========================
            FOOTER
    ============================ */}

    

    {/* Bootstrap */}
    </>
  );
}

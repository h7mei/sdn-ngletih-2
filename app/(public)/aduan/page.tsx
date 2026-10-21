import type { Metadata } from "next";
import "@/styles/informasi.css";

export const metadata: Metadata = {
  title: "Pengaduan | SDN Ngletih 1",
};

export default function Page() {
  return (
    <>
{/* ==========================
            NAVBAR
    =========================== */}

    

{/* HERO */}

<section className="layanan-hero">

<div className="container">

<div className="row align-items-center">

<div className="col-lg-7">

<span className="layanan-badge">

<i className="bi bi-chat-dots-fill me-2"></i>

Layanan Aspirasi

</span>

<h1 className="layanan-title">

Layanan

<span>Pengaduan</span>

</h1>

<p className="layanan-text">

SDN Ngletih 1 menyediakan layanan pengaduan
untuk menerima kritik, saran, maupun laporan
dari masyarakat demi meningkatkan kualitas
pelayanan sekolah.

</p>

<a href="https://forms.gle/GoxFYcANVcYqpBTY8"

target="_blank"

className="btn btn-warning btn-lg">

<i className="bi bi-send-fill me-2"></i>

Isi Form Pengaduan

</a>

</div>

<div className="col-lg-5 text-center">

<img src="/assets/images/aduan.png"

className="img-fluid layanan-image" />

</div>

</div>

</div>

</section>

{/* CONTENT */}

<section className="siladik-section">

<div className="container">

<div className="row g-4">

<div className="col-lg-4">

<div className="layanan-card">

<div className="layanan-icon">

<i className="bi bi-exclamation-circle-fill"></i>

</div>

<h3>Pengaduan</h3>

<p>

Menyampaikan laporan mengenai pelayanan sekolah.

</p>

</div>

</div>

<div className="col-lg-4">

<div className="layanan-card">

<div className="layanan-icon bg-success">

<i className="bi bi-lightbulb-fill"></i>

</div>

<h3>Saran</h3>

<p>

Memberikan masukan untuk meningkatkan mutu pelayanan.

</p>

</div>

</div>

<div className="col-lg-4">

<div className="layanan-card">

<div className="layanan-icon bg-warning text-dark">

<i className="bi bi-hand-thumbs-up-fill"></i>

</div>

<h3>Apresiasi</h3>

<p>

Memberikan penghargaan kepada guru maupun sekolah.

</p>

</div>

</div>

</div>

</div>

</section>

{/* INFORMASI */}

<section className="layanan-info">

<div className="container">

<div className="info-box">

<i className="bi bi-info-circle-fill"></i>

<div>

<h4>Informasi Pengaduan</h4>

<p>

Seluruh pengaduan akan diproses oleh pihak sekolah.

Harap mengisi data dengan benar agar pengaduan dapat ditindaklanjuti.

Estimasi respon maksimal 2×24 jam pada hari kerja.

</p>

</div>

</div>

</div>

</section>
    </>
  );
}

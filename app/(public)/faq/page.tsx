import type { Metadata } from "next";
import "@/styles/faq.css";

export const metadata: Metadata = {
  title: "FAQ | SDN Ngletih 1",
};

export default function Page() {
  return (
    <>
<section className="info-hero">

<div className="container text-center">

<span className="section-badge">

Pusat Bantuan

</span>

<h1 className="info-title">

Frequently Asked

<span>Questions</span>

</h1>

<p className="info-text">

Temukan jawaban atas pertanyaan yang paling sering diajukan
oleh orang tua, siswa maupun masyarakat.

</p>

</div>

</section>



<section className="py-5">

<div className="container">

<div className="faq-search">

<i className="bi bi-search"></i>

<input
type="text"
id="faqSearch"
placeholder="Cari pertanyaan..." />

</div>



<div className="faq-list">

{/* FAQ */}

<div className="faq-item">

<div className="faq-question">

<span>

Bagaimana cara mendaftar SPMB?

</span>

<i className="bi bi-plus-lg"></i>

</div>

<div className="faq-answer">

Pendaftaran SPMB dilakukan melalui menu
SPMB pada website SDN Ngletih 1 sesuai
jadwal yang telah diumumkan.

</div>

</div>



<div className="faq-item">

<div className="faq-question">

<span>

Apakah legalisasi ijazah dipungut biaya?

</span>

<i className="bi bi-plus-lg"></i>

</div>

<div className="faq-answer">

Tidak.
Seluruh pelayanan legalisasi ijazah
di SDN Ngletih 1 tidak dipungut biaya.

</div>

</div>



<div className="faq-item">

<div className="faq-question">

<span>

Bagaimana cara mutasi siswa?

</span>

<i className="bi bi-plus-lg"></i>

</div>

<div className="faq-answer">

Silakan membuka menu
Layanan → Mutasi
dan melengkapi seluruh persyaratan
yang telah ditentukan.

</div>

</div>



<div className="faq-item">

<div className="faq-question">

<span>

Bagaimana menghubungi sekolah?

</span>

<i className="bi bi-plus-lg"></i>

</div>

<div className="faq-answer">

Hubungi nomor sekolah,
email resmi,
atau datang langsung ke SDN Ngletih 1.

</div>

</div>



<div className="faq-item">

<div className="faq-question">

<span>

Dimana melihat berita terbaru?

</span>

<i className="bi bi-plus-lg"></i>

</div>

<div className="faq-answer">

Semua berita sekolah tersedia
pada menu Berita.

</div>

</div>

</div>

</div>

</section>
    </>
  );
}

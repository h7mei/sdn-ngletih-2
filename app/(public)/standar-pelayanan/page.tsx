import type { Metadata } from "next";
import "@/styles/standar-pelayanan.css";

export const metadata: Metadata = {
  title: "Standar Pelayanan | SDN Ngletih 1",
};

export default function Page() {
  return (
    <>
{/* =======================================================
                        NAVBAR
======================================================= */}



{/* =======================================================
                        HERO
======================================================= */}

<section className="sp-hero">

    <div className="container">

        <div className="text-center sp-hero-content">

            <span className="sp-badge">

                <i className="bi bi-file-earmark-text-fill me-2"></i>

                INFORMASI PELAYANAN

            </span>

            <h1>

                Standar Pelayanan

            </h1>

            <p>

                Standar Pelayanan SDN Ngletih 1 merupakan pedoman dalam
                penyelenggaraan pelayanan administrasi sekolah yang
                profesional, transparan, mudah, cepat, dan akuntabel
                kepada seluruh masyarakat.

            </p>

        </div>

    </div>

</section>

{/* =======================================================
                STANDAR PELAYANAN
======================================================= */}

<section className="sp-section">

<div className="container">

{/* =======================================================
                    STANDAR PELAYANAN 1
======================================================= */}

<div className="sp-service-card">

    <div className="sp-header">

        <div className="sp-number">

            1

        </div>

        <div>

            <h2>

                Standar Pelayanan SPMB

            </h2>

        </div>

    </div>

    <div className="row g-4">

        {/* Poster Standar */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/spmb.jpeg"
                    alt="Standar Pelayanan SPMB"
                    className="img-fluid sp-image"

 />

                <div className="sp-title">

                    <i className="bi bi-file-earmark-text me-2"></i>

                    Standar Pelayanan

                </div>

            </div>

        </div>

        {/* Poster Alur */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/spmb-alur.jpg"
                    alt="Alur Pelayanan SPMB"
                    className="img-fluid sp-image"

 />

                <div className="sp-title">

                    <i className="bi bi-diagram-3 me-2"></i>

                    Alur Pelayanan

                </div>

            </div>

        </div>

    </div>

</div>

{/* =======================================================
                    STANDAR PELAYANAN 2
======================================================= */}

<div className="sp-service-card sp-card-even">

    <div className="sp-header">

        <div className="sp-number">

            2

        </div>

        <div>

            <h2>

                Standar Pelayanan Legalisasi Ijazah

            </h2>

        </div>

    </div>

    <div className="row g-4">

        {/* Poster Standar */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/legalisasi.jpeg"
                    className="img-fluid sp-image"
                    alt="Standar Pelayanan Legalisasi"
 />

                <div className="sp-title">

                    <i className="bi bi-file-earmark-text me-2"></i>

                    Standar Pelayanan

                </div>

            </div>

        </div>

        {/* Poster Alur */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/legalisasi-alur.jpg"
                    className="img-fluid sp-image"
                    alt="Alur Pelayanan Legalisasi"
 />

                <div className="sp-title">

                    <i className="bi bi-diagram-3 me-2"></i>

                    Alur Pelayanan

                </div>

            </div>

        </div>

    </div>

</div>
{/* =======================================================
                    STANDAR PELAYANAN 3
======================================================= */}

<div className="sp-service-card">

    <div className="sp-header">

        <div className="sp-number">

            3

        </div>

        <div>

            <h2>

                Standar Pelayanan Mutasi Siswa

            </h2>

        </div>

    </div>

    <div className="row g-4">

        {/* Poster Standar */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/mutasi.jpeg"
                    alt="Standar Pelayanan Mutasi Siswa"
                    className="img-fluid sp-image"

 />

                <div className="sp-title">

                    <i className="bi bi-file-earmark-text me-2"></i>

                    Standar Pelayanan

                </div>

            </div>

        </div>

        {/* Poster Alur */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/mutasi-alur.jpg"
                    alt="Alur Pelayanan Mutasi Siswa"
                    className="img-fluid sp-image"

 />

                <div className="sp-title">

                    <i className="bi bi-diagram-3 me-2"></i>

                    Alur Pelayanan

                </div>

            </div>

        </div>

    </div>

</div>

{/* =======================================================
                    STANDAR PELAYANAN 4
======================================================= */}

<div className="sp-service-card sp-card-even">

    <div className="sp-header">

        <div className="sp-number">

            4

        </div>

        <div>

            <h2>

                Standar Pelayanan Pengajuan Surat Keterangan Pengganti Ijazah

            </h2>

        </div>

    </div>

    <div className="row g-4">

        {/* Poster Standar */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/pengganti.jpeg"
                    className="img-fluid sp-image"
                    alt="Standar Pelayanan Pengajuan Surat Keterangan Pengganti Ijazah"
 />

                <div className="sp-title">

                    <i className="bi bi-file-earmark-text me-2"></i>

                    Standar Pelayanan

                </div>

            </div>

        </div>

        {/* Poster Alur */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/pengganti-alur.jpg"
                    className="img-fluid sp-image"
                    alt="Alur Pelayanan Pengajuan Surat Keterangan Pengganti Ijazah"
 />

                <div className="sp-title">

                    <i className="bi bi-diagram-3 me-2"></i>

                    Alur Pelayanan

                </div>

            </div>

        </div>

    </div>

</div>
{/* =======================================================
                    STANDAR PELAYANAN 5
======================================================= */}

<div className="sp-service-card">

    <div className="sp-header">

        <div className="sp-number">

            5
        </div>

        <div>

            <h2>
                Standar Pelayanan Surat Keterangan Kesalahan Penulisan Ijazah
            </h2>

        </div>

    </div>

    <div className="row g-4">

        {/* Poster Standar */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/kesalahan.jpeg"
                    alt="Standar Pelayanan Surat Keterangan Kesalahan Penulisan Ijazah"
                    className="img-fluid sp-image"

 />

                <div className="sp-title">

                    <i className="bi bi-file-earmark-text me-2"></i>

                    Standar Pelayanan

                </div>

            </div>

        </div>

        {/* Poster Alur */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/kesalahan-alur.jpg"
                    alt="Alur Pelayanan Surat Keterangan Kesalahan Penulisan Ijazah"
                    className="img-fluid sp-image"

 />

                <div className="sp-title">

                    <i className="bi bi-diagram-3 me-2"></i>

                    Alur Pelayanan

                </div>

            </div>

        </div>

    </div>

</div>

{/* =======================================================
                    STANDAR PELAYANAN 6
======================================================= */}

<div className="sp-service-card sp-card-even">

    <div className="sp-header">

        <div className="sp-number">

            6

        </div>

        <div>

            <h2>

                Standar Pelayanan Pengajuan Sertifikat/Piagam Penghargaan

            </h2>

        </div>

    </div>

    <div className="row g-4">

        {/* Poster Standar */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/piagam.jpeg"
                    className="img-fluid sp-image"
                    alt="Standar Pelayanan Pengajuan Sertifikat/Piagam Penghargaan"
 />

                <div className="sp-title">

                    <i className="bi bi-file-earmark-text me-2"></i>

                    Standar Pelayanan

                </div>

            </div>

        </div>

        {/* Poster Alur */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/piagam-alur.jpg"
                    className="img-fluid sp-image"
                    alt="Alur Pelayanan Pengajuan Sertifikat/Piagam Penghargaan"
 />

                <div className="sp-title">

                    <i className="bi bi-diagram-3 me-2"></i>

                    Alur Pelayanan

                </div>

            </div>

        </div>

    </div>

</div>
{/* =======================================================
                    STANDAR PELAYANAN 7
======================================================= */}

<div className="sp-service-card">

    <div className="sp-header">

        <div className="sp-number">

            7

        </div>

        <div>

            <h2>

                Standar Pelayanan Pengesahan Dokumen Kurikulum Satuan Pendidikan

            </h2>

        </div>

    </div>

    <div className="row g-4">

        {/* Poster Standar */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/kurikulum.jpeg"
                    alt="Standar Pelayanan Pengesahan Dokumen Kurikulum Satuan Pendidikan"
                    className="img-fluid sp-image"

 />

                <div className="sp-title">

                    <i className="bi bi-file-earmark-text me-2"></i>

                    Standar Pelayanan

                </div>

            </div>

        </div>

        {/* Poster Alur */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/kurikulum-alur.jpg"
                    alt="Alur Pelayanan Pengesahan Dokumen Kurikulum Satuan Pendidikan"
                    className="img-fluid sp-image"

 />

                <div className="sp-title">

                    <i className="bi bi-diagram-3 me-2"></i>

                    Alur Pelayanan

                </div>

            </div>

        </div>

    </div>

</div>

{/* =======================================================
                    STANDAR PELAYANAN 8
======================================================= */}

<div className="sp-service-card sp-card-even">

    <div className="sp-header">

        <div className="sp-number">

            8

        </div>

        <div>

            <h2>

                 Pelayanan UKS

            </h2>

        </div>

    </div>

    <div className="row g-4">

        {/* Poster Standar */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/uks.jpeg"
                    className="img-fluid sp-image"
                    alt="Standar Pelayanan UKS"
 />

                <div className="sp-title">

                    <i className="bi bi-file-earmark-text me-2"></i>

                    Standar Pelayanan

                </div>

            </div>

        </div>

        {/* Poster Alur */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/uks-alur.jpg"
                    className="img-fluid sp-image"
                    alt="Alur Pelayanan UKS"
 />

                <div className="sp-title">

                    <i className="bi bi-diagram-3 me-2"></i>

                    Alur Pelayanan

                </div>

            </div>

        </div>

    </div>

</div>
{/* =======================================================
                    STANDAR PELAYANAN 9
======================================================= */}

<div className="sp-service-card">

    <div className="sp-header">

        <div className="sp-number">

            9

        </div>

        <div>

            <h2>

                 Pelayanan Perpustakaan

            </h2>

        </div>

    </div>

    <div className="row g-4">

        {/* Poster Standar */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/perpustakaan.jpeg"
                    alt="Standar Pelayanan Perpustakaan"
                    className="img-fluid sp-image"

 />

                <div className="sp-title">

                    <i className="bi bi-file-earmark-text me-2"></i>

                    Standar Pelayanan

                </div>

            </div>

        </div>

        {/* Poster Alur */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/perpustakaan-alur.jpg"
                    alt="Alur Pelayanan Perpustakaan"
                    className="img-fluid sp-image"

 />

                <div className="sp-title">

                    <i className="bi bi-diagram-3 me-2"></i>

                    Alur Pelayanan

                </div>

            </div>

        </div>

    </div>

</div>

{/* =======================================================
                    STANDAR PELAYANAN 10
======================================================= */}

<div className="sp-service-card sp-card-even">

    <div className="sp-header">

        <div className="sp-number">

            10

        </div>

        <div>

            <h2>

                 Pelayanan Kantin

            </h2>

        </div>

    </div>

    <div className="row g-4">

        {/* Poster Standar */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/kantin.jpeg"
                    className="img-fluid sp-image"
                    alt="Standar Pelayanan Kantin"
 />

                <div className="sp-title">

                    <i className="bi bi-file-earmark-text me-2"></i>

                    Standar Pelayanan

                </div>

            </div>

        </div>

        {/* Poster Alur */}

        <div className="col-lg-6">

            <div className="sp-poster">

                <img src="/assets/images/standar/kantin-alur.jpg"
                    className="img-fluid sp-image"
                    alt="Alur Pelayanan Kantin"
 />

                <div className="sp-title">

                    <i className="bi bi-diagram-3 me-2"></i>

                    Alur Pelayanan

                </div>

            </div>

        </div>

    </div>

</div>

</div>

</section>

{/* =======================================================
                        MODAL PREVIEW
======================================================= */}

<div className="modal fade"
    id="imagePreview"
    tabIndex={-1}
    aria-hidden="true">

    <div className="modal-dialog modal-xl modal-dialog-centered">

        <div className="modal-content border-0 bg-transparent">

            <button
                type="button"
                className="btn-close btn-close-white ms-auto mb-3"
                data-bs-dismiss="modal">
            </button>

            <img
                id="previewImg"
                className="img-fluid rounded-4 shadow-lg"
                alt="Preview Gambar" />

        </div>

    </div>

</div>

{/* =======================================================
                        FOOTER
======================================================= */}



{/* =======================================================
                    BOOTSTRAP JS
======================================================= */}



{/* =======================================================
                    PREVIEW GAMBAR
======================================================= */}
    </>
  );
}

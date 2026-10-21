import type { Metadata } from "next";
import "@/styles/informasi.css";

export const metadata: Metadata = {
  title: "Mutasi | SDN Ngletih 1",
};

export default function Page() {
  return (
    <>
{/* ===========================
        NAVBAR
=========================== */}

    

    {/* ===========================
        HERO
=========================== */}

    <section className="layanan-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <span className="layanan-badge">
              <i className="bi bi-arrow-left-right me-2 text-center"></i>

              SILADIK SDN Ngletih 1
            </span>

            <h1 className="layanan-title">
              Mutasi

              <span>Peserta Didik</span>
            </h1>

            <p className="layanan-text">
              SDN Ngletih 1 melayani proses mutasi masuk maupun mutasi keluar
              peserta didik sesuai dengan ketentuan Dinas Pendidikan serta
              peraturan yang berlaku.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ===========================
        CONTENT
=========================== */}

    <section className="siladik-section">
      <div className="container">
        <div className="row g-4">
          {/* Persyaratan */}

          <div className="col-lg-6">
            <div className="layanan-card">
              <div className="layanan-icon">
                <i className="bi bi-file-earmark-check-fill"></i>
              </div>

              <h3>Persyaratan Mutasi Siswa</h3>

              <ul>
                <li>Surat permohonan pindah/mutasi dari orang tua/wali.</li>

                <a
                  href="https://drive.google.com/file/d/136q9obh5JZdqd9m0ALZmOj-0fOPvZoTD/view?usp=drive_link"
                  target="_blank"
                  >Unduh Surat Permohonan pindah/mutasi</a
                >

                <li>Surat keterangan diterima oleh sekolah yang dituju</li>

                <li>Surat pindah/mutasi dari sekolah asal</li>

                <li>Fotokopi Rapor siswa.</li>

                <li>
                  NISN siswa yang dapat diunduh dari laman
                  <a href="https://nisn.data.kemdikbud.go.id" target="_blank"
                    >https://nisn.data.kemdikbud.go.id</a
                  >
                </li>
              </ul>
            </div>
          </div>

          {/* Prosedur */}

          <div className="col-lg-6">
            <div className="layanan-card">
              <div className="layanan-icon bg-success">
                <i className="bi bi-diagram-3-fill"></i>
              </div>

              <h3>Alur Pelayanan</h3>

              <ol>
                <li>Mengisi formulir secara daring</li>

                <li>Mengunggah dokumen persyaratan</li>

                <li>Operator melakukan verifikasi.</li>

                <li>Kepala sekolah memberikan persetujuan</li>

                <li>
                  Pemohon menerima pemberitahuan melalui WhatsApp atau email.
                </li>

                <li>Dokumen mutasi diambil sesuai jadwal</li>
              </ol>
            </div>
          </div>

          {/* Waktu */}

          <div className="col-lg-6">
            <div className="layanan-card">
              <div className="layanan-icon bg-warning text-dark">
                <i className="bi bi-clock-history"></i>
              </div>

              <h3>Jam Pelayanan</h3>

              <table className="table">
                <tr>
                  <th>Hari</th>

                  <td>Senin - Jumat</td>
                </tr>

                <tr>
                  <th>Jam</th>

                  <td>08.00 - 12.00 WIB</td>
                </tr>

                <tr>
                  <th>Estimasi</th>

                  <td>2 - 3 Hari Kerja</td>
                </tr>

                <tr>
                  <th>Biaya</th>

                  <td><strong>Gratis</strong></td>
                </tr>
              </table>
            </div>
          </div>

          {/* Informasi */}

          <div className="col-lg-6">
            <div className="layanan-card">
              <div className="layanan-icon bg-danger">
                <i className="bi bi-headset"></i>
              </div>

              <h3>Informasi Layanan</h3>

              <p>
                Apabila terdapat pertanyaan mengenai proses mutasi peserta
                didik, silakan menghubungi operator SDN Ngletih 1.
              </p>

              <p>
                <i className="bi bi-envelope-fill me-2"></i>

                sdnegeringletih1.com
              </p>

              <p>
                <i className="bi bi-telephone-fill me-2"></i>

                (0354) 123456
              </p>

              <a
                href="https://forms.gle/4ScLSUmW2Kc8AJVQ7"
                target="_blank"
                className="btn btn-primary rounded-pill w-100 mt-3"
              >
                <i className="bi bi-send-fill me-2"></i>

                Ajukan Permohonan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ===========================
        PERSYARATAN TAMBAHAN
=========================== */}

    <section className="layanan-info">
      <div className="container">
        <div className="info-box">
          <i className="bi bi-info-circle-fill"></i>

          <div>
            <h4>Informasi Penting</h4>

            <p>
              Mutasi peserta didik hanya dapat diproses apabila seluruh
              persyaratan administrasi telah lengkap. Keputusan penerimaan
              mutasi mengikuti daya tampung dan ketentuan yang berlaku di SDN
              Ngletih 1.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ===========================
        FOOTER
=========================== */}
    </>
  );
}

import type { Metadata } from "next";
import "@/styles/informasi.css";
import { assetUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Legalisasi | SDN Ngletih 1",
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
          <div className="col-lg-7">
            <span className="layanan-badge">
              <i className="bi bi-patch-check-fill me-2"></i>

              SILADIK SDN Ngletih 1
            </span>

            <h1 className="layanan-title">
              Legalisasi

              <span>Ijazah / STTB</span>
            </h1>

            <p className="layanan-text">
              Pelayanan legalisasi ijazah atau STTB bagi alumni SDN Ngletih 1
              dilakukan secara cepat, mudah, transparan dan tanpa dipungut
              biaya.
            </p>
          </div>

          <div className="col-lg-5 text-center">
            <img
              src={assetUrl("legalisasi.png")}
              className="img-fluid layanan-image"
              alt="Legalisasi"
            />
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
                <i className="bi bi-file-earmark-text-fill"></i>
              </div>

              <h3>Persyaratan Legalisasi Ijazah</h3>

              <ul>
                <li>scan Ijazah / STTB yang asli.</li>

                <li>
                  Surat Permohonan Legalisasi Ijazah / STTB yang sudah
                  ditandatangan
                </li>

                <p>
                  Format Surat Permohonan Legalisasi Ijazah (bisa diunduh, Ms.
                  Word)
                </p>

                <p>
                  <a
                    href="https://drive.google.com/file/d/1OQbBUE4Yfv5HvzGVa_GK76fzK5Zknd3B/view?usp=drive_link"
                    target="_blank"
                    >Unduh Surat Permohonan Legalisasi Ijazah</a
                  >
                </p>
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

                <li>Operator melakukan verifikasi</li>

                <li>Kepala sekolah memberikan persetujuan</li>

                <li>
                  Pemohon menerima pemberitahuan melalui WhatsApp atau email
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

              <h3>Waktu Pelayanan</h3>

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

                  <td>1 - 2 Hari Kerja</td>
                </tr>

                <tr>
                  <th>Biaya</th>

                  <td><strong>Gratis</strong></td>
                </tr>
              </table>
            </div>
          </div>

          {/* Kontak */}

          <div className="col-lg-6">
            <div className="layanan-card">
              <div className="layanan-icon bg-danger">
                <i className="bi bi-headset"></i>
              </div>

              <h3>Informasi</h3>

              <p>
                Apabila terdapat kendala dalam proses legalisasi, silakan
                menghubungi operator sekolah.
              </p>

              <p>
                <i className="bi bi-envelope-fill me-2"></i>

                sdnegeringletih1.com
              </p>

              <p>
                <i className="bi bi-telephone-fill me-2"></i>

                +62 813-7337-8012
              </p>

              <a
                href="https://forms.gle/tYWnszbhhBdV2p6M7 "
                className="btn btn-primary w-100 rounded-pill mt-3"
                target="_blank"
              >
                <i className="bi bi-send-fill me-2"></i>

                Ajukan Permohonan Legalitas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ===========================
        CATATAN
=========================== */}

    <section className="layanan-info">
      <div className="container">
        <div className="info-box">
          <i className="bi bi-exclamation-circle-fill"></i>

          <div>
            <h4>Perhatian</h4>

            <p>
              Pastikan seluruh dokumen asli dibawa saat proses verifikasi.
              Pelayanan legalisasi tidak dipungut biaya sesuai ketentuan SDN
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

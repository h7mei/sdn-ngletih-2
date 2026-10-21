import Link from "next/link";
import SwiperInit from "@/components/SwiperInit";
import { createClient } from "@/lib/supabase/server";
import type { Ekstrakurikuler, Galeri, Prestasi } from "@/lib/types";
import { assetUrl, storagePublicUrl } from "@/lib/utils";
import "@/styles/sambutan.css";

export default async function HomePage() {
  const supabase = await createClient();

  const [{ data: ekstrakurikulers }, { data: prestasis }, { data: galeris }] =
    await Promise.all([
      supabase
        .from("ekstrakurikulers")
        .select("*")
        .order("urutan", { ascending: true }),
      supabase.from("prestasis").select("*").order("tahun", { ascending: false }),
      supabase
        .from("galeris")
        .select("*")
        .order("tanggal", { ascending: false }),
    ]);

  const ekstraList = (ekstrakurikulers ?? []) as Ekstrakurikuler[];
  const prestasiList = (prestasis ?? []) as Prestasi[];
  const galeriList = (galeris ?? []) as Galeri[];
  const akademik = prestasiList.filter((p) => p.kategori === "Akademik");
  const nonAkademik = prestasiList.filter((p) => p.kategori === "Non Akademik");

  return (
    <>

      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="hero-overlay" />
        <div className="container position-relative">
          <div className="row min-vh-100">
            <div className="col-lg-6 hero-content">
              <span className="badge-school">
                <i className="bi bi-mortarboard-fill me-2" />
                Sekolah Dasar Negeri
              </span>
              <h1 className="hero-title">
                Mewujudkan Generasi{" "}
                <span>Cerdas, Berkarakter, dan Berprestasi</span>
              </h1>
              <p className="hero-text text-justify">
                SDN Ngletih 1 berkomitmen memberikan pendidikan berkualitas yang
                berlandaskan iman, ilmu, dan teknologi untuk membentuk generasi
                masa depan yang unggul dan siap menghadapi tantangan zaman.
              </p>
              <div className="hero-buttons mt-4">
                <a href="#" className="btn btn-warning btn-lg me-3">
                  SPMB Online
                </a>
                <a href="#profil" className="btn btn-outline-light btn-lg">
                  Daftar Sekarang
                </a>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="hero-image-wrapper">
                <img
                  src={assetUrl("hero.png")}
                  className="hero-img"
                  alt="SDN Ngletih 1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAMBUTAN */}
      <section className="section-sambutan py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 text-center">
              <img
                src={assetUrl("kepala-sekolah.jpeg")}
                className="img-fluid shadow kepala-sekolah"
                alt="Kepala Sekolah"
              />
            </div>
            <div className="col-lg-7">
              <h2 className="section-title">Eka Yudi Kristanto, S.Pd.</h2>
              <h5 className="fw-bold text-primary mb-3">
                Sambutan Kepala Sekolah
              </h5>
              <p className="text-justify sambutan-opening">
                Assalamu&apos;alaikum warahmatullahi wabarakatuh
              </p>
              <p className="text-justify">
                Puji syukur ke hadirat Tuhan yang Maha Esa atas segala rahmat
                dan karunia-Nya sehingga SDN Ngletih 1 Kecamatan Pesantren Kota
                Kediri senantiasa diberikan kesempatan untuk terus berkontribusi
                dalam dunia pendidikan, khususnya dalam membentuk generasi yang
                cerdas, berkarakter, dan berakhlak mulia...
              </p>
              <Link
                href="/sambutan-kepsek"
                className="btn btn-primary modern-btn mt-3"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROFIL */}
      <section id="profil" className="section-profil mb-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Data SDN Ngletih 1</h2>
            <p className="section-subtitle">
              Sekolah dasar unggulan yang berkomitmen mencetak generasi
              berkarakter, cerdas, dan berprestasi.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="info-card profil-card-modern profil-card-blue">
                <i className="bi bi-people-fill" />
                <h3>200+</h3>
                <p>Siswa Aktif</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-card profil-card-modern profil-card-light">
                <i className="bi bi-person-workspace" />
                <h3>22</h3>
                <p>Tenaga Pendidik</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-card profil-card-modern profil-card-soft">
                <i className="bi bi-building" />
                <h3>15+</h3>
                <p>Ruang Kelas</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info-card profil-card-modern profil-card-gold">
                <i className="bi bi-award-fill" />
                <h3>A</h3>
                <p>Akreditasi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAKLUMAT */}
      <section id="maklumat" className="maklumat-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-badge">Pelayanan Publik</span>
            <h2 className="section-title">Maklumat Pelayanan</h2>
            <p className="section-subtitle">
              Komitmen SDN Ngletih 1 dalam memberikan pelayanan pendidikan yang
              profesional, transparan, cepat, dan berorientasi kepada kepuasan
              masyarakat.
            </p>
          </div>
          <div className="row align-items-center g-5">
            <div className="col-lg-12">
              <div className="maklumat-card">
                <div className="maklumat-header">
                  <i className="bi bi-award-fill" />
                  <h3>Maklumat Pelayanan SDN Ngletih 1</h3>
                </div>
                <ol className="maklumat-list">
                  <li>
                    KAMI BERJANJI DAN SANGGUP UNTUK MELAKSANAKAN PELAYANAN
                    SESUAI DENGAN STANDAR PELAYANAN.
                  </li>
                  <li>
                    KAMI BERJANJI DAN SANGGUP UNTUK MEMBERIKAN PELAYANAN SESUAI
                    DENGAN KEWAJIBAN DAN AKAN MELAKUKAN PERBAIKAN SECARA TERUS
                    MENERUS.
                  </li>
                  <li>
                    KAMI BERSEDIA UNTUK MENERIMA SANKSI DAN/ATAU MEMBERIKAN
                    KOMPENSANSASI APABILA PELAYANAN YANG DIBERIKAN TIDAK SESUAI
                    DENGAN STANDAR.
                  </li>
                </ol>
                <div className="kepsek-sign">
                  <h5>Kepala Sekolah</h5>
                  <strong>Eka Yudi Kristanto, S.Pd.</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISI MISI */}
      <section id="visi" className="visi-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-white">Visi &amp; Misi</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card-visi modern-visi visi-card">
                <div className="visi-icon">
                  <i className="bi bi-eye-fill" />
                </div>
                <h3>Visi</h3>
                <p>
                  Terwujudnya sekolah dengan ekosistem pendidikan berpusat pada
                  murid, unggul dalam prestasi, berkarakter, serta inovatif
                  berbasis kemitraan.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card-visi modern-visi misi-card">
                <div className="visi-icon">
                  <i className="bi bi-bullseye" />
                </div>
                <h3>Misi</h3>
                <ul>
                  <li>
                    Mewujudkan transformasi pembelajaran yang mengutamakan
                    kebutuhan murid demi menciptakan pengalaman belajar yang
                    berkesadaran, bermakna, dan menyenangkan.
                  </li>
                  <li>
                    Menumbuhkan karakter positif dan kesejahteraan yang mendalam
                    bagi setiap siswa untuk menciptakan pribadi yang utuh dan
                    berdaya saing.
                  </li>
                  <li>
                    Mengembangkan etos kerja guru yang profesional dan
                    memperbarui sarana prasarana untuk mendukung proses belajar
                    mengajar yang inovatif dan efisien.
                  </li>
                  <li>
                    Membangun kolaborasi strategis dengan orang tua dan
                    masyarakat untuk menciptakan lingkungan belajar yang
                    mendukung perkembangan siswa secara holistik.
                  </li>
                </ul>
                <Link href="/misi" className="btn btn-primary modern-btn mt-3">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EKSTRAKURIKULER */}
      <section id="ekstrakurikuler" className="program-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Ekstrakurikuler</h2>
            <p className="section-subtitle">
              Berbagai kegiatan ekstrakurikuler untuk mengembangkan bakat,
              minat, karakter, dan prestasi siswa SDN Ngletih 1.
            </p>
          </div>
          <div className="swiper ekstraSwiper">
            <div className="swiper-wrapper">
              {ekstraList.length === 0 ? (
                <div className="swiper-slide">
                  <div className="program-card ekstra-card">
                    <h4>Belum ada ekstrakurikuler</h4>
                    <p>Data ekstrakurikuler belum tersedia.</p>
                  </div>
                </div>
              ) : (
                ekstraList.map((item) => (
                  <div className="swiper-slide" key={item.id}>
                    <div
                      className={`program-card ekstra-card ${item.warna ?? ""}`}
                    >
                      {item.icon ? <i className={item.icon} /> : null}
                      <h4>{item.nama}</h4>
                      <p>{item.deskripsi}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PRESTASI */}
      <section id="prestasi" className="prestasi-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">
              Prestasi Akademik &amp; Non Akademik
            </h2>
            <p className="section-subtitle">
              Berbagai pencapaian siswa SDN Ngletih 1 dalam bidang akademik
              maupun non-akademik.
            </p>
          </div>

          <div className="mb-5">
            <h3 className="mb-4 fw-bold">Prestasi Akademik</h3>
            <div className="row g-4">
              {akademik.length === 0 ? (
                <div className="col-12">
                  <p className="text-muted">Belum ada prestasi akademik.</p>
                </div>
              ) : (
                akademik.map((prestasi) => (
                  <div className="col-lg-4" key={prestasi.id}>
                    <div className="prestasi-card">
                      <h5>{prestasi.judul}</h5>
                      <div className="prestasi-info">
                        <p>
                          <i className="bi bi-person-fill" />{" "}
                          <strong>Nama :</strong>
                        </p>
                        <div className="mb-2" style={{ whiteSpace: "pre-line" }}>
                          {prestasi.nama}
                        </div>
                        <p>
                          <i className="bi bi-geo-alt-fill" />{" "}
                          <strong>Tingkat :</strong> {prestasi.tingkat}
                        </p>
                        <p>
                          <i className="bi bi-calendar-event-fill" />{" "}
                          <strong>Tahun :</strong> {prestasi.tahun}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-4 fw-bold">Prestasi Non Akademik</h3>
            <div className="row g-4">
              {nonAkademik.length === 0 ? (
                <div className="col-12">
                  <p className="text-muted">Belum ada prestasi non akademik.</p>
                </div>
              ) : (
                nonAkademik.map((prestasi) => (
                  <div className="col-lg-4" key={prestasi.id}>
                    <div className="prestasi-card">
                      <h5>{prestasi.judul}</h5>
                      <div className="prestasi-info">
                        <p>
                          <i className="bi bi-person-fill" />{" "}
                          <strong>Nama :</strong>
                        </p>
                        <div className="mb-2" style={{ whiteSpace: "pre-line" }}>
                          {prestasi.nama}
                        </div>
                        <p>
                          <i className="bi bi-geo-alt-fill" />{" "}
                          <strong>Tingkat :</strong> {prestasi.tingkat}
                        </p>
                        <p>
                          <i className="bi bi-calendar-event-fill" />{" "}
                          <strong>Tahun :</strong> {prestasi.tahun}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* GALERI */}
      <section id="galeri" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Galeri Kegiatan</h2>
          </div>
          <div className="swiper galeriSwiper">
            <div className="swiper-wrapper">
              {galeriList.length === 0 ? (
                <div className="swiper-slide">
                  <div className="text-center">
                    <p>Belum ada kegiatan di galeri.</p>
                  </div>
                </div>
              ) : (
                galeriList.map((galeri) => (
                  <div className="swiper-slide" key={galeri.id}>
                    <div className="gallery-card">
                      <img
                        src={storagePublicUrl(galeri.gambar, "galeri")}
                        className="gallery-img"
                        alt={galeri.judul}
                      />
                      <div className="gallery-caption">
                        <h5>{galeri.judul}</h5>
                        <p>{galeri.deskripsi}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="text-center mt-5">
            <Link href="/berita" className="btn btn-primary btn-lg">
              <i className="bi bi-newspaper me-2" />
              Lihat Berita Terkini
            </Link>
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="contact-section">
        <div className="container">
          <div className="contact-header text-center">
            <span className="contact-badge">
              <i className="bi bi-headset me-2" />
              Kontak Kami
            </span>
            <h2>
              Hubungi <span>Kami</span>
            </h2>
            <p>
              Informasi kontak resmi SDN Ngletih 1 untuk keperluan informasi dan
              komunikasi.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-lg-5">
              <div className="contact-info-card">
                <div className="contact-card-title">
                  <div className="contact-title-icon">
                    <i className="bi bi-building" />
                  </div>
                  <div>
                    <h4>Informasi Sekolah</h4>
                    <p>Hubungi kami melalui informasi berikut.</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <i className="bi bi-geo-alt-fill" />
                  </div>
                  <div>
                    <span>Alamat</span>
                    <p>
                      SDN Ngletih 1,
                      <br />
                      Kota Kediri, Jawa Timur
                    </p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <i className="bi bi-telephone-fill" />
                  </div>
                  <div>
                    <span>Telepon</span>
                    <p>(0354) 123456</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <i className="bi bi-envelope-fill" />
                  </div>
                  <div>
                    <span>Email</span>
                    <a href="mailto:sdnegeringletih1@gmail.com">
                      sdnegeringletih1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="social-section">
                  <h5>
                    <i className="bi bi-share-fill me-2" />
                    Media Sosial
                  </h5>
                  <div className="social-list">
                    <a href="#" target="_blank" className="social-item youtube">
                      <i className="bi bi-youtube" />
                      <span>
                        <small>YouTube</small>
                        sdnngletih1241
                      </span>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      className="social-item instagram"
                    >
                      <i className="bi bi-instagram" />
                      <span>
                        <small>Instagram</small>
                        sdn_ngletih1
                      </span>
                    </a>
                    <a href="#" target="_blank" className="social-item tiktok">
                      <i className="bi bi-tiktok" />
                      <span>
                        <small>TikTok</small>
                        sdn_ngletih1
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="contact-map-card">
                <div className="map-header">
                  <div>
                    <h4>
                      <i className="bi bi-map-fill me-2" />
                      Lokasi Sekolah
                    </h4>
                    <p>Temukan lokasi SDN Ngletih 1</p>
                  </div>
                  <span className="map-status">
                    <i className="bi bi-geo-alt-fill" />
                    Kediri
                  </span>
                </div>
                <div className="map-wrapper">
                  <iframe
                    src="https://maps.google.com/maps?q=SDN%20Ngletih%201%20Kediri&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi SDN Ngletih 1"
                  />
                </div>
                <div className="map-footer">
                  <div>
                    <i className="bi bi-info-circle-fill" />
                    <span>Lokasi sekolah berdasarkan Google Maps</span>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=SDN+Ngletih+1+Kediri"
                    target="_blank"
                    rel="noreferrer"
                    className="map-button"
                  >
                    Lihat Maps
                    <i className="bi bi-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SwiperInit />
    </>
  );
}

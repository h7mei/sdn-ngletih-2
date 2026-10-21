import type { Metadata } from "next";
import "@/styles/informasi.css";

export const metadata: Metadata = {
  title: "Visi & Misi | SDN Ngletih 1",
};

export default function Page() {
  return (
    <>
{/* Hero */}
    <section className="hero-section">
        <div className="container text-center">

            <span className="section-badge mb-3">
                Profil Sekolah
            </span>

            <h1 className="hero-title">
                Visi & <span>Misi Sekolah</span>
            </h1>

            <p className="hero-text mx-auto" style={{ maxWidth: "700px" }}>
                Komitmen SDN Ngletih 1 dalam membangun pendidikan yang unggul,
                berkarakter, inovatif, dan berorientasi pada kebutuhan peserta didik.
            </p>

        </div>
    </section>

    {/* Visi */}
    <section className="py-5" style={{ background: "#EEF5FF" }}>
        <div className="container">

            <div className="card border-0 shadow-lg rounded-4 p-4 modern-visi-card">

                <div className="d-flex align-items-center mb-4">
                    <div className="visi-icon me-3">
                        <i className="bi bi-eye-fill"></i>
                    </div>

                    <h2 className="section-title mb-0">Visi Sekolah</h2>
                </div>

                <p className="fs-5 text-justify">
                    Terwujudnya sekolah dengan ekosistem pendidikan berpusat pada murid,
                    unggul dalam prestasi, berkarakter, serta inovatif berbasis kemitraan.
                </p>

            </div>

        </div>
    </section>

    {/* Misi */}
    <section className="py-5">
        <div className="container">

            <div className="text-center mb-5">
                <span className="section-badge">Misi Sekolah</span>
                <h2 className="section-title">Komitmen SDN Ngletih 1</h2>
            </div>

            {/* MISI 1 */}
            <div className="misi-card mb-4">
                <div className="misi-number">01</div>

                <h4>
                    Mewujudkan transformasi pembelajaran yang mengutamakan kebutuhan murid demi menciptakan pengalaman belajar yang berkesadaran, bermakna, dan menyenangkan.
                </h4>

                <ul>
                    <li>Menyelenggarakan pembelajaran berdiferensiasi yang menghargai keunikan minat dan bakat setiap murid untuk memulihkan capaian literasi dan numerasi.</li>

                    <li>Menciptakan suasana kelas yang teratur, aman, dan penuh dukungan emosional dari pendidik untuk meningkatkan kualitas proses belajar.</li>

                    <li>Mengintegrasikan media belajar dan buku paket yang telah disediakan ke dalam metode pembelajaran aktif dan inovatif.</li>

                    <li>Menguatkan kemampuan literasi dan numerasi siswa melalui integrasi media belajar modern dan metode pembelajaran yang menyenangkan.</li>

                    <li>Mengembangkan potensi akademik dan non-akademik siswa agar mampu bersaing dan berprestasi di tingkat daerah maupun nasional.</li>
                </ul>
            </div>

            {/* MISI 2 */}
            <div className="misi-card mb-4">
                <div className="misi-number">02</div>

                <h4>
                    Menumbuhkan karakter positif dan kesejahteraan yang mendalam bagi setiap siswa untuk menciptakan pribadi yang utuh dan berdaya saing.
                </h4>

                <ul>
                    <li>Menanamkan nilai-nilai Profil Pelajar Pancasila yang beriman, berakhlak mulia, bergotong royong, kreatif, kritis, dan mandiri.</li>

                    <li>Meningkatkan kesadaran akan kebinekaan global melalui program interaksi positif dengan masyarakat dari berbagai latar belakang budaya dan agama.</li>

                    <li>Menjamin kondisi sekolah yang aman, bahagia, bebas dari perundungan, kekerasan fisik, dan zat berbahaya demi kenyamanan belajar siswa.</li>
                </ul>
            </div>

            {/* MISI 3 */}
            <div className="misi-card mb-4">
                <div className="misi-number">03</div>

                <h4>
                    Mengembangkan etos kerja guru yang profesional dan memperbarui sarana prasarana untuk mendukung proses belajar mengajar yang inovatif dan efisien.
                </h4>

                <ul>
                    <li>Membangun budaya kerja guru yang memiliki kepedulian tinggi, dedikasi, dan tanggung jawab terhadap mutu pendidikan dan pelayanan siswa.</li>

                    <li>Mengoptimalkan pemanfaatan sarana dan prasarana sekolah yang bersih, sehat, dan memadai (buku paket, media belajar, lingkungan) untuk mendukung proses belajar mengajar.</li>

                    <li>Melaksanakan kebijakan pendidikan pemerintah secara konsisten melalui peningkatan kompetensi pendidik yang berkelanjutan.</li>
                </ul>
            </div>

            {/* MISI 4 */}
            <div className="misi-card mb-4">
                <div className="misi-number">04</div>

                <h4>
                    Membangun kolaborasi strategis dengan orang tua dan masyarakat untuk menciptakan lingkungan belajar yang mendukung perkembangan siswa secara holistik.
                </h4>

                <ul>
                    <li>Membangun komunikasi yang transparan, komunikatif, dan solutif dengan wali murid sebagai mitra utama dalam pendidikan anak.</li>

                    <li>Mewadahi aspirasi dan kritik membangun dari wali murid untuk terus memacu peningkatan kualitas layanan pendidikan di SDN Ngletih 1.</li>
                </ul>
            </div>

        </div>
    </section>
    </>
  );
}

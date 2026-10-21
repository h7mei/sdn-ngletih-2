import type { Metadata } from "next";
import "@/styles/sambutan.css";

export const metadata: Metadata = {
  title: "Sambutan Kepala Sekolah | SDN Ngletih 1",
};

export default function Page() {
  return (
    <>
{/* HERO SECTION */}
    <section className="sambutan-hero">

        <div className="container text-center sambutan-wrapper">
            <h1 className="sambutan-title">
                Sambutan <span>Kepala Sekolah</span>
            </h1>

            <p className="sambutan-desc">
                Pesan, harapan, dan komitmen Kepala Sekolah SDN Ngletih 1
                dalam mewujudkan pendidikan yang unggul, berkarakter,
                serta berorientasi pada masa depan peserta didik.
            </p>

        </div>

    </section>

    {/* SECTION SAMBUTAN */}
    <section className="sambutan-section">

        <div className="container">

            <div className="sambutan-card">

                {/* FOTO KEPSEK */}
                <div className="kepsek-box">

                    <img src="/assets/images/kepala sekolah.jpeg"
                        className="kepsek-photo"
                        alt="Kepala Sekolah" />

                    <h2 className="kepsek-name">
                        Eka Yudi Kristanto, S.Pd.
                    </h2>

                    <p className="kepsek-position">
                        Kepala Sekolah SDN Ngletih 1
                    </p>

                </div>

                {/* ISI SAMBUTAN */}
                <div className="sambutan-content">

                    <p className="sambutan-opening">
                        Assalamu’alaikum Warahmatullahi Wabarakatuh.
                    </p>

                    <p>
                        Puji syukur ke hadirat Tuhan yang Maha Esa atas segala rahmat dan karunia-Nya sehingga SDN Ngletih 1 Kecamatan Pesantren Kota Kediri senantiasa diberikan kesempatan untuk terus berkontribusi dalam dunia pendidikan, khususnya dalam membentuk generasi yang cerdas, berkarakter, dan berakhlak mulia.
                    </p>

                    <p>
                       Dengan penuh rasa syukur dan bangga, kami menyambut kehadiran website resmi SDN Ngletih 1 sebagai media informasi dan komunikasi sekolah. Website ini diharapkan menjadi sarana yang efektif dalam menyampaikan berbagai informasi mengenai program sekolah, kegiatan murid, prestasi, serta berbagai layanan pendidikan kepada masyarakat secara terbuka, aktual, dan terpercaya.
                    </p>

                    <p>
                        Di era perkembangan teknologi dan informasi yang semakin pesat, sekolah dituntut untuk mampu beradaptasi dan terus meningkatkan kualitas pelayanan pendidikan. Oleh karena itu, keberadaan website sekolah bukan hanya sebagai media publikasi, tetapi juga sebagai wujud komitmen kami dalam membangun tata kelola pendidikan yang profesional, transparan, dan berorientasi pada pelayanan terbaik bagi  murid serta masyarakat.
                    </p>

                    <p>
                        SDN Ngletih 1 memiliki tekad untuk terus menghadirkan lingkungan belajar yang aman, nyaman, kondusif, dan inspiratif. Kami percaya bahwa keberhasilan pendidikan tidak hanya ditentukan oleh pencapaian akademik semata, tetapi juga oleh pembentukan karakter, kedisiplinan, tanggung jawab, serta nilai-nilai moral dan sosial yang kuat dalam diri setiap peserta didik.
                    </p>

                    <p>
                        Kami juga meyakini bahwa kemajuan sekolah dapat terwujud melalui sinergi dan kerja sama yang harmonis antara sekolah, orang tua, komite sekolah, pemerintah, dan seluruh elemen masyarakat. Untuk itu, kami mengajak semua pihak agar senantiasa mendukung setiap program dan upaya sekolah demi terciptanya layanan pendidikan yang berkualitas dan berdaya saing.
                    </p>

                    <p>
                       Akhir kata, kami mengucapkan terima kasih atas kepercayaan, dukungan, dan kerja sama semua pihak kepada SDN Ngletih 1. Semoga website ini dapat memberikan manfaat yang besar bagi dunia pendidikan dan menjadi jembatan informasi yang positif bagi kita semua.
                    </p>

                    <p className="sambutan-closing">
                        Wassalamu’alaikum Warahmatullahi Wabarakatuh.
                    </p>

                    {/* BUTTON */}
                    <div className="text-center mt-4">

                        <a href="/" className="sambutan-btn">
                            Kembali ke Beranda
                        </a>

                    </div>

                </div>

            </div>

        </div>

    </section>
    </>
  );
}

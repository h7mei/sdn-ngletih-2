import Link from "next/link";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { createClient } from "@/lib/supabase/server";
import "@/styles/admin-dashboard.css";

export default async function DashboardPage() {
  const supabase = await createClient();

  const [
    { count: totalBerita },
    { count: totalGaleri },
    { count: totalPrestasi },
    { count: totalSarpras },
    { count: totalEkstra },
  ] = await Promise.all([
    supabase.from("beritas").select("*", { count: "exact", head: true }),
    supabase.from("galeris").select("*", { count: "exact", head: true }),
    supabase.from("prestasis").select("*", { count: "exact", head: true }),
    supabase.from("sarpras").select("*", { count: "exact", head: true }),
    supabase.from("ekstrakurikulers").select("*", { count: "exact", head: true }),
  ]);

  return (
    <>
      <AdminSidebar />
      <main className="main-content">
        <div className="topbar">
          <div className="topbar-title">
            <h6>Dashboard</h6>
            <small>Administrasi Website Sekolah</small>
          </div>
          <div className="admin-profile">
            <div>
              <small className="text-muted">Administrator</small>
            </div>
            <div className="profile-icon">
              <i className="bi bi-person-fill" />
            </div>
          </div>
        </div>

        <div className="content">
          <div className="welcome-card">
            <h2>Selamat Datang, Admin</h2>
            <p>
              Kelola informasi dan konten website SDN Ngletih 1 melalui dashboard
              ini.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-6 col-xl-3">
              <div className="stat-card">
                <div className="stat-icon icon-blue">
                  <i className="bi bi-newspaper" />
                </div>
                <h3>{totalBerita ?? 0}</h3>
                <p>Total Berita</p>
              </div>
            </div>
            <div className="col-6 col-xl-3">
              <div className="stat-card">
                <div className="stat-icon icon-purple">
                  <i className="bi bi-images" />
                </div>
                <h3>{totalGaleri ?? 0}</h3>
                <p>Total Galeri</p>
              </div>
            </div>
            <div className="col-6 col-xl-3">
              <div className="stat-card">
                <div className="stat-icon icon-green">
                  <i className="bi bi-trophy" />
                </div>
                <h3>{totalPrestasi ?? 0}</h3>
                <p>Total Prestasi</p>
              </div>
            </div>
            <div className="col-6 col-xl-3">
              <div className="stat-card">
                <div className="stat-icon icon-orange">
                  <i className="bi bi-building" />
                </div>
                <h3>{totalSarpras ?? 0}</h3>
                <p>Total Sarpras</p>
              </div>
            </div>
          </div>

          <div className="section-title mt-4">
            <h4>Kelola Website</h4>
            <p>Pilih menu untuk mengelola konten website sekolah.</p>
          </div>

          <div className="row g-4">
            {[
              { href: "/admin/berita", title: "Berita", desc: "Kelola berita, artikel, dan informasi terbaru sekolah.", icon: "bi-newspaper", color: "icon-blue", btn: "Kelola Berita" },
              { href: "/admin/galeri", title: "Galeri", desc: "Kelola dokumentasi foto kegiatan SDN Ngletih 1.", icon: "bi-images", color: "icon-purple", btn: "Kelola Galeri" },
              { href: "/admin/prestasi", title: "Prestasi", desc: "Kelola data prestasi akademik dan non-akademik siswa.", icon: "bi-trophy", color: "icon-green", btn: "Kelola Prestasi" },
              { href: "/admin/ekstrakurikuler", title: "Ekstrakurikuler", desc: "Kelola program dan kegiatan ekstrakurikuler sekolah.", icon: "bi-stars", color: "icon-orange", btn: "Kelola Ekstrakurikuler", count: totalEkstra },
              { href: "/admin/sarpras", title: "Sarana & Prasarana", desc: "Kelola informasi fasilitas dan sarana prasarana sekolah.", icon: "bi-building", color: "icon-blue", btn: "Kelola Sarpras" },
            ].map((card) => (
              <div className="col-md-6 col-xl-4" key={card.href}>
                <div className="management-card">
                  <div className={`management-icon ${card.color}`}>
                    <i className={`bi ${card.icon}`} />
                  </div>
                  <h5>{card.title}</h5>
                  <p>{card.desc}</p>
                  <Link href={card.href} className="btn btn-primary manage-btn">
                    <i className="bi bi-arrow-right me-1" />
                    {card.btn}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

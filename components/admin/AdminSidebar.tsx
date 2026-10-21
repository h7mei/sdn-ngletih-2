"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";

const links = [
  { href: "/admin/dashboard", label: "Dashboard", icon: "bi-grid-1x2-fill" },
  { href: "/admin/berita", label: "Berita", icon: "bi-newspaper" },
  { href: "/admin/galeri", label: "Galeri", icon: "bi-images" },
  { href: "/admin/prestasi", label: "Prestasi", icon: "bi-trophy" },
  {
    href: "/admin/ekstrakurikuler",
    label: "Ekstrakurikuler",
    icon: "bi-stars",
  },
  { href: "/admin/sarpras", label: "Sarpras", icon: "bi-building" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">
          <i className="bi bi-mortarboard-fill" />
        </div>
        <div className="brand-text">
          <h5>SDN Ngletih 1</h5>
          <small>Admin Panel</small>
        </div>
      </div>

      <div className="menu-title">Menu Utama</div>

      <ul className="sidebar-menu">
        {links.map((link) => {
          const active =
            pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <li key={link.href}>
              <Link href={link.href} className={active ? "active" : undefined}>
                <i className={`bi ${link.icon}`} />
                <span>{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="logout-area">
        <LogoutButton className="logout-btn" />
      </div>
    </aside>
  );
}

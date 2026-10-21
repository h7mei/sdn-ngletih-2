import Link from "next/link";
import LogoutButton from "./LogoutButton";

type AdminNavProps = {
  websiteHref?: string;
};

export default function AdminNav({ websiteHref = "/" }: AdminNavProps) {
  return (
    <nav className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link href="/admin/dashboard" className="navbar-brand fw-bold">
          <i className="bi bi-speedometer2 me-2" />
          Admin SDN Ngletih 1
        </Link>

        <div className="d-flex align-items-center gap-2">
          <Link
            href={websiteHref}
            target="_blank"
            className="btn btn-outline-light btn-sm"
          >
            <i className="bi bi-eye me-1" />
            Lihat Website
          </Link>
          <LogoutButton className="btn btn-danger btn-sm" />
        </div>
      </div>
    </nav>
  );
}

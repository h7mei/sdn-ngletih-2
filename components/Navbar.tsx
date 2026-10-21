import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center fw-bold" href="/">
          <img
            src="/assets/images/logo ngletih.png"
            alt="Logo SDN Ngletih 1"
            className="navbar-logo"
          />
          <span>SDN Ngletih 1</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link href="/#profil" className="nav-link">
                Profil
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Akademik
              </a>
              <ul className="dropdown-menu modern-dropdown">
                <li>
                  <Link className="dropdown-item" href="/#visi">
                    Visi &amp; Misi
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/#ekstrakurikuler">
                    Ekstrakurikuler
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/#prestasi">
                    Prestasi
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Publikasi
              </a>
              <ul className="dropdown-menu modern-dropdown">
                <li>
                  <Link className="dropdown-item" href="/#galeri">
                    Galeri
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/berita">
                    Berita
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/sarpras">
                    Sarana &amp; Prasarana
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Informasi
              </a>
              <ul className="dropdown-menu modern-dropdown">
                <li>
                  <Link className="dropdown-item" href="/standar-pelayanan">
                    Standar Pelayanan
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/sippn">
                    SIPPN
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/maklumat-pelayanan">
                    Maklumat Pelayanan
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/ikm">
                    IKM
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/aduan">
                    Pengaduan
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/sp4n-lapor">
                    SP4N-LAPOR
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/faq">
                    FAQ
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Layanan
              </a>
              <ul className="dropdown-menu modern-dropdown">
                <li>
                  <Link className="dropdown-item" href="/layanan">
                    SILADIK
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link href="/#kontak" className="nav-link">
                Kontak
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <Link href="/admin/login" className="btn btn-primary ms-3">
              <i className="bi bi-person-lock" /> Login Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

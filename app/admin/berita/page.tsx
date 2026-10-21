import Link from "next/link";
import AdminNav from "@/components/admin/AdminNav";
import DeleteButton from "@/components/admin/DeleteButton";
import { createClient } from "@/lib/supabase/server";
import type { Berita } from "@/lib/types";
import { formatDate, storagePublicUrl } from "@/lib/utils";
import { deleteBerita } from "./actions";

export default async function BeritaIndexPage() {
  const supabase = await createClient();
  const { data } = await supabase.from("beritas").select("*").order("tanggal", { ascending: false });
  const beritas = (data ?? []) as Berita[];

  return (
    <div className="bg-light min-vh-100">
      <AdminNav websiteHref="/berita" />
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <div>
            <h2 className="fw-bold mb-1">
              <i className="bi bi-newspaper me-2" />
              Kelola Berita
            </h2>
            <p className="text-muted mb-0">Kelola berita yang ditampilkan pada website SDN Ngletih 1.</p>
          </div>
          <Link href="/admin/berita/create" className="btn btn-primary">
            <i className="bi bi-plus-lg me-1" />
            Tambah Berita
          </Link>
        </div>

        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="bg-primary text-white rounded p-3 me-3">
                <i className="bi bi-newspaper fs-4" />
              </div>
              <div>
                <div className="text-muted small">Total Berita</div>
                <div className="fs-4 fw-bold">{beritas.length}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            {beritas.length === 0 ? (
              <div className="text-center py-5">
                <i className="bi bi-newspaper display-1 text-muted" />
                <h4 className="mt-3">Belum Ada Berita</h4>
                <Link href="/admin/berita/create" className="btn btn-primary">
                  <i className="bi bi-plus-lg me-1" /> Tambah Berita
                </Link>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-dark">
                    <tr>
                      <th className="text-center" style={{ width: 70 }}>No.</th>
                      <th style={{ width: 180 }}>Gambar</th>
                      <th>Judul Berita</th>
                      <th style={{ width: 160 }}>Kategori</th>
                      <th style={{ width: 150 }}>Tanggal</th>
                      <th className="text-center" style={{ width: 210 }}>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {beritas.map((berita, index) => (
                      <tr key={berita.id}>
                        <td className="text-center">{index + 1}</td>
                        <td>
                          {berita.gambar ? (
                            <img
                              src={storagePublicUrl(berita.gambar, "berita")}
                              alt={berita.judul}
                              className="rounded"
                              style={{ width: 150, height: 90, objectFit: "cover" }}
                            />
                          ) : (
                            <div className="bg-light border rounded d-flex align-items-center justify-content-center" style={{ width: 150, height: 90 }}>
                              <span className="text-muted"><i className="bi bi-image me-1" />Tidak ada gambar</span>
                            </div>
                          )}
                        </td>
                        <td>
                          <div className="fw-bold">{berita.judul}</div>
                        </td>
                        <td>
                          {berita.kategori ? (
                            <span className="badge bg-primary">{berita.kategori}</span>
                          ) : (
                            <span className="text-muted">-</span>
                          )}
                        </td>
                        <td>
                          <i className="bi bi-calendar-event me-1" />
                          {formatDate(berita.tanggal)}
                        </td>
                        <td>
                          <div className="d-flex justify-content-center gap-1 flex-wrap">
                            <Link href={`/admin/berita/${berita.id}`} className="btn btn-info btn-sm text-white" title="Lihat">
                              <i className="bi bi-eye" />
                            </Link>
                            <Link href={`/admin/berita/${berita.id}/edit`} className="btn btn-warning btn-sm" title="Edit">
                              <i className="bi bi-pencil-square" />
                            </Link>
                            <DeleteButton action={deleteBerita} id={berita.id} confirmMessage="Apakah Anda yakin ingin menghapus berita ini?" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

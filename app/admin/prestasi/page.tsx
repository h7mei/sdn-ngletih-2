import Link from "next/link";
import AdminNav from "@/components/admin/AdminNav";
import DeleteButton from "@/components/admin/DeleteButton";
import { createClient } from "@/lib/supabase/server";
import type { Prestasi } from "@/lib/types";
import { deletePrestasi } from "./actions";

export default async function PrestasiIndexPage() {
  const supabase = await createClient();
  const { data } = await supabase.from("prestasis").select("*").order("tahun", { ascending: false });
  const items = (data ?? []) as Prestasi[];

  return (
    <div className="bg-light min-vh-100">
      <AdminNav websiteHref="/#prestasi" />
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <h2 className="fw-bold mb-0"><i className="bi bi-trophy me-2" />Kelola Prestasi</h2>
          <Link href="/admin/prestasi/create" className="btn btn-primary"><i className="bi bi-plus-lg me-1" />Tambah Prestasi</Link>
        </div>
        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            {items.length === 0 ? (
              <div className="text-center py-5"><p className="text-muted">Belum ada prestasi.</p></div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-dark">
                    <tr>
                      <th>No</th><th>Judul</th><th>Nama</th><th>Tingkat</th><th>Tahun</th><th>Kategori</th><th className="text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, i) => (
                      <tr key={item.id}>
                        <td>{i + 1}</td>
                        <td className="fw-semibold">{item.judul}</td>
                        <td style={{ whiteSpace: "pre-line" }}>{item.nama}</td>
                        <td>{item.tingkat}</td>
                        <td>{item.tahun}</td>
                        <td><span className="badge bg-success">{item.kategori}</span></td>
                        <td>
                          <div className="d-flex justify-content-center gap-1">
                            <Link href={`/admin/prestasi/${item.id}`} className="btn btn-info btn-sm text-white"><i className="bi bi-eye" /></Link>
                            <Link href={`/admin/prestasi/${item.id}/edit`} className="btn btn-warning btn-sm"><i className="bi bi-pencil-square" /></Link>
                            <DeleteButton action={deletePrestasi} id={item.id} />
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

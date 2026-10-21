import Link from "next/link";
import AdminNav from "@/components/admin/AdminNav";
import DeleteButton from "@/components/admin/DeleteButton";
import { createClient } from "@/lib/supabase/server";
import type { Ekstrakurikuler } from "@/lib/types";
import { deleteEkstrakurikuler } from "./actions";

export default async function EkstraIndexPage() {
  const supabase = await createClient();
  const { data } = await supabase.from("ekstrakurikulers").select("*").order("urutan", { ascending: true });
  const items = (data ?? []) as Ekstrakurikuler[];

  return (
    <div className="bg-light min-vh-100">
      <AdminNav websiteHref="/#ekstrakurikuler" />
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <h2 className="fw-bold mb-0"><i className="bi bi-stars me-2" />Kelola Ekstrakurikuler</h2>
          <Link href="/admin/ekstrakurikuler/create" className="btn btn-primary"><i className="bi bi-plus-lg me-1" />Tambah</Link>
        </div>
        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            {items.length === 0 ? (
              <div className="text-center py-5"><p className="text-muted">Belum ada data.</p></div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-dark">
                    <tr>
                      <th>No</th><th>Nama</th><th>Icon</th><th>Warna</th><th>Urutan</th><th className="text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, i) => (
                      <tr key={item.id}>
                        <td>{i + 1}</td>
                        <td className="fw-semibold">{item.nama}</td>
                        <td>{item.icon ? <i className={item.icon} /> : "-"}</td>
                        <td>{item.warna ?? "-"}</td>
                        <td>{item.urutan}</td>
                        <td>
                          <div className="d-flex justify-content-center gap-1">
                            <Link href={`/admin/ekstrakurikuler/${item.id}`} className="btn btn-info btn-sm text-white"><i className="bi bi-eye" /></Link>
                            <Link href={`/admin/ekstrakurikuler/${item.id}/edit`} className="btn btn-warning btn-sm"><i className="bi bi-pencil-square" /></Link>
                            <DeleteButton action={deleteEkstrakurikuler} id={item.id} />
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

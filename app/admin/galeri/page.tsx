import Link from "next/link";
import AdminNav from "@/components/admin/AdminNav";
import DeleteButton from "@/components/admin/DeleteButton";
import { createClient } from "@/lib/supabase/server";
import type { Galeri } from "@/lib/types";
import { formatDate, storagePublicUrl } from "@/lib/utils";
import { deleteGaleri } from "./actions";

export default async function GaleriIndexPage() {
  const supabase = await createClient();
  const { data } = await supabase.from("galeris").select("*").order("created_at", { ascending: false });
  const items = (data ?? []) as Galeri[];

  return (
    <div className="bg-light min-vh-100">
      <AdminNav websiteHref="/#galeri" />
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <h2 className="fw-bold mb-0"><i className="bi bi-images me-2" />Kelola Galeri</h2>
          <Link href="/admin/galeri/create" className="btn btn-primary"><i className="bi bi-plus-lg me-1" />Tambah Galeri</Link>
        </div>
        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            {items.length === 0 ? (
              <div className="text-center py-5"><p className="text-muted">Belum ada galeri.</p></div>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-dark">
                    <tr>
                      <th>No</th><th>Gambar</th><th>Judul</th><th>Tanggal</th><th className="text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, i) => (
                      <tr key={item.id}>
                        <td>{i + 1}</td>
                        <td>
                          <img src={storagePublicUrl(item.gambar, "galeri")} alt={item.judul} className="rounded" style={{ width: 120, height: 80, objectFit: "cover" }} />
                        </td>
                        <td className="fw-semibold">{item.judul}</td>
                        <td>{item.tanggal ? formatDate(item.tanggal) : "-"}</td>
                        <td>
                          <div className="d-flex justify-content-center gap-1">
                            <Link href={`/admin/galeri/${item.id}`} className="btn btn-info btn-sm text-white"><i className="bi bi-eye" /></Link>
                            <Link href={`/admin/galeri/${item.id}/edit`} className="btn btn-warning btn-sm"><i className="bi bi-pencil-square" /></Link>
                            <DeleteButton action={deleteGaleri} id={item.id} />
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

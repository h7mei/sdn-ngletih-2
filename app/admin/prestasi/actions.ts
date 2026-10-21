"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function createPrestasi(formData: FormData) {
  const supabase = await createClient();
  const payload = {
    judul: String(formData.get("judul") || "").trim(),
    nama: String(formData.get("nama") || "").trim(),
    tingkat: String(formData.get("tingkat") || "").trim(),
    tahun: Number(formData.get("tahun")),
    kategori: String(formData.get("kategori") || "") as "Akademik" | "Non Akademik",
  };
  const { error } = await supabase.from("prestasis").insert(payload);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/prestasi");
  revalidatePath("/");
  redirect("/admin/prestasi");
}

export async function updatePrestasi(formData: FormData) {
  const supabase = await createClient();
  const id = Number(formData.get("id"));
  const payload = {
    judul: String(formData.get("judul") || "").trim(),
    nama: String(formData.get("nama") || "").trim(),
    tingkat: String(formData.get("tingkat") || "").trim(),
    tahun: Number(formData.get("tahun")),
    kategori: String(formData.get("kategori") || "") as "Akademik" | "Non Akademik",
    updated_at: new Date().toISOString(),
  };
  const { error } = await supabase.from("prestasis").update(payload).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/prestasi");
  revalidatePath("/");
  redirect("/admin/prestasi");
}

export async function deletePrestasi(formData: FormData) {
  const supabase = await createClient();
  const id = Number(formData.get("id"));
  const { error } = await supabase.from("prestasis").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/prestasi");
  revalidatePath("/");
  redirect("/admin/prestasi");
}

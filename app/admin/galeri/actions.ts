"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { deleteImage, uploadImage } from "@/lib/storage";

export async function createGaleri(formData: FormData) {
  const supabase = await createClient();
  const judul = String(formData.get("judul") || "").trim();
  const deskripsi = String(formData.get("deskripsi") || "") || null;
  const tanggal = String(formData.get("tanggal") || "") || null;
  const file = formData.get("gambar");
  if (!(file instanceof File) || file.size === 0) {
    throw new Error("Gambar wajib diunggah");
  }
  const gambar = await uploadImage(supabase, "galeri", file);
  const { error } = await supabase.from("galeris").insert({ judul, deskripsi, tanggal, gambar });
  if (error) throw new Error(error.message);
  revalidatePath("/admin/galeri");
  revalidatePath("/");
  redirect("/admin/galeri");
}

export async function updateGaleri(formData: FormData) {
  const supabase = await createClient();
  const id = Number(formData.get("id"));
  const judul = String(formData.get("judul") || "").trim();
  const deskripsi = String(formData.get("deskripsi") || "") || null;
  const tanggal = String(formData.get("tanggal") || "") || null;
  const { data: existing } = await supabase.from("galeris").select("*").eq("id", id).single();
  if (!existing) throw new Error("Galeri tidak ditemukan");
  let gambar = existing.gambar as string;
  const file = formData.get("gambar");
  if (file instanceof File && file.size > 0) {
    await deleteImage(supabase, "galeri", gambar);
    gambar = await uploadImage(supabase, "galeri", file);
  }
  const { error } = await supabase.from("galeris").update({
    judul, deskripsi, tanggal, gambar, updated_at: new Date().toISOString(),
  }).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/galeri");
  revalidatePath("/");
  redirect("/admin/galeri");
}

export async function deleteGaleri(formData: FormData) {
  const supabase = await createClient();
  const id = Number(formData.get("id"));
  const { data: existing } = await supabase.from("galeris").select("*").eq("id", id).single();
  if (existing) await deleteImage(supabase, "galeri", existing.gambar);
  const { error } = await supabase.from("galeris").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/galeri");
  revalidatePath("/");
  redirect("/admin/galeri");
}

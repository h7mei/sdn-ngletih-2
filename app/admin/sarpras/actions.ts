"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { deleteImage, uploadImage } from "@/lib/storage";

export async function createSarpras(formData: FormData) {
  const supabase = await createClient();
  let gambar: string | null = null;
  let gambar2: string | null = null;
  let gambar3: string | null = null;
  const f1 = formData.get("gambar");
  const f2 = formData.get("gambar2");
  const f3 = formData.get("gambar3");
  if (f1 instanceof File && f1.size > 0) gambar = await uploadImage(supabase, "sarpras", f1);
  if (f2 instanceof File && f2.size > 0) gambar2 = await uploadImage(supabase, "sarpras", f2);
  if (f3 instanceof File && f3.size > 0) gambar3 = await uploadImage(supabase, "sarpras", f3);

  const payload = {
    nama: String(formData.get("nama") || "").trim(),
    icon: String(formData.get("icon") || "") || null,
    deskripsi: String(formData.get("deskripsi") || "").trim(),
    urutan: Number(formData.get("urutan") || 0),
    gambar, gambar2, gambar3,
  };
  const { error } = await supabase.from("sarpras").insert(payload);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/sarpras");
  revalidatePath("/sarpras");
  redirect("/admin/sarpras");
}

export async function updateSarpras(formData: FormData) {
  const supabase = await createClient();
  const id = Number(formData.get("id"));
  const { data: existing } = await supabase.from("sarpras").select("*").eq("id", id).single();
  if (!existing) throw new Error("Sarpras tidak ditemukan");

  let gambar = existing.gambar as string | null;
  let gambar2 = existing.gambar2 as string | null;
  let gambar3 = existing.gambar3 as string | null;
  const f1 = formData.get("gambar");
  const f2 = formData.get("gambar2");
  const f3 = formData.get("gambar3");
  if (f1 instanceof File && f1.size > 0) {
    await deleteImage(supabase, "sarpras", gambar);
    gambar = await uploadImage(supabase, "sarpras", f1);
  }
  if (f2 instanceof File && f2.size > 0) {
    await deleteImage(supabase, "sarpras", gambar2);
    gambar2 = await uploadImage(supabase, "sarpras", f2);
  }
  if (f3 instanceof File && f3.size > 0) {
    await deleteImage(supabase, "sarpras", gambar3);
    gambar3 = await uploadImage(supabase, "sarpras", f3);
  }

  const { error } = await supabase.from("sarpras").update({
    nama: String(formData.get("nama") || "").trim(),
    icon: String(formData.get("icon") || "") || null,
    deskripsi: String(formData.get("deskripsi") || "").trim(),
    urutan: Number(formData.get("urutan") || 0),
    gambar, gambar2, gambar3,
    updated_at: new Date().toISOString(),
  }).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/sarpras");
  revalidatePath("/sarpras");
  redirect("/admin/sarpras");
}

export async function deleteSarpras(formData: FormData) {
  const supabase = await createClient();
  const id = Number(formData.get("id"));
  const { data: existing } = await supabase.from("sarpras").select("*").eq("id", id).single();
  if (existing) {
    await deleteImage(supabase, "sarpras", existing.gambar);
    await deleteImage(supabase, "sarpras", existing.gambar2);
    await deleteImage(supabase, "sarpras", existing.gambar3);
  }
  const { error } = await supabase.from("sarpras").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/sarpras");
  revalidatePath("/sarpras");
  redirect("/admin/sarpras");
}

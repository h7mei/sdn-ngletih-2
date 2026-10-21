"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function createEkstrakurikuler(formData: FormData) {
  const supabase = await createClient();
  const payload = {
    nama: String(formData.get("nama") || "").trim(),
    deskripsi: String(formData.get("deskripsi") || "").trim(),
    icon: String(formData.get("icon") || "") || null,
    warna: String(formData.get("warna") || "") || null,
    urutan: Number(formData.get("urutan") || 0),
  };
  const { error } = await supabase.from("ekstrakurikulers").insert(payload);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/ekstrakurikuler");
  revalidatePath("/");
  redirect("/admin/ekstrakurikuler");
}

export async function updateEkstrakurikuler(formData: FormData) {
  const supabase = await createClient();
  const id = Number(formData.get("id"));
  const payload = {
    nama: String(formData.get("nama") || "").trim(),
    deskripsi: String(formData.get("deskripsi") || "").trim(),
    icon: String(formData.get("icon") || "") || null,
    warna: String(formData.get("warna") || "") || null,
    urutan: Number(formData.get("urutan") || 0),
    updated_at: new Date().toISOString(),
  };
  const { error } = await supabase.from("ekstrakurikulers").update(payload).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/ekstrakurikuler");
  revalidatePath("/");
  redirect("/admin/ekstrakurikuler");
}

export async function deleteEkstrakurikuler(formData: FormData) {
  const supabase = await createClient();
  const id = Number(formData.get("id"));
  const { error } = await supabase.from("ekstrakurikulers").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/ekstrakurikuler");
  revalidatePath("/");
  redirect("/admin/ekstrakurikuler");
}

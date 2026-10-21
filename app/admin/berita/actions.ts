"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { deleteImage, uploadImage } from "@/lib/storage";
import { slugify } from "@/lib/utils";

async function uniqueSlug(base: string, excludeId?: number) {
  const supabase = await createClient();
  let slug = slugify(base) || "berita";
  let candidate = slug;
  let i = 1;
  while (true) {
    let query = supabase.from("beritas").select("id").eq("slug", candidate).maybeSingle();
    const { data } = await query;
    if (!data || (excludeId && data.id === excludeId)) return candidate;
    i += 1;
    candidate = `${slug}-${i}`;
  }
}

export async function createBerita(formData: FormData) {
  const supabase = await createClient();
  const judul = String(formData.get("judul") || "").trim();
  const isi = String(formData.get("isi") || "").trim();
  const tanggal = String(formData.get("tanggal") || "");
  const kategori = String(formData.get("kategori") || "") || null;
  const slug = await uniqueSlug(judul);

  let gambar: string | null = null;
  let gambar2: string | null = null;
  let gambar3: string | null = null;

  const f1 = formData.get("gambar");
  const f2 = formData.get("gambar2");
  const f3 = formData.get("gambar3");
  if (f1 instanceof File && f1.size > 0) gambar = await uploadImage(supabase, "berita", f1);
  if (f2 instanceof File && f2.size > 0) gambar2 = await uploadImage(supabase, "berita", f2);
  if (f3 instanceof File && f3.size > 0) gambar3 = await uploadImage(supabase, "berita", f3);

  const { error } = await supabase.from("beritas").insert({
    judul, slug, isi, tanggal, kategori, gambar, gambar2, gambar3,
  });
  if (error) throw new Error(error.message);

  revalidatePath("/admin/berita");
  revalidatePath("/berita");
  redirect("/admin/berita");
}

export async function updateBerita(formData: FormData) {
  const supabase = await createClient();
  const id = Number(formData.get("id"));
  const judul = String(formData.get("judul") || "").trim();
  const isi = String(formData.get("isi") || "").trim();
  const tanggal = String(formData.get("tanggal") || "");
  const kategori = String(formData.get("kategori") || "") || null;
  const slug = await uniqueSlug(judul, id);

  const { data: existing } = await supabase.from("beritas").select("*").eq("id", id).single();
  if (!existing) throw new Error("Berita tidak ditemukan");

  let gambar = existing.gambar as string | null;
  let gambar2 = existing.gambar2 as string | null;
  let gambar3 = existing.gambar3 as string | null;

  const f1 = formData.get("gambar");
  const f2 = formData.get("gambar2");
  const f3 = formData.get("gambar3");
  if (f1 instanceof File && f1.size > 0) {
    await deleteImage(supabase, "berita", gambar);
    gambar = await uploadImage(supabase, "berita", f1);
  }
  if (f2 instanceof File && f2.size > 0) {
    await deleteImage(supabase, "berita", gambar2);
    gambar2 = await uploadImage(supabase, "berita", f2);
  }
  if (f3 instanceof File && f3.size > 0) {
    await deleteImage(supabase, "berita", gambar3);
    gambar3 = await uploadImage(supabase, "berita", f3);
  }

  const { error } = await supabase.from("beritas").update({
    judul, slug, isi, tanggal, kategori, gambar, gambar2, gambar3, updated_at: new Date().toISOString(),
  }).eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/berita");
  revalidatePath(`/admin/berita/${id}`);
  revalidatePath("/berita");
  redirect("/admin/berita");
}

export async function deleteBerita(formData: FormData) {
  const supabase = await createClient();
  const id = Number(formData.get("id"));
  const { data: existing } = await supabase.from("beritas").select("*").eq("id", id).single();
  if (existing) {
    await deleteImage(supabase, "berita", existing.gambar);
    await deleteImage(supabase, "berita", existing.gambar2);
    await deleteImage(supabase, "berita", existing.gambar3);
  }
  const { error } = await supabase.from("beritas").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/berita");
  revalidatePath("/berita");
  redirect("/admin/berita");
}

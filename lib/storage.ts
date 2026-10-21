import type { SupabaseClient } from "@supabase/supabase-js";

export type StorageBucket = "berita" | "galeri" | "sarpras";

function getExt(file: File): string {
  const parts = file.name.split(".");
  return parts.length > 1 ? parts.pop()!.toLowerCase() : "jpg";
}

export async function uploadImage(
  supabase: SupabaseClient,
  bucket: StorageBucket,
  file: File,
  folder = ""
): Promise<string> {
  const ext = getExt(file);
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const path = folder ? `${folder}/${filename}` : filename;

  const { error } = await supabase.storage.from(bucket).upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });

  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}

export async function deleteImage(
  supabase: SupabaseClient,
  bucket: StorageBucket,
  publicUrlOrPath: string | null | undefined
): Promise<void> {
  if (!publicUrlOrPath) return;

  let path = publicUrlOrPath;
  const marker = `/storage/v1/object/public/${bucket}/`;
  const idx = publicUrlOrPath.indexOf(marker);
  if (idx !== -1) {
    path = publicUrlOrPath.slice(idx + marker.length);
  }

  path = path.replace(/^\/+/, "");
  if (!path) return;

  const { error } = await supabase.storage.from(bucket).remove([path]);
  if (error) {
    console.warn("deleteImage failed:", error.message);
  }
}

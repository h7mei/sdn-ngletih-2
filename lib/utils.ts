export function slugify(text: string): string {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function formatDate(date: string | Date, locale = "id-ID"): string {
  const d = typeof date === "string" ? new Date(date) : date;
  if (Number.isNaN(d.getTime())) return String(date);
  return d.toLocaleDateString(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function storagePublicUrl(
  pathOrUrl: string | null | undefined,
  bucket?: string
): string {
  if (!pathOrUrl) return "";
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!base || !bucket) return pathOrUrl;
  return `${base}/storage/v1/object/public/${bucket}/${pathOrUrl.replace(/^\/+/, "")}`;
}

// Site images (logo, hero, ...) uploaded by scripts/upload-assets.mjs to the "assets" bucket.
export function assetUrl(path: string): string {
  return storagePublicUrl(path, "assets");
}

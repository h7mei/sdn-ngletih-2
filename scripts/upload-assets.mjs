// Uploads the site images in public/assets/images to Supabase Storage and
// points existing database rows at the uploaded copies.
//
//   node --env-file=.env.local scripts/upload-assets.mjs
//
// Needs NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (Project Settings → API).
// Safe to re-run: uploads use upsert and rows already in Storage are left alone.

import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const SOURCE_DIR = path.join(process.cwd(), "public", "assets", "images");
const ASSETS_BUCKET = "assets";
const LOCAL_PREFIX = "/assets/images/";

// Content tables and the bucket their images belong in (same as the admin pages use).
const CONTENT = [
  { table: "beritas", bucket: "berita", columns: ["gambar", "gambar2", "gambar3"] },
  { table: "galeris", bucket: "galeri", columns: ["gambar"] },
  { table: "sarpras", bucket: "sarpras", columns: ["gambar", "gambar2", "gambar3"] },
];

const CONTENT_TYPES = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".jfif": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
};

// "logo ngletih.PNG" -> "logo-ngletih.png": no spaces, lowercase, so URLs work on any host.
function storageKey(relativePath) {
  return relativePath
    .split("/")
    .map((part) => part.toLowerCase().replace(/\s+/g, "-"))
    .join("/");
}

async function listFiles(dir, prefix = "") {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      files.push(...(await listFiles(path.join(dir, entry.name), rel)));
    } else if (CONTENT_TYPES[path.extname(entry.name).toLowerCase()]) {
      files.push(rel);
    }
  }
  return files;
}

async function upload(supabase, bucket, key, filePath) {
  const body = await readFile(filePath);
  const contentType = CONTENT_TYPES[path.extname(filePath).toLowerCase()];
  const { error } = await supabase.storage
    .from(bucket)
    .upload(key, body, { contentType, upsert: true, cacheControl: "31536000" });
  if (error) throw new Error(`${bucket}/${key}: ${error.message}`);
}

async function ensureBucket(supabase, bucket) {
  const { data } = await supabase.storage.getBucket(bucket);
  if (data) return;
  const { error } = await supabase.storage.createBucket(bucket, { public: true });
  if (error) throw new Error(`create bucket ${bucket}: ${error.message}`);
  console.log(`created bucket ${bucket}`);
}

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (e.g. in .env.local).");
  }
  if (!existsSync(SOURCE_DIR)) {
    console.log(`${SOURCE_DIR} not found — nothing left to upload.`);
    return;
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });

  for (const bucket of [ASSETS_BUCKET, ...CONTENT.map((c) => c.bucket)]) {
    await ensureBucket(supabase, bucket);
  }

  // 1. Every site image -> assets bucket
  const files = await listFiles(SOURCE_DIR);
  for (const rel of files) {
    await upload(supabase, ASSETS_BUCKET, storageKey(rel), path.join(SOURCE_DIR, rel));
    console.log(`assets/${storageKey(rel)}`);
  }

  // 2. Content rows still pointing at public/ -> copy into their bucket under seed/ and update the row
  for (const { table, bucket, columns } of CONTENT) {
    const { data: rows, error } = await supabase.from(table).select(["id", ...columns].join(","));
    if (error) throw new Error(`${table}: ${error.message}`);

    for (const row of rows) {
      const changes = {};
      for (const column of columns) {
        const value = row[column];
        if (!value?.startsWith(LOCAL_PREFIX)) continue;
        const rel = value.slice(LOCAL_PREFIX.length);
        const objectKey = `seed/${storageKey(rel)}`;
        await upload(supabase, bucket, objectKey, path.join(SOURCE_DIR, rel));
        changes[column] = objectKey;
      }
      if (Object.keys(changes).length === 0) continue;
      const { error: updateError } = await supabase.from(table).update(changes).eq("id", row.id);
      if (updateError) throw new Error(`${table} #${row.id}: ${updateError.message}`);
      console.log(`${table} #${row.id} -> ${Object.values(changes).join(", ")}`);
    }
  }

  console.log(`\nDone: ${files.length} files in "${ASSETS_BUCKET}" bucket.`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});

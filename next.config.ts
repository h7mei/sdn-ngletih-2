import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prefer regular <img> tags for Supabase storage URLs to avoid remotePatterns config.
  experimental: {
    serverActions: {
      // Image uploads go through Server Actions; Vercel caps request bodies at 4.5MB.
      bodySizeLimit: "4mb",
    },
  },
};

export default nextConfig;

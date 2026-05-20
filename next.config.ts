import type { NextConfig } from "next";

/**
 * BASE_PATH : uniquement si le site est servi dans un sous-dossier
 * (ex. https://user.github.io/mon-repo/ → BASE_PATH=/mon-repo)
 * Laisser vide pour https://user.github.io ou un domaine personnalisé.
 */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "irp.cdn-website.com",
      },
      {
        protocol: "https",
        hostname: "lirp.cdn-website.com",
      },
    ],
  },
};

export default nextConfig;

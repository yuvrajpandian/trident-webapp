import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — produces a fully static site in `out/` that hosts free on Cloudflare Pages.
  output: "export",
  // Cloudflare Pages serves static files; Next's image optimizer needs a server, so disable it.
  images: { unoptimized: true },
  // Emit folder-style URLs (/about/ -> /about/index.html) which Cloudflare Pages serves cleanly.
  trailingSlash: true,
};

export default nextConfig;

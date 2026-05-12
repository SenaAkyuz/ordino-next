import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/work", destination: "/calisma", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/produksiyon", destination: "/produksiyon/index.html" },
      { source: "/produksiyon/", destination: "/produksiyon/index.html" },
    ];
  },
};

export default nextConfig;

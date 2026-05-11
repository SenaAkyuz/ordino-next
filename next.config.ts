import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/work", destination: "/calisma", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/aiata", destination: "/aiata/index.html" },
      { source: "/aiata/", destination: "/aiata/index.html" },
    ];
  },
};

export default nextConfig;

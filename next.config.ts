import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

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
      { source: "/en/produksiyon", destination: "/en/produksiyon/index.html" },
      { source: "/en/produksiyon/", destination: "/en/produksiyon/index.html" },
    ];
  },
};

export default withNextIntl(nextConfig);

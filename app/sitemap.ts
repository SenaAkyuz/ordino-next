import type { MetadataRoute } from "next";

const routes = [
  "",
  "/work",
  "/case-studies",
  "/services",
  "/platform",
  "/about",
  "/contact",
  "/news",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://theordino.com";
  const now = new Date();
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

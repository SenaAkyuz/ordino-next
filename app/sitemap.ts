import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/data/caseStudies";
import { news } from "@/lib/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://theordino.com";
  const now = new Date();

  // Ana statik sayfalar
  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/hizmetler", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/calisma", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/referanslar", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/platform", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/hakkimizda", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/iletisim", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/iletisim/tesekkurler", priority: 0.3, changeFrequency: "yearly" as const },
    // Yasal sayfalar
    { path: "/gizlilik-politikasi", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/kvkk", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/cerez-politikasi", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Dynamic case study sayfalari
  const caseStudyEntries = caseStudies.map((cs) => ({
    url: `${base}/referanslar/${cs.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic blog yazilari
  const blogEntries = news.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...caseStudyEntries, ...blogEntries];
}

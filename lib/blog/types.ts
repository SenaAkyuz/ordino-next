import type { NewsPost } from "@/lib/data/news";
import type { PortableTextBlock } from "@portabletext/types";

// Mevcut hardcoded post shape'i (NewsPost) + Sanity icin 3 opsiyonel alan.
// slug string'e genisletildi (Sanity slug'lari NewsSlug union'inda degil);
// gradient opsiyonel (Sanity postlari kapak gorseli kullanir, gradient yok).
export type BlogPost = Omit<NewsPost, "slug" | "gradient"> & {
  slug: string;
  gradient?: string;
  coverImageUrl?: string;
  coverImageAlt?: string;
  coverBlur?: string; // lqip base64 — next/image placeholder="blur"
  portableBody?: PortableTextBlock[];
  metaTitle?: string;
  metaDescription?: string;
  // --- SEO (Adim 3) ---
  altSlugs?: { tr?: string; en?: string };
  hasEn?: boolean;
  publishedAtISO?: string; // datePublished / og:publishedTime (ISO 8601)
  updatedAt?: string; // dateModified / og:modifiedTime (ISO 8601)
  ogImageUrl?: string; // per-post OG gorseli (absolute)
  canonicalUrl?: string; // Sanity'de elle girilmisse
  noIndex?: boolean;
};

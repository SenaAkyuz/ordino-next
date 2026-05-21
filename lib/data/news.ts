export const newsSlugs = [
  "ai-reklam-optimizasyonu-2026",
  "performans-marketing-rehberi",
  "lokal-seo-2026",
  "tiktok-algoritmasi-marka-stratejisi",
] as const;

export type NewsSlug = (typeof newsSlugs)[number];

export const NEWS_CATEGORY_KEYS = [
  "digitalMarketing",
  "seo",
  "ai",
  "socialMedia",
  "industryNews",
] as const;

export type NewsCategoryKey = (typeof NEWS_CATEGORY_KEYS)[number];

export type NewsPostConfig = {
  slug: NewsSlug;
  categoryKey: NewsCategoryKey;
  gradient: string;
  content?: string;
};

export type NewsPost = {
  slug: NewsSlug;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  gradient: string;
  author: string;
  authorRole?: string;
  content?: string;
  readTime?: string;
};

export type NewsPostContent = Omit<
  NewsPost,
  "slug" | "category" | "gradient" | "content"
>;

export const newsConfig: NewsPostConfig[] = [
  {
    slug: "ai-reklam-optimizasyonu-2026",
    categoryKey: "ai",
    gradient: "linear-gradient(135deg, #2d1b4e 0%, #4a2080 50%, #6e2da8 100%)",
  },
  {
    slug: "performans-marketing-rehberi",
    categoryKey: "digitalMarketing",
    gradient: "linear-gradient(135deg, #0d3b2e 0%, #1a5c4a 50%, #2a7a5a 100%)",
  },
  {
    slug: "lokal-seo-2026",
    categoryKey: "seo",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  },
  {
    slug: "tiktok-algoritmasi-marka-stratejisi",
    categoryKey: "socialMedia",
    gradient: "linear-gradient(135deg, #4a0e2e 0%, #6b1a3a 50%, #8b3a5a 100%)",
  },
];

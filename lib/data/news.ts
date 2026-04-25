export type NewsCategory =
  | "Dijital Pazarlama"
  | "SEO"
  | "AI"
  | "Sosyal Medya"
  | "Sektör Haberleri";

export type NewsPost = {
  slug: string;
  date: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  gradient: string;
  author: string;
  authorRole?: string;
  content?: string;
  readTime?: string;
};

export const newsCategories: NewsCategory[] = [
  "Dijital Pazarlama",
  "SEO",
  "AI",
  "Sosyal Medya",
  "Sektör Haberleri",
];

export const news: NewsPost[] = [
  {
    slug: "ai-reklam-optimizasyonu-2026",
    date: "20 Nisan 2026",
    category: "AI",
    title: "AI Reklam Optimizasyonunda 2026 Trendleri",
    excerpt:
      "Yapay zeka destekli reklam yönetimi 2026'da nasıl şekilleniyor? Generative AI'dan otomatize teklif optimizasyonuna kadar bilmeniz gereken her şey.",
    gradient: "linear-gradient(135deg, #2d1b4e 0%, #4a2080 50%, #6e2da8 100%)",
    author: "Ordino Ekibi",
    authorRole: "AI & Performans Marketing",
    readTime: "6 dk okuma",
    content: "İçerik yakında eklenecek...",
  },
  {
    slug: "performans-marketing-rehberi",
    date: "12 Nisan 2026",
    category: "Dijital Pazarlama",
    title: "Türkiye'de Performans Marketing: Kapsamlı Bir Rehber",
    excerpt:
      "Google Ads'ten Meta'ya, TikTok'tan programmatic'e — Türk markaları için sonuç odaklı performans pazarlama stratejileri.",
    gradient: "linear-gradient(135deg, #0d3b2e 0%, #1a5c4a 50%, #2a7a5a 100%)",
    author: "Ordino Ekibi",
    authorRole: "Performans Marketing",
    readTime: "8 dk okuma",
    content: "İçerik yakında eklenecek...",
  },
  {
    slug: "lokal-seo-2026",
    date: "5 Nisan 2026",
    category: "SEO",
    title: "Lokal SEO 2026: Türkçe Markalar İçin Yol Haritası",
    excerpt:
      "Google Business Profile'dan schema markup'a, lokal anahtar kelimelerden review yönetimine — Türkiye odaklı kapsamlı SEO stratejisi.",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    author: "Ordino Ekibi",
    authorRole: "SEO & İçerik Stratejisi",
    readTime: "7 dk okuma",
    content: "İçerik yakında eklenecek...",
  },
  {
    slug: "tiktok-algoritmasi-marka-stratejisi",
    date: "28 Mart 2026",
    category: "Sosyal Medya",
    title: "TikTok Algoritması ve Marka Stratejisi",
    excerpt:
      "TikTok'ta organik görünürlük artık altın değerinde. Algoritmanın işleyişi, içerik üretici iş birlikleri ve marka stratejisi.",
    gradient: "linear-gradient(135deg, #4a0e2e 0%, #6b1a3a 50%, #8b3a5a 100%)",
    author: "Ordino Ekibi",
    authorRole: "Sosyal Medya & İçerik",
    readTime: "5 dk okuma",
    content: "İçerik yakında eklenecek...",
  },
];

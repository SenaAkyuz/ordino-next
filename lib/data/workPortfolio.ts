export type WorkPortfolioItem = {
  slug: string;
  brand: string;
  sector: string;
  featuredServicesShort: string[];
  image?: string;
  gradient: string;
  hasDetail: boolean;
};

export const workPortfolio: WorkPortfolioItem[] = [
  {
    slug: "turkish-technic",
    brand: "Turkish Technic",
    sector: "Havacılık / MRO",
    featuredServicesShort: ["Çok Kanallı Reklam", "YouTube Kampanyaları", "Fuar İletişimi"],
    image: "/case-studies/turkish-technic.webp",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #4a2080 100%)",
    hasDetail: true,
  },
  {
    slug: "aiata",
    brand: "Aiata Boats",
    sector: "Denizcilik / Lüks",
    featuredServicesShort: ["Reklam Yönetimi", "SEO", "Global Sosyal Medya"],
    image: "/case-studies/aiata.jpg",
    gradient: "linear-gradient(135deg, #0d3b2e 0%, #1a5c4a 50%, #2a7a5a 100%)",
    hasDetail: true,
  },
  {
    slug: "gobritanya",
    brand: "GoBritanya",
    sector: "Eğitim / Yurt Dışı",
    featuredServicesShort: ["Google & Meta Reklamları", "SEO", "Web Optimizasyonu"],
    image: "/case-studies/gobritanya.webp",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    hasDetail: true,
  },
  {
    slug: "allium-bodrum",
    brand: "Allium Bodrum",
    sector: "Konaklama / Lüks",
    featuredServicesShort: ["Dijital Reklam Yönetimi", "Hedef Kitle Stratejisi"],
    gradient: "linear-gradient(135deg, #b28f6c 0%, #8b6f50 50%, #4a3625 100%)",
    hasDetail: true,
  },
  {
    slug: "yuva-maya",
    brand: "Yuva Maya",
    sector: "Gıda",
    featuredServicesShort: ["Lansman Kampanyası", "Çok Platformlu Reklam", "YouTube Kampanyaları"],
    image: "/case-studies/yuvamaya.webp",
    gradient: "linear-gradient(135deg, #b28f6c 0%, #8b6f50 50%, #6e553d 100%)",
    hasDetail: true,
  },
  {
    slug: "marie-claire",
    brand: "Marie Claire Türkiye",
    sector: "Medya / Yayıncılık",
    featuredServicesShort: ["SEO & Organik Büyüme", "İçerik Optimizasyonu", "Çok Platformlu Reklam"],
    gradient: "linear-gradient(135deg, #c0392b 0%, #8e2418 50%, #5b1610 100%)",
    hasDetail: true,
  },
  {
    slug: "fortune",
    brand: "Fortune Türkiye",
    sector: "Medya / Yayıncılık",
    featuredServicesShort: ["LinkedIn Reklam Yönetimi", "X (Twitter) Reklamları", "B2B Hedefleme"],
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0a1428 100%)",
    hasDetail: true,
  },
  {
    slug: "instyle",
    brand: "InStyle Türkiye",
    sector: "Medya / Yayıncılık",
    featuredServicesShort: ["Dijital Reklam Yönetimi", "İçerik Stratejisi", "Marka Sesi & Editoryal Uyum"],
    image: "/case-studies/instyle.webp",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #333333 50%, #4d4d4d 100%)",
    hasDetail: true,
  },
  {
    slug: "inspera",
    brand: "Inspera Bodrum",
    sector: "Kültür & Sanat",
    featuredServicesShort: ["Dijital Reklam Yönetimi", "Hedef Kitle Stratejisi", "Etkinlik & Kültür İletişimi"],
    image: "/case-studies/inspera.webp",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #2c5282 50%, #4299e1 100%)",
    hasDetail: true,
  },
  {
    slug: "anadolu-motor",
    brand: "Anadolu Motor",
    sector: "Otomotiv",
    featuredServicesShort: ["Mailing Kampanyaları", "Web Sitesi Optimizasyonu", "Metin Yazımı"],
    gradient: "linear-gradient(135deg, #2d3436 0%, #636e72 50%, #b2bec3 100%)",
    hasDetail: true,
  },
  {
    slug: "tff",
    brand: "TFF",
    sector: "Spor / Federasyon",
    featuredServicesShort: ["AI Destekli Reklam Filmi", "Yaratıcı İçerik Stratejisi", "Spor İletişimi"],
    gradient: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #40916c 100%)",
    hasDetail: true,
  },
  {
    slug: "turizm-bakanligi",
    brand: "T.C. Kültür ve Turizm Bakanlığı",
    sector: "Kamu / Turizm",
    featuredServicesShort: ["Çok Kanallı Reklam Yönetimi", "Dijital İletişim Stratejisi", "Kamu İletişimi"],
    gradient: "linear-gradient(135deg, #8b0000 0%, #a02020 50%, #c03030 100%)",
    hasDetail: true,
  },
];

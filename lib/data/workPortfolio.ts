export type WorkPortfolioItem = {
  slug: string;
  brand: string;
  sector: string;
  resultText: string;
  image?: string;
  gradient: string;
  hasDetail: boolean;
};

export const workPortfolio: WorkPortfolioItem[] = [
  {
    slug: "turkish-technic",
    brand: "Turkish Technic",
    sector: "Havacılık / MRO",
    resultText: "8 ayda 6× pipeline hızı, $11M+ etkilenen pipeline.",
    image: "/case-studies/turkish-technic.jpg",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #4a2080 100%)",
    hasDetail: true,
  },
  {
    slug: "aiata",
    brand: "Aiata Boats",
    sector: "Denizcilik / Lüks",
    resultText: "Rezervasyon dönüşümü +%240, CPA -%58, ROAS 5.6×.",
    gradient: "linear-gradient(135deg, #0d3b2e 0%, #1a5c4a 50%, #2a7a5a 100%)",
    hasDetail: true,
  },
  {
    slug: "gobritanya",
    brand: "GoBritanya",
    sector: "Eğitim / Yurt Dışı",
    resultText: "5,400+ nitelikli öğrenci lead, 4.2× ROI.",
    image: "/case-studies/gobritanya.jpg",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    hasDetail: true,
  },
  {
    slug: "allium-bodrum",
    brand: "Allium Bodrum",
    sector: "Konaklama / Lüks",
    resultText: "Sezon dönüş 3.4× hızlandı, yıllık doluluk +%42.",
    gradient: "linear-gradient(135deg, #b28f6c 0%, #8b6f50 50%, #4a3625 100%)",
    hasDetail: true,
  },
  {
    slug: "yuva-maya",
    brand: "Yuva Maya",
    sector: "Gıda",
    resultText: "Ürün sorgu hacmi +%312, sorgu maliyeti -%47.",
    image: "/case-studies/yuvamaya.jpg",
    gradient: "linear-gradient(135deg, #b28f6c 0%, #8b6f50 50%, #6e553d 100%)",
    hasDetail: true,
  },
  {
    slug: "marie-claire",
    brand: "Marie Claire",
    sector: "Medya / Yayıncılık",
    resultText: "Dijital abone tabanı 18 ayda +%86 büyüdü.",
    gradient: "linear-gradient(135deg, #c0392b 0%, #8e2418 50%, #5b1610 100%)",
    hasDetail: true,
  },
  {
    slug: "fortune",
    brand: "Fortune",
    sector: "Medya / Yayıncılık",
    resultText: "Premium içerik etkileşimi +%178, oturum 6:42dk.",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0a1428 100%)",
    hasDetail: true,
  },
  {
    slug: "anadolu-motor",
    brand: "Anadolu Motor",
    sector: "Otomotiv",
    resultText: "Test sürüşü rezervasyonu 4.7×, lead maliyeti -%52.",
    gradient: "linear-gradient(135deg, #2d3436 0%, #636e72 50%, #b2bec3 100%)",
    hasDetail: true,
  },
  {
    slug: "tff",
    brand: "TFF",
    sector: "Spor / Federasyon",
    resultText: "12 AI üretim reklam filmi, 4 hafta toplam teslim.",
    gradient: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #40916c 100%)",
    hasDetail: true,
  },
  {
    slug: "turizm-bakanligi",
    brand: "T.C. Kültür ve Turizm Bakanlığı",
    sector: "Kamu / Turizm",
    resultText: "18M+ nitelikli gösterim, gelen arama niyeti +%87.",
    gradient: "linear-gradient(135deg, #8b0000 0%, #a02020 50%, #c03030 100%)",
    hasDetail: true,
  },
];

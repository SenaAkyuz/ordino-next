export type Client = {
  slug: string;
  name: string;
  alt: string;
  hasLogo?: boolean;
};

// Sirket gercek logo dosyalarini verince:
// 1. /public/clients/<slug>.png olarak koy (uzerine yaz)
// 2. Asagidaki hasLogo: true yap
// 3. Site otomatik Image render eder
export const clients: Client[] = [
  { slug: "turkish-technic", name: "Turkish Technic", alt: "Turkish Technic — Havacılık / MRO", hasLogo: true },
  { slug: "aiata", name: "Aiata Boats", alt: "Aiata Boats — Denizcilik / Lüks", hasLogo: true },
  { slug: "gobritanya", name: "GoBritanya", alt: "GoBritanya — Eğitim / Yurt Dışı", hasLogo: true },
  { slug: "allium-bodrum", name: "Allium Bodrum", alt: "Allium Bodrum — Konaklama / Lüks", hasLogo: false },
  { slug: "yuva-maya", name: "Yuva Maya", alt: "Yuva Maya — Gıda", hasLogo: true },
  { slug: "marie-claire", name: "Marie Claire", alt: "Marie Claire — Medya / Yayıncılık", hasLogo: true },
  { slug: "fortune", name: "Fortune", alt: "Fortune — Medya / Yayıncılık", hasLogo: true },
  { slug: "anadolu-motor", name: "Anadolu Motor", alt: "Anadolu Motor — Otomotiv", hasLogo: true },
  { slug: "tff", name: "TFF", alt: "Türkiye Futbol Federasyonu", hasLogo: true },
  { slug: "turizm-bakanligi", name: "Turizm Bakanlığı", alt: "T.C. Kültür ve Turizm Bakanlığı", hasLogo: true },
];

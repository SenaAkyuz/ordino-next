export type Client = {
  slug: string;
  name: string;
  alt: string;
  logoExt?: "png" | "svg" | "webp";
  hasLogo?: boolean;
  scale?: number;
};

export const clients: Client[] = [
  { slug: "turkish-technic", name: "Turkish Technic", alt: "Turkish Technic — Havacılık / MRO", logoExt: "png", hasLogo: true, scale: 1.0 },
  { slug: "turizm-bakanligi", name: "Turizm Bakanlığı", alt: "T.C. Kültür ve Turizm Bakanlığı", logoExt: "png", hasLogo: true, scale: 1.25 },
  { slug: "tff", name: "TFF", alt: "Türkiye Futbol Federasyonu", logoExt: "png", hasLogo: true, scale: 1.2 },
  { slug: "anadolu-motor", name: "Anadolu Motor", alt: "Anadolu Motor — Otomotiv", logoExt: "png", hasLogo: true, scale: 1.0 },
  { slug: "aiata", name: "Aiata Boats", alt: "Aiata Boats — Denizcilik / Lüks", logoExt: "png", hasLogo: true, scale: 1.0 },
  { slug: "allium-bodrum", name: "Allium Bodrum", alt: "Allium Bodrum — Konaklama / Lüks", logoExt: "png", hasLogo: true, scale: 1.2 },
  { slug: "yuva-maya", name: "Yuva Maya", alt: "Yuva Maya — Gıda", logoExt: "png", hasLogo: true, scale: 1.2 },
  { slug: "gobritanya", name: "GoBritanya", alt: "GoBritanya — Eğitim / Yurt Dışı", logoExt: "svg", hasLogo: true, scale: 1.0 },
  { slug: "marie-claire", name: "Marie Claire", alt: "Marie Claire — Medya / Yayıncılık", logoExt: "png", hasLogo: true, scale: 1.0 },
  { slug: "fortune", name: "Fortune", alt: "Fortune — Medya / Yayıncılık", logoExt: "png", hasLogo: true, scale: 1.0 },
  { slug: "instyle", name: "InStyle", alt: "InStyle Türkiye — Medya / Yayıncılık", logoExt: "webp", hasLogo: true, scale: 1.0 },
  { slug: "inspera", name: "Inspera", alt: "Inspera Bodrum — Kültür & Sanat", logoExt: "svg", hasLogo: true, scale: 1.2 },
];

export type Client = {
  slug: string;
  name: string;
  alt: string;
};

export const clients: Client[] = [
  { slug: "turkish-technic", name: "Turkish Technic", alt: "Turkish Technic — Havacılık / MRO" },
  { slug: "aiata", name: "Aiata Boats", alt: "Aiata Boats — Denizcilik / Lüks" },
  { slug: "gobritanya", name: "GoBritanya", alt: "GoBritanya — Eğitim / Yurt Dışı" },
  { slug: "allium-bodrum", name: "Allium Bodrum", alt: "Allium Bodrum — Konaklama / Lüks" },
  { slug: "yuva-maya", name: "Yuva Maya", alt: "Yuva Maya — Gıda" },
  { slug: "marie-claire", name: "Marie Claire", alt: "Marie Claire — Medya / Yayıncılık" },
  { slug: "fortune", name: "Fortune", alt: "Fortune — Medya / Yayıncılık" },
  { slug: "anadolu-motor", name: "Anadolu Motor", alt: "Anadolu Motor — Otomotiv" },
  { slug: "tff", name: "TFF", alt: "Türkiye Futbol Federasyonu" },
  { slug: "turizm-bakanligi", name: "Turizm Bakanlığı", alt: "T.C. Kültür ve Turizm Bakanlığı" },
];

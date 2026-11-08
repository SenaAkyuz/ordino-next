export type HeroSlideSlug =
  | "aiata"
  | "sagra"
  | "golf"
  | "sweeto"
  | "oyak-ordu-pazari"
  | "oyak-turizm"
  | "burcu";

export type HeroSlide = {
  slug: HeroSlideSlug;
  name: string;
  /** "Projeyi incele" yönlendirmesi (sunumdaki bağlantı). Yoksa buton gösterilmez. */
  href?: string;
  /** Alt şeritteki siyah-beyaz logo */
  logo: string;
  /** "Projeyi incele" konumu: görselin düz zemin alanı (görsele göre %, sol / dikey orta) ve yazı rengi */
  /** true: görsel 16:9 kutuyla sınırlanmaz, tüm alanı (kırparak) doldurur */
  fill?: boolean;
  /** Görsele sabit (kırpmadan etkilenmeyen) konum gerekiyorsa CSS değerleri; yüzdeli cta yerine geçer */
  ctaCss?: { left: string; top: string };
  cta: { left: number; top: number; tone: "dark" | "light" };
  /** Slayt görselinin üst bandındaki ortalama renk — navbar kontrast tespiti için */
  bg: string;
};

// Görseller: public/hero/slides/<slug>.webp (masaüstü) ve <slug>-m.webp (mobil kare kırpım)
export const heroSlides: HeroSlide[] = [
  {
    slug: "aiata",
    fill: true,
    // Afişin (2.4:1, cover) Anadolu Grubu amblemiyle aynı sol hizada, hemen üstünde
    ctaCss: {
      left: "max(12px, calc(50cqw + (0.031 - 0.5) * max(100cqw, 240cqh)))",
      top: "min(calc(100cqh - 24px), calc(50cqh + (0.775 - 0.5) * max(100cqh, 41.667cqw)))",
    },
    cta: { left: 1.5, top: 76, tone: "light" },
    name: "AIATA",
    href: "https://www.instagram.com/aiataboats/",
    logo: "/clients/aiata.webp",
    bg: "#e0fefd",
  },
  {
    slug: "sagra",
    cta: { left: 4, top: 89, tone: "dark" },
    name: "Sagra",
    href: "https://www.youtube.com/watch?v=s7V4RMYELRM",
    logo: "/clients/sagra.webp",
    bg: "#591911",
  },
  {
    slug: "golf",
    cta: { left: 4, top: 95.5, tone: "dark" },
    name: "Golf",
    href: "https://www.instagram.com/golfdondurmalar/",
    logo: "/clients/golf-mono.webp",
    bg: "#5bb1c5",
  },
  {
    slug: "sweeto",
    cta: { left: 4, top: 85, tone: "dark" },
    name: "Sweeto",
    href: "https://www.instagram.com/p/DeMk-i3MT7n/",
    logo: "/clients/sweeto.webp",
    bg: "#8270ad",
  },
  {
    slug: "oyak-ordu-pazari",
    cta: { left: 4, top: 85, tone: "dark" },
    name: "OYAK Ordu Pazarı",
    logo: "/clients/oyak-ordu-pazari.webp",
    bg: "#d56c5f",
  },
  {
    slug: "oyak-turizm",
    cta: { left: 4, top: 87, tone: "dark" },
    name: "OYAK Turizm",
    logo: "/clients/oyak-turizm.webp",
    bg: "#a8545b",
  },
  {
    slug: "burcu",
    cta: { left: 4, top: 87, tone: "dark" },
    name: "Burcu",
    href: "https://www.youtube.com/watch?v=_R91ADS1iEk",
    logo: "/clients/burcu.webp",
    bg: "#833d58",
  },
];

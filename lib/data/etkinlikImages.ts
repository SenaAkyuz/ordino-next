// public/images/etkinlikler/ içindeki optimize WebP görseller.
// kapak.webp ilk sırada (öne çıkan, yatay), sonra etkinlik-1..7 (dikey).
// orientation: kart çerçevesi + object-fit ayarını belirler (yatay/dikey karışık).

export type EtkinlikImage = {
  src: string;
  orientation: "portrait" | "landscape";
};

export const etkinlikImages: EtkinlikImage[] = [
  { src: "/images/etkinlikler/kapak.webp", orientation: "landscape" },
  { src: "/images/etkinlikler/etkinlik-1.webp", orientation: "portrait" },
  { src: "/images/etkinlikler/etkinlik-2.webp", orientation: "portrait" },
  { src: "/images/etkinlikler/etkinlik-3.webp", orientation: "portrait" },
  { src: "/images/etkinlikler/etkinlik-4.webp", orientation: "portrait" },
  { src: "/images/etkinlikler/etkinlik-5.webp", orientation: "portrait" },
  { src: "/images/etkinlikler/etkinlik-6.webp", orientation: "portrait" },
  { src: "/images/etkinlikler/etkinlik-7.webp", orientation: "portrait" },
];

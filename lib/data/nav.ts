import { site } from "./site";

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const navLinks: NavLink[] = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Prodüksiyon", href: "/aiata", external: true },
  { label: "Çalışmalar", href: "/calisma" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Platform", href: "/platform" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export const navCta: NavLink = {
  label: "Toplantı Planla",
  href: site.meetingUrl,
};

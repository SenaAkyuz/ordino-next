export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Çalışmalar", href: "/calisma" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Platform", href: "/platform" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export const navCta: NavLink = {
  label: "Toplantı Planla",
  href: "/iletisim#contact-form",
};

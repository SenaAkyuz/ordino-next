export type SocialLink = {
  label: string;
  name: string;
  href: string;
};

export const site = {
  name: "Ordino",
  tagline: "Strateji. Yaratıcılık. Büyüme.",
  copyrightYear: 2026,

  // Calendly veya takvim URL'i — gelince burayı değiştirin, tüm site bu URL'i kullanır
  meetingUrl: "/iletisim#contact-form",

  email: "info@theordino.com",
  careersEmail: "careers@theordino.com",
  phone: "+90 535 294 65 40",
  phoneHref: "tel:+905352946540",
  address: "Ferko Signature Plaza, Şişli, Istanbul",
  londonAddress: "London — adres yakında",

  footerAbout:
    "Ordino, London ve Istanbul merkezli full-service reklam ajansıdır. Strateji, yaratıcılık ve büyüme odaklı yaklaşımımız ile global markalara hizmet veriyoruz. Google, Meta, TikTok ve X'te resmi reklam partnerliği ile faaliyet gösteriyoruz.",

  careersBlurb: "Birlikte çalışalım!",

  social: [
    { label: "Ig", name: "Instagram", href: "https://www.instagram.com/ordino.tr/" },
    { label: "Li", name: "LinkedIn", href: "https://www.linkedin.com/company/ordinocompany/" },
  ] satisfies SocialLink[],
} as const;

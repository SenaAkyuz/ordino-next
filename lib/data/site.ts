export type SocialLink = {
  label: string;
  name: string;
  href: string;
};

export const site = {
  name: "Ordino",
  tagline: "Strateji. Yaratıcılık. Büyüme.",
  copyrightYear: 2026,

  // Hero video Vimeo ID — Brief 5.1 + 14: gercek video gelince burayi degistir
  heroVideoId: "1185478673",

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

  // SEO & Analytics (Brief 15.4 + 15.5 + 15.6) — sirket bilgilerini verince doldurun
  // GA4 measurement ID (G-XXXXXXXXXX) — sirket Google Analytics hesabindan alacak
  ga4Id: "" as string,

  // Google Tag Manager container ID (GTM-XXXXXXX) — opsiyonel, GA4 yerine veya yaninda
  gtmId: "" as string,

  // Google Search Console verification kodu (genelde "google-site-verification: <kod>" formatinda)
  // Search Console'da "HTML tag" yontemini secip <meta> tag icindeki content degerini buraya yapistir
  searchConsoleVerification: "" as string,

  // Open Graph default image (1200x630 JPG) — sirket tasarimci hazirlayacak
  // Dosya geldiginde /public/og.jpg olarak koy, asagidaki path otomatik calisir
  ogImage: "/og.jpg" as string,
} as const;

export type SocialLink = {
  label: string;
  name: string;
  href: string;
};

export const site = {
  name: "Ordino",
  tagline: "Strateji. Yaratıcılık. Büyüme.",
  copyrightYear: 2026,

  // HubSpot Meetings booking URL — tek kaynak (single source of truth)
  // Tüm "Toplantı Planla" butonları ve /iletisim sayfasındaki ScheduleMeeting embed buradan beslenir
  meetingUrl: "https://meetings.hubspot.com/ordino",

  email: "theordino.com",
  careersEmail: "careers@theordino.com",
  phone: "0212 996 71 47",
  phoneHref: "tel:+902129967147",
  address: "Ferko Signature Plaza, A Blok, Büyükdere Caddesi No:175, Esentepe, 34394 Şişli / İstanbul, Türkiye",
  londonAddress: "20-22 Wenlock Road, London, N1 7GU, United Kingdom",

  footerAbout:
    "Ordino, London ve Istanbul merkezli full-service reklam ajansıdır. Strateji, yaratıcılık ve büyüme odaklı yaklaşımımız ile global markalara hizmet veriyoruz. Google, Meta, TikTok ve X'te resmi reklam partnerliği ile faaliyet gösteriyoruz.",

  careersBlurb: "Birlikte çalışalım!",

  social: [
    { label: "Ig", name: "Instagram", href: "https://www.instagram.com/ordino.tr/" },
    { label: "Li", name: "LinkedIn", href: "https://www.linkedin.com/company/ordinocompany/" },
  ] satisfies SocialLink[],

  // SEO & Analytics (Brief 15.4 + 15.5 + 15.6) — sirket bilgilerini verince doldurun
  // GA4 measurement ID (G-XXXXXXXXXX) — sirket Google Analytics hesabindan alacak
  ga4Id: "G-WH6CEQ9GSZ" as string,

  // Google Tag Manager container ID (GTM-XXXXXXX) — opsiyonel, GA4 yerine veya yaninda
  gtmId: "GTM-P97LMP2F" as string,

  // Contentsquare UXA tag ID — kullanici davranis analizi (heatmap, session replay)
  // Script: https://t.contentsquare.net/uxa/<id>.js
  contentsquareId: "bd0bff506467d" as string,

  // Google Search Console verification kodu (genelde "google-site-verification: <kod>" formatinda)
  // Search Console'da "HTML tag" yontemini secip <meta> tag icindeki content degerini buraya yapistir
  searchConsoleVerification: "" as string,

  // Open Graph default image (1200x630 JPG) — sirket tasarimci hazirlayacak
  // Dosya geldiginde /public/og.jpg olarak koy, asagidaki path otomatik calisir
  ogImage: "/og.jpg" as string,

  // WhatsApp Business contact
  // Format: ulke kodu + numara, + ve bosluk OLMADAN, sifirsiz
  // Ornek: +90 535 294 65 40 -> "905352946540"
  whatsapp: {
    number: "905352946540" as string,
    enabled: true,
  },
} as const;

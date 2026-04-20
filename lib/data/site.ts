export type SocialLink = {
  label: string;
  name: string;
  href: string;
};

export const site = {
  name: "Ordino",
  tagline: "We elevate ads.",
  copyrightYear: 2026,

  email: "info@theordino.com",
  careersEmail: "careers@theordino.com",
  phone: "+90 535 294 65 40",
  phoneHref: "tel:+905352946540",
  address: "Şişli, Istanbul — Turkey",

  footerAbout:
    "Ordino is an AI-powered ad intelligence platform specializing in Google Ads optimization, negative keyword management, and performance marketing. Our expert team of data scientists, AI engineers, and digital marketers help brands maximize their ad spend through intelligent automation, data-driven strategies, and measurable results.",

  careersBlurb: "We'd love to talk!",

  social: [
    { label: "Ig", name: "Instagram", href: "#" },
    { label: "Li", name: "LinkedIn", href: "#" },
    { label: "X", name: "X", href: "#" },
  ] satisfies SocialLink[],
} as const;

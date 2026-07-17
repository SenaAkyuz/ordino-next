import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["tr", "en"],
  defaultLocale: "tr",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/hizmetler": { tr: "/hizmetler", en: "/services" },
    "/calisma": { tr: "/calisma", en: "/work" },
    "/referanslar": { tr: "/referanslar", en: "/case-studies" },
    "/referanslar/[slug]": {
      tr: "/referanslar/[slug]",
      en: "/case-studies/[slug]",
    },
    "/ai-showreels": "/ai-showreels",
    "/platform": "/platform",
    "/hakkimizda": { tr: "/hakkimizda", en: "/about" },
    "/iletisim": { tr: "/iletisim", en: "/contact" },
    "/iletisim/tesekkurler": {
      tr: "/iletisim/tesekkurler",
      en: "/contact/thank-you",
    },
    "/blog": "/blog",
    "/blog/[slug]": "/blog/[slug]",
    "/gizlilik-politikasi": {
      tr: "/gizlilik-politikasi",
      en: "/privacy-policy",
    },
    "/cerez-politikasi": {
      tr: "/cerez-politikasi",
      en: "/cookie-policy",
    },
    "/kvkk": "/kvkk",
    "/fynpad": "/fynpad",
    "/fynpad/privacy": "/fynpad/privacy",
    "/fynpad/terms": "/fynpad/terms",
    "/fynpad/delete-account": "/fynpad/delete-account",
  },
});

export type Locale = (typeof routing.locales)[number];

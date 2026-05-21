export const caseSlugs = [
  "aiata",
  "gobritanya",
  "yuva-maya",
  "turkish-technic",
  "tff",
  "turizm-bakanligi",
  "allium-bodrum",
  "marie-claire",
  "fortune",
  "anadolu-motor",
  "instyle",
  "inspera",
] as const;

export type CaseSlug = (typeof caseSlugs)[number];

export type CaseStudyConfig = {
  slug: CaseSlug;
  image?: string;
  gradient: string;
};

export type CaseStudy = {
  slug: CaseSlug;
  num: string;
  brand: string;
  sector: string;
  title: string;
  titleEm: string;
  titleTail?: string;
  titleEm2?: string;
  lead: string;
  brandIntro: string;
  featuredServices: string[];
  image?: string;
  gradient: string;
  stats: { value: string; label: string }[];
  challenge: {
    head: string;
    headEm: string;
    paragraphs: string[];
  };
  solution: {
    head: string;
    headEm: string;
    paragraphs: string[];
  };
};

export type CaseStudyContent = Omit<CaseStudy, "slug" | "image" | "gradient">;

export const caseStudiesConfig: CaseStudyConfig[] = [
  {
    slug: "aiata",
    image: "/case-studies/aiata.jpg",
    gradient: "linear-gradient(135deg, #0d3b2e 0%, #1a5c4a 50%, #2a7a5a 100%)",
  },
  {
    slug: "gobritanya",
    image: "/case-studies/gobritanya.webp",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  },
  {
    slug: "yuva-maya",
    image: "/case-studies/yuvamaya.webp",
    gradient: "linear-gradient(135deg, #b28f6c 0%, #8b6f50 50%, #6e553d 100%)",
  },
  {
    slug: "turkish-technic",
    image: "/case-studies/turkish-technic.webp",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #4a2080 100%)",
  },
  {
    slug: "tff",
    gradient: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #40916c 100%)",
  },
  {
    slug: "turizm-bakanligi",
    gradient: "linear-gradient(135deg, #8b0000 0%, #a02020 50%, #c03030 100%)",
  },
  {
    slug: "allium-bodrum",
    gradient: "linear-gradient(135deg, #b28f6c 0%, #8b6f50 50%, #4a3625 100%)",
  },
  {
    slug: "marie-claire",
    gradient: "linear-gradient(135deg, #c0392b 0%, #8e2418 50%, #5b1610 100%)",
  },
  {
    slug: "fortune",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0a1428 100%)",
  },
  {
    slug: "anadolu-motor",
    gradient: "linear-gradient(135deg, #2d3436 0%, #636e72 50%, #b2bec3 100%)",
  },
  {
    slug: "instyle",
    image: "/case-studies/instyle.webp",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #333333 50%, #4d4d4d 100%)",
  },
  {
    slug: "inspera",
    image: "/case-studies/inspera.webp",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #2c5282 50%, #4299e1 100%)",
  },
];

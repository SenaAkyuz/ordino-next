export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  gradient: string;
  href?: string;
};

export const portfolioHighlights: PortfolioItem[] = [
  {
    slug: "aiata",
    title: "AIATA",
    category: "Travel",
    gradient: "linear-gradient(135deg, #2c1810 0%, #5a3825 50%, #8b6914 100%)",
  },
  {
    slug: "gobritanya",
    title: "GoBritanya",
    category: "Education",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  },
  {
    slug: "yuva-maya",
    title: "Yuva Maya",
    category: "Real Estate",
    gradient: "linear-gradient(135deg, #b28f6c 0%, #8b6f50 50%, #6e553d 100%)",
  },
  {
    slug: "turkish-technic",
    title: "Turkish Technic",
    category: "B2B / Aviation",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #4a2080 100%)",
  },
  {
    slug: "turizm-bakanligi",
    title: "Turizm Bakanlığı",
    category: "Public Sector",
    gradient: "linear-gradient(135deg, #8b0000 0%, #a02020 50%, #c03030 100%)",
  },
  {
    slug: "healthcare-platform",
    title: "Healthcare Platform",
    category: "Healthcare",
    gradient: "linear-gradient(135deg, #0d3b2e 0%, #1a5c4a 50%, #2a7a5a 100%)",
  },
  {
    slug: "fashion-brand",
    title: "Fashion Brand",
    category: "Fashion",
    gradient: "linear-gradient(135deg, #4a0e2e 0%, #6b1a3a 100%)",
  },
];

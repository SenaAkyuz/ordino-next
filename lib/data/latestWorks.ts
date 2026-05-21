import type { WorkSectorKey } from "./workPortfolio";

export type BrandLabelKey = "tff" | "ministry";

export type LatestWorkConfig = {
  slug: string;
  label?: string;
  labelKey?: BrandLabelKey;
  sectorKey: WorkSectorKey;
  gradient: string;
};

export type LatestWork = {
  slug: string;
  label: string;
  sector: string;
  gradient: string;
};

export const latestWorksConfig: LatestWorkConfig[] = [
  {
    slug: "turkish-technic",
    label: "Turkish Technic",
    sectorKey: "aviationMro",
    gradient: "linear-gradient(135deg, #8b0000 0%, #a02020 100%)",
  },
  {
    slug: "aiata",
    label: "Aiata Boats",
    sectorKey: "marineLuxury",
    gradient: "linear-gradient(135deg, #0d3b2e 0%, #2a7a5a 100%)",
  },
  {
    slug: "gobritanya",
    label: "GoBritanya",
    sectorKey: "educationAbroad",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
  },
  {
    slug: "allium-bodrum",
    label: "Allium Bodrum",
    sectorKey: "hospitalityLuxury",
    gradient: "linear-gradient(135deg, #2c1810 0%, #5a3825 100%)",
  },
  {
    slug: "yuva-maya",
    label: "Yuva Maya",
    sectorKey: "foodBeverage",
    gradient: "linear-gradient(135deg, #b28f6c 0%, #8b6f50 100%)",
  },
  {
    slug: "marie-claire",
    label: "Marie Claire",
    sectorKey: "mediaPublishing",
    gradient: "linear-gradient(135deg, #4a0e2e 0%, #6b1a3a 100%)",
  },
  {
    slug: "fortune",
    label: "Fortune",
    sectorKey: "mediaPublishing",
    gradient: "linear-gradient(135deg, #2d1b4e 0%, #4a2080 100%)",
  },
  {
    slug: "anadolu-motor",
    label: "Anadolu Motor",
    sectorKey: "automotive",
    gradient: "linear-gradient(135deg, #1a1a40 0%, #2e2e6e 100%)",
  },
  {
    slug: "tff",
    labelKey: "tff",
    sectorKey: "sportsFederation",
    gradient: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)",
  },
  {
    slug: "turizm-bakanligi",
    labelKey: "ministry",
    sectorKey: "governmentTourism",
    gradient: "linear-gradient(135deg, #c03030 0%, #a02020 100%)",
  },
  {
    slug: "inspera",
    label: "Inspera Bodrum",
    sectorKey: "cultureArts",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #4299e1 100%)",
  },
  {
    slug: "instyle",
    label: "InStyle Türkiye",
    sectorKey: "mediaPublishing",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #4d4d4d 100%)",
  },
];

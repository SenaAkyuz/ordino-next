export type WorkSectorKey =
  | "aviationMro"
  | "marineLuxury"
  | "educationAbroad"
  | "hospitalityLuxury"
  | "foodBeverage"
  | "mediaPublishing"
  | "automotive"
  | "sportsFederation"
  | "governmentTourism"
  | "cultureArts";

export type FeaturedServiceShortKey =
  | "multiChannelAd"
  | "youtubeCampaigns"
  | "tradeShowComms"
  | "adManagement"
  | "globalSocialMedia"
  | "googleMetaAds"
  | "webOptimization"
  | "digitalAdManagement"
  | "audienceStrategy"
  | "launchCampaign"
  | "multiPlatformAd"
  | "seoOrganicGrowth"
  | "contentOptimization"
  | "linkedinAdMgmt"
  | "xTwitterAds"
  | "b2bTargeting"
  | "contentStrategy"
  | "brandVoiceEditorial"
  | "eventsCultureComms"
  | "emailCampaigns"
  | "websiteOptimization"
  | "copywriting"
  | "aiAdFilms"
  | "creativeContentStrategy"
  | "sportsComms"
  | "multiChannelAdMgmt"
  | "digitalCommsStrategy"
  | "publicSectorComms";

export type WorkPortfolioConfig = {
  slug: string;
  brand: string;
  sectorKey: WorkSectorKey;
  featuredServicesShortKeys: FeaturedServiceShortKey[];
  image?: string;
  gradient: string;
  hasDetail: boolean;
};

export type WorkPortfolioItem = {
  slug: string;
  brand: string;
  sector: string;
  featuredServicesShort: string[];
  image?: string;
  gradient: string;
  hasDetail: boolean;
};

export const workPortfolioConfig: WorkPortfolioConfig[] = [
  {
    slug: "turkish-technic",
    brand: "Turkish Technic",
    sectorKey: "aviationMro",
    featuredServicesShortKeys: ["multiChannelAd", "youtubeCampaigns", "tradeShowComms"],
    image: "/case-studies/turkish-technic.webp",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #4a2080 100%)",
    hasDetail: true,
  },
  {
    slug: "aiata",
    brand: "Aiata Boats",
    sectorKey: "marineLuxury",
    featuredServicesShortKeys: ["adManagement", "seoOrganicGrowth", "globalSocialMedia"],
    image: "/case-studies/aiata.jpg",
    gradient: "linear-gradient(135deg, #0d3b2e 0%, #1a5c4a 50%, #2a7a5a 100%)",
    hasDetail: true,
  },
  {
    slug: "gobritanya",
    brand: "GoBritanya",
    sectorKey: "educationAbroad",
    featuredServicesShortKeys: ["googleMetaAds", "seoOrganicGrowth", "webOptimization"],
    image: "/case-studies/gobritanya.webp",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    hasDetail: true,
  },
  {
    slug: "allium-bodrum",
    brand: "Allium Bodrum",
    sectorKey: "hospitalityLuxury",
    featuredServicesShortKeys: ["digitalAdManagement", "audienceStrategy"],
    gradient: "linear-gradient(135deg, #b28f6c 0%, #8b6f50 50%, #4a3625 100%)",
    hasDetail: true,
  },
  {
    slug: "yuva-maya",
    brand: "Yuva Maya",
    sectorKey: "foodBeverage",
    featuredServicesShortKeys: ["launchCampaign", "multiPlatformAd", "youtubeCampaigns"],
    image: "/case-studies/yuvamaya.webp",
    gradient: "linear-gradient(135deg, #b28f6c 0%, #8b6f50 50%, #6e553d 100%)",
    hasDetail: true,
  },
  {
    slug: "marie-claire",
    brand: "Marie Claire Türkiye",
    sectorKey: "mediaPublishing",
    featuredServicesShortKeys: ["seoOrganicGrowth", "contentOptimization", "multiPlatformAd"],
    gradient: "linear-gradient(135deg, #c0392b 0%, #8e2418 50%, #5b1610 100%)",
    hasDetail: true,
  },
  {
    slug: "fortune",
    brand: "Fortune Türkiye",
    sectorKey: "mediaPublishing",
    featuredServicesShortKeys: ["linkedinAdMgmt", "xTwitterAds", "b2bTargeting"],
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0a1428 100%)",
    hasDetail: true,
  },
  {
    slug: "instyle",
    brand: "InStyle Türkiye",
    sectorKey: "mediaPublishing",
    featuredServicesShortKeys: ["digitalAdManagement", "contentStrategy", "brandVoiceEditorial"],
    image: "/case-studies/instyle.webp",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #333333 50%, #4d4d4d 100%)",
    hasDetail: true,
  },
  {
    slug: "inspera",
    brand: "Inspera Bodrum",
    sectorKey: "cultureArts",
    featuredServicesShortKeys: ["digitalAdManagement", "audienceStrategy", "eventsCultureComms"],
    image: "/case-studies/inspera.webp",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #2c5282 50%, #4299e1 100%)",
    hasDetail: true,
  },
  {
    slug: "anadolu-motor",
    brand: "Anadolu Motor",
    sectorKey: "automotive",
    featuredServicesShortKeys: ["emailCampaigns", "websiteOptimization", "copywriting"],
    gradient: "linear-gradient(135deg, #2d3436 0%, #636e72 50%, #b2bec3 100%)",
    hasDetail: true,
  },
  {
    slug: "tff",
    brand: "TFF",
    sectorKey: "sportsFederation",
    featuredServicesShortKeys: ["aiAdFilms", "creativeContentStrategy", "sportsComms"],
    gradient: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #40916c 100%)",
    hasDetail: true,
  },
  {
    slug: "turizm-bakanligi",
    brand: "T.C. Kültür ve Turizm Bakanlığı",
    sectorKey: "governmentTourism",
    featuredServicesShortKeys: ["multiChannelAdMgmt", "digitalCommsStrategy", "publicSectorComms"],
    gradient: "linear-gradient(135deg, #8b0000 0%, #a02020 50%, #c03030 100%)",
    hasDetail: true,
  },
];

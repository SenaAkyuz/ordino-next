export type ServiceCard = {
  num: string;
  title: string;
  titleEm?: string;
  description: string;
  slug: string;
};

export type ServiceDetail = {
  num: string;
  slug: string;
  title: string;
  titleHead: string;
  titleEm: string;
  lead: string;
  items: string[];
};

export const serviceCards: ServiceCard[] = [
  {
    num: "01",
    title: "Strategy",
    description:
      "Audit, competitor mapping, keyword architecture, and the channel mix that will actually move your numbers.",
    slug: "strategy",
  },
  {
    num: "02",
    title: "",
    titleEm: "Creative",
    description:
      "Ad copy, static, motion, UGC. Built around platform psychology and tested against real performance data.",
    slug: "creative",
  },
  {
    num: "03",
    title: "Performance Media",
    description:
      "AI-powered search intelligence, negative-keyword automation, smart bidding. Wasted spend, eliminated.",
    slug: "performance",
  },
  {
    num: "04",
    title: "",
    titleEm: "Analytics",
    description:
      "Dashboards that translate campaign data into weekly decisions. ROAS by cohort, LTV by channel, server-side tagging.",
    slug: "analytics",
  },
  {
    num: "05",
    title: "Growth & Partnerships",
    description:
      "Influencers, affiliates, PR, events. Organic programs that compound over time and reduce your blended CAC.",
    slug: "growth",
  },
  {
    num: "06",
    title: "",
    titleEm: "Digital Environments",
    description:
      "Landing pages, checkout UX, onboarding flows. Built for conversion from pixel one — because great ads deserve great destinations.",
    slug: "environments",
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    num: "01 — Strategy",
    slug: "strategy",
    title: "Data-driven creative",
    titleHead: "solutions. ",
    titleEm: "Not intuition.",
    lead: "At Ordino, every project starts with data. We lay the foundation with market analysis, competitor research, and audience segmentation — then build the creative strategy on top. Campaigns grounded in real signals, not gut feel.",
    items: [
      "Account Audit",
      "Competitor Analysis",
      "Keyword Research",
      "Audience Architecture",
      "Attribution Modeling",
      "Budget Allocation",
      "Channel Mix Planning",
      "Go-to-Market Strategy",
    ],
  },
  {
    num: "02 — Creative",
    slug: "creative",
    title: "Creative tested",
    titleHead: "by ",
    titleEm: "performance.",
    lead: "The largest lever in paid media is the creative itself. We design copy, static, and motion around platform psychology — then test against live performance signals. No taste wars. Only what converts gets scaled.",
    items: [
      "Ad Copywriting",
      "Creative Direction",
      "Static & Carousel Ads",
      "Video & Motion Ads",
      "UGC Production",
      "A/B Testing Frameworks",
      "Brand Guidelines",
      "Landing Page Design",
    ],
  },
  {
    num: "03 — Performance Media",
    slug: "performance",
    title: "Machines do the math.",
    titleHead: "People do the ",
    titleEm: "thinking.",
    lead: "Our AI layer sits on top of the ad platforms — watching search terms, audience behavior, and creative fatigue in real time. Wasted spend gets cut. Winning signals get amplified. Your team stays focused on strategy, not manual optimization.",
    items: [
      "Search Term Intelligence",
      "Negative Keyword Automation",
      "Smart Bidding",
      "Quality Score Optimization",
      "Budget Pacing",
      "Creative Rotation",
      "Audience Expansion",
      "Platform-Native Features",
    ],
  },
  {
    num: "04 — Analytics",
    slug: "analytics",
    title: "Numbers that earn",
    titleHead: "their ",
    titleEm: "seat at the table.",
    lead: "Dashboards aren't decoration. We translate raw campaign data into weekly decisions — ROAS by cohort, funnel drop-off, LTV by channel — so every meeting starts with the same truth and ends with a clear next step.",
    items: [
      "Custom Dashboards",
      "Conversion Tracking",
      "Server-Side Tagging",
      "Multi-Touch Attribution",
      "Cohort Analysis",
      "LTV & Payback Models",
      "Executive Reporting",
      "Incrementality Testing",
    ],
  },
  {
    num: "05 — Growth & Partnerships",
    slug: "growth",
    title: "Paid is one lever.",
    titleHead: "We build the ",
    titleEm: "whole system.",
    lead: "Paid media wins the quarter. Partnerships, creators, and earned press win the next five years. We build the compounding programs — affiliate, influencer, PR, events — that lower your blended CAC and turn customers into advocates.",
    items: [
      "Influencer Partnerships",
      "Affiliate Programs",
      "PR & Media Outreach",
      "Event Production",
      "Community Building",
      "Referral Programs",
      "Email & CRM",
      "Loyalty Strategy",
    ],
  },
  {
    num: "06 — Digital Environments",
    slug: "environments",
    title: "Great ads deserve",
    titleHead: "",
    titleEm: "great destinations.",
    lead: "A brilliant ad lands on a weak page and the budget evaporates. We design, build, and optimize the pages, funnels, and flows that turn intent into revenue — mobile-first, built for conversion from pixel one.",
    items: [
      "Landing Page Design",
      "CRO (Conversion Rate Optimization)",
      "E-Commerce Optimization",
      "Checkout UX",
      "Email Automation",
      "Onboarding Flows",
      "Heatmap & Session Analysis",
      "Mobile Experience",
    ],
  },
];

export const analyticsPlatforms: string[] = [
  "Google Ads — Search, Shopping, Performance Max",
  "Meta Ads — Facebook, Instagram, Threads",
  "LinkedIn Ads — B2B & ABM",
  "TikTok Ads — Spark & Creator",
  "Amazon Advertising",
  "Programmatic — DV360, TTD",
  "GA4, Looker Studio, BigQuery",
];

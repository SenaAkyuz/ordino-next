export type CaseStudy = {
  slug: string;
  num: string;
  brand: string;
  title: string;
  titleEm: string;
  titleTail?: string;
  titleEm2?: string;
  lead: string;
  tags: { label: string; variant: "t1" | "t2" | "t3" | "t4" | "t5" }[];
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
    items: string[];
  };
  quote: {
    text: string;
    author: string;
    role: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "aiata",
    num: "Case Study 01",
    brand: "AIATA",
    title: "AIATA increased flight bookings by ",
    titleEm: "240%",
    titleTail: " and cut CPA by ",
    titleEm2: "58%.",
    lead: "AIATA's online booking business was growing — but paid acquisition costs were climbing faster than revenue. Ordino rebuilt the entire paid-media architecture around AI-driven search intelligence and converted wasted spend into measurable bookings.",
    tags: [
      { label: "Performance Media", variant: "t1" },
      { label: "AI Optimization", variant: "t2" },
      { label: "Travel", variant: "t3" },
    ],
    gradient: "linear-gradient(135deg, #0d3b2e 0%, #1a5c4a 50%, #2a7a5a 100%)",
    stats: [
      { value: "+240%", label: "Booking Conversion Rate" },
      { value: "58%", label: "CPA Reduction" },
      { value: "5.6×", label: "ROAS Improvement" },
    ],
    challenge: {
      head: "Rising CPAs in a ",
      headEm: "hyper-competitive travel market.",
      paragraphs: [
        "AIATA competed against global OTAs with much larger budgets and aggressive bidding strategies. Their Google Ads account had accumulated thousands of poorly performing search terms and broad-match keywords that drained budget without producing bookings.",
        "Attribution was unreliable, creative fatigue was unaddressed, and weekend campaign pacing frequently capped out before peak-booking hours.",
      ],
    },
    solution: {
      head: "AI-powered search term intelligence and ",
      headEm: "demand-responsive bidding.",
      paragraphs: [
        "We deployed Ordino's search-term intelligence layer to identify wasted spend in real time, automated negative-keyword lists based on booking conversion patterns, and restructured the account around a demand-based bidding model.",
      ],
      items: [
        "Rebuilt campaign structure around booking intent",
        "AI-driven negative keyword automation (updated daily)",
        "Smart Bidding with custom ROAS targets per route",
        "Dynamic creative rotation tied to seasonality signals",
        "Server-side conversion tracking with offline upload",
      ],
    },
    quote: {
      text: "Ordino didn't just optimize our ads — they rebuilt the way we think about paid growth. The numbers speak for themselves.",
      author: "Selin Aydın",
      role: "Head of Growth, AIATA",
    },
  },
  {
    slug: "gobritanya",
    num: "Case Study 02",
    brand: "GOBRITANYA",
    title: "GoBritanya generated ",
    titleEm: "5,400 qualified student leads",
    titleTail: " with 4.2× ROI.",
    lead: "An education-consultancy brand helping Turkish students study in the UK needed a lead engine that could qualify intent — not just fill the top of funnel. We built a full-funnel paid architecture aligned with their enrollment calendar.",
    tags: [
      { label: "Lead Generation", variant: "t2" },
      { label: "Multi-Channel", variant: "t4" },
      { label: "Education", variant: "t3" },
    ],
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    stats: [
      { value: "5,400+", label: "Qualified Student Leads" },
      { value: "4.2×", label: "Return On Ad Spend" },
      { value: "−43%", label: "Cost Per Qualified Lead" },
    ],
    challenge: {
      head: "Too many leads. Not enough ",
      headEm: "enrollments.",
      paragraphs: [
        "GoBritanya's previous campaigns generated volume, but sales teams were spending hours chasing students who were still early-stage researchers. Lead quality had no metric, and the CRM was full of dead contacts.",
        "The enrollment calendar demanded perfect pacing — peaks around September and February — but budgets were flat across the year.",
      ],
    },
    solution: {
      head: "Intent-scored lead qualification and ",
      headEm: "seasonal budget choreography.",
      paragraphs: [
        "We implemented a lead scoring model tied to CRM status, layered offline conversion uploads back into Google Ads Smart Bidding, and built a seasonal budget plan that front-loaded spend at high-intent moments.",
      ],
      items: [
        "CRM-integrated lead scoring (high / mid / low)",
        "Offline conversion imports for Smart Bidding",
        "Seasonal pacing aligned with UK academic calendar",
        "Creative testing by program category (MBA, bachelor, prep)",
        "Meta lead forms with dynamic prefill + instant WhatsApp handoff",
      ],
    },
    quote: {
      text: "For the first time, our sales team is spending time on students who actually enroll. Ordino made our pipeline real.",
      author: "Murat Yılmaz",
      role: "Marketing Director, GoBritanya",
    },
  },
  {
    slug: "yuva-maya",
    num: "Case Study 03",
    brand: "YUVA MAYA",
    title: "Yuva Maya grew property inquiries by ",
    titleEm: "312%",
    titleTail: " at 47% lower cost.",
    lead: "A real estate developer launching multiple residential projects needed a scalable acquisition system — one that could be turned on, off, and regionalized for each new project without rebuilding from scratch.",
    tags: [
      { label: "Real Estate", variant: "t4" },
      { label: "Programmatic", variant: "t2" },
      { label: "Local Targeting", variant: "t5" },
    ],
    gradient: "linear-gradient(135deg, #b28f6c 0%, #8b6f50 50%, #6e553d 100%)",
    stats: [
      { value: "+312%", label: "Property Inquiry Volume" },
      { value: "−47%", label: "Cost Per Inquiry" },
      { value: "8", label: "Projects Launched in 12 Months" },
    ],
    challenge: {
      head: "Every launch started from ",
      headEm: "zero.",
      paragraphs: [
        "Each new residential project was marketed as a one-off campaign with no shared infrastructure. Every launch meant rebuilding audiences, creative, landing pages, and attribution from scratch — burning budget and launch time.",
        "Regional targeting was crude, and high-intent micro-audiences (commuters, upgraders, investors) were indistinguishable from cold traffic.",
      ],
    },
    solution: {
      head: "A repeatable launch system with ",
      headEm: "modular audience segments.",
      paragraphs: [
        "We built a shared infrastructure — landing page template, audience stack, creative modules, reporting dashboards — that could be cloned for each new project in a single day.",
      ],
      items: [
        "Modular landing page template with project-specific variables",
        "Reusable high-intent audience stack (investors, commuters, families)",
        "Programmatic display with geofenced neighborhood targeting",
        "Dynamic creative adapting to project phase (pre-sale, construction, handover)",
        "Unified dashboard reporting by project + blended portfolio",
      ],
    },
    quote: {
      text: "We used to dread every launch. Now we look forward to the next one — everything just works.",
      author: "Ayşegül Demir",
      role: "CMO, Yuva Maya",
    },
  },
  {
    slug: "turkish-technic",
    num: "Case Study 04",
    brand: "TURKISH TECHNIC",
    title: "Turkish Technic built a ",
    titleEm: "6× pipeline",
    titleTail: " velocity in 8 months.",
    lead: "A global MRO (maintenance, repair, overhaul) provider needed to reach aviation procurement decision-makers in a category where digital acquisition is notoriously difficult. We built an ABM-led performance program designed for long sales cycles and tiny audiences.",
    tags: [
      { label: "B2B / ABM", variant: "t1" },
      { label: "LinkedIn", variant: "t4" },
      { label: "Aviation", variant: "t2" },
    ],
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #4a2080 100%)",
    stats: [
      { value: "6×", label: "Qualified Pipeline Velocity" },
      { value: "84", label: "Target Accounts Engaged" },
      { value: "$11M+", label: "Pipeline Influenced" },
    ],
    challenge: {
      head: "A tiny audience with an ",
      headEm: "enormous sales cycle.",
      paragraphs: [
        "The total addressable buying committee globally is measured in thousands — not millions. Digital acquisition in this space usually looks like awareness advertising with no meaningful conversion signal, because real buying happens at industry shows and direct relationships.",
      ],
    },
    solution: {
      head: "ABM-driven paid media with ",
      headEm: "sales intelligence at the core.",
      paragraphs: [
        "We built a target-account list with sales and ran LinkedIn, programmatic IP-based display, and paid search all scoped to those named accounts. Lead signals flowed back to sales in real time, and creative adapted to the decision-maker's role and airline region.",
      ],
      items: [
        "84 global target accounts mapped with buying committee roles",
        "LinkedIn sponsored content + message ads segmented by role",
        "IP-based display on trade publications and industry portals",
        "Intent signals routed to sales via Slack in < 30 seconds",
        "Creative localized for Europe / Middle East / Asia-Pacific markets",
      ],
    },
    quote: {
      text: "Ordino turned digital advertising into a real sales tool. Our BD team now waits for the Slack pings.",
      author: "Emre Öztürk",
      role: "VP Commercial, Turkish Technic",
    },
  },
  {
    slug: "turizm-bakanligi",
    num: "Case Study 05",
    brand: "TURİZM BAKANLIĞI",
    title: "Turizm Bakanlığı drove ",
    titleEm: "18M qualified impressions",
    titleTail: " and grew inbound search intent by 87%.",
    lead: "A destination-branding campaign designed to shift international perception and grow inbound tourism demand. We combined branded storytelling, performance search, and influencer-led social to produce measurable intent — not just reach.",
    tags: [
      { label: "Destination Brand", variant: "t3" },
      { label: "Global Media", variant: "t2" },
      { label: "Public Sector", variant: "t5" },
    ],
    gradient: "linear-gradient(135deg, #8b0000 0%, #a02020 50%, #c03030 100%)",
    stats: [
      { value: "18M+", label: "Qualified Impressions" },
      { value: "+87%", label: "Inbound Search Intent" },
      { value: "12", label: "International Markets Activated" },
    ],
    challenge: {
      head: "Brand awareness that actually ",
      headEm: "moves the needle.",
      paragraphs: [
        "Destination branding is traditionally measured in reach — not in decisions to travel. The ministry needed a campaign that could demonstrably shift international perception and generate measurable downstream demand, in a way that stood up to public accountability.",
      ],
    },
    solution: {
      head: "A three-layer demand engine: ",
      headEm: "story, search, social.",
      paragraphs: [
        "We layered branded storytelling (video, premium publishers) over performance search (capturing emerging intent) and creator-led social (amplifying through trusted local voices in 12 target markets). Incremental lift was measured with geo-matched market pairs.",
      ],
      items: [
        "Video storytelling on YouTube, Meta, TikTok + premium publishers",
        "Brand search capture across 12 languages",
        "Creator partnerships in each target market (250+ creators)",
        "Geo-matched incrementality testing for accountability",
        "Weekly media-mix reporting with attribution back to flight searches",
      ],
    },
    quote: {
      text: "For the first time, we could show policymakers a direct line from ad spend to economic impact. That changes everything.",
      author: "Dr. Kemal Yıldız",
      role: "Campaign Advisor, Ministry of Culture & Tourism",
    },
  },
];

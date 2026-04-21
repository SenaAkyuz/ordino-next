export type NewsPost = {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  gradient: string;
};

export const news: NewsPost[] = [
  {
    slug: "performance-max-transparency",
    date: "Mar 28, 2026",
    category: "Platform Update",
    title: "Google's Performance Max gets a transparency layer — finally.",
    excerpt:
      "What the new search-term visibility changes mean for marketers, and how to actually use the data.",
    gradient: "linear-gradient(135deg, #2c1810 0%, #5a3825 100%)",
  },
  {
    slug: "saas-cpa-47",
    date: "Mar 15, 2026",
    category: "Case Study",
    title: "How we cut a SaaS client's CPA by 47% in 60 days.",
    excerpt:
      "A teardown of a B2B account overhaul — from audience restructure to server-side tracking.",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
  },
  {
    slug: "negative-keyword-playbook",
    date: "Mar 02, 2026",
    category: "Playbook",
    title: "The negative keyword playbook we run every Monday.",
    excerpt:
      "A repeatable weekly workflow for killing wasted spend — with the AI prompts we actually use.",
    gradient: "linear-gradient(135deg, #b28f6c 0%, #8b6f50 100%)",
  },
  {
    slug: "stop-reporting-roas",
    date: "Feb 21, 2026",
    category: "Opinion",
    title: "Stop reporting on ROAS in isolation.",
    excerpt:
      "Why blended metrics, payback windows, and contribution margin belong in every weekly review.",
    gradient: "linear-gradient(135deg, #0d3b2e 0%, #2a7a5a 100%)",
  },
  {
    slug: "q1-creative-patterns",
    date: "Feb 08, 2026",
    category: "Creative",
    title: "Five ad-creative patterns that outperformed in Q1.",
    excerpt:
      "Cross-client analysis of the static and video patterns that consistently beat control this quarter.",
    gradient: "linear-gradient(135deg, #2d1b4e 0%, #4a2080 100%)",
  },
  {
    slug: "internal-ai-stack",
    date: "Jan 24, 2026",
    category: "Tooling",
    title: "Our internal AI stack, explained.",
    excerpt:
      "The models, prompts, and pipelines behind Ordino's search-term and creative intelligence systems.",
    gradient: "linear-gradient(135deg, #8b0000 0%, #c03030 100%)",
  },
  {
    slug: "meta-advantage-plus-2026",
    date: "Jan 10, 2026",
    category: "Industry",
    title: "Meta's advantage+ in 2026: where it wins, where it loses.",
    excerpt:
      "Six months of side-by-side tests across verticals, and what it means for your account structure.",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #333 100%)",
  },
  {
    slug: "seed-round",
    date: "Dec 18, 2025",
    category: "Announcement",
    title: "Ordino raises seed round to expand AI platform.",
    excerpt:
      "We're doubling the engineering team and opening a second office — here's what's next.",
    gradient: "linear-gradient(135deg, #4a0e2e 0%, #6b1a3a 100%)",
  },
  {
    slug: "server-side-tagging",
    date: "Dec 04, 2025",
    category: "Analytics",
    title: "Server-side tagging is not optional anymore.",
    excerpt:
      "A pragmatic guide to moving off client-side tracking — no jargon, just the steps.",
    gradient: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%)",
  },
];

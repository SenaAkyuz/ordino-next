import type { MetadataRoute } from "next";
import { caseStudiesConfig } from "@/lib/data/caseStudies";
import { newsConfig } from "@/lib/data/news";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";

const host = "https://theordino.com";

type Href = Parameters<typeof getPathname>[0]["href"];
type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

function entry(
  href: Href,
  priority: number,
  changeFrequency: ChangeFreq,
): MetadataRoute.Sitemap[number] {
  const url = host + getPathname({ locale: routing.defaultLocale, href });
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      host + getPathname({ locale, href }),
    ]),
  );
  return {
    url,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: { languages },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: Array<{
    href: Href;
    priority: number;
    changeFrequency: ChangeFreq;
  }> = [
    { href: "/", priority: 1.0, changeFrequency: "weekly" },
    { href: "/hizmetler", priority: 0.9, changeFrequency: "monthly" },
    { href: "/calisma", priority: 0.9, changeFrequency: "monthly" },
    { href: "/referanslar", priority: 0.9, changeFrequency: "monthly" },
    { href: "/platform", priority: 0.85, changeFrequency: "monthly" },
    { href: "/hakkimizda", priority: 0.85, changeFrequency: "monthly" },
    { href: "/iletisim", priority: 0.85, changeFrequency: "monthly" },
    { href: "/blog", priority: 0.8, changeFrequency: "weekly" },
    {
      href: "/iletisim/tesekkurler",
      priority: 0.3,
      changeFrequency: "yearly",
    },
    {
      href: "/gizlilik-politikasi",
      priority: 0.4,
      changeFrequency: "yearly",
    },
    { href: "/kvkk", priority: 0.4, changeFrequency: "yearly" },
    {
      href: "/cerez-politikasi",
      priority: 0.4,
      changeFrequency: "yearly",
    },
  ];

  const staticEntries = staticRoutes.map((r) =>
    entry(r.href, r.priority, r.changeFrequency),
  );

  const caseStudyEntries = caseStudiesConfig.map((cs) =>
    entry(
      { pathname: "/referanslar/[slug]", params: { slug: cs.slug } },
      0.7,
      "monthly",
    ),
  );

  const blogEntries = newsConfig.map((post) =>
    entry(
      { pathname: "/blog/[slug]", params: { slug: post.slug } },
      0.6,
      "monthly",
    ),
  );

  return [...staticEntries, ...caseStudyEntries, ...blogEntries];
}

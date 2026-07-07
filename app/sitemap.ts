import type { MetadataRoute } from "next";
import { caseStudiesConfig } from "@/lib/data/caseStudies";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import { getSitemapBlogEntries } from "@/lib/blog/getPosts";

const host = "https://www.theordino.com";

type Href = Parameters<typeof getPathname>[0]["href"];
type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

// Her sayfa için TR ve EN URL'lerini ayrı <url> kayıtları olarak üretir;
// her kayıt tüm dil varyantlarını karşılıklı hreflang alternate olarak listeler.
function entries(
  href: Href,
  priority: number,
  changeFrequency: ChangeFreq,
): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      host + getPathname({ locale, href }),
    ]),
  );
  return routing.locales.map((locale) => ({
    url: host + getPathname({ locale, href }),
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: { languages },
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: Array<{
    href: Href;
    priority: number;
    changeFrequency: ChangeFreq;
  }> = [
    { href: "/", priority: 1.0, changeFrequency: "weekly" },
    { href: "/hizmetler", priority: 0.9, changeFrequency: "monthly" },
    { href: "/calisma", priority: 0.9, changeFrequency: "monthly" },
    { href: "/referanslar", priority: 0.9, changeFrequency: "monthly" },
    { href: "/ai-showreels", priority: 0.85, changeFrequency: "monthly" },
    { href: "/platform", priority: 0.85, changeFrequency: "monthly" },
    { href: "/hakkimizda", priority: 0.85, changeFrequency: "monthly" },
    { href: "/iletisim", priority: 0.85, changeFrequency: "monthly" },
    { href: "/blog", priority: 0.8, changeFrequency: "weekly" },
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

  const staticEntries = staticRoutes.flatMap((r) =>
    entries(r.href, r.priority, r.changeFrequency),
  );

  const caseStudyEntries = caseStudiesConfig.flatMap((cs) =>
    entries(
      { pathname: "/referanslar/[slug]", params: { slug: cs.slug } },
      0.7,
      "monthly",
    ),
  );

  // Blog: URL kaynagi Sanity (yayinlanmis) + hardcoded, getSitemapBlogEntries ile.
  // TR her zaman, EN yalniz ceviri varsa; alternate'ler karsilikli (hreflang).
  const blogPosts = await getSitemapBlogEntries();
  const blogEntries: MetadataRoute.Sitemap = blogPosts.flatMap((post) => {
    const languages: Record<string, string> = { tr: post.trUrl };
    if (post.enUrl) languages.en = post.enUrl;
    const urls: MetadataRoute.Sitemap = [
      {
        url: post.trUrl,
        lastModified: post.lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages },
      },
    ];
    if (post.enUrl) {
      urls.push({
        url: post.enUrl,
        lastModified: post.lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages },
      });
    }
    return urls;
  });

  return [...staticEntries, ...caseStudyEntries, ...blogEntries];
}

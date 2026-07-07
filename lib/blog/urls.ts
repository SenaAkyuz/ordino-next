import { getPathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { BlogPost } from "./types";

// Sitemap ile birebir ayni host + getPathname konvansiyonu.
export const BLOG_HOST = "https://www.theordino.com";

function detailPath(locale: Locale, slug: string): string {
  return getPathname({
    locale,
    href: { pathname: "/blog/[slug]", params: { slug } },
  });
}

// Detay yazisi icin self/tr/en absolute URL'ler.
export function getBlogUrls(locale: Locale, post: BlogPost) {
  const trSlug = post.altSlugs?.tr ?? post.slug;
  const enSlug = post.altSlugs?.en ?? post.slug;
  const trUrl = BLOG_HOST + detailPath("tr", trSlug);
  const enUrl = BLOG_HOST + detailPath("en", enSlug);
  const selfUrl = locale === "tr" ? trUrl : enUrl;
  return { selfUrl, trUrl, enUrl };
}

// Liste sayfasi icin tr/en/self absolute URL'ler.
export function getBlogListUrls(locale: Locale) {
  const trUrl = BLOG_HOST + getPathname({ locale: "tr", href: "/blog" });
  const enUrl = BLOG_HOST + getPathname({ locale: "en", href: "/blog" });
  const selfUrl = locale === "tr" ? trUrl : enUrl;
  return { selfUrl, trUrl, enUrl };
}

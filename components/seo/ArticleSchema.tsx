import { site } from "@/lib/data/site";
import { BLOG_HOST } from "@/lib/blog/urls";
import type { Locale } from "@/i18n/routing";
import type { BlogPost } from "@/lib/blog/types";

type Props = {
  post: BlogPost;
  locale: Locale;
  url: string; // selfUrl (absolute)
};

// BlogPosting JSON-LD — server component, <script type="application/ld+json"> basar.
export function ArticleSchema({ post, locale, url }: Props) {
  const image =
    post.ogImageUrl || post.coverImageUrl || `${BLOG_HOST}${site.ogImage}`;
  const description = post.metaDescription || post.excerpt;
  const author = post.author || site.name;
  // "Ordino" iceren yazar adlari kurum, digerleri kisi.
  const authorIsOrg = author.toLowerCase().includes("ordino");

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: locale === "tr" ? "tr-TR" : "en-US",
    author: {
      "@type": authorIsOrg ? "Organization" : "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${BLOG_HOST}${site.ogImage}`,
      },
    },
  };

  if (description) schema.description = description;
  if (image) schema.image = [image];
  if (post.publishedAtISO) schema.datePublished = post.publishedAtISO;
  if (post.updatedAt || post.publishedAtISO) {
    schema.dateModified = post.updatedAt || post.publishedAtISO;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

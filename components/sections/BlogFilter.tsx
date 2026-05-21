"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { NEWS_CATEGORY_KEYS, type NewsPost } from "@/lib/data/news";

type BlogFilterProps = {
  posts: NewsPost[];
};

export function BlogFilter({ posts }: BlogFilterProps) {
  const t = useTranslations("blog");
  const allLabel = t("filter.all");
  const emptyMessage = t("filter.empty");
  const hoverLabel = t("filter.hoverLabel");

  const categoryButtons = useMemo(() => {
    const items = NEWS_CATEGORY_KEYS.map((key) => t(`categories.${key}`));
    return [allLabel, ...items];
  }, [t, allLabel]);

  const [activeCategory, setActiveCategory] = useState<string>(allLabel);

  const filteredPosts = useMemo(() => {
    if (activeCategory === allLabel) return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [posts, activeCategory, allLabel]);

  return (
    <section
      data-theme="light"
      className="bg-white px-5 py-[80px] md:px-10 md:py-[100px] lg:px-20"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mb-12 flex flex-wrap justify-center gap-2 md:mb-16 md:gap-3">
            {categoryButtons.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={
                  activeCategory === cat
                    ? "rounded-[10em] border border-black bg-black px-5 py-2 font-body text-[0.8rem] text-white transition-[background,color] duration-300 md:px-6 md:py-[10px]"
                    : "rounded-[10em] border border-[#ddd] bg-transparent px-5 py-2 font-body text-[0.8rem] text-black transition-[background,color,border-color] duration-300 hover:border-black md:px-6 md:py-[10px]"
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-x-10 md:gap-y-[50px] lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Reveal key={post.slug}>
              <Link
                href={{
                  pathname: "/blog/[slug]",
                  params: { slug: post.slug },
                }}
                className="group block"
              >
                <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden">
                  <div
                    className="h-full w-full transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                    style={{ background: post.gradient }}
                    aria-hidden="true"
                  />
                  {post.readTime && (
                    <span className="absolute right-3 top-3 inline-block rounded-full bg-black/40 px-3 py-1 font-body text-[0.7rem] text-white backdrop-blur-sm">
                      {post.readTime}
                    </span>
                  )}
                </div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-block rounded-full bg-accent/10 px-3 py-1 font-body text-[0.7rem] uppercase tracking-[1.5px] text-accent">
                    {post.category}
                  </span>
                  <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-gray">
                    {post.date}
                  </span>
                </div>
                <h3 className="mb-[14px] font-display text-[1.5rem] font-normal leading-[1.3] text-black transition-colors duration-300 group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mb-4 font-body text-[0.9rem] font-light leading-[1.7] text-[#666]">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 font-body text-[0.75rem] uppercase tracking-[1.5px] text-black transition-transform duration-300 group-hover:translate-x-1">
                  {hoverLabel}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="mt-12 text-center font-body text-base text-gray">
            {emptyMessage}
          </p>
        )}
      </div>
    </section>
  );
}

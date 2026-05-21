import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";
import type { NewsPost } from "@/lib/data/news";

type BlogPostProps = {
  post: NewsPost;
};

export async function BlogPost({ post }: BlogPostProps) {
  const t = await getTranslations("blog.post");
  const placeholderText = t("placeholderText");
  const isPlaceholder = !post.content || post.content === placeholderText;

  return (
    <article
      data-theme="light"
      className="bg-white px-5 pt-[140px] pb-[80px] md:px-10 md:pt-[160px] md:pb-[100px] lg:px-20"
    >
      <div className="mx-auto max-w-[800px]">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1 font-body text-[0.75rem] uppercase tracking-[1.5px] text-accent">
              {post.category}
            </span>
            <span className="font-body text-[0.85rem] uppercase tracking-[2px] text-gray">
              {post.date}
            </span>
            {post.readTime && (
              <span className="font-body text-[0.85rem] uppercase tracking-[2px] text-gray">
                · {post.readTime}
              </span>
            )}
          </div>
        </Reveal>

        <Reveal>
          <h1 className="mb-8 font-display text-[clamp(2.4rem,4.5vw,4rem)] font-light leading-[1.15] tracking-[-0.5px] text-black">
            {post.title}
          </h1>
        </Reveal>

        <Reveal>
          <div className="mb-12 flex items-center gap-4 border-y border-[#eee] py-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 font-display text-[1.1rem] text-accent">
              OE
            </div>
            <div>
              <p className="font-body text-[0.95rem] font-medium text-black">
                {post.author}
              </p>
              {post.authorRole && (
                <p className="font-body text-[0.8rem] font-light text-gray">
                  {post.authorRole}
                </p>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="mb-12 aspect-[16/9] w-full overflow-hidden rounded-[4px]"
            style={{ background: post.gradient }}
            aria-hidden="true"
          />
        </Reveal>

        <Reveal>
          <p className="mb-12 font-display text-[clamp(1.2rem,1.6vw,1.4rem)] font-light italic leading-[1.5] text-[#444]">
            {post.excerpt}
          </p>
        </Reveal>

        <Reveal>
          <div className="font-body text-base font-light leading-[1.9] text-[#333]">
            {isPlaceholder ? (
              <div className="my-12 rounded-[8px] border border-dashed border-[#ddd] bg-light-bg p-10 text-center">
                <p className="mb-3 font-display text-[1.2rem] text-black">
                  {t("placeholderTitle")}
                </p>
                <p className="font-body text-[0.9rem] font-light text-gray">
                  {t("placeholderBody")}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {post.content!.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </article>
  );
}

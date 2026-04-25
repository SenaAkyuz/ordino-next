import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import type { NewsPost } from "@/lib/data/news";

type RelatedPostsProps = {
  posts: NewsPost[];
};

export function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <section
      data-theme="light"
      className="border-t border-[#eee] bg-light-bg px-5 py-[80px] md:px-10 md:py-[100px] lg:px-20"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="mb-12 font-display text-[clamp(1.8rem,2.8vw,2.6rem)] font-light leading-[1.2] [&_em]:italic [&_em]:font-normal">
            Bu yazıyı sevdiyseniz, <em>bunlara da göz atın.</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {posts.map((post) => (
            <Reveal key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative mb-5 aspect-[4/3] w-full overflow-hidden rounded-[4px]">
                  <div
                    className="h-full w-full transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                    style={{ background: post.gradient }}
                    aria-hidden="true"
                  />
                </div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-block rounded-full bg-accent/10 px-3 py-1 font-body text-[0.7rem] uppercase tracking-[1.5px] text-accent">
                    {post.category}
                  </span>
                  <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-gray">
                    {post.date}
                  </span>
                </div>
                <h4 className="mb-2 font-display text-[1.2rem] font-normal leading-[1.3] text-black transition-colors duration-300 group-hover:text-accent">
                  {post.title}
                </h4>
                <p className="font-body text-[0.85rem] font-light leading-[1.6] text-[#666] line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

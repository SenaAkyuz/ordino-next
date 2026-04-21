import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import type { NewsPost } from "@/lib/data/news";

type NewsGridProps = {
  posts: NewsPost[];
};

export function NewsGrid({ posts }: NewsGridProps) {
  return (
    <section className="bg-white px-5 py-[100px] md:px-10 md:py-[140px] lg:px-20 lg:py-[160px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-x-10 md:gap-y-[50px] lg:grid-cols-3">
          {posts.map((post) => (
            <Reveal key={post.slug}>
              <Link href={`/news/${post.slug}`} className="group block">
                <div className="mb-6 aspect-[4/3] w-full overflow-hidden">
                  <div
                    className="h-full w-full transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                    style={{ background: post.gradient }}
                    aria-hidden="true"
                  />
                </div>
                <p className="mb-3 font-body text-[0.75rem] uppercase tracking-[2px] text-gray">
                  {post.date} — {post.category}
                </p>
                <h3 className="mb-[14px] font-display text-[1.5rem] font-normal leading-[1.3] text-black">
                  {post.title}
                </h3>
                <p className="font-body text-[0.9rem] font-light leading-[1.7] text-[#666]">
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

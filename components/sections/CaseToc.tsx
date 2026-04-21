import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

type CaseTocProps = {
  items: { slug: string; label: string }[];
};

export function CaseToc({ items }: CaseTocProps) {
  return (
    <section className="border-b border-[#eee] bg-white px-5 pb-20 pt-8 md:px-10 lg:px-20">
      <Reveal>
        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-4">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`#${item.slug}`}
              className="rounded-[10em] border border-[#ddd] bg-transparent px-6 py-[10px] font-body text-[0.85rem] font-normal text-black transition-[background,color,border-color] duration-300 hover:border-black hover:bg-black hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

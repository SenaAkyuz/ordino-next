import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import type { Leader } from "@/lib/data/team";

type LeadershipProps = {
  eyebrow?: string;
  lead?: string;
  leader: Leader;
};

export function Leadership({
  eyebrow = "Leadership",
  lead,
  leader,
}: LeadershipProps) {
  return (
    <section className="bg-light-bg px-5 py-[100px] md:px-10 md:py-[140px] lg:px-20 lg:py-[160px]">
      {lead && (
        <div className="mx-auto mb-12 grid max-w-[1200px] grid-cols-1 gap-10 md:mb-[70px] md:grid-cols-[200px_1fr] md:gap-[60px]">
          <Reveal>
            <p className="pt-[6px] font-body text-[0.75rem] uppercase tracking-[4px] text-gray">
              {eyebrow}
            </p>
          </Reveal>
          <Reveal>
            <p className="max-w-[640px] font-body text-[clamp(1.05rem,1.4vw,1.25rem)] font-light leading-[1.55] text-black">
              {lead}
            </p>
          </Reveal>
        </div>
      )}

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.2fr] md:gap-[100px]">
        <Reveal>
          <div className="group aspect-[4/5] max-h-[620px] overflow-hidden">
            <div
              className="flex h-full w-full items-center justify-center font-display text-[4rem] text-white/70 transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
              style={{ background: leader.gradient }}
              aria-hidden="true"
            >
              {leader.initials}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <h3 className="mb-[10px] font-display text-[clamp(2rem,3.2vw,2.8rem)] font-light tracking-[-0.5px] text-black">
            {leader.name}
          </h3>
          <p className="mb-5 font-body text-[0.85rem] uppercase tracking-[2px] text-gray">
            {leader.role}
          </p>
          <p className="mt-5 font-body text-[0.95rem] font-light leading-[1.8] text-[#555]">
            {leader.bio}
          </p>
          {(leader.email || leader.linkedin) && (
            <div className="mt-7 flex flex-wrap gap-[14px]">
              {leader.email && (
                <a
                  href={`mailto:${leader.email}`}
                  className="inline-flex items-center justify-center rounded-[10em] border border-black bg-transparent px-[22px] py-[10px] font-body text-[0.78rem] text-black transition-[background,color] duration-500 hover:bg-black hover:text-white"
                >
                  {leader.email}
                </a>
              )}
              {leader.linkedin && (
                <Link
                  href={leader.linkedin}
                  className="inline-flex items-center justify-center rounded-[10em] border border-black bg-transparent px-[22px] py-[10px] font-body text-[0.78rem] text-black transition-[background,color] duration-500 hover:bg-black hover:text-white"
                >
                  LinkedIn →
                </Link>
              )}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

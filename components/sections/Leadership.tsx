import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import type { Leader } from "@/lib/data/team";

type LeadershipProps = {
  eyebrow?: string;
  lead?: string;
  leaders: Leader[];
};

export function Leadership({
  eyebrow = "Yönetim Kadrosu",
  lead,
  leaders,
}: LeadershipProps) {
  return (
    <section
      data-theme="light"
      className="bg-light-bg px-5 py-[100px] md:px-10 md:py-[140px] lg:px-20 lg:py-[160px]"
    >
      <div className="mx-auto max-w-[1300px]">
        <div className="mx-auto mb-16 grid max-w-[1200px] grid-cols-1 gap-10 md:mb-20 md:grid-cols-[200px_1fr] md:gap-[60px]">
          <Reveal>
            <p className="pt-[6px] font-body text-[0.75rem] uppercase tracking-[4px] text-gray">
              {eyebrow}
            </p>
          </Reveal>
          {lead && (
            <Reveal>
              <p className="max-w-[640px] font-body text-[clamp(1.05rem,1.4vw,1.25rem)] font-light leading-[1.55] text-black">
                {lead}
              </p>
            </Reveal>
          )}
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {leaders.map((leader) => (
            <Reveal key={leader.name}>
              <div className="group">
                <div className="relative mb-6 aspect-square w-full overflow-hidden">
                  {leader.photo ? (
                    <Image
                      src={leader.photo}
                      alt={leader.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full items-center justify-center font-display text-[3.5rem] font-light text-white/70 transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                      style={{ background: leader.gradient }}
                      aria-hidden="true"
                    >
                      {leader.initials}
                    </div>
                  )}
                </div>
                <h3 className="mb-2 font-display text-[1.4rem] font-normal leading-[1.3] text-black">
                  {leader.name}
                </h3>
                <p className="mb-4 font-body text-[0.78rem] uppercase tracking-[1.5px] text-gray">
                  {leader.role}
                </p>
                {leader.bio && (
                  <p className="mb-5 font-body text-[0.85rem] font-light leading-[1.7] text-[#555]">
                    {leader.bio}
                  </p>
                )}
                {leader.linkedin && (
                  <Link
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-body text-[0.78rem] uppercase tracking-[1.5px] text-black transition-opacity duration-300 hover:opacity-70"
                  >
                    LinkedIn →
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

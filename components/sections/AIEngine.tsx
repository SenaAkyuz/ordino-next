import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    num: "Step 01",
    title: "Ingest",
    text: "Every fifteen minutes the engine pulls impression, click, conversion, and cost data from every platform you've connected. Nothing gets sampled — we read the full account.",
  },
  {
    num: "Step 02",
    title: "Reason",
    text: "A model trained on two hundred and thirty client accounts ranks every active asset by its contribution to your actual business metric — not the platform's proxy score.",
  },
  {
    num: "Step 03",
    title: "Act",
    text: "Budget shifts, pauses, negative keyword pushes, creative rotations — executed automatically inside your platform accounts, with a full audit trail you can roll back in one click.",
  },
  {
    num: "Step 04",
    title: "Report",
    text: "Every action is logged in plain language. Your Monday report writes itself: what was changed, why, and how it moved the numbers.",
  },
];

export function AIEngine() {
  return (
    <section
      id="ai-engine"
      className="relative overflow-hidden border-t border-white/[0.06] bg-dark-bg-2 px-5 py-[100px] text-white md:px-10 md:py-[140px] lg:px-20"
    >
      <div
        className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_80%_20%,rgba(178,143,108,0.12),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="relative z-[1] mx-auto max-w-[1300px]">
        <div className="mb-20 text-center md:mb-[100px]">
          <Reveal>
            <p className="mb-5 font-body text-[0.72rem] font-medium uppercase tracking-[4px] text-white/50">
              The AI Engine
            </p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] font-light leading-[1.08] tracking-[-1px] text-white [&_em]:italic [&_em]:font-normal [&_em]:text-accent">
              How the <em>brain</em> works.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {steps.map((s) => (
            <Reveal key={s.num}>
              <div className="border-t border-white/15 pt-10">
                <p className="mb-5 font-body text-[0.7rem] font-medium uppercase tracking-[3px] text-accent">
                  {s.num}
                </p>
                <h4 className="mb-[18px] font-display text-[1.75rem] font-normal tracking-[-0.3px] text-white">
                  {s.title}
                </h4>
                <p className="font-body text-[0.88rem] font-light leading-[1.75] text-white/55">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/Reveal";

const roles = [
  "Founder / CEO",
  "CMO / Marketing Lead",
  "Growth / Performance Lead",
  "Brand / Creative Lead",
  "Agency Partner",
  "Other",
];

const industries = [
  "E-Commerce / DTC",
  "SaaS / Software",
  "Travel / Hospitality",
  "Education",
  "Real Estate",
  "Finance / Fintech",
  "Healthcare",
  "B2B / Industrial",
  "Public Sector",
  "Other",
];

const services = [
  "Strategy & Audit",
  "Performance Media",
  "Creative & Production",
  "Analytics & Attribution",
  "Growth & Partnerships",
  "CRO / Landing Pages",
  "Full-Service Partnership",
];

const timings = [
  "We need to start ASAP",
  "Within the next month",
  "3+ months out",
  "Just exploring",
];

const budgets = [
  "Under $10k",
  "$10k — $50k",
  "$50k — $250k",
  "$250k — $1M",
  "$1M+",
];

const inputClass =
  "w-full border-0 border-b border-[#ddd] bg-transparent py-[14px] font-body text-base font-light text-black outline-none transition-colors duration-300 focus:border-b-accent";
const labelClass =
  "mb-[10px] block font-body text-[0.75rem] font-medium uppercase tracking-[2px] text-gray";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="form"
      data-theme="light"
      className="bg-white px-5 py-[100px] md:px-10 md:py-[120px] lg:px-20 lg:py-[140px]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-16 md:grid-cols-[1fr_1.2fr] md:gap-[100px]">
        <Reveal>
          <div>
            <h3 className="mb-[30px] font-display text-[1.8rem] font-normal [&_em]:italic [&_em]:font-normal">
              Start the <em>conversation.</em>
            </h3>
            <InfoBlock label="New Business">
              <a
                href="mailto:info@theordino.com"
                className="block font-body text-base font-light leading-[1.6] text-black transition-colors hover:text-accent"
              >
                info@theordino.com
              </a>
            </InfoBlock>
            <InfoBlock label="Careers">
              <a
                href="mailto:careers@theordino.com"
                className="block font-body text-base font-light leading-[1.6] text-black transition-colors hover:text-accent"
              >
                careers@theordino.com
              </a>
            </InfoBlock>
            <InfoBlock label="Phone">
              <a
                href="tel:+905352946540"
                className="block font-body text-base font-light leading-[1.6] text-black transition-colors hover:text-accent"
              >
                +90 535 294 65 40
              </a>
            </InfoBlock>
            <InfoBlock label="Studio">
              <p className="block font-body text-base font-light leading-[1.6] text-black">
                Ferko Signature Plaza, A Blok
                <br />
                Büyükdere Caddesi No: 175, Esentepe
                <br />
                34394 Şişli / Istanbul — Turkey
              </p>
            </InfoBlock>
            <InfoBlock label="Hours">
              <p className="block font-body text-base font-light leading-[1.6] text-black">
                Monday — Friday
                <br />
                09:00 — 19:00 (GMT+3)
              </p>
            </InfoBlock>
            <InfoBlock label="Follow">
              {["Instagram", "LinkedIn", "X / Twitter"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="block font-body text-base font-light leading-[1.6] text-black transition-colors hover:text-accent"
                >
                  {label}
                </a>
              ))}
            </InfoBlock>
          </div>
        </Reveal>

        <Reveal>
          {submitted ? (
            <div className="flex h-full flex-col justify-center rounded-[4px] border border-[#eaeaea] bg-light-bg p-10">
              <h4 className="mb-4 font-display text-[1.5rem] font-normal">
                Thanks — we&rsquo;ll be in touch within one business day.
              </h4>
              <p className="font-body text-[0.95rem] font-light text-[#666]">
                Your brief is in our inbox. We&rsquo;ll reply with next steps shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <p className="mb-[10px] font-body text-[0.95rem] font-light leading-[1.6] text-[#666]">
                Submit a quick brief — we&rsquo;ll reply within one business day.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field id="name" label="Your Name">
                  <input type="text" id="name" name="name" required className={inputClass} />
                </Field>
                <Field id="company" label="Company">
                  <input type="text" id="company" name="company" required className={inputClass} />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field id="email" label="Email">
                  <input type="email" id="email" name="email" required className={inputClass} />
                </Field>
                <Field id="phone" label="Phone (optional)">
                  <input type="tel" id="phone" name="phone" className={inputClass} />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field id="role" label="Your Role">
                  <select id="role" name="role" defaultValue="" className={inputClass}>
                    <option value="">Select a role…</option>
                    {roles.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </Field>
                <Field id="industry" label="Industry">
                  <select id="industry" name="industry" defaultValue="" className={inputClass}>
                    <option value="">Select an industry…</option>
                    {industries.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <div>
                <label className={labelClass}>
                  Desired Services{" "}
                  <span className="ml-[6px] text-[0.65rem] font-light tracking-[1px] normal-case text-gray">
                    (select all that apply)
                  </span>
                </label>
                <div className="mt-1 flex flex-wrap gap-[10px]">
                  {services.map((s) => (
                    <label key={s} className="relative cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="services"
                        value={s}
                        className="peer pointer-events-none absolute opacity-0"
                      />
                      <span className="inline-block rounded-[10em] border border-[#ddd] bg-transparent px-5 py-[10px] font-body text-[0.85rem] text-black transition-[background,color,border-color] duration-300 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                        {s}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field id="timing" label="Timing">
                  <select id="timing" name="timing" defaultValue="" className={inputClass}>
                    <option value="">Select timing…</option>
                    {timings.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </Field>
                <Field id="budget" label="Monthly Ad Budget">
                  <select id="budget" name="budget" defaultValue="" className={inputClass}>
                    <option value="">Select a range…</option>
                    {budgets.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field id="message" label="Tell us about your project">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Goals, timelines, current stack, biggest challenge…"
                  className={`${inputClass} min-h-[120px] resize-y`}
                />
              </Field>

              <div className="mt-[10px] flex flex-wrap items-center justify-between gap-[30px]">
                <button
                  type="submit"
                  className="self-start cursor-pointer rounded-[10em] border border-black bg-white px-12 py-4 font-body text-[0.95rem] font-normal text-black transition-[background,color] duration-[400ms] hover:bg-black hover:text-white"
                >
                  Send Message
                </button>
                <p className="m-0 max-w-[280px] font-body text-[0.78rem] font-light leading-[1.5] text-gray">
                  By submitting, you agree to our{" "}
                  <a
                    href="#"
                    className="border-b border-[#ccc] text-black transition-colors hover:border-black"
                  >
                    Privacy Policy
                  </a>
                  . No spam — just one real reply.
                </p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function InfoBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <h5 className="mb-3 font-body text-[0.75rem] font-medium uppercase tracking-[2px] text-gray">
        {label}
      </h5>
      {children}
    </div>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}

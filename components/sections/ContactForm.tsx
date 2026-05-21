"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";

const INDUSTRY_KEYS = [
  "ecommerce",
  "saas",
  "travel",
  "education",
  "realEstate",
  "finance",
  "healthcare",
  "b2b",
  "publicSector",
  "other",
] as const;

const SERVICE_KEYS = [
  "strategy",
  "performance",
  "creative",
  "analytics",
  "growth",
  "cro",
  "fullService",
] as const;

const TIMING_KEYS = [
  "immediate",
  "withinMonth",
  "threePlus",
  "exploring",
] as const;

const BUDGET_KEYS = ["tier1", "tier2", "tier3", "tier4", "tier5"] as const;

const inputClass =
  "w-full border-0 border-b border-[#ddd] bg-transparent py-[14px] font-body text-base font-light text-black outline-none transition-colors duration-300 focus:border-b-accent disabled:opacity-60";
const labelClass =
  "mb-[10px] block font-body text-[0.75rem] font-medium uppercase tracking-[2px] text-gray";

type Status = "idle" | "pending" | "success";

export function ContactForm() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("contact");
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const dismissRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (dismissRef.current !== null) {
        window.clearTimeout(dismissRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;

    const formData = new FormData(e.currentTarget);

    const payload = {
      firstName: (formData.get("firstName") as string)?.trim(),
      lastName: (formData.get("lastName") as string)?.trim(),
      email: (formData.get("email") as string)?.trim(),
      phone: (formData.get("phone") as string)?.trim(),
      company: (formData.get("company") as string)?.trim() || undefined,
      sector: (formData.get("sector") as string) || undefined,
      services: formData.getAll("services") as string[],
      timing: (formData.get("timing") as string) || undefined,
      budget: (formData.get("budget") as string) || undefined,
      message: (formData.get("message") as string)?.trim() || undefined,
    };

    setStatus("pending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Submit failed (${res.status})`);
      }

      const thanksPath =
        locale === "en" ? "/en/contact/thank-you" : "/iletisim/tesekkurler";
      router.push(thanksPath);
    } catch (error) {
      console.error("[contact-form] error:", error);
      setStatus("idle");
      if (typeof window !== "undefined") {
        window.alert(t("errors.generic"));
      }
    }
  };

  return (
    <section
      id="contact-form"
      data-theme="light"
      className="bg-white px-5 py-[100px] md:px-10 md:py-[120px] lg:px-20 lg:py-[140px]"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-16 md:grid-cols-[1fr_1.2fr] md:gap-[100px]">
        <Reveal>
          <div>
            <h3 className="mb-[30px] font-display text-[1.8rem] font-normal [&_em]:italic [&_em]:font-normal">
              {t("headline.lead")} <em>{t("headline.highlight")}</em>
            </h3>
            <InfoBlock label={t("sideInfo.newBusiness")}>
              <a
                href="mailto:theordino.com"
                className="block font-body text-base font-light leading-[1.6] text-black transition-colors hover:text-accent"
              >
                theordino.com
              </a>
            </InfoBlock>
            <InfoBlock label={t("sideInfo.careers")}>
              <a
                href="mailto:info@theordino.com"
                className="block font-body text-base font-light leading-[1.6] text-black transition-colors hover:text-accent"
              >
                info@theordino.com
              </a>
            </InfoBlock>
            <InfoBlock label={t("sideInfo.phone")}>
              <a
                href="tel:+902129967147"
                className="block font-body text-base font-light leading-[1.6] text-black transition-colors hover:text-accent"
              >
                0212 996 71 47
              </a>
            </InfoBlock>
            <InfoBlock label={t("sideInfo.studio")}>
              <p className="block font-body text-base font-light leading-[1.6] text-black">
                Ferko Signature Plaza, A Blok
                <br />
                Büyükdere Caddesi No: 175, Esentepe
                <br />
                34394 Şişli / Istanbul — Türkiye
              </p>
            </InfoBlock>
            <InfoBlock label={t("sideInfo.officeHours")}>
              <p className="block font-body text-base font-light leading-[1.6] text-black">
                {t("sideInfo.weekdays")}
                <br />
                {t("sideInfo.hours")}
              </p>
            </InfoBlock>
            <InfoBlock label={t("sideInfo.follow")}>
              {["Instagram", "LinkedIn"].map((label) => (
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
          <div className="relative">
            <div
              role="status"
              aria-live="polite"
              className={`absolute inset-0 flex flex-col justify-center rounded-[4px] border border-[#d8e5d4] bg-[#f3f8f0] p-10 transition-opacity duration-500 ${
                status === "success"
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#3b8b4a] text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12.5l4.5 4.5L19 7"
                    />
                  </svg>
                </span>
                <h4 className="font-display text-[1.5rem] font-normal text-black">
                  {t("buttons.successTitle")}
                </h4>
              </div>
              <p className="font-body text-[0.95rem] font-light leading-[1.6] text-[#3b5e42]">
                {t("buttons.successBody")}
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={`flex flex-col gap-7 transition-opacity duration-500 ${
                status === "success" ? "opacity-0" : "opacity-100"
              }`}
              aria-hidden={status === "success"}
            >
              <fieldset disabled={status !== "idle"} className="contents">
                <p className="mb-[10px] font-body text-[0.95rem] font-light leading-[1.6] text-[#666]">
                  {t("intro")}
                </p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field id="firstName" label={t("fields.firstName")}>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className={inputClass}
                    />
                  </Field>
                  <Field id="lastName" label={t("fields.lastName")}>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field id="email" label={t("fields.email")}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={inputClass}
                    />
                  </Field>
                  <Field id="phone" label={t("fields.phone")}>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field id="company" label={t("fields.company")}>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className={inputClass}
                    />
                  </Field>
                  <Field id="industry" label={t("fields.industry")}>
                    <select
                      id="industry"
                      name="sector"
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="">{t("placeholders.industry")}</option>
                      {INDUSTRY_KEYS.map((key) => (
                        <option key={key} value={key}>
                          {t(`industryOptions.${key}`)}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div>
                  <label className={labelClass}>
                    {t("fields.services")}{" "}
                    <span className="ml-[6px] text-[0.65rem] font-light tracking-[1px] normal-case text-gray">
                      {t("fields.servicesHint")}
                    </span>
                  </label>
                  <div className="mt-1 flex flex-wrap gap-[10px]">
                    {SERVICE_KEYS.map((key) => (
                      <label
                        key={key}
                        className="relative cursor-pointer select-none"
                      >
                        <input
                          type="checkbox"
                          name="services"
                          value={key}
                          className="peer pointer-events-none absolute opacity-0"
                        />
                        <span className="inline-block rounded-[10em] border border-[#ddd] bg-transparent px-5 py-[10px] font-body text-[0.85rem] text-black transition-[background,color,border-color] duration-300 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                          {t(`serviceOptions.${key}`)}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field id="timing" label={t("fields.timing")}>
                    <select
                      id="timing"
                      name="timing"
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="">{t("placeholders.timing")}</option>
                      {TIMING_KEYS.map((key) => (
                        <option key={key} value={key}>
                          {t(`timingOptions.${key}`)}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field id="budget" label={t("fields.budget")}>
                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="">{t("placeholders.budget")}</option>
                      {BUDGET_KEYS.map((key) => (
                        <option key={key} value={key}>
                          {t(`budgetOptions.${key}`)}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field id="message" label={t("fields.message")}>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={t("placeholders.message")}
                    className={`${inputClass} min-h-[120px] resize-y`}
                  />
                </Field>

                <div className="mt-[10px] flex flex-wrap items-center justify-between gap-[30px]">
                  <button
                    type="submit"
                    disabled={status !== "idle"}
                    className="self-start cursor-pointer rounded-[10em] border border-black bg-white px-12 py-4 font-body text-[0.95rem] font-normal text-black transition-[background,color] duration-[400ms] hover:bg-black hover:text-white disabled:cursor-wait disabled:opacity-70 disabled:hover:bg-white disabled:hover:text-black"
                  >
                    {status === "pending"
                      ? t("buttons.submitting")
                      : t("buttons.submit")}
                  </button>
                  <p className="m-0 max-w-[280px] font-body text-[0.78rem] font-light leading-[1.5] text-gray">
                    {t("privacy.prefix")}{" "}
                    <a
                      href="/gizlilik-politikasi"
                      className="border-b border-[#ccc] text-black transition-colors hover:border-black"
                    >
                      {t("privacy.linkText")}
                    </a>
                    {t("privacy.suffix")}
                  </p>
                </div>
              </fieldset>
            </form>
          </div>
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

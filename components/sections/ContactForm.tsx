"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";

const roles = [
  "Kurucu / CEO",
  "CMO / Pazarlama Direktörü",
  "Büyüme / Performans Lideri",
  "Marka / Yaratıcı Direktör",
  "Ajans Ortağı",
  "Diğer",
];

const industries = [
  "E-Ticaret / DTC",
  "SaaS / Yazılım",
  "Seyahat / Konaklama",
  "Eğitim",
  "Gayrimenkul",
  "Finans / Fintech",
  "Sağlık",
  "B2B / Endüstriyel",
  "Kamu Sektörü",
  "Diğer",
];

const services = [
  "Strateji & Denetim",
  "Performans Medya",
  "Yaratıcı & Prodüksiyon",
  "Analitik & Atribüsyon",
  "Büyüme & Ortaklıklar",
  "CRO / Landing Page",
  "Tam Servis Ortaklığı",
];

const timings = [
  "Hemen başlamamız gerek",
  "Önümüzdeki ay içinde",
  "3+ ay sonra",
  "Sadece keşfediyoruz",
];

const budgets = [
  "10.000 TL altı",
  "10.000 — 50.000 TL",
  "50.000 — 250.000 TL",
  "250.000 — 1M TL",
  "1M TL üzeri",
];

const inputClass =
  "w-full border-0 border-b border-[#ddd] bg-transparent py-[14px] font-body text-base font-light text-black outline-none transition-colors duration-300 focus:border-b-accent disabled:opacity-60";
const labelClass =
  "mb-[10px] block font-body text-[0.75rem] font-medium uppercase tracking-[2px] text-gray";

type Status = "idle" | "pending" | "success";

export function ContactForm() {
  const router = useRouter();
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // eslint-disable-next-line no-console
    console.log("[contact-form] submitted:", data);

    setStatus("pending");
    window.setTimeout(() => {
      router.push("/iletisim/tesekkurler");
    }, 600);
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
              Görüşmeyi <em>başlatalım.</em>
            </h3>
            <InfoBlock label="Yeni İş">
              <a
                href="mailto:theordino.com"
                className="block font-body text-base font-light leading-[1.6] text-black transition-colors hover:text-accent"
              >
                theordino.com
              </a>
            </InfoBlock>
            <InfoBlock label="Kariyer">
              <a
                href="mailto:careers@theordino.com"
                className="block font-body text-base font-light leading-[1.6] text-black transition-colors hover:text-accent"
              >
                careers@theordino.com
              </a>
            </InfoBlock>
            <InfoBlock label="Telefon">
              <a
                href="tel:+902129967174"
                className="block font-body text-base font-light leading-[1.6] text-black transition-colors hover:text-accent"
              >
                +90 212 996 71 74
              </a>
            </InfoBlock>
            <InfoBlock label="Stüdyo">
              <p className="block font-body text-base font-light leading-[1.6] text-black">
                Ferko Signature Plaza, A Blok
                <br />
                Büyükdere Caddesi No: 175, Esentepe
                <br />
                34394 Şişli / Istanbul — Türkiye
              </p>
            </InfoBlock>
            <InfoBlock label="Çalışma Saatleri">
              <p className="block font-body text-base font-light leading-[1.6] text-black">
                Pazartesi — Cuma
                <br />
                09:00 — 19:00 (GMT+3)
              </p>
            </InfoBlock>
            <InfoBlock label="Takip Et">
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
                  Mesajınız alındı.
                </h4>
              </div>
              <p className="font-body text-[0.95rem] font-light leading-[1.6] text-[#3b5e42]">
                Teşekkürler — kısa süre içinde dönüş yapacağız.
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
              <fieldset
                disabled={status !== "idle"}
                className="contents"
              >
                <p className="mb-[10px] font-body text-[0.95rem] font-light leading-[1.6] text-[#666]">
                  Kısa bir brief gönderin — bir iş günü içinde dönüş yapacağız.
                </p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field id="name" label="Adınız">
                    <input type="text" id="name" name="name" required className={inputClass} />
                  </Field>
                  <Field id="company" label="Şirket">
                    <input type="text" id="company" name="company" required className={inputClass} />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field id="email" label="E-posta">
                    <input type="email" id="email" name="email" required className={inputClass} />
                  </Field>
                  <Field id="phone" label="Telefon (opsiyonel)">
                    <input type="tel" id="phone" name="phone" className={inputClass} />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Field id="role" label="Pozisyonunuz">
                    <select id="role" name="role" defaultValue="" className={inputClass}>
                      <option value="">Pozisyon seçin…</option>
                      {roles.map((r) => (
                        <option key={r}>{r}</option>
                      ))}
                    </select>
                  </Field>
                  <Field id="industry" label="Sektör">
                    <select id="industry" name="industry" defaultValue="" className={inputClass}>
                      <option value="">Sektör seçin…</option>
                      {industries.map((r) => (
                        <option key={r}>{r}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div>
                  <label className={labelClass}>
                    İstenen Hizmetler{" "}
                    <span className="ml-[6px] text-[0.65rem] font-light tracking-[1px] normal-case text-gray">
                      (uygun olanları seçin)
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
                  <Field id="timing" label="Zamanlama">
                    <select id="timing" name="timing" defaultValue="" className={inputClass}>
                      <option value="">Zamanlama seçin…</option>
                      {timings.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                  <Field id="budget" label="Aylık Reklam Bütçesi">
                    <select id="budget" name="budget" defaultValue="" className={inputClass}>
                      <option value="">Aralık seçin…</option>
                      {budgets.map((b) => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field id="message" label="Projeniz hakkında bize bilgi verin">
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Hedefler, zamanlama, mevcut araçlar, en büyük zorluk…"
                    className={`${inputClass} min-h-[120px] resize-y`}
                  />
                </Field>

                <div className="mt-[10px] flex flex-wrap items-center justify-between gap-[30px]">
                  <button
                    type="submit"
                    disabled={status !== "idle"}
                    className="self-start cursor-pointer rounded-[10em] border border-black bg-white px-12 py-4 font-body text-[0.95rem] font-normal text-black transition-[background,color] duration-[400ms] hover:bg-black hover:text-white disabled:cursor-wait disabled:opacity-70 disabled:hover:bg-white disabled:hover:text-black"
                  >
                    {status === "pending" ? "Gönderiliyor…" : "Mesaj Gönder"}
                  </button>
                  <p className="m-0 max-w-[280px] font-body text-[0.78rem] font-light leading-[1.5] text-gray">
                    Göndererek{" "}
                    <a
                      href="/gizlilik-politikasi"
                      className="border-b border-[#ccc] text-black transition-colors hover:border-black"
                    >
                      Gizlilik Politikamızı
                    </a>{" "}
                    kabul etmiş olursunuz. Spam yok — sadece samimi bir yanıt.
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

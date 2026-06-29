"use client";

import { useTransition } from "react";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function LanguageSwitcher({ className }: Props) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  // usePathname (i18n) kanonik şablonu döner (örn. /referanslar/[slug]); dinamik
  // segmentleri doldurmak için useParams() ile birlikte iletiyoruz.
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: Locale) => {
    if (next === locale || isPending) return;
    startTransition(() => {
      // @ts-expect-error — pathname kanonik şablon; params dinamik segmentleri doldurur
      router.replace({ pathname, params }, { locale: next });
    });
  };

  const btn = (target: Locale) =>
    cn(
      "cursor-pointer bg-transparent border-0 p-0 font-body text-[0.95rem] uppercase tracking-[1px] transition-opacity duration-200",
      locale === target ? "opacity-100 font-medium" : "opacity-50 hover:opacity-100",
      isPending && "pointer-events-none",
    );

  return (
    <div
      className={cn("flex items-center gap-2 text-current", className)}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => switchTo("tr")}
        aria-current={locale === "tr" ? "true" : undefined}
        className={btn("tr")}
        disabled={isPending}
      >
        TR
      </button>
      <span aria-hidden="true" className="opacity-30">/</span>
      <button
        type="button"
        onClick={() => switchTo("en")}
        aria-current={locale === "en" ? "true" : undefined}
        className={btn("en")}
        disabled={isPending}
      >
        EN
      </button>
    </div>
  );
}

"use client";

import { useTransition } from "react";
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
  // usePathname (i18n) kanonik (TR) pathname döner — locale değiştirirken aynı sayfada kalmamızı sağlar.
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: Locale) => {
    if (next === locale || isPending) return;
    startTransition(() => {
      // @ts-expect-error — usePathname() runtime'da kanonik dönüyor; tip burada PathnamesKeys ile dar
      router.replace(pathname, { locale: next });
    });
  };

  const btn = (target: Locale, label: string) =>
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
        className={btn("tr", "TR")}
        disabled={isPending}
      >
        TR
      </button>
      <span aria-hidden="true" className="opacity-30">/</span>
      <button
        type="button"
        onClick={() => switchTo("en")}
        aria-current={locale === "en" ? "true" : undefined}
        className={btn("en", "EN")}
        disabled={isPending}
      >
        EN
      </button>
    </div>
  );
}

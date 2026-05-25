"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

// Next.js client-side navigation'larda (App Router) dataLayer'a pageview push'lar.
// GTM default page_view tag'i sadece ilk yuklemede atesler; SPA gecislerini
// yakalamak icin pathname degisimini manuel push ediyoruz.
export function PageViewTracker() {
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!Array.isArray(window.dataLayer)) return;

    window.dataLayer.push({
      event: "pageview",
      page_path: pathname,
      page_locale: locale,
      page_title: document.title,
    });
  }, [pathname, locale]);

  return null;
}

"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type RefObject } from "react";

/**
 * Sample the theme at a viewport point. Looks for the nearest ancestor with
 * a `data-theme` attribute. Returns `null` when no themed ancestor is found
 * so the caller can distinguish "unknown" from an explicit "light".
 */
export function sampleThemeAt(
  x: number,
  y: number,
  hideEl?: HTMLElement | null,
): "dark" | "light" | null {
  let prevPointer = "";
  if (hideEl) {
    prevPointer = hideEl.style.pointerEvents;
    hideEl.style.pointerEvents = "none";
  }
  const el = document.elementFromPoint(x, y);
  if (hideEl) hideEl.style.pointerEvents = prevPointer;

  const themed = el?.closest?.("[data-theme]") as HTMLElement | null;
  if (!themed) return null;
  return themed.dataset.theme === "dark" ? "dark" : "light";
}

type AdaptiveNavState = {
  isDark: boolean;
  isScrolled: boolean;
};

type Options = {
  navRef: RefObject<HTMLElement | null>;
  forceDark?: boolean;
};

// Routes whose top section is known to be dark. Used to seed the initial
// render so the nav doesn't flash black-on-black before the first measurement.
// Keep in sync with the first <section> of each page.
const KNOWN_DARK_ROUTES = ["/", "/platform", "/contact", "/services"];

export function useAdaptiveNav({
  navRef,
  forceDark = false,
}: Options): AdaptiveNavState {
  const pathname = usePathname();
  const initialDark =
    forceDark || (pathname ? KNOWN_DARK_ROUTES.includes(pathname) : false);
  const [isDark, setIsDark] = useState(initialDark);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let rafPending = false;

    const measure = () => {
      setIsScrolled(window.scrollY > 80);

      if (forceDark) {
        setIsDark(true);
        return;
      }

      const rect = nav.getBoundingClientRect();
      // 5-point sampling grid below the nav: 3 horizontal × 2 vertical.
      // Majority rule handles ambient overlays, padding gaps, and absolutely-
      // positioned decorative elements that don't carry a data-theme.
      const vw = window.innerWidth;
      const x1 = vw * 0.2;
      const x2 = vw * 0.5;
      const x3 = vw * 0.8;
      const y1 = rect.bottom + 8;
      const y2 = rect.bottom + 40;
      const samples = [
        sampleThemeAt(x1, y1, nav),
        sampleThemeAt(x2, y1, nav),
        sampleThemeAt(x3, y1, nav),
        sampleThemeAt(x1, y2, nav),
        sampleThemeAt(x2, y2, nav),
      ];
      const darkCount = samples.filter((s) => s === "dark").length;
      const nullCount = samples.filter((s) => s === null).length;

      if (darkCount >= 2) {
        setIsDark(true);
      } else if (nullCount >= 3) {
        // Most samples hit elements without a themed ancestor — fall back to
        // the pathname-based seed.
        setIsDark(
          pathname ? KNOWN_DARK_ROUTES.includes(pathname) : false,
        );
      } else {
        setIsDark(false);
      }
    };

    const onScrollOrResize = () => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        measure();
        rafPending = false;
      });
    };

    // First measure: run immediately (DOM is committed by now) AND on next
    // frame (so any mid-flight layout changes are captured).
    measure();
    const rafId = requestAnimationFrame(measure);
    // Re-measure after layout settles (fonts, images, late hydration).
    const t1 = window.setTimeout(measure, 100);
    const t2 = window.setTimeout(measure, 500);

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("load", measure);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("load", measure);
      cancelAnimationFrame(rafId);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [navRef, forceDark, pathname]);

  return { isDark, isScrolled };
}

"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type RefObject } from "react";

/**
 * Sample the theme at a viewport point. Looks for the nearest ancestor with
 * a `data-theme` attribute. Returns "dark" or "light" (default).
 */
export function sampleThemeAt(
  x: number,
  y: number,
  hideEl?: HTMLElement | null,
): "dark" | "light" {
  let prevPointer = "";
  if (hideEl) {
    prevPointer = hideEl.style.pointerEvents;
    hideEl.style.pointerEvents = "none";
  }
  const el = document.elementFromPoint(x, y);
  if (hideEl) hideEl.style.pointerEvents = prevPointer;

  const themed = el?.closest?.("[data-theme]") as HTMLElement | null;
  return themed?.dataset.theme === "dark" ? "dark" : "light";
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
      // Sample three points below the nav — if any is dark, treat as dark.
      // This handles edge cases where a single point misses the themed region
      // (e.g. sitting in padding, hitting a floating overlay).
      const ys = [rect.bottom + 4, rect.bottom + 20, rect.bottom + 60];
      const x = window.innerWidth / 2;
      let dark = false;
      for (const y of ys) {
        if (sampleThemeAt(x, y, nav) === "dark") {
          dark = true;
          break;
        }
      }
      setIsDark(dark);
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

// Global TypeScript declarations for analytics globals (GTM / GA4 Consent Mode).
// `window.dataLayer` ve `window.gtag`, consent default script'i (layout.tsx) ile
// tanimlanir; CookieBanner ve PageViewTracker bunlari kullanir.
export {};

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

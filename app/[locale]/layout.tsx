import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SideFixed } from "@/components/layout/SideFixed";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";
import Script from "next/script";
import { site } from "@/lib/data/site";
import { routing } from "@/i18n/routing";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as (typeof routing.locales)[number],
    namespace: "metadata",
  });
  const siteTitle = t("siteTitle");
  const description = t("description");

  return {
    metadataBase: new URL("https://theordino.com"),
    title: {
      default: siteTitle,
      template: t("titleTemplate"),
    },
    description,
    keywords: [
      "reklam ajansı",
      "dijital pazarlama",
      "performans marketing",
      "Google Ads",
      "Meta Ads",
      "TikTok Ads",
      "SEO",
      "AI pazarlama",
      "Istanbul reklam ajansı",
      "London advertising agency",
    ],
    authors: [{ name: "Ordino" }],
    creator: "Ordino",
    publisher: "Ordino",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: siteTitle,
      description,
      url: "https://theordino.com",
      siteName: "Ordino",
      locale: t("ogLocale"),
      type: "website",
      images: [
        {
          url: site.ogImage,
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description,
      images: [site.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: site.searchConsoleVerification || undefined,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${cormorant.variable} ${jost.variable}`}>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        {/* Consent Mode v2 default state — GTM/GA4'ten ÖNCE çalışmalı.
            next/script beforeInteractive bu (nested) layout'ta afterInteractive'e
            düşeceği için raw inline <script> kullanıyoruz: SSR HTML'inde parse
            sırasında, afterInteractive olan GTM/GA4/Contentsquare'den önce çalışır.
            Tüm consent KVKK uyumlu 'denied' başlar; localStorage'da önceki onay varsa restore eder. */}
        {site.gtmId && (
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                var consent = 'denied';
                try {
                  if (localStorage.getItem('ordino-cookie-consent') === 'accepted') consent = 'granted';
                } catch (e) {}
                gtag('consent', 'default', {
                  ad_storage: consent,
                  ad_user_data: consent,
                  ad_personalization: consent,
                  analytics_storage: consent,
                  functionality_storage: 'granted',
                  security_storage: 'granted',
                  wait_for_update: 500
                });
                gtag('set', { cookie_domain: 'auto' });
              `,
            }}
          />
        )}

        {/* Google Tag Manager (noscript) — body'nin en başında, JS kapalı kullanıcılar için fallback */}
        {site.gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager (noscript)"
            />
          </noscript>
        )}

        <NextIntlClientProvider messages={messages}>
          {site.gtmId && <PageViewTracker />}
          <SchemaMarkup />
          <Navbar />
          <SideFixed />
          <main className="flex-1">{children}</main>
          <Footer />
          <CustomCursor />
          <CookieBanner />
        </NextIntlClientProvider>

        {/* GA4 - Brief 15.5 — site.ts'te ga4Id doldurulunca aktif olur */}
        {site.ga4Id && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4Id}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${site.ga4Id}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* GTM - opsiyonel — site.ts'te gtmId doldurulunca aktif olur */}
        {site.gtmId && (
          <Script id="gtm-init" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${site.gtmId}');
            `}
          </Script>
        )}

        {/* Contentsquare UXA — site.ts'te contentsquareId doldurulunca aktif olur */}
        {site.contentsquareId && (
          <Script
            id="contentsquare-uxa"
            src={`https://t.contentsquare.net/uxa/${site.contentsquareId}.js`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SideFixed } from "@/components/layout/SideFixed";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import Script from "next/script";
import { site } from "@/lib/data/site";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://theordino.com"),
  title: {
    default: "Ordino — Strateji. Yaratıcılık. Büyüme.",
    template: "%s | Ordino",
  },
  description:
    "London ve Istanbul merkezli full-service reklam ajansı. Google, Meta, TikTok ve X resmi reklam partnerliği. 11 yıllık tecrübe ile 50+ markaya hizmet veren AI destekli pazarlama ekosistemi.",
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
    title: "Ordino — Strateji. Yaratıcılık. Büyüme.",
    description:
      "London ve Istanbul merkezli full-service reklam ajansı. Türk ve uluslararası markalara AI destekli pazarlama hizmeti.",
    url: "https://theordino.com",
    siteName: "Ordino",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Ordino — Strateji. Yaratıcılık. Büyüme.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ordino — Strateji. Yaratıcılık. Büyüme.",
    description:
      "London ve Istanbul merkezli full-service reklam ajansı. AI destekli pazarlama ekosistemi.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
        <link rel="preconnect" href="https://f.vimeocdn.com" />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
      </head>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <SchemaMarkup />
        <Navbar />
        <SideFixed />
        <main className="flex-1">{children}</main>
        <Footer />
        <CustomCursor />
        <CookieBanner />

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
      </body>
    </html>
  );
}

export function SchemaMarkup() {
  // Organization Schema — Genel sirket bilgisi
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://theordino.com/#organization",
    name: "Ordino",
    alternateName: "Ordino Medya",
    url: "https://theordino.com",
    logo: {
      "@type": "ImageObject",
      url: "https://theordino.com/og.jpg",
      width: 1200,
      height: 630,
    },
    description:
      "London ve Istanbul merkezli full-service reklam ajansı. Google, Meta, TikTok ve X resmi reklam partnerliği. AI destekli pazarlama ekosistemi.",
    foundingDate: "2015",
    slogan: "Strateji. Yaratıcılık. Büyüme.",
    knowsLanguage: ["tr", "en"],
    sameAs: [
      "https://www.instagram.com/ordino.tr/",
      "https://www.linkedin.com/company/ordinocompany/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+90-212-996-71-47",
        contactType: "customer service",
        email: "theordino.com",
        availableLanguage: ["Turkish", "English"],
        areaServed: ["TR", "GB", "US"],
      },
    ],
  };

  // LocalBusiness Schema — Istanbul ofisi
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://theordino.com/#localbusiness",
    name: "Ordino — Istanbul Ofisi",
    image: "https://theordino.com/og.jpg",
    url: "https://theordino.com",
    telephone: "+90-212-996-71-47",
    email: "theordino.com",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ferko Signature Plaza",
      addressLocality: "Şişli",
      addressRegion: "Istanbul",
      postalCode: "34394",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.0608,
      longitude: 28.9876,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.instagram.com/ordino.tr/",
      "https://www.linkedin.com/company/ordinocompany/",
    ],
    areaServed: [
      { "@type": "Country", name: "Turkey" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
    ],
  };

  // WebSite Schema — site genel
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://theordino.com/#website",
    url: "https://theordino.com",
    name: "Ordino",
    description: "Strateji. Yaratıcılık. Büyüme.",
    publisher: {
      "@id": "https://theordino.com/#organization",
    },
    inLanguage: "tr-TR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}

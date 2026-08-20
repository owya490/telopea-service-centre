import { getSiteUrl, photos, site } from "@/lib/site";

export function localBusinessJsonLd() {
  const url = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${url}/#business`,
    name: site.name,
    alternateName: site.shortName,
    description:
      "Licensed mechanical repairs, logbook servicing and eSafety checks at Telopea Service Centre in Telopea, NSW.",
    url,
    telephone: site.phoneE164,
    image: [
      `${url}${photos.shopWide.src}`,
      `${url}${photos.workshop.src}`,
      `${url}${photos.shopFront.src}`,
    ],
    logo: `${url}/images/harrys-logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.locality,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: site.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Automotive services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Logbook servicing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mechanical repairs" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "eSafety check / pink slip" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brakes and suspension" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fuel injection service" } },
      ],
    },
  };
}
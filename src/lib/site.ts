export const site = {
  name: "Telopea Service Centre",
  shortName: "Harry's",
  phoneDisplay: "(02) 9638 6704",
  phoneHref: "tel:+61296386704",
  phoneE164: "+61296386704",
  address: "Sturt Street Cnr Evan St, Telopea NSW 2117",
  locationNote: "Evans Rd & Sturt St, Telopea NSW",
  streetAddress: "Sturt Street (corner Evan Street)",
  locality: "Telopea",
  region: "NSW",
  postalCode: "2117",
  country: "AU",
  geo: { latitude: -33.7963, longitude: 151.044355 },
  areaServed: [
    "Telopea",
    "Dundas Valley",
    "Oatlands",
    "Carlingford",
    "Ermington",
    "Rydalmere",
    "Parramatta",
  ],
} as const;

export const seo = {
  title: "Telopea Service Centre | Mechanics in Telopea, NSW",
  description:
    "Licensed local mechanics in Telopea, NSW. Logbook servicing, mechanical repairs, eSafety pink slips and fair prices. Call (02) 9638 6704.",
  keywords: [
    "Telopea Service Centre",
    "mechanic Telopea",
    "car service Telopea",
    "logbook service Telopea",
    "pink slip Telopea",
    "eSafety check Telopea",
    "Harry's mechanic Telopea",
    "mechanical repairs Telopea NSW",
  ],
} as const;

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const photos = {
  shopFront: {
    src: "/images/IMG_9668.jpeg",
    alt: "Telopea Service Centre shopfront and covered bays",
  },
  shopWide: {
    src: "/images/IMG_9682.jpeg",
    alt: "Telopea Service Centre workshop from the street",
  },
  shopCovered: {
    src: "/images/IMG_9673.jpeg",
    alt: "Covered forecourt and service bays at Telopea Service Centre",
  },
  serviceBay: {
    src: "/images/IMG_9677.jpeg",
    alt: "Vehicle being serviced in an open workshop bay",
  },
  storefront: {
    src: "/images/IMG_9678.jpeg",
    alt: "Workshop office and licensed repairer storefront",
  },
  workshop: {
    src: "/images/IMG_9681.jpeg",
    alt: "Mechanics working on vehicles raised on workshop lifts",
  },
  streetSign: {
    src: "/images/IMG_9670.jpeg",
    alt: "Telopea Service Centre roadside sign with eSafety Check",
  },
  harrys: {
    src: "/images/IMG_9691.jpeg",
    alt: "Harry's Full Service window graphics at the workshop",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

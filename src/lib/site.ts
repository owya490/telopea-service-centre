export const site = {
  name: "Telopea Service Centre",
  phoneDisplay: "(02) 9638 6704",
  phoneHref: "tel:+61296386704",
  address: "Sturt Street Cnr Evan St, Telopea NSW 2117",
  locationNote: "Evans Rd & Sturt St, Telopea NSW",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

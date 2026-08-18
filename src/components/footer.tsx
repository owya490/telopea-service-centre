import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-brand text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl font-bold tracking-wide">TELOPEA</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            Service Centre
          </p>
          <p className="mt-3 max-w-xs text-sm text-white/80">
            Local mechanical repairs and servicing in Telopea, NSW.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Visit</p>
          <p className="mt-2 text-sm text-white/80">{site.address}</p>
          <a
            href={site.phoneHref}
            className="mt-3 inline-block text-sm font-semibold text-white hover:underline"
          >
            {site.phoneDisplay}
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold">Pages</p>
          <div className="mt-2 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 py-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}

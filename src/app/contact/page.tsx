import Image from "next/image";
import type { Metadata } from "next";
import { photos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Call Telopea Service Centre on ${site.phoneDisplay} or visit ${site.address}. Logbook servicing, repairs and eSafety checks.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Telopea Service Centre",
    description: `Call ${site.phoneDisplay} or visit ${site.address}.`,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
        Contact
      </p>
      <h1 className="mt-2 font-serif text-4xl font-bold text-brand">
        Get in touch
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
        Drop in or give us a call. The contact form below is a placeholder and
        is not connected yet.
      </p>

      <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
            <Image
              src={photos.shopFront.src}
              alt={photos.shopFront.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
            <Image
              src={photos.streetSign.src}
              alt={photos.streetSign.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="space-y-6">
          <form className="rounded-lg border border-line bg-surface p-6" action="#" method="get">
            <h2 className="text-lg font-semibold text-brand">Send a message</h2>
            <p className="mt-1 text-sm text-muted">Shell only — this form does not send yet.</p>
            <label className="mt-5 block text-sm font-medium" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 text-sm outline-none focus:border-brand"
            />
            <label className="mt-4 block text-sm font-medium" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 text-sm outline-none focus:border-brand"
            />
            <label className="mt-4 block text-sm font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 text-sm outline-none focus:border-brand"
            />
            <button
              type="button"
              className="mt-5 w-full rounded-md bg-brand px-4 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Send message
            </button>
          </form>
          <div className="rounded-lg border border-line p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand">
              Phone
            </h2>
            <a
              href={site.phoneHref}
              className="mt-2 block text-2xl font-semibold text-foreground hover:text-brand"
            >
              {site.phoneDisplay}
            </a>
            <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand">
              Address
            </h2>
            <p className="mt-2 text-lg text-foreground">{site.address}</p>
            <p className="mt-1 text-sm text-muted">{site.locationNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

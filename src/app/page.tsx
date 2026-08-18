import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Telopea Service Centre — trusted mechanical repairs and servicing in Telopea, NSW. Competitive prices and friendly local service.",
};

const highlights = [
  {
    title: "Fair pricing",
    body: "Competitive rates compared with other mechanics — quality work without the extra cost.",
  },
  {
    title: "Prompt repairs",
    body: "Thorough, timely servicing so you can get back on the road with confidence.",
  },
  {
    title: "People you can trust",
    body: "Customers often mention Harry’s friendly help and the team’s professional approach.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Mechanic working on a vehicle in a service bay"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand/75" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Telopea, NSW
          </p>
          <h1 className="mt-3 max-w-xl font-serif text-4xl font-bold text-white sm:text-5xl">
            Reliable mechanical repairs, close to home.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-white/90 sm:text-lg">
            Exceptional service, competitive prices, and a team that looks after
            your car properly — including Harry, who customers keep coming back for.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-brand hover:bg-surface"
            >
              Call {site.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Find us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-brand">
            A trusted local service centre
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            Telopea Service Centre is a well-regarded automotive workshop at
            Evans Rd & Sturt St. Locals come here for prompt, thorough repairs
            and straightforward pricing.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-lg border border-line bg-surface p-6">
              <h3 className="text-lg font-semibold text-brand">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/workshop.jpg"
              alt="Mechanic servicing the underside of a car"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold text-brand">
              Servicing and repairs done properly
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              From logbook servicing and inspections through to mechanical
              repairs, the workshop is set up for everyday cars, SUVs and 4WDs.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              View services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

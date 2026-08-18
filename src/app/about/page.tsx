import Image from "next/image";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Telopea Service Centre — a trusted local mechanic in Telopea known for friendly service, fair prices, and quality repairs.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
        About
      </p>
      <h1 className="mt-2 font-serif text-4xl font-bold text-brand">
        Local mechanics you can rely on
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
        Telopea Service Centre is a well-regarded automotive service provider in
        Telopea, NSW. Customers come for exceptional service, competitive
        pricing, and repairs that are done promptly and thoroughly.
      </p>

      <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/images/about.jpg"
            alt="Mechanic working on a vehicle in the workshop"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-6 text-base leading-7 text-muted">
          <p>
            The centre is conveniently situated at Evans Rd & Sturt St, making
            it easy for local residents to drop in for reliable car services.
          </p>
          <p>
            Reviews often mention better service at a lower cost than elsewhere.
            The team is known for being professional, and customers frequently
            praise Harry’s friendly manner and willingness to help.
          </p>
          <p>
            Service quality is consistently described as exceptional — from
            inspections through to a range of mechanical repairs — which is why
            so many people treat this workshop as their trusted local mechanic.
          </p>
        </div>
      </div>

      <div className="mt-12 rounded-lg bg-surface p-6 sm:p-8">
        <h2 className="font-serif text-2xl font-bold text-brand">Visit us</h2>
        <p className="mt-3 text-muted">{site.address}</p>
        <a
          href={site.phoneHref}
          className="mt-4 inline-block font-semibold text-brand hover:text-brand-dark"
        >
          {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}

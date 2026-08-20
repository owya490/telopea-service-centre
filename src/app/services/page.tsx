import Image from "next/image";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Car Servicing, Repairs & Pink Slips",
  description:
    "Logbook servicing, mechanical repairs, eSafety checks and general maintenance for cars, SUVs and 4WDs at Telopea Service Centre.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Car Servicing, Repairs & Pink Slips | Telopea Service Centre",
    description:
      "Logbook servicing, mechanical repairs, eSafety checks and general maintenance in Telopea, NSW.",
    url: "/services",
  },
};

const services = [
  {
    title: "Logbook servicing",
    body: "Routine maintenance to keep your vehicle running reliably, with competitive pricing.",
    image: "/images/engine.jpg",
    alt: "Oil being poured into an engine during a service",
  },
  {
    title: "Mechanical repairs",
    body: "Thorough diagnosis and repair for a wide range of mechanical issues.",
    image: "/images/workshop.jpg",
    alt: "Mechanic working under a vehicle",
  },
  {
    title: "Safety inspections",
    body: "Inspections and eSafety Check work so you can stay roadworthy with confidence.",
    image: "/images/inspection.jpg",
    alt: "Mechanic carrying out a wheel alignment inspection",
  },
  {
    title: "General maintenance",
    body: "Brakes, fluids, and everyday workshop jobs handled promptly by experienced staff.",
    image: "/images/hero.jpg",
    alt: "Mechanic inspecting an engine bay",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
        Services
      </p>
      <h1 className="mt-2 font-serif text-4xl font-bold text-brand">
        All mechanical repairs and services
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
        From regular servicing to more involved repairs, the workshop is set up
        for passenger cars, SUVs and 4WDs. Call ahead if you are unsure what
        you need — we will point you in the right direction.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="overflow-hidden rounded-lg border border-line bg-white"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-semibold text-brand">{service.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{service.body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-brand px-6 py-8 text-white sm:px-8">
        <h2 className="font-serif text-2xl font-bold">Need a quote or a booking?</h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-white/85">
          Give the workshop a call and we will help you from there.
        </p>
        <a
          href={site.phoneHref}
          className="mt-5 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-brand hover:bg-surface"
        >
          Call {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}

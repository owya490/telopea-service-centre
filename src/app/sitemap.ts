import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getSiteUrl();

  return [
    { url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${url}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${url}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${url}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
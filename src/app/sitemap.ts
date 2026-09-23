import type { MetadataRoute } from "next";
import { getRawSeoConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const config = getRawSeoConfig();
  const siteUrl = config.global.siteUrl || "https://alraheeqtourism.com";
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}`,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0
    },
    {
      url: `${siteUrl}/about`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${siteUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    }
  ];
}

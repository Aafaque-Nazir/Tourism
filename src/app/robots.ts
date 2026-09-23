import type { MetadataRoute } from "next";
import { getRawSeoConfig } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const config = getRawSeoConfig();
  const siteUrl = config.global.siteUrl || "https://alraheeqtourism.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"]
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}

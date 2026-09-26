import type { Metadata } from "next";
import { getSeoMetadata, getBreadcrumbSchema, getPackagesItemListSchema } from "@/lib/seo";
import { ALL_PACKAGES } from "@/lib/data";
import PackagesClient from "./PackagesClient";

export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata("packages");
}

export default function PackagesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Tour Packages", url: "/packages" },
  ]);
  const packagesSchema = getPackagesItemListSchema(ALL_PACKAGES);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(packagesSchema) }}
      />
      <PackagesClient />
    </>
  );
}

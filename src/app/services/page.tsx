import type { Metadata } from "next";
import { getSeoMetadata, getBreadcrumbSchema } from "@/lib/seo";
import ServicesClient from "./ServicesClient";

export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata("services");
}

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Travel Services", url: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesClient />
    </>
  );
}

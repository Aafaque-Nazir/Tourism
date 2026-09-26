import type { Metadata } from "next";
import { getSeoMetadata, getBreadcrumbSchema } from "@/lib/seo";
import AboutClient from "./AboutClient";

export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata("about");
}

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutClient />
    </>
  );
}

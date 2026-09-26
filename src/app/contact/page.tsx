import type { Metadata } from "next";
import { getSeoMetadata, getBreadcrumbSchema } from "@/lib/seo";
import ContactClient from "./ContactClient";

export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata("contact");
}

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact Us", url: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactClient />
    </>
  );
}

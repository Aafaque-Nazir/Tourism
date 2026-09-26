import type { Metadata } from "next";
import { getSeoMetadata, getBreadcrumbSchema } from "@/lib/seo";
import StoriesClient from "./StoriesClient";

export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata("stories");
}

export default function StoriesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Traveler Stories", url: "/stories" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <StoriesClient />
    </>
  );
}

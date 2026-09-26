import type { Metadata } from "next";
import { getSeoMetadata, getFaqSchema } from "@/lib/seo";
import HomeClient from "./HomeClient";

export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata("home");
}

export default function HomePage() {
  const faqSchema = getFaqSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  );
}

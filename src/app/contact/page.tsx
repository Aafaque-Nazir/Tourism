import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import ContactClient from "./ContactClient";

export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata("contact");
}

export default function ContactPage() {
  return <ContactClient />;
}

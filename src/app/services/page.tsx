import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import ServicesClient from "./ServicesClient";

export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata("services");
}

export default function ServicesPage() {
  return <ServicesClient />;
}

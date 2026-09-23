import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import AboutClient from "./AboutClient";

export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata("about");
}

export default function AboutPage() {
  return <AboutClient />;
}

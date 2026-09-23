import type { Metadata } from "next";
import { getSeoMetadata } from "@/lib/seo";
import HomeClient from "./HomeClient";

export async function generateMetadata(): Promise<Metadata> {
  return getSeoMetadata("home");
}

export default function HomePage() {
  return <HomeClient />;
}

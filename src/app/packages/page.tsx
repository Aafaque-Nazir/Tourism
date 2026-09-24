import type { Metadata } from "next";
import PackagesClient from "./PackagesClient";

export const metadata: Metadata = {
  title: "Tour Packages | Dubai, Georgia, Turkey, Bali & More | Al Raheeq Tourism",
  description:
    "Explore 12+ curated holiday packages from Dubai — UAE tours, Georgia, Azerbaijan, Turkey, Egypt, Bali, Thailand, Switzerland & more. All-inclusive itineraries with hotel, transfers, sightseeing & visa assistance.",
  keywords: [
    "Dubai tour packages",
    "holiday packages from Dubai",
    "Georgia tour from UAE",
    "Turkey package from Dubai",
    "Bali holiday package",
    "Switzerland tour from Dubai",
    "Al Raheeq Tourism packages",
    "Egypt pyramids tour",
    "Oman Musandam day trip",
    "Azerbaijan Baku tour",
  ],
  alternates: {
    canonical: "https://alraheeqtourism.com/packages",
  },
  openGraph: {
    title: "Tour Packages | Al Raheeq Tourism Dubai",
    description:
      "Book international holiday packages from Dubai to 10+ destinations. All-inclusive itineraries with hotels, transfers, and sightseeing.",
    url: "https://alraheeqtourism.com/packages",
    siteName: "Al Raheeq Tourism Dubai",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Tour Packages by Al Raheeq Tourism Dubai",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
};

export default function PackagesPage() {
  return <PackagesClient />;
}

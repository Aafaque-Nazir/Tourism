import type { Metadata } from "next";
import StoriesClient from "./StoriesClient";

export const metadata: Metadata = {
  title: "Traveler Stories & Guest Diaries | Al Raheeq Tourism LLC Dubai",
  description:
    "Read real traveler stories, guest reviews, and firsthand photo journals from Dubai, Turkey, Georgia, Azerbaijan, Bali, Switzerland and more with Al Raheeq Tourism LLC.",
  alternates: {
    canonical: "https://alraheeqtourism.com/stories",
  },
  openGraph: {
    title: "Traveler Stories & Photo Diaries | Al Raheeq Tourism LLC",
    description:
      "Explore genuine guest adventures, holiday memories, and firsthand travel journals curated by Al Raheeq Tourism LLC Dubai.",
    url: "https://alraheeqtourism.com/stories",
    siteName: "Al Raheeq Tourism LLC",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Al Raheeq Tourism Guest Stories",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
};

export default function StoriesPage() {
  return <StoriesClient />;
}

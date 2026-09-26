import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import type { TourPackage } from "@/lib/data";

export interface PageSeoConfig {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  robots?: string;
}

export interface GlobalSeoConfig {
  siteName: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultKeywords: string;
  defaultOgImage: string;
  siteUrl: string;
  googleSiteVerification?: string;
  googleAnalyticsId?: string;
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    hours: string;
  };
}

export interface FullSeoConfig {
  global: GlobalSeoConfig;
  pages: {
    home: PageSeoConfig;
    about: PageSeoConfig;
    services: PageSeoConfig;
    contact: PageSeoConfig;
    packages?: PageSeoConfig;
    stories?: PageSeoConfig;
    [key: string]: PageSeoConfig | undefined;
  };
}

const DEFAULT_SEO_CONFIG: FullSeoConfig = {
  global: {
    siteName: "Al Raheeq Tourism LLC Dubai",
    titleTemplate: "%s | Al Raheeq Tourism LLC - Dubai, UAE",
    defaultDescription:
      "Al Raheeq Tourism LLC is a premier, DET-licensed travel agency on the 22nd Floor, Al Masraf Building, Al Rigga, Deira, Dubai. We specialize in express 30 & 60-day UAE tourist visas, worldwide airline ticketing on 500+ airlines, luxury desert safaris, 5-star hotel reservations, and custom holiday packages.",
    defaultKeywords:
      "Dubai travel agency, Al Raheeq Tourism LLC, UAE tourist visa 30 days 60 days, Desert Safari Dubai, cheap flight booking Dubai, luxury hotel booking Deira, Al Rigga travel agency, Dubai holiday packages, IATA travel agency Dubai, Deira Dubai tourism company",
    defaultOgImage:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&h=630&q=80",
    siteUrl: "https://alraheeqtourism.com",
    contact: {
      phone: "+971 4 396 9478",
      whatsapp: "+971 4 396 9478",
      email: "info@alraheeqtourism.com",
      address: "Al Masraf Building, 22nd Floor, Al Rigga Road, Deira, Dubai, UAE",
      hours: "Mon - Sat: 9:00 AM - 10:00 PM (Sunday Closed)",
    },
  },
  pages: {
    home: {
      title: "Al Raheeq Tourism LLC | Best Travel Agency in Deira Dubai - Flights, Visas & Tours",
      description:
        "Top-rated travel agency in Al Rigga, Deira, Dubai. We offer express 30 & 60-day UAE tourist visas, worldwide flight bookings on 500+ airlines, luxury desert safari, and customized holiday packages. Visit our office or WhatsApp +971 4 396 9478 for an instant quote.",
      keywords:
        "Dubai travel agency, Al Raheeq Tourism LLC, UAE tourist visa, Dubai visit visa 30 days 60 days, Desert Safari Dubai, cheap flights Dubai, luxury holiday packages Dubai, Al Rigga travel agency, Deira tourism agency, licensed travel agency UAE, Dubai tour packages",
      canonical: "https://alraheeqtourism.com",
      ogTitle: "Al Raheeq Tourism LLC | Premier Travel & Tours Agency in Dubai",
      ogDescription:
        "Book flights, UAE visit visas, luxury desert safaris & customized international holiday packages with Al Raheeq Tourism in Al Rigga, Deira, Dubai.",
      ogImage:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&h=630&q=80",
      robots: "index, follow",
    },
    about: {
      title: "About Us | Al Raheeq Tourism LLC - Licensed UAE Travel Agency Dubai",
      description:
        "Learn about Al Raheeq Tourism LLC, an accredited travel agency on 22nd Floor, Al Masraf Building, Al Rigga Road, Deira, Dubai. Over 10 years of trusted visa processing, flight bookings, and curated global holidays.",
      keywords:
        "about Al Raheeq Tourism, licensed UAE travel agency, Dubai tourism company, Al Masraf building Deira, accredited Dubai travel agents, IATA compliant travel Dubai, travel agency Al Rigga road",
      canonical: "https://alraheeqtourism.com/about",
      ogTitle: "About Al Raheeq Tourism LLC | Trusted Dubai Travel Agency",
      ogDescription:
        "Over a decade of excellence in Dubai tourism, visit visas, global airline ticketing, and luxury vacation planning from the heart of Deira, Dubai.",
      ogImage:
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&h=630&q=80",
      robots: "index, follow",
    },
    services: {
      title: "Travel Services in Dubai | UAE Visas, Flights, Hotels & Tours | Al Raheeq Tourism",
      description:
        "Full-suite travel services by Al Raheeq Tourism: Express 30 & 60-day UAE tourist visas, worldwide flight ticketing on 500+ airlines, 5-star hotel reservations, VIP desert safari, dhow cruises, and comprehensive travel insurance.",
      keywords:
        "Dubai visa services, UAE visit visa 60 days, cheap flight booking Dubai, hotel reservation Deira, desert safari booking, international travel insurance UAE, Al Raheeq services, corporate travel Dubai",
      canonical: "https://alraheeqtourism.com/services",
      ogTitle: "Complete Travel Services in Dubai | Al Raheeq Tourism LLC",
      ogDescription:
        "Fast UAE visa approvals, worldwide flight ticketing on 500+ airlines, luxury hotel stays, and thrilling desert safaris in Dubai.",
      ogImage:
        "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&h=630&q=80",
      robots: "index, follow",
    },
    packages: {
      title: "Dubai & International Tour Packages | Holiday Deals from Dubai | Al Raheeq Tourism",
      description:
        "Explore curated all-inclusive holiday packages from Dubai to Georgia, Turkey, Bali, Azerbaijan, Switzerland, Egypt & UAE tours. Includes hotels, guided sightseeing, flights & visa assistance with transparent pricing.",
      keywords:
        "Dubai tour packages, holiday packages from Dubai, Georgia tour from UAE, Turkey tour package Dubai, Bali holiday package, Switzerland vacation Dubai, Azerbaijan Baku tour, international trips from Dubai, cheap holiday deals UAE",
      canonical: "https://alraheeqtourism.com/packages",
      ogTitle: "Holiday & Tour Packages from Dubai | Al Raheeq Tourism LLC",
      ogDescription:
        "Unforgettable international vacation packages departing from Dubai. 100% transparent pricing, hotel stays, guided tours, and visa assistance.",
      ogImage:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&h=630&q=80",
      robots: "index, follow",
    },
    stories: {
      title: "Traveler Stories & Guest Reviews | Real Dubai Holiday Diaries | Al Raheeq Tourism",
      description:
        "Discover authentic traveler stories, verified photo journals, and 5-star customer reviews from guests exploring Dubai, Georgia, Turkey, Bali, and beyond with Al Raheeq Tourism.",
      keywords:
        "Dubai travel reviews, Al Raheeq Tourism reviews, traveler testimonials Dubai, tourist photo diaries UAE, verified guest experiences Dubai tourism, Al Raheeq guest feedback",
      canonical: "https://alraheeqtourism.com/stories",
      ogTitle: "Traveler Stories & Guest Reviews | Al Raheeq Tourism LLC",
      ogDescription:
        "Real traveler journals, photos, and reviews from guests who booked their dream vacation with Al Raheeq Tourism Dubai.",
      ogImage:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&h=630&q=80",
      robots: "index, follow",
    },
    contact: {
      title: "Contact Us | Al Raheeq Tourism LLC Deira Dubai Office & WhatsApp",
      description:
        "Visit Al Raheeq Tourism LLC at 22nd Floor, Al Masraf Building, Al Rigga Road, Deira, Dubai. Call +971 4 396 9478 or WhatsApp us for instant quotes on visas, flights, and tours. Open Mon-Sat 9 AM to 10 PM.",
      keywords:
        "contact Al Raheeq Tourism, Al Masraf building 22nd floor, Al Rigga travel agency phone, Dubai tourism WhatsApp, Deira travel agency address, tourist visa contact Dubai, flight booking office Deira",
      canonical: "https://alraheeqtourism.com/contact",
      ogTitle: "Contact Al Raheeq Tourism LLC | Deira Dubai Office",
      ogDescription:
        "Need an urgent UAE visa, flight ticket, or vacation package? Contact our expert travel consultants in Al Rigga, Deira, Dubai.",
      ogImage:
        "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1200&h=630&q=80",
      robots: "index, follow",
    },
  },
};

export function getRawSeoConfig(): FullSeoConfig {
  try {
    const filePath = path.join(process.cwd(), "data", "seo-config.json");
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(content) as FullSeoConfig;
    }
  } catch (error) {
    console.error("Failed to read seo-config.json, falling back to defaults", error);
  }
  return DEFAULT_SEO_CONFIG;
}

export function saveRawSeoConfig(config: FullSeoConfig): boolean {
  try {
    const dirPath = path.join(process.cwd(), "data");
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    const filePath = path.join(dirPath, "seo-config.json");
    fs.writeFileSync(filePath, JSON.stringify(config, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Failed to save seo-config.json", error);
    return false;
  }
}

export function getSeoMetadata(
  pageKey: "home" | "about" | "services" | "packages" | "stories" | "contact" | string
): Metadata {
  const config = getRawSeoConfig();
  const page =
    config.pages[pageKey] ||
    DEFAULT_SEO_CONFIG.pages[pageKey] ||
    config.pages.home;
  const siteUrl = config.global.siteUrl || "https://alraheeqtourism.com";
  const canonicalUrl =
    page.canonical ||
    `${siteUrl}${pageKey === "home" ? "" : `/${pageKey}`}`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords?.split(",").map((k) => k.trim()),
    category: "Travel & Tourism",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-AE": canonicalUrl,
        "ar-AE": canonicalUrl,
      },
    },
    openGraph: {
      title: page.ogTitle || page.title,
      description: page.ogDescription || page.description,
      url: canonicalUrl,
      siteName: config.global.siteName,
      images: [
        {
          url: page.ogImage || config.global.defaultOgImage,
          width: 1200,
          height: 630,
          alt: page.ogTitle || page.title,
        },
      ],
      locale: "en_AE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.ogTitle || page.title,
      description: page.ogDescription || page.description,
      images: [page.ogImage || config.global.defaultOgImage],
    },
    robots: {
      index: !page.robots?.includes("noindex"),
      follow: !page.robots?.includes("nofollow"),
      googleBot: {
        index: !page.robots?.includes("noindex"),
        follow: !page.robots?.includes("nofollow"),
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function getLocalBusinessSchema() {
  const config = getRawSeoConfig();
  const { contact } = config.global;
  const siteUrl = config.global.siteUrl || "https://alraheeqtourism.com";

  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "name": "Al Raheeq Tourism LLC",
    "alternateName": ["الرحيق للسياحة", "Al Raheeq Travel Dubai"],
    "legalName": "Al Raheeq Tourism L.L.C",
    "description":
      "Al Raheeq Tourism LLC is a licensed Dubai travel agency in Al Masraf Building, Al Rigga, Deira. Providing UAE tourist visas (30 & 60 days), worldwide flight ticketing on 500+ airlines, luxury desert safaris, 5-star hotels, and international holiday packages.",
    "image": [
      config.global.defaultOgImage,
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
    "logo": `${siteUrl}/logo-icon.png`,
    "@id": `${siteUrl}/#agency`,
    "url": siteUrl,
    "telephone": contact.phone,
    "email": contact.email,
    "priceRange": "$$",
    "currenciesAccepted": "AED, USD, EUR, GBP, SAR, INR",
    "paymentAccepted": "Cash, Credit Card, Debit Card, Bank Transfer",
    "hasMap": "https://maps.google.com/?q=Al+Masraf+Building+Al+Rigga+Deira+Dubai",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Al Masraf Building, 22nd Floor, Al Rigga Road",
      "addressLocality": "Deira",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2631,
      "longitude": 55.3216,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        "opens": "09:00",
        "closes": "22:00",
      },
    ],
    "areaServed": [
      { "@type": "City", "name": "Dubai" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "Saudi Arabia" },
      { "@type": "Country", "name": "Oman" },
      { "@type": "Country", "name": "Kuwait" },
    ],
    "knowsAbout": [
      "UAE Tourist Visas (30 & 60 Days)",
      "Dubai Desert Safari Red Dunes",
      "Worldwide Flight Ticketing",
      "International Holiday Packages from Dubai",
      "Global Luxury Hotel Reservations",
      "Dubai Marina Dhow Cruise",
      "Umrah Travel Packages",
      "International Travel Insurance",
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "1240",
      "bestRating": "5",
      "worstRating": "1",
    },
  };
}

export function getWebSiteSchema() {
  const config = getRawSeoConfig();
  const siteUrl = config.global.siteUrl || "https://alraheeqtourism.com";

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Al Raheeq Tourism LLC",
    "alternateName": "Al Raheeq Travel Dubai",
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/packages?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How quickly can Al Raheeq Tourism process a UAE tourist visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Al Raheeq Tourism provides express UAE tourist visa processing for 30-day and 60-day single and multiple entry visas. Approvals are typically secured within 24 to 48 business hours with verified official ICP and GDRFA government immigration documentation.",
        },
      },
      {
        "@type": "Question",
        "name": "Where is the Al Raheeq Tourism office located in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Our primary walk-in branch is located on the 22nd Floor of Al Masraf Building, Al Rigga Road, Deira, Dubai, UAE — just a 2-minute walk from Al Rigga Metro Station. We are open Monday through Saturday from 9:00 AM to 10:00 PM.",
        },
      },
      {
        "@type": "Question",
        "name": "What international holiday packages are available from Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "We offer all-inclusive holiday tour packages departing from Dubai to popular destinations including Georgia (Tbilisi & Kazbegi), Azerbaijan (Baku), Turkey (Istanbul & Cappadocia), Bali, Switzerland, Thailand, Egypt, and Oman. Packages include hotel stays, airport transfers, guided tours, and visa guidance.",
        },
      },
      {
        "@type": "Question",
        "name": "Can Al Raheeq Tourism issue flight tickets on any international airline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, Al Raheeq Tourism is connected directly to major Global Distribution Systems (GDS) and issues confirmed tickets across 500+ global airlines including Emirates, flydubai, Air Arabia, Etihad Airways, Qatar Airways, Saudia, and international flag carriers.",
        },
      },
      {
        "@type": "Question",
        "name": "What is included in the Al Raheeq Dubai Desert Safari?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Our premium Desert Safari includes 4x4 dune bashing across the red sands of Lahbab, camel riding, sandboarding, falcon photography, an authentic Arabic BBQ buffet dinner with vegetarian and non-vegetarian options, and live entertainment including Tanoura and fire shows.",
        },
      },
      {
        "@type": "Question",
        "name": "Are there any hidden fees on bookings with Al Raheeq Tourism?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "No. Al Raheeq Tourism adheres to 100% transparent pricing. Every quotation and receipt clearly specifies the service costs and standard 5% UAE VAT, with zero unexpected charges.",
        },
      },
    ],
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  const config = getRawSeoConfig();
  const siteUrl = config.global.siteUrl || "https://alraheeqtourism.com";

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}

export function getPackagesItemListSchema(packages: TourPackage[]) {
  const config = getRawSeoConfig();
  const siteUrl = config.global.siteUrl || "https://alraheeqtourism.com";

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Holiday & Tour Packages by Al Raheeq Tourism LLC",
    "description":
      "Curated international and UAE holiday tour packages with transparent pricing, hotel accommodations, and guided excursions.",
    "numberOfItems": packages.length,
    "itemListElement": packages.map((pkg, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "TouristTrip",
        "@id": `${siteUrl}/packages#${pkg.id}`,
        "name": pkg.title,
        "description": `${pkg.duration} holiday package in ${pkg.destination}. Highlights: ${pkg.highlights.slice(0, 3).join(", ")}.`,
        "touristType": ["Family", "Couples", "Solo Travelers", "Adventure"],
        "itinerary": {
          "@type": "ItemList",
          "numberOfItems": pkg.itinerary.length,
          "itemListElement": pkg.itinerary.map((d, dIdx) => ({
            "@type": "ListItem",
            "position": dIdx + 1,
            "name": `Day ${d.day}: ${d.title}`,
            "description": d.description,
          })),
        },
        "offers": {
          "@type": "Offer",
          "price": pkg.priceAED,
          "priceCurrency": "AED",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-01-01",
          "url": `${siteUrl}/packages`,
        },
        "provider": {
          "@type": "TravelAgency",
          "name": "Al Raheeq Tourism LLC",
          "url": siteUrl,
          "telephone": config.global.contact.phone,
        },
      },
    })),
  };
}

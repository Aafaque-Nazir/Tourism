import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { getRawSeoConfig, getLocalBusinessSchema } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const config = getRawSeoConfig();
  const siteUrl = config.global.siteUrl || "https://alraheeqtourism.com";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: config.pages.home.title,
      template: config.global.titleTemplate || "%s | Al Raheeq Tourism LLC",
    },
    description: config.pages.home.description,
    keywords: config.pages.home.keywords?.split(",").map((k) => k.trim()),
    verification: {
      google: config.global.googleSiteVerification || undefined,
    },
    openGraph: {
      title: config.pages.home.ogTitle || config.pages.home.title,
      description:
        config.pages.home.ogDescription || config.pages.home.description,
      url: siteUrl,
      siteName: config.global.siteName,
      images: [
        {
          url: config.pages.home.ogImage || config.global.defaultOgImage,
          width: 1200,
          height: 630,
          alt: "Al Raheeq Tourism Dubai",
        },
      ],
      locale: "en_AE",
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-700 bg-slate-50">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloating />
        </SmoothScroll>
      </body>
    </html>
  );
}

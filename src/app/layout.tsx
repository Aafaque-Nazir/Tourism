import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { getRawSeoConfig, getLocalBusinessSchema, getWebSiteSchema } from "@/lib/seo";
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
  const home = config.pages.home;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: home.title,
      template: config.global.titleTemplate || "%s | Al Raheeq Tourism LLC",
    },
    description: home.description,
    keywords: home.keywords?.split(",").map((k) => k.trim()),
    category: "Travel & Tourism",
    alternates: {
      canonical: home.canonical || siteUrl,
      languages: {
        "en-AE": home.canonical || siteUrl,
        "ar-AE": home.canonical || siteUrl,
      },
    },
    verification: {
      google: config.global.googleSiteVerification || undefined,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/logo-icon.png", type: "image/png", sizes: "192x192" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
    },
    openGraph: {
      title: home.ogTitle || home.title,
      description: home.ogDescription || home.description,
      url: siteUrl,
      siteName: config.global.siteName,
      images: [
        {
          url: home.ogImage || config.global.defaultOgImage,
          width: 1200,
          height: 630,
          alt: "Al Raheeq Tourism Dubai",
        },
      ],
      locale: "en_AE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: home.ogTitle || home.title,
      description: home.ogDescription || home.description,
      images: [home.ogImage || config.global.defaultOgImage],
    },
    robots: {
      index: !home.robots?.includes("noindex"),
      follow: !home.robots?.includes("nofollow"),
      googleBot: {
        index: !home.robots?.includes("noindex"),
        follow: !home.robots?.includes("nofollow"),
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = getRawSeoConfig();
  const businessSchema = getLocalBusinessSchema();
  const webSiteSchema = getWebSiteSchema();
  const gaId = config.global.googleAnalyticsId;

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo-icon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              id="google-analytics"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
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

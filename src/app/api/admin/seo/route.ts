import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE_NAME, verifySessionToken } from "@/lib/auth";
import { getRawSeoConfig, saveRawSeoConfig, type FullSeoConfig, type PageSeoConfig } from "@/lib/seo";

async function isAuthorized(): Promise<boolean> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(COOKIE_NAME)?.value;
  return verifySessionToken(sessionCookie);
}

// Basic input sanitization to strip script tags and excessive control characters
function sanitizeString(str?: string, maxLen = 500): string {
  if (!str || typeof str !== "string") return "";
  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/[<>]/g, "")
    .slice(0, maxLen)
    .trim();
}

function sanitizeUrl(url?: string): string {
  if (!url || typeof url !== "string") return "";
  const cleaned = url.trim();
  if (cleaned.startsWith("https://") || cleaned.startsWith("http://") || cleaned.startsWith("/")) {
    return cleaned.slice(0, 500);
  }
  return "";
}

export async function GET() {
  const auth = await isAuthorized();
  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const config = getRawSeoConfig();
  return NextResponse.json({ success: true, config });
}

export async function POST(request: Request) {
  const auth = await isAuthorized();
  if (!auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    let body: FullSeoConfig;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON format" }, { status: 400 });
    }

    if (!body || typeof body !== "object" || !body.global || !body.pages) {
      return NextResponse.json(
        { error: "Invalid SEO configuration structure" },
        { status: 400 }
      );
    }

    // Sanitize Global configuration
    const sanitizedGlobal = {
      siteName: sanitizeString(body.global.siteName, 100) || "Al Raheeq Tourism Dubai",
      titleTemplate: sanitizeString(body.global.titleTemplate, 150) || "%s | Al Raheeq Tourism LLC",
      defaultDescription: sanitizeString(body.global.defaultDescription, 300),
      defaultKeywords: sanitizeString(body.global.defaultKeywords, 300),
      defaultOgImage: sanitizeUrl(body.global.defaultOgImage),
      siteUrl: sanitizeUrl(body.global.siteUrl) || "https://alraheeqtourism.com",
      googleSiteVerification: sanitizeString(body.global.googleSiteVerification, 150),
      googleAnalyticsId: sanitizeString(body.global.googleAnalyticsId, 50),
      contact: {
        phone: sanitizeString(body.global.contact?.phone, 50) || "+971 4 396 9478",
        whatsapp: sanitizeString(body.global.contact?.whatsapp, 50) || "+971 4 396 9478",
        email: sanitizeString(body.global.contact?.email, 100) || "info@alraheeqtourism.com",
        address: sanitizeString(body.global.contact?.address, 200) || "Al Masraf Building, 22nd Floor, Al Rigga, Deira, Dubai, UAE",
        hours: sanitizeString(body.global.contact?.hours, 100) || "Mon - Sat: 9:00 AM - 10:00 PM"
      }
    };

    // Sanitize Pages
    const sanitizedPages: Record<string, PageSeoConfig> = {};
    const validPages = ["home", "about", "services", "contact"];

    for (const key of validPages) {
      const page = body.pages[key] || {};
      sanitizedPages[key] = {
        title: sanitizeString(page.title, 120),
        description: sanitizeString(page.description, 300),
        keywords: sanitizeString(page.keywords, 300),
        canonical: sanitizeUrl(page.canonical),
        ogTitle: sanitizeString(page.ogTitle, 120),
        ogDescription: sanitizeString(page.ogDescription, 300),
        ogImage: sanitizeUrl(page.ogImage),
        robots: sanitizeString(page.robots, 50) || "index, follow"
      };
    }

    const sanitizedConfig: FullSeoConfig = {
      global: sanitizedGlobal,
      pages: sanitizedPages as FullSeoConfig["pages"]
    };

    const saved = saveRawSeoConfig(sanitizedConfig);
    if (!saved) {
      return NextResponse.json(
        { error: "Failed to persist SEO changes to storage" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "SEO configuration validated and saved successfully!"
    });
  } catch (error) {
    console.error("SEO update error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while saving." },
      { status: 500 }
    );
  }
}

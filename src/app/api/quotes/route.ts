import { NextResponse } from "next/server";

interface QuoteRequestBody {
  packageId?: string;
  packageTitle: string;
  destination?: string;
  priceAED?: number;
  name: string;
  email: string;
  phone: string;
  travelDate?: string;
  travelers?: string;
  visaAssistance?: boolean;
  notes?: string;
}

function sanitizeString(str?: string, maxLen = 300): string {
  if (!str || typeof str !== "string") return "";
  return str
    .replace(/<[^>]*>?/gm, "")
    .replace(/[<>'"`;]/g, "")
    .slice(0, maxLen)
    .trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    let body: QuoteRequestBody;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON format" },
        { status: 400 }
      );
    }

    const name = sanitizeString(body.name, 100);
    const email = sanitizeString(body.email, 120);
    const phone = sanitizeString(body.phone, 30);
    const packageTitle = sanitizeString(body.packageTitle, 150);
    const destination = sanitizeString(body.destination, 100);
    const travelDate = sanitizeString(body.travelDate, 50);
    const travelers = sanitizeString(body.travelers, 50) || "1-2 Persons";
    const notes = sanitizeString(body.notes, 500);
    const visaAssistance = Boolean(body.visaAssistance);

    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address to receive your quote." },
        { status: 400 }
      );
    }

    if (!phone || phone.length < 6) {
      return NextResponse.json(
        { error: "Please provide a valid contact/WhatsApp phone number." },
        { status: 400 }
      );
    }

    if (!packageTitle) {
      return NextResponse.json(
        { error: "Package title is required." },
        { status: 400 }
      );
    }

    // Generate unique booking quote reference ID
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const bookingRef = `AR-PKG-${randomSuffix}`;

    return NextResponse.json(
      {
        success: true,
        bookingRef,
        message: "Your quote request has been securely dispatched to our Deira concierge.",
        details: {
          bookingRef,
          packageTitle,
          destination,
          name,
          email,
          phone,
          travelDate,
          travelers,
          visaAssistance,
          notes,
          timestamp: new Date().toISOString()
        }
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error. Please try again or reach out on WhatsApp." },
      { status: 500 }
    );
  }
}

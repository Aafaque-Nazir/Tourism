import { NextResponse } from "next/server";
import { 
  validateCredentials, 
  createSessionToken, 
  COOKIE_NAME, 
  SESSION_MAX_AGE,
  checkRateLimit,
  recordFailedAttempt,
  recordSuccessfulAttempt
} from "@/lib/auth";

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "127.0.0.1";
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(ip);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          error: `Too many failed login attempts. Account temporarily locked. Please try again in ${rateLimit.retryAfterSeconds} seconds.` 
        },
        { 
          status: 429,
          headers: {
            "Retry-After": rateLimit.retryAfterSeconds.toString()
          }
        }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { username, password } = body;

    if (!username || !password || typeof username !== "string" || typeof password !== "string") {
      return NextResponse.json(
        { error: "Username and password are required strings" },
        { status: 400 }
      );
    }

    const isValid = validateCredentials(username, password);

    if (!isValid) {
      recordFailedAttempt(ip);
      const updatedLimit = checkRateLimit(ip);

      return NextResponse.json(
        { 
          error: `Invalid credentials. ${updatedLimit.remainingAttempts} attempt(s) remaining before lockout.` 
        },
        { status: 401 }
      );
    }

    recordSuccessfulAttempt(ip);
    const token = await createSessionToken(username);

    const response = NextResponse.json(
      { success: true, message: "Logged in successfully" },
      { status: 200 }
    );

    response.cookies.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: SESSION_MAX_AGE,
      path: "/"
    });

    return response;
  } catch (error) {
    console.error("Login processing error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

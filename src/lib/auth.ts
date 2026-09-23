import crypto from "crypto";

const COOKIE_NAME = "alraheeq_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

// Rate limiting state (in-memory sliding window)
interface RateLimitEntry {
  failures: number;
  firstFailureTime: number;
  lockedUntil?: number;
}

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 minutes lockout

const rateLimitMap = new Map<string, RateLimitEntry>();

// Clean up stale entries every 30 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now - entry.firstFailureTime > RATE_LIMIT_WINDOW_MS && (!entry.lockedUntil || now > entry.lockedUntil)) {
      rateLimitMap.delete(ip);
    }
  }
}, 30 * 60 * 1000);

export function checkRateLimit(ip: string): { allowed: boolean; remainingAttempts: number; retryAfterSeconds: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry) {
    return { allowed: true, remainingAttempts: MAX_FAILED_ATTEMPTS, retryAfterSeconds: 0 };
  }

  // Check if locked out
  if (entry.lockedUntil && now < entry.lockedUntil) {
    const retryAfterSeconds = Math.ceil((entry.lockedUntil - now) / 1000);
    return { allowed: false, remainingAttempts: 0, retryAfterSeconds };
  }

  // Check if window expired
  if (now - entry.firstFailureTime > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.delete(ip);
    return { allowed: true, remainingAttempts: MAX_FAILED_ATTEMPTS, retryAfterSeconds: 0 };
  }

  const remaining = Math.max(0, MAX_FAILED_ATTEMPTS - entry.failures);
  return {
    allowed: entry.failures < MAX_FAILED_ATTEMPTS,
    remainingAttempts: remaining,
    retryAfterSeconds: 0
  };
}

export function recordFailedAttempt(ip: string): void {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.firstFailureTime > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, {
      failures: 1,
      firstFailureTime: now
    });
  } else {
    entry.failures += 1;
    if (entry.failures >= MAX_FAILED_ATTEMPTS) {
      entry.lockedUntil = now + LOCKOUT_DURATION_MS;
    }
  }
}

export function recordSuccessfulAttempt(ip: string): void {
  rateLimitMap.delete(ip);
}

function getSecretKey(): string {
  return process.env.SEO_ADMIN_SECRET || "alraheeq-dubai-super-secret-key-32chars-min";
}

/**
 * Timing-safe credential comparison to prevent side-channel timing analysis attacks.
 * Compares SHA-256 digests of the credentials using crypto.timingSafeEqual.
 */
export function validateCredentials(username: string, pass: string): boolean {
  if (!username || !pass || typeof username !== "string" || typeof pass !== "string") {
    return false;
  }

  // Limit maximum credential lengths to prevent CPU exhaustion
  if (username.length > 100 || pass.length > 200) {
    return false;
  }

  const expectedUser = process.env.SEO_ADMIN_USER || "admin";
  const expectedPass = process.env.SEO_ADMIN_PASSWORD || "alraheeq@dubai2026";

  const userHashA = crypto.createHash("sha256").update(username).digest();
  const userHashB = crypto.createHash("sha256").update(expectedUser).digest();

  const passHashA = crypto.createHash("sha256").update(pass).digest();
  const passHashB = crypto.createHash("sha256").update(expectedPass).digest();

  const isUserValid = crypto.timingSafeEqual(userHashA, userHashB);
  const isPassValid = crypto.timingSafeEqual(passHashA, passHashB);

  return isUserValid && isPassValid;
}

export async function createSessionToken(username: string): Promise<string> {
  const exp = Date.now() + SESSION_MAX_AGE * 1000;
  const payload = `${username}:${exp}`;
  const key = getSecretKey();
  const hmac = crypto.createHmac("sha256", key);
  hmac.update(payload);
  const signature = hmac.digest("base64url");
  const encodedPayload = Buffer.from(payload).toString("base64url");
  return `${encodedPayload}.${signature}`;
}

export async function verifySessionToken(token?: string | null): Promise<boolean> {
  if (!token || typeof token !== "string") return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;

  const [encodedPayload, signature] = parts;
  try {
    const payload = Buffer.from(encodedPayload, "base64url").toString("utf-8");
    const [user, expStr] = payload.split(":");
    const exp = parseInt(expStr, 10);

    if (!user || isNaN(exp) || Date.now() > exp) {
      return false;
    }

    const key = getSecretKey();
    const hmac = crypto.createHmac("sha256", key);
    hmac.update(payload);
    const expectedSignature = hmac.digest("base64url");

    const sigBufA = Buffer.from(signature);
    const sigBufB = Buffer.from(expectedSignature);

    if (sigBufA.length !== sigBufB.length) {
      return false;
    }

    return crypto.timingSafeEqual(sigBufA, sigBufB);
  } catch {
    return false;
  }
}

export { COOKIE_NAME, SESSION_MAX_AGE };

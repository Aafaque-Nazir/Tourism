# Project Memory: Al Raheeq Tourism (Dubai)

**Last Updated:** September 23, 2026  
**Status:** Boutique Luxury Editorial Redesign Completed — Build Passing (0 Errors)

---

## 1. Client & Business Overview
- **Business Name:** Al Raheeq Tourism LLC (الرحيق للسياحة)
- **Industry:** Travel & Tourism Agency (Dubai, UAE)
- **Office Location:** Al Masraf Building, 22nd Floor, Al Rigga, Deira, Dubai, United Arab Emirates
- **Phone:** +971 4 396 9478
- **WhatsApp:** +971 4 396 9478
- **Operating Hours:** Monday – Saturday: 9:00 AM to 10:00 PM | Sunday: Closed
- **Reputation / Rating:** 5/5 stars rating based on customer reviews

---

## 2. Core Offerings & Services
1. **Flight Bookings:** Worldwide airline ticketing solutions.
2. **Visa Assistance:** Fast and reliable UAE tourist/visit visa processing (30 & 60 days) & international visa guidance.
3. **Hotel Reservations:** Accommodation bookings globally and luxury UAE stays.
4. **Holiday Packages:** Customized tour planning & vacation itineraries (VIP Desert Safari, Luxury Dhow Cruise, Burj Khalifa At The Top, Abu Dhabi Grand Mosque tour).
5. **Travel Insurance:** Coverage options for international travel safety and UAE visa compliance.

---

## 3. Pages & Features Status
- [x] **Home Page (`/`):** Cinematic hero with Playfair Display serif headline, concierge travel search dock (tabbed: Visas/Tours/Flights/Hotels), airline partners strip, editorial numbered service cards, signature collection packages bento grid, agency heritage dark section, champagne gold testimonials, and conversion CTA.
- [x] **About Us (`/about`):** Editorial company profile with serif stats (5.0★, 22nd Floor, 24-48h), core principles card, and office CTA.
- [x] **Services Page (`/services`):** Magazine-style numbered service catalog with booking guidelines panels, inclusion checklists, and structured FAQs.
- [x] **Contact Page (`/contact`):** Architectural office presentation with structured details, obsidian WhatsApp CTA card, inquiry form, and Google Maps embed.
- [x] **SEO Admin Portal (`/admin/login` & `/admin/seo`):**
  - Protected by credentials in `.env.local` (`SEO_ADMIN_USER` & `SEO_ADMIN_PASSWORD`).
  - Session verified with HMAC SHA-256 signed HTTP-only cookies.
  - Live SERP snippet preview with character health counters.
  - Editable metadata for every page (Title, Description, Keywords, Canonical, OG tags, Robots).
  - Global settings for Google Search Console verification, Google Analytics GA4 ID, and Schema data.
- [x] **Lead Capture Flow:**
  - `InstantQuoteModal.tsx`: Private concierge consultation modal with obsidian header and champagne gold CTA.
  - `WhatsAppFloating.tsx`: Minimal luxury concierge badge (obsidian pill with emerald online pulse).
  - Direct telephone links to `+971 4 396 9478`.
- [x] **Structured Data & SEO:**
  - Dynamic `generateMetadata()` on every route reading directly from `data/seo-config.json`.
  - Schema.org `TravelAgency` and `LocalBusiness` JSON-LD with Dubai coordinates and opening hours.
- [x] **Production Resilience & Crash Proofing:**
  - `src/app/error.tsx`: Global error boundary with auto-recovery button.
  - `src/app/not-found.tsx`: Custom 404 page with navigation options.
  - `src/app/loading.tsx`: Route loading skeleton.
- [x] **Enterprise Security Hardening:**
  - `next.config.ts`: Strict HTTP headers (CSP, HSTS 2-years preload, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy).
  - Anti-Brute-Force Rate Limiting: 5 attempts per 15-min IP window, locked out with HTTP 429.
  - Timing-Safe Credential Verification: `crypto.timingSafeEqual` with SHA-256 digests.
  - Input Sanitization on all SEO API and WhatsApp link inputs.
- [x] **Crawler & Search Engine Protection:**
  - `src/app/robots.ts`: Disallows `/admin/` and `/api/` from bots.
  - `src/app/sitemap.ts`: Dynamic XML sitemap for Google Search Console.
- [x] **Lenis Smooth Scrolling:**
  - `lenis@1.3.26` installed for 60fps inertial momentum scrolling.
  - `SmoothScroll.tsx` client wrapper wrapping entire layout.
- [x] **Live Dubai Clock:**
  - `Navbar.tsx` shows real-time Dubai GST (UTC+4) with office open/closed status indicator.

---

## 4. Key Constraints & Tech Stack
- **Framework:** Next.js 16.3.6 (App Router) + React 19 + TypeScript + Tailwind CSS v4.
- **Smooth Scroll:** `lenis@1.3.26` — 60fps momentum scrolling with Lenis.
- **Design Aesthetic (Quiet Luxury):**
  - Primary Canvas: Warm Alabaster (`#FBF9F5`, `#F8F6F0`) and Deep Midnight Obsidian (`#080E14`, `#0D151D`).
  - Accents: Champagne Desert Gold (`#C8A97E`, `#B89360`).
  - Text: Obsidian Charcoal (`#12161A`), Warm Body (`#3E4650`), Muted Sand (`#6E767E`).
  - Borders: Warm Hairline (`#E8E5DE`, `#F0EDE6`).
- **Typography:** Google Fonts **Playfair Display** (editorial serif headings) + **Plus Jakarta Sans** (tracked modern sans for body/labels).
- **Icons:** `lucide-react`.

---

## 5. Architectural & Technical Decisions Log
- **2026-09-23:** Decided on custom built-in `/admin/seo` with `.env` authentication.
- **2026-09-23:** Original color palette: Sky Blue + White + Deep Navy.
- **2026-09-23:** Lead capture set to Instant Quote / WhatsApp inquiry flow.
- **2026-09-23:** Implemented HMAC SHA-256 session authentication.
- **2026-09-23:** Added Google Maps embed for Al Masraf Building, Deira.
- **2026-09-23:** Implemented strict HTTP security headers in `next.config.ts`.
- **2026-09-23:** Added timing-safe comparison + IP rate limiting.
- **2026-09-23:** Added `error.tsx`, `not-found.tsx`, `loading.tsx`, `robots.ts`, `sitemap.ts`.
- **2026-09-23:** Production build verified, zero TypeScript errors.
- **2026-09-23:** First UI refactor from AI gradients to clean borders/typography.
- **2026-09-23:** **BOUTIQUE LUXURY EDITORIAL REDESIGN** — Complete overhaul:
  - Replaced Sky Blue/White palette with Warm Alabaster/Obsidian/Champagne Gold "quiet luxury" palette.
  - Replaced Outfit font with **Playfair Display** editorial serif for headings.
  - Added `lenis@1.3.26` for 60fps buttery smooth momentum scrolling.
  - Added live Dubai GST clock with office open/closed indicator in navbar.
  - Redesigned all components: editorial numbered service cards, luxury destination cards with hover zoom, concierge consultation modal, high-fashion oversized footer.
  - Gold underline nav animations, editorial `.divider-gold` accents, `::selection` color branding.
  - Custom scrollbar styling matching warm palette.
  - Build verified: 0 TypeScript errors, 14/14 pages generated successfully.

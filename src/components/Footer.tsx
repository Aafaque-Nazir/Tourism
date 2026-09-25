import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Lock,
  ShieldCheck,
  CheckCircle2,
  Landmark,
  Banknote,
  CreditCard,
} from "lucide-react";
import { COMPANY_INFO, SERVICES_DATA } from "@/lib/data";

// Sleek, compact payment badge components
function VisaBadge() {
  return (
    <span className="inline-flex items-center justify-center h-7 px-2.5 rounded-md bg-slate-800 border border-slate-700 hover:border-sky-500/50 transition-colors shadow-2xs">
      <span className="font-black italic text-xs tracking-widest text-[#3B82F6]">
        VISA
      </span>
    </span>
  );
}

function MastercardBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-md bg-slate-800 border border-slate-700 hover:border-sky-500/50 transition-colors shadow-2xs">
      <span className="flex items-center -space-x-1">
        <span className="w-3 h-3 rounded-full bg-[#EB001B] inline-block" />
        <span className="w-3 h-3 rounded-full bg-[#F79E1B]/95 inline-block" />
      </span>
      <span className="text-[10px] font-bold text-white tracking-tight">mastercard</span>
    </span>
  );
}

function AmexBadge() {
  return (
    <span className="inline-flex items-center justify-center h-7 px-2 rounded-md bg-[#006FCF]/25 border border-[#006FCF]/60 hover:border-[#006FCF] transition-colors shadow-2xs">
      <span className="font-extrabold text-[10px] tracking-wider text-[#38BDF8]">
        AMEX
      </span>
    </span>
  );
}

function ApplePayBadge() {
  return (
    <span className="inline-flex items-center gap-1 h-7 px-2.5 rounded-md bg-slate-800 border border-slate-700 hover:border-sky-500/50 transition-colors shadow-2xs">
      <svg className="w-3 h-3 fill-white" viewBox="0 0 170 170">
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.75-11.66-14.12-6.52-10.12-11.75-21.73-15.67-34.82-3.92-13.09-5.88-25.23-5.88-36.42 0-14.7 3.6-26.68 10.79-35.95 7.19-9.28 16.27-13.99 27.24-14.13 5.44 0 11.2 1.48 17.27 4.45 6.07 2.97 10.02 4.48 11.84 4.54 1.41 0 5.48-1.57 12.21-4.71 6.73-3.14 12.52-4.54 17.37-4.2 13.04.87 23.31 5.65 30.79 14.34-11.44 6.94-17.05 16.5-16.84 28.67.21 9.57 3.86 17.65 10.95 24.23 7.09 6.58 15.54 10.23 25.35 10.95-2.06 6.09-4.56 12.3-7.5 18.63zM119.22 33.04c-.11-7.17 2.45-13.88 7.68-20.14 5.23-6.26 11.77-10.42 19.63-12.49.22 1.09.33 2.18.33 3.27 0 7.07-2.73 13.9-8.19 20.48-5.46 6.58-12 10.66-19.45 12.24z" />
      </svg>
      <span className="text-[11px] font-semibold text-white tracking-tight">Pay</span>
    </span>
  );
}

function GooglePayBadge() {
  return (
    <span className="inline-flex items-center gap-1 h-7 px-2.5 rounded-md bg-slate-800 border border-slate-700 hover:border-sky-500/50 transition-colors shadow-2xs">
      <svg className="w-3 h-3" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
      </svg>
      <span className="text-[11px] font-semibold text-white tracking-tight">Pay</span>
    </span>
  );
}

function BankWireBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-md bg-slate-800 border border-slate-700 hover:border-sky-500/50 transition-colors shadow-2xs">
      <Landmark className="w-3 h-3 text-sky-400 shrink-0" />
      <span className="text-[11px] font-semibold text-slate-200">Wire / IBAN</span>
    </span>
  );
}

function CashOfficeBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-md bg-slate-800 border border-slate-700 hover:border-sky-500/50 transition-colors shadow-2xs">
      <Banknote className="w-3 h-3 text-emerald-400 shrink-0" />
      <span className="text-[11px] font-semibold text-slate-200">Cash & POS</span>
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 sm:pt-20 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand Banner */}
        <div className="pb-12 border-b border-slate-800">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 p-1.5 border border-white/15 flex items-center justify-center shrink-0">
                <Image
                  src="/logo-icon.png"
                  alt="Al Raheeq Tourism LLC Dubai"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400 block mb-1">
                  Est. Dubai, UAE
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
                  Al Raheeq Tourism
                </h2>
                <p className="text-xs text-slate-400 mt-1 max-w-md font-light">
                  Licensed UAE travel agency. Quick visas, cheap flights, Dubai desert safaris, and complete holiday packages from Deira, Dubai.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-2 text-xs">
              <span className="text-sky-400 font-semibold font-arabic text-sm">الرحيق للسياحة ذ.م.م</span>
              <span className="text-white/40">Al Raheeq Tourism LLC • Dubai, UAE</span>
            </div>
          </div>
        </div>

        {/* Links Grid (Balanced 4-Column Architecture) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-slate-800 text-sm">
          {/* Column 1: Dubai Headquarters (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-400">
              Our Dubai Office
            </h5>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address.line1},<br />
                  {COMPANY_INFO.address.line2}, {COMPANY_INFO.address.city}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.cleanPhone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p>{COMPANY_INFO.timings.weekdays}</p>
                  <p className="text-[11px] text-rose-400 mt-0.5">{COMPANY_INFO.timings.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-400 mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2.5 text-xs">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/packages", label: "Tour Packages" },
                { href: "/stories", label: "Traveler Stories" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="sky-underline text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Travel Services (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-400 mb-4">
              Our Services
            </h5>
            <ul className="space-y-2.5 text-xs">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link href={`/services#${srv.id}`} className="sky-underline text-slate-400 hover:text-white transition-colors">
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Accreditations (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.16em] text-sky-400">
              Legal & Policies
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/privacy-policy" className="sky-underline text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="sky-underline text-slate-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="sky-underline text-slate-400 hover:text-white transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Compact Stacked Payment & Security Bar */}
        <div className="py-6 border-b border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Payment methods row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mr-1">
                We Accept:
              </span>
              <VisaBadge />
              <MastercardBadge />
              <AmexBadge />
              <ApplePayBadge />
              <GooglePayBadge />
              <BankWireBadge />
              <CashOfficeBadge />
            </div>

            {/* Trust and Currency indicators */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-1.5 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>Safe & Secure Checkout</span>
              </span>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-sky-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Official 5% VAT Invoicing</span>
              </span>
              <span className="text-slate-700 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-amber-400/90">
                <CreditCard className="w-3.5 h-3.5 shrink-0" />
                <span>AED, USD, EUR, GBP, SAR</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Al Raheeq Tourism LLC. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-slate-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/cancellation-policy" className="hover:text-white transition-colors">
              Cancellation & Refund
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href="/admin/login"
              className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
              title="SEO Portal"
            >
              <Lock className="w-3 h-3" />
              <span>Portal</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FileCheck,
  Plane,
  Building2,
  ShieldCheck,
  Compass,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";
import { SERVICES_DATA } from "@/lib/data";

interface BentoServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function BentoServices({ onSelectService }: BentoServicesProps) {
  // Map services by ID for explicit, deterministic Bento slot assignment
  const visa = SERVICES_DATA.find((s) => s.id === "visa-assistance") || SERVICES_DATA[0];
  const flight = SERVICES_DATA.find((s) => s.id === "flight-bookings") || SERVICES_DATA[1];
  const hotel = SERVICES_DATA.find((s) => s.id === "hotel-reservations") || SERVICES_DATA[2];
  const insurance = SERVICES_DATA.find((s) => s.id === "travel-insurance") || SERVICES_DATA[3];
  const safari = SERVICES_DATA.find((s) => s.id === "desert-safari") || SERVICES_DATA[4];
  const tours = SERVICES_DATA.find((s) => s.id === "holiday-packages") || SERVICES_DATA[5];

  return (
    <section className="py-20 sm:py-24 bg-[#F5F4F0] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header (Minimalist Monochromatic Typography) ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600 block mb-2">
              Our Services in Dubai
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-slate-900 tracking-tight leading-[1.12]">
              Curated Travel Services.
              <br />
              <span className="text-slate-600 font-normal">Crafted for Every Journey.</span>
            </h2>
          </div>

          <div className="max-w-md flex flex-col items-start md:items-end gap-3">
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed md:text-right font-normal">
              From fast-track UAE tourist visas and worldwide flights to red dune desert safaris and luxury stays, every service is tailored with zero hidden costs.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-sky-700 transition-colors group"
            >
              <span>View All Services & Pricing</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ── 3x3 Bento Grid Layout (Exact Match to Reference) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {/* ════════════════════════════════════════════════════════
              CARD 1 (Tall — Spans 2 Rows on Desktop)
              UAE Tourist Visas
          ════════════════════════════════════════════════════════ */}
          <div
            onClick={() => onSelectService(visa.title)}
            className="md:col-span-1 lg:col-start-1 lg:row-start-1 lg:col-span-1 lg:row-span-2 bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between group cursor-pointer border border-black/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 min-h-[460px] lg:min-h-[560px]"
          >
            {/* Top 3D Visual */}
            <div className="relative w-full h-52 sm:h-64 lg:h-72 flex items-center justify-center rounded-2xl overflow-hidden bg-white mb-4">
              <Image
                src={visa.image || "/bento/bento-visa.jpg"}
                alt={visa.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Bottom Content */}
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-slate-200/80">
                    <Sparkles className="w-3 h-3 text-slate-600" />
                    {visa.badge || "24–48h Approval"}
                  </span>
                  {visa.titleArabic && (
                    <span className="text-[11px] text-slate-400 font-medium font-sans" dir="rtl">
                      {visa.titleArabic}
                    </span>
                  )}
                </div>

                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {visa.title}
                </h3>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                {visa.description}
              </p>

              {/* Feature Chips */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {visa.features.slice(0, 2).map((feat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[10.5px] text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100"
                  >
                    <Check className="w-3 h-3 text-slate-400 shrink-0" />
                    <span className="truncate max-w-[200px]">{feat}</span>
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  <span>{visa.ctaText || "Apply Visa"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-[10px] text-slate-400 font-medium">Deira Office / Online</span>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════
              CARD 2 (Wide — Spans 2 Cols on Desktop)
              Worldwide Flight Bookings
          ════════════════════════════════════════════════════════ */}
          <div
            onClick={() => onSelectService(flight.title)}
            className="md:col-span-2 lg:col-start-2 lg:row-start-1 lg:col-span-2 lg:row-span-1 bg-white rounded-3xl p-6 sm:p-7 flex flex-col-reverse sm:flex-row items-center justify-between gap-6 group cursor-pointer border border-black/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 min-h-[260px]"
          >
            {/* Left Content */}
            <div className="w-full sm:w-[52%] flex flex-col justify-between h-full space-y-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-slate-200/80">
                    <Plane className="w-3 h-3 text-slate-600" />
                    {flight.badge || "Best Fare Guarantee"}
                  </span>
                  {flight.titleArabic && (
                    <span className="text-[11px] text-slate-400 font-medium font-sans" dir="rtl">
                      {flight.titleArabic}
                    </span>
                  )}
                </div>

                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {flight.title}
                </h3>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                {flight.description}
              </p>

              {/* Feature Chips */}
              <div className="flex flex-wrap gap-1.5">
                {flight.features.slice(0, 2).map((feat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[10.5px] text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100"
                  >
                    <Check className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{feat}</span>
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  <span>{flight.ctaText || "Search Flights"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>

            {/* Right 3D Visual */}
            <div className="w-full sm:w-[48%] relative h-48 sm:h-56 flex items-center justify-center">
              <Image
                src={flight.image || "/bento/bento-flights.jpg"}
                alt={flight.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════
              CARD 3 (1 Col on Desktop)
              Hotel Reservations
          ════════════════════════════════════════════════════════ */}
          <div
            onClick={() => onSelectService(hotel.title)}
            className="md:col-span-1 lg:col-start-2 lg:row-start-2 lg:col-span-1 lg:row-span-1 bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between group cursor-pointer border border-black/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 min-h-[260px]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 space-y-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-slate-200/80">
                  <Building2 className="w-3 h-3 text-slate-600" />
                  {hotel.badge || "Exclusive Rates"}
                </span>

                <h3 className="font-editorial text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {hotel.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {hotel.description}
                </p>
              </div>

              {/* 3D Visual thumbnail */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0">
                <Image
                  src={hotel.image || "/bento/bento-hotels.jpg"}
                  alt={hotel.title}
                  fill
                  sizes="160px"
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                <span>{hotel.ctaText || "Book Hotel"}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-[10px] text-slate-400 font-medium">5-Star & Budget</span>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════
              CARD 4 (1 Col on Desktop)
              Travel Insurance
          ════════════════════════════════════════════════════════ */}
          <div
            onClick={() => onSelectService(insurance.title)}
            className="md:col-span-1 lg:col-start-3 lg:row-start-2 lg:col-span-1 lg:row-span-1 bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between group cursor-pointer border border-black/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 min-h-[260px]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 space-y-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-slate-200/80">
                  <ShieldCheck className="w-3 h-3 text-slate-600" />
                  {insurance.badge || "UAE Compliant"}
                </span>

                <h3 className="font-editorial text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {insurance.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {insurance.description}
                </p>
              </div>

              {/* 3D Visual thumbnail */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0">
                <Image
                  src={insurance.image || "/bento/bento-insurance.jpg"}
                  alt={insurance.title}
                  fill
                  sizes="160px"
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                <span>{insurance.ctaText || "Get Covered"}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-[10px] text-slate-400 font-medium">Instant Certificate</span>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════
              CARD 5 (Wide — Spans 2 Cols on Desktop)
              Desert Safari & Red Dunes
          ════════════════════════════════════════════════════════ */}
          <div
            onClick={() => onSelectService(safari.title)}
            className="md:col-span-2 lg:col-start-1 lg:row-start-3 lg:col-span-2 lg:row-span-1 bg-white rounded-3xl p-6 sm:p-7 flex flex-col-reverse sm:flex-row items-center justify-between gap-6 group cursor-pointer border border-black/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 min-h-[260px]"
          >
            {/* Left Content */}
            <div className="w-full sm:w-[50%] flex flex-col justify-between h-full space-y-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-slate-200/80">
                    <Compass className="w-3 h-3 text-slate-600" />
                    {safari.badge || "Top Dubai Experience"}
                  </span>
                  {safari.titleArabic && (
                    <span className="text-[11px] text-slate-400 font-medium font-sans" dir="rtl">
                      {safari.titleArabic}
                    </span>
                  )}
                </div>

                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {safari.title}
                </h3>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                {safari.description}
              </p>

              {/* Feature Chips */}
              <div className="flex flex-wrap gap-1.5">
                {safari.features.slice(0, 2).map((feat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[10.5px] text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100"
                  >
                    <Check className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>{feat}</span>
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  <span>{safari.ctaText || "Book Safari"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>

            {/* Right 3D Visual */}
            <div className="w-full sm:w-[50%] relative h-48 sm:h-56 flex items-center justify-center">
              <Image
                src={safari.image || "/bento/bento-safari.jpg"}
                alt={safari.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════
              CARD 6 (1 Col on Desktop)
              City Tours & Combos
          ════════════════════════════════════════════════════════ */}
          <div
            onClick={() => onSelectService(tours.title)}
            className="md:col-span-2 lg:col-start-3 lg:row-start-3 lg:col-span-1 lg:row-span-1 bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between group cursor-pointer border border-black/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 min-h-[260px]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 space-y-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-slate-200/80">
                  <Sparkles className="w-3 h-3 text-slate-600" />
                  {tours.badge || "Must Visit"}
                </span>

                <h3 className="font-editorial text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {tours.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {tours.description}
                </p>
              </div>

              {/* 3D Visual thumbnail */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0">
                <Image
                  src={tours.image || "/bento/bento-tours.jpg"}
                  alt={tours.title}
                  fill
                  sizes="160px"
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                <span>{tours.ctaText || "Explore Tours"}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-[10px] text-slate-400 font-medium">Burj Khalifa & Marina</span>
            </div>
          </div>
        </div>

        {/* ── Trust Highlights Strip ── */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-7 border-t border-slate-300/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 font-medium">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-slate-700 shrink-0" />
            <span>Fast Visas Approved in 24–48 Hours</span>
          </span>
          <span className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-slate-700 shrink-0" />
            <span>Visit Our Office in Deira (Al Masraf Building, 22nd Floor)</span>
          </span>
          <span className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-slate-700 shrink-0" />
            <span>100% Transparent Invoicing • Zero Hidden Fees</span>
          </span>
        </div>
      </div>
    </section>
  );
}

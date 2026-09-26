"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  ArrowRight,
  Building2,
  FileCheck,
  CreditCard,
  Headphones,
  Sparkles,
  ExternalLink,
  MessageCircle,
  Star,
  CheckCircle2,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import BentoServices from "@/components/BentoServices";
import PackageCard from "@/components/PackageCard";
import PackageDetailModal from "@/components/PackageDetailModal";
import InstantQuoteModal from "@/components/InstantQuoteModal";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import {
  SERVICES_DATA,
  FEATURED_PACKAGES,
  REVIEWS_DATA,
  COMPANY_INFO,
  type TourPackage,
} from "@/lib/data";

export default function HomeClient() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("General Dubai Inquiry");
  const [detailPkg, setDetailPkg] = useState<TourPackage | null>(null);
  const [pkgTab, setPkgTab] = useState<"details" | "requirements" | "quote">("details");

  const openQuote = (serviceName?: string) => {
    setSelectedService(serviceName || "General Dubai Inquiry");
    setIsQuoteOpen(true);
  };

  return (
    <>
      {/* Hero */}
      <HeroSection onOpenQuoteModal={openQuote} />

      {/* Airline Partners Strip */}
      <section className="bg-white border-b border-slate-200 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-600">
              Ticketing on 500+ Airlines
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 font-semibold text-slate-500">
              {["Emirates", "flydubai", "Air Arabia", "Etihad", "Qatar Airways", "Saudia"].map((a) => (
                <span key={a} className="hover:text-slate-900 transition-colors cursor-default">{a}</span>
              ))}
            </div>
            <div className="text-emerald-600 font-semibold flex items-center gap-1.5 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>IATA Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <BentoServices onSelectService={(title) => openQuote(title)} />

      {/* Featured Tour Packages */}
      <section id="packages" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-600">
                Top Packages
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2">
                Dubai & International Tour Packages
              </h2>
              <div className="divider-sky mt-4" />
              <p className="text-sm text-slate-500 mt-4 max-w-xl leading-relaxed">
                Curated holiday packages to top destinations — from Dubai desert safaris to Georgia, Turkey, Bali & Switzerland.
              </p>
            </div>
            <Link
              href="/packages"
              className="btn-primary flex items-center gap-2 shrink-0"
            >
              <span>View All Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PACKAGES.map((pkg) => (
              <PackageCard
                key={pkg.id}
                packageData={pkg}
                onBook={(p) => {
                  setDetailPkg(p);
                  setPkgTab("quote");
                }}
                onViewItinerary={(p) => {
                  setDetailPkg(p);
                  setPkgTab("details");
                }}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/packages"
              className="btn-outline inline-flex items-center gap-2"
            >
              <span>Explore All 12 Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Al Raheeq — Clean Minimalist Luxury Showcase */}
      <section className="relative py-24 sm:py-28 bg-[#0B1120] text-white overflow-hidden border-t border-slate-800">
        {/* Subtle, Monochromatic Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-900/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-7">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-400 block">
                  Why Choose Al Raheeq
                </span>

                <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-white tracking-tight leading-[1.15]">
                  Simple, Honest & Reliable
                  <br />
                  <span className="text-slate-300 font-normal">Travel Service in Dubai</span>
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed max-w-xl font-normal pt-1">
                  Located in Al Masraf Building on Al Rigga Road, Deira. We make travel planning straightforward, dependable, and completely transparent with official UAE government licensing.
                </p>
              </div>

              {/* 4 Clean Minimalist Feature Cards (Unified Single-Tone Aesthetic) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    icon: FileCheck,
                    badge: "24–48h Approvals",
                    title: "Quick UAE Visas",
                    desc: "Fast 30-day and 60-day tourist visas with simple document requirements and verified approvals.",
                  },
                  {
                    icon: CreditCard,
                    badge: "100% Clear Invoicing",
                    title: "No Hidden Fees",
                    desc: "What you see is what you pay. Official invoices with standard 5% UAE VAT and zero unexpected charges.",
                  },
                  {
                    icon: MessageCircle,
                    badge: "Direct Support",
                    title: "Instant Assistance",
                    desc: "Message or call us directly for prompt answers, itinerary updates, and local Dubai guidance.",
                  },
                  {
                    icon: Building2,
                    badge: "Deira HQ",
                    title: "Walk-in Branch",
                    desc: "Visit our physical branch Mon–Sat, 9 AM to 10 PM in Deira — 2 minutes from Al Rigga Metro.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-semibold text-slate-400 bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/[0.06] tracking-wider uppercase">
                            {item.badge}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Deira Office Executive Card */}
            <div className="lg:col-span-5 relative">
              <div className="bg-slate-900/90 rounded-3xl p-7 sm:p-8 border border-white/[0.08] space-y-5 shadow-xl">
                {/* Header with Subtle Status */}
                <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-4">
                  <div>
                    <h3 className="font-editorial text-2xl font-bold text-white">
                      Deira Office
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                      الرحيق للسياحة • Al Raheeq Tourism LLC
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-slate-300 text-[11px] font-medium shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Open Today</span>
                  </div>
                </div>

                {/* DET License Verification */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
                  <div className="text-xs">
                    <span className="text-white font-bold block">Dubai DET & UAE Govt Licensed</span>
                    <span className="text-slate-400 text-[11px]">Department of Economy and Tourism Certified</span>
                  </div>
                </div>

                {/* Details List */}
                <div className="space-y-3 text-xs text-slate-300 pt-1">
                  {/* Address */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="font-semibold text-white block">Office Address</span>
                      <p className="text-slate-300">{COMPANY_INFO.address.line1}</p>
                      <p className="text-slate-400 text-[11px]">{COMPANY_INFO.address.line2}, Dubai, UAE</p>
                      <a
                        href={COMPANY_INFO.address.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-400 hover:text-sky-300 mt-1 transition-colors"
                      >
                        <span>Directions on Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <div className="flex-1">
                      <span className="font-semibold text-white block">Direct Telephone</span>
                      <a href={`tel:${COMPANY_INFO.cleanPhone}`} className="text-slate-300 hover:text-white transition-colors">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                    <a
                      href={`tel:${COMPANY_INFO.cleanPhone}`}
                      className="px-3 py-1 rounded-lg bg-white/[0.06] text-white text-[11px] font-bold hover:bg-white/[0.12] transition-colors border border-white/[0.08]"
                    >
                      Call
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Working Hours</span>
                      <p className="text-slate-300">{COMPANY_INFO.timings.weekdays}</p>
                      <p className="text-slate-500 text-[11px]">{COMPANY_INFO.timings.sunday}</p>
                    </div>
                  </div>
                </div>

                {/* Primary Action Buttons (Cohesive Two-Tone) */}
                <div className="pt-2 grid grid-cols-2 gap-3">
                  <a
                    href={COMPANY_INFO.address.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-sky-600 hover:bg-sky-500 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>View Map</span>
                  </a>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hello Al Raheeq Tourism, I would like to inquire about travel services.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs text-slate-200 bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.1] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Key Trust Stats Bar — Quiet, Monochromatic Metrics */}
          <div className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="text-xl sm:text-2xl font-bold text-white">5.0 ★</span>
              <p className="text-xs text-slate-400">1,200+ Verified Traveler Reviews</p>
            </div>

            <div className="space-y-1">
              <span className="text-xl sm:text-2xl font-bold text-white">24–48 Hours</span>
              <p className="text-xs text-slate-400">Express UAE Tourist Visa Clearance</p>
            </div>

            <div className="space-y-1">
              <span className="text-xl sm:text-2xl font-bold text-white">500+ Airlines</span>
              <p className="text-xs text-slate-400">Direct Global Ticketing & Rebooking</p>
            </div>

            <div className="space-y-1">
              <span className="text-xl sm:text-2xl font-bold text-white">100% Transparent</span>
              <p className="text-xs text-slate-400">Official UAE VAT Invoices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReviewsCarousel reviews={REVIEWS_DATA} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-400">
            Book Your Trip
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact Us Today
          </h2>
          <div className="divider-sky mx-auto" />
          <p className="text-sm text-white/40 max-w-lg mx-auto leading-relaxed">
            Message us on WhatsApp for fast booking of visas, flights, hotels, and tours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => openQuote()}
              className="btn-primary flex items-center gap-2"
            >
              <span>Get Instant Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={`tel:${COMPANY_INFO.cleanPhone}`}
              className="flex items-center gap-2 px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white/60 border border-white/10 hover:border-sky-400 hover:text-white transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Package Detail Modal */}
      {detailPkg && (
        <PackageDetailModal
          isOpen={!!detailPkg}
          onClose={() => setDetailPkg(null)}
          pkg={detailPkg}
          initialTab={pkgTab}
          key={`${detailPkg.id}-${pkgTab}`}
        />
      )}

      {/* Quote Modal */}
      <InstantQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={selectedService}
      />
    </>
  );
}

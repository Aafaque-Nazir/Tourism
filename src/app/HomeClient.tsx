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
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import PackageCard from "@/components/PackageCard";
import InstantQuoteModal from "@/components/InstantQuoteModal";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import {
  SERVICES_DATA,
  FEATURED_PACKAGES,
  REVIEWS_DATA,
  COMPANY_INFO,
} from "@/lib/data";

export default function HomeClient() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("General Dubai Inquiry");

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

      {/* Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-600">
              Our Services
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2">
              Travel Services in Dubai
            </h2>
            <div className="divider-sky mt-4" />
            <p className="text-sm text-slate-500 mt-4 leading-relaxed">
              We provide UAE tourist visas, cheap flight tickets, hotel bookings, and complete holiday packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service, idx) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={idx}
                onSelect={(title) => openQuote(title)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="btn-outline inline-flex items-center gap-2"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dubai Experiences */}
      <section id="packages" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-600">
                Top Packages
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-2">
                Best Dubai Tour Packages
              </h2>
              <div className="divider-sky mt-4" />
              <p className="text-sm text-slate-500 mt-4 max-w-xl leading-relaxed">
                Book our most popular tours with guaranteed departures and professional guides.
              </p>
            </div>
            <button
              onClick={() => openQuote("Custom Dubai Package")}
              className="btn-primary flex items-center gap-2 shrink-0"
            >
              <span>Custom Itinerary</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PACKAGES.map((pkg) => (
              <PackageCard
                key={pkg.id}
                packageData={pkg}
                onBook={(title) => openQuote(title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Al Raheeq */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            {/* Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-400">
                About Us
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Why Choose
                <br />Al Raheeq Tourism LLC
              </h2>
              <div className="divider-sky" />
              <p className="text-sm text-white/50 leading-relaxed max-w-lg">
                Operating from Al Masraf Building in Deira, we offer honest and fast travel services for tourists and residents in the UAE.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { icon: FileCheck, title: "Direct Visa Portal", desc: "UAE immigration integration for rapid 30 & 60-day tourist visa approvals." },
                  { icon: CreditCard, title: "Zero Hidden Charges", desc: "All-inclusive quotes with official UAE VAT and full invoice breakdowns." },
                  { icon: Headphones, title: "Personal Counselor", desc: "Dedicated support for itinerary changes, rebooking, and emergency assistance." },
                  { icon: Building2, title: "Physical Office", desc: "Walk-in consultations Mon–Sat, 9 AM – 10 PM at our Deira headquarters." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="p-5 rounded-xl bg-white/5 border border-white/10">
                      <Icon className="w-5 h-5 text-sky-400 mb-3" />
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-white/40 mt-1.5 leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Office Card */}
            <div className="lg:col-span-5 bg-white/5 p-7 rounded-xl border border-white/10 space-y-5">
              <div className="border-b border-white/10 pb-3">
                <h3 className="font-editorial text-lg font-bold text-white">Deira Office</h3>
                <p className="text-xs text-sky-400">الرحيق للسياحة • Al Raheeq Tourism LLC</p>
              </div>

              <div className="space-y-3.5 text-xs text-white/50">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Address</span>
                    <p>{COMPANY_INFO.address.line1}</p>
                    <p>{COMPANY_INFO.address.line2}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Telephone</span>
                    <p>{COMPANY_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Hours</span>
                    <p>{COMPANY_INFO.timings.weekdays}</p>
                    <p className="text-rose-400/70">{COMPANY_INFO.timings.sunday}</p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>View Location</span>
              </Link>
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

      {/* Quote Modal */}
      <InstantQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={selectedService}
      />
    </>
  );
}

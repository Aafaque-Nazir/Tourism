"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  FileCheck,
  Users2,
} from "lucide-react";
import InstantQuoteModal from "@/components/InstantQuoteModal";
import { COMPANY_INFO } from "@/lib/data";

export default function AboutClient() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      {/* Page Header */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=80')",
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-400">
            About Our Agency
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Dedicated Travel
            <br />
            Management in Dubai
          </h1>
          <div className="divider-sky" />
          <p className="text-sm text-white/50 max-w-xl leading-relaxed">
            A licensed UAE travel agency based on the 22nd Floor of Al Masraf
            Building, Al Rigga Road, Deira. Serving international travelers,
            corporate executives, and visiting families.
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-600">
                Company Profile
              </span>
              <h2 className="font-editorial text-3xl font-bold text-slate-900 tracking-tight">
                Rooted in Dubai Hospitality
                <br />& Commercial Integrity
              </h2>
              <div className="divider-sky" />

              <p className="text-sm text-slate-600 leading-relaxed">
                Founded in the United Arab Emirates,{" "}
                <strong className="text-slate-900">
                  Al Raheeq Tourism LLC (الرحيق للسياحة)
                </strong>{" "}
                operates from the central commercial hub of Deira, Dubai. We are
                an authorized, full-service travel consultancy providing
                specialized visa clearances, worldwide airline ticketing, luxury
                hotel accommodations, and bespoke holiday experiences.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our physical headquarters on the 22nd Floor of Al Masraf
                Building allows travelers and corporate partners to consult
                face-to-face with seasoned travel advisors. We manage every
                component of your trip with complete pricing transparency and
                adherence to UAE Department of Economy and Tourism regulations.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                {[
                  { value: "5.0 ★", label: "Customer Rating", sub: "1,200+ Reviews" },
                  { value: "22nd", label: "Floor Office", sub: "Al Masraf Bldg, Deira" },
                  { value: "24-48h", label: "Visa Clearances", sub: "UAE 30/60 Day Visas" },
                ].map((stat) => (
                  <div key={stat.label} className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-editorial text-2xl font-bold text-slate-900">{stat.value}</span>
                    <p className="text-xs font-bold text-slate-700 mt-1">{stat.label}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Values Card */}
            <div className="lg:col-span-5 bg-slate-50 rounded-xl p-7 border border-slate-200 space-y-6">
              <h3 className="font-editorial text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                Core Agency Principles
              </h3>

              <div className="space-y-5 text-sm">
                {[
                  { icon: ShieldCheck, title: "Full Regulatory Licensing", desc: "Registered and compliant with UAE travel and tourism governing bodies." },
                  { icon: FileCheck, title: "Transparent Invoicing", desc: "Zero hidden charges. Accurate quotations with valid UAE VAT." },
                  { icon: Users2, title: "Multilingual Advisors", desc: "Fluent counselors in English, Arabic, Hindi, and Urdu." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block">{item.title}</strong>
                        <span className="text-xs text-slate-500">{item.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-slate-200">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 transition-colors"
                >
                  Consult With a Travel Advisor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight">
            Visit Our Office on Al Rigga Road
          </h2>
          <div className="divider-sky mx-auto" />
          <p className="text-sm text-white/40 max-w-lg mx-auto">
            Al Masraf Building, 22nd Floor. Two minutes walk from Al Rigga Metro Station.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-white/40 font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              {COMPANY_INFO.address.full}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              {COMPANY_INFO.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              {COMPANY_INFO.timings.weekdays}
            </span>
          </div>

          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 mt-4"
          >
            <span>View Map & Directions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      <InstantQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService="General Dubai Inquiry"
      />
    </>
  );
}

"use client";

import { useState } from "react";
import {
  FileCheck,
  Compass,
  Plane,
  Building2,
  Calendar,
  Users,
  ArrowRight,
  Star,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_INFO, buildWhatsAppQuoteUrl } from "@/lib/data";

interface HeroSectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

export default function HeroSection({ onOpenQuoteModal }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<"visa" | "safari" | "flight" | "hotel">("visa");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("2 Travelers");
  const [specificOption, setSpecificOption] = useState("UAE 30-Day Tourist Visa");

  const tabOptions = {
    visa: [
      "UAE 30-Day Tourist Visa",
      "UAE 60-Day Tourist Visa",
      "UAE Express 24-Hour Visa",
      "Schengen / UK Visa Assistance",
    ],
    safari: [
      "VIP Red Dune Desert Safari & BBQ",
      "Dubai Marina Luxury Glass Dhow Cruise",
      "Burj Khalifa 124th Floor + Aquarium Combo",
      "Abu Dhabi Full Day Grand Mosque Tour",
    ],
    flight: [
      "Economy Roundtrip Flight",
      "Business Class Flight",
      "Group Booking (10+ Passengers)",
      "Urgent Same-Day Rebooking",
    ],
    hotel: [
      "5-Star Beachfront Luxury Resort",
      "Downtown Dubai Hotel near Burj Khalifa",
      "Business Hotel near Deira / Al Rigga Metro",
      "Family 2-Bedroom Suite",
    ],
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppQuoteUrl({
      serviceOrPackage: specificOption,
      date: date || undefined,
      travelers: travelers,
    });
    window.open(url, "_blank");
  };

  return (
    <section className="relative bg-slate-900 text-white min-h-[85vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=85')",
          opacity: 0.35,
        }}
      />
      <div className="absolute inset-0 bg-slate-900/75" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-sky-300 text-xs font-semibold tracking-wider uppercase border border-white/10 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Licensed UAE Travel Agency • Deira, Dubai</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.1]">
            Easy & Affordable
            <br />
            <span className="text-sky-400">Travel in Dubai</span>
            <br />& Worldwide
          </h1>

          <div className="divider-sky" />

          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl font-light">
            Visit our office in Deira or book online. We help you with quick UAE visit visas, cheap flight tickets, desert safaris, and complete holiday packages with no hidden costs.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onOpenQuoteModal?.()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 font-medium">
              <span className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-white font-semibold">{COMPANY_INFO.rating.toFixed(1)}</span> Rating • {COMPANY_INFO.reviewsCount} Reviews
              </span>
              <span className="text-white/10">|</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {COMPANY_INFO.address.line2}, {COMPANY_INFO.address.city}
              </span>
            </div>
          </div>
        </div>

        {/* Travel Search Dock */}
        <div className="mt-12 max-w-5xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
          <div className="flex items-center border-b border-slate-200">
            {[
              { id: "visa", label: "Visas", icon: FileCheck },
              { id: "safari", label: "Tours & Safari", icon: Compass },
              { id: "flight", label: "Flights", icon: Plane },
              { id: "hotel", label: "Hotels", icon: Building2 },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id as typeof activeTab);
                    setSpecificOption(tabOptions[tab.id as typeof activeTab][0]);
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
                    isActive
                      ? "text-slate-900 border-sky-600 bg-sky-50"
                      : "text-slate-500 border-transparent hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <form
            onSubmit={handleSearchSubmit}
            className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end"
          >
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                Service
              </label>
              <select
                value={specificOption}
                onChange={(e) => setSpecificOption(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-600 bg-white"
              >
                {tabOptions[activeTab].map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-sky-600" />
                <span>Travel Date</span>
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-600 bg-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-sky-600" />
                <span>Travelers</span>
              </label>
              <select
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-600 bg-white"
              >
                <option value="1 Traveler (Solo)">1 Traveler (Solo)</option>
                <option value="2 Travelers (Couple)">2 Travelers (Couple)</option>
                <option value="3-5 Travelers (Family)">3 – 5 Travelers (Family)</option>
                <option value="6+ Travelers (Group)">6+ Travelers (Group)</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>Check Rates</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FileCheck,
  Compass,
  Plane,
  Building2,
  Calendar,
  Users,
  Star,
  ShieldCheck,
  Search,
  Sparkles,
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

  const popularEscapes = [
    {
      id: "safari",
      title: "VIP Desert Safari",
      location: "Red Dunes, Dubai",
      price: "150 AED",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
      serviceOption: "VIP Red Dune Desert Safari & BBQ",
      tab: "safari" as const,
    },
    {
      id: "dhow",
      title: "Marina Glass Dhow",
      location: "Dubai Marina",
      price: "180 AED",
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=600&q=80",
      serviceOption: "Dubai Marina Luxury Glass Dhow Cruise",
      tab: "safari" as const,
    },
    {
      id: "burj",
      title: "Burj Khalifa & Sky",
      location: "Downtown Dubai",
      price: "245 AED",
      image: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=600&q=80",
      serviceOption: "Burj Khalifa 124th Floor + Aquarium Combo",
      tab: "safari" as const,
    },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppQuoteUrl({
      serviceOrPackage: specificOption,
      date: date || undefined,
      travelers: travelers,
    });
    window.open(url, "_blank");
  };

  const handleSelectEscape = (escape: typeof popularEscapes[0]) => {
    setActiveTab(escape.tab);
    setSpecificOption(escape.serviceOption);
  };

  return (
    <section className="relative w-full min-h-[88vh] lg:min-h-screen bg-white overflow-hidden">
      {/* Full-Bleed 2-Partition Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[88vh] lg:min-h-screen items-stretch">

        {/* ── LEFT PARTITION: White BG + Content ── */}
        <div className="relative lg:col-span-5 xl:col-span-5 flex flex-col justify-start pt-28 sm:pt-32 lg:pt-32 xl:pt-36 pb-8 px-5 sm:px-8 lg:pl-10 lg:pr-6 xl:pl-16 xl:pr-8 z-10 bg-white">
          <div className="max-w-xl w-full mx-auto lg:mx-0 space-y-4">
            {/* Header & Badges */}
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-[11px] font-bold tracking-wider uppercase border border-sky-100">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                  <span>Licensed UAE Travel Agency</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-500 font-semibold">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-slate-900 font-bold">{COMPANY_INFO.rating.toFixed(1)}</span>
                  <span>({COMPANY_INFO.reviewsCount} Reviews)</span>
                </div>
              </div>

              <h1 className="font-editorial text-[1.7rem] sm:text-3xl lg:text-[2.25rem] xl:text-[2.6rem] font-bold text-slate-900 leading-[1.12] tracking-tight">
                Easy & Affordable
                <br />
                <span className="text-sky-600">Travel in Dubai</span>
                <br />
                & Worldwide.
              </h1>

              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal max-w-md">
                Visit our office in Deira or book online. Fast UAE visit visas, cheap flight tickets, desert safaris, and complete holiday packages with zero hidden costs.
              </p>
            </div>

            {/* ── Search & Booking Dock ── */}
            <div className="space-y-2">
              {/* Service Filter Tabs */}
              <div className="flex flex-wrap items-center gap-1.5">
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
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                        isActive
                          ? "bg-slate-900 text-white shadow-xs"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Search Form */}
              <form
                onSubmit={handleSearchSubmit}
                className="bg-slate-50/80 p-3 rounded-2xl border border-slate-200/90 space-y-2 shadow-2xs"
              >
                {/* Row 1: Service / Destination */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Service / Destination
                  </label>
                  <select
                    value={specificOption}
                    onChange={(e) => setSpecificOption(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl border border-slate-200 text-slate-900 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-sky-600 bg-white shadow-2xs truncate"
                  >
                    {tabOptions[activeTab].map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 2: Date + Travelers + Search */}
                <div className="grid grid-cols-12 gap-2 items-center">
                  <div className="col-span-5">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-sky-600" />
                      <span>Date</span>
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-2 py-1.5 rounded-xl border border-slate-200 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-600 bg-white shadow-2xs"
                    />
                  </div>

                  <div className="col-span-5">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Users className="w-3 h-3 text-sky-600" />
                      <span>Travelers</span>
                    </label>
                    <select
                      value={travelers}
                      onChange={(e) => setTravelers(e.target.value)}
                      className="w-full px-2 py-1.5 rounded-xl border border-slate-200 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-600 bg-white shadow-2xs truncate"
                    >
                      <option value="1 Traveler (Solo)">1 Solo</option>
                      <option value="2 Travelers (Couple)">2 Couple</option>
                      <option value="3-5 Travelers (Family)">3–5 Family</option>
                      <option value="6+ Travelers (Group)">6+ Group</option>
                    </select>
                  </div>

                  <div className="col-span-2 flex items-end">
                    <button
                      type="submit"
                      className="w-full h-[35px] mt-[16px] rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold transition-all shadow-sm hover:shadow-md flex items-center justify-center active:scale-95"
                      title="Search & Check Rates on WhatsApp"
                    >
                      <Search className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* ── Popular Escapes Strip ── */}
            <div className="pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-sky-600" />
                  <span>Popular Dubai Experiences</span>
                </span>
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal?.()}
                  className="text-[11px] text-sky-600 hover:text-sky-700 font-bold transition-colors"
                >
                  Custom Request →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {popularEscapes.map((esc) => (
                  <div
                    key={esc.id}
                    onClick={() => handleSelectEscape(esc)}
                    className="group relative h-[66px] rounded-xl overflow-hidden cursor-pointer border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-300"
                  >
                    <Image
                      src={esc.image}
                      alt={esc.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 200px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                    <div className="absolute inset-0 p-2 flex flex-col justify-end text-white">
                      <p className="text-[10.5px] font-bold leading-tight group-hover:text-sky-300 transition-colors truncate">
                        {esc.title}
                      </p>
                      <div className="flex items-center justify-between mt-0.5 text-[9px] text-white/80 font-medium">
                        <span className="truncate">{esc.location}</span>
                        <span className="font-bold text-sky-300 bg-sky-950/60 px-1 py-0.5 rounded shrink-0">
                          {esc.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT PARTITION: Airplane + Island Photo ── */}
        <div className="relative lg:col-span-7 xl:col-span-7 min-h-[400px] sm:min-h-[480px] lg:min-h-full overflow-hidden">
          <Image
            src="/hero-airplane-og.jpg"
            alt="Travel worldwide with Al Raheeq Tourism LLC Dubai"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-[70%_30%] hover:scale-[1.02] transition-transform duration-700"
            priority
          />

          {/* ── LEFT EDGE BLEND: Wide multi-stop gradient that eases photo into white bg ── */}
          <div
            className="hidden lg:block absolute inset-y-0 left-0 w-56 xl:w-72 pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(to right, #ffffff 0%, #ffffff 20%, rgba(255,255,255,0.92) 35%, rgba(255,255,255,0.72) 50%, rgba(255,255,255,0.4) 65%, rgba(255,255,255,0.15) 80%, transparent 100%)",
            }}
          />

          {/* Mobile: top + bottom blend for stacked layout */}
          <div className="lg:hidden absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none z-[1]" />
          <div className="lg:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-[1]" />

          {/* Floating Badge */}
          <div className="absolute top-24 sm:top-28 right-6 lg:right-8 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-white/80 shadow-md text-[11px] font-bold text-slate-800 flex items-center gap-1.5 z-10">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Ticketing on 500+ Airlines</span>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ArrowRight, Phone, Globe, Filter } from "lucide-react";
import PackageCard from "@/components/PackageCard";
import PackageDetailModal from "@/components/PackageDetailModal";
import InstantQuoteModal from "@/components/InstantQuoteModal";
import {
  ALL_PACKAGES,
  PACKAGE_REGIONS,
  COMPANY_INFO,
  type TourPackage,
  type PackageRegion,
} from "@/lib/data";

export default function PackagesClient() {
  const [activeRegion, setActiveRegion] = useState<PackageRegion>("All");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Custom Package Inquiry");
  const [detailPkg, setDetailPkg] = useState<TourPackage | null>(null);
  const [pkgTab, setPkgTab] = useState<"details" | "requirements" | "quote">("details");

  const filteredPackages =
    activeRegion === "All"
      ? ALL_PACKAGES
      : ALL_PACKAGES.filter((p) => p.region === activeRegion);

  const openQuote = (serviceName?: string) => {
    setSelectedService(serviceName || "Custom Package Inquiry");
    setIsQuoteOpen(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400 block mb-3">
            <Globe className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
            Explore the World from Dubai
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Tour Packages
          </h1>
          <div className="divider-sky mx-auto mt-5" />
          <p className="text-sm sm:text-base text-white/40 mt-5 max-w-2xl mx-auto leading-relaxed">
            {ALL_PACKAGES.length} curated holiday packages to {new Set(ALL_PACKAGES.map((p) => p.region)).size} regions —
            Dubai & UAE, Caucasus, Middle East, Asia & Europe. All-inclusive itineraries with hotels, transfers, and sightseeing.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto hide-scrollbar">
            <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {PACKAGE_REGIONS.map((region) => {
              const count =
                region === "All"
                  ? ALL_PACKAGES.length
                  : ALL_PACKAGES.filter((p) => p.region === region).length;
              return (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`shrink-0 px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
                    activeRegion === region
                      ? "bg-sky-600 text-white shadow-sm"
                      : "bg-slate-50 text-slate-500 hover:bg-sky-50 hover:text-sky-700 border border-slate-100"
                  }`}
                >
                  {region}
                  <span
                    className={`ml-1.5 ${
                      activeRegion === region ? "text-sky-200" : "text-slate-400"
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredPackages.map((pkg) => (
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

          {filteredPackages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-sm text-slate-400">No packages found for this region.</p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-20 bg-slate-900 text-center border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-400">
            Can&apos;t Find What You Want?
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Build Your Custom Package
          </h2>
          <div className="divider-sky mx-auto" />
          <p className="text-sm text-white/40 max-w-lg mx-auto leading-relaxed">
            Tell us your destination, dates, budget, and group size — we&apos;ll craft a personalized itinerary within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => openQuote("Custom Holiday Package")}
              className="btn-primary flex items-center gap-2"
            >
              <span>Get Custom Quote</span>
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

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  X,
  MapPin,
  Clock,
  Star,
  Check,
  AlertCircle,
  Info,
  Users,
  ArrowRight,
  MessageSquare,
  FileText,
  Mail,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Sparkles,
  Loader2,
  ExternalLink,
} from "lucide-react";
import type { TourPackage } from "@/lib/data";
import {
  COMPANY_INFO,
  buildWhatsAppQuoteUrl,
  buildEmailQuoteUrl,
} from "@/lib/data";

interface PackageDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  pkg: TourPackage | null;
  initialTab?: "details" | "requirements" | "quote";
}

export default function PackageDetailModal({
  isOpen,
  onClose,
  pkg,
  initialTab = "details",
}: PackageDetailModalProps) {
  const [activeTab, setActiveTab] = useState<"details" | "requirements" | "quote">(initialTab);
  
  // Quote form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    travelers: "2 Persons (Couple)",
    visaAssistance: true,
    notes: "",
    requirementsAcknowledged: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const cardRef = useRef<HTMLDivElement | null>(null);

  // Freeze background page scroll & pause Lenis when modal is open
  useEffect(() => {
    if (isOpen) {
      const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
      lenis?.stop();

      const origHtmlOverflow = document.documentElement.style.overflow;
      const origBodyOverflow = document.body.style.overflow;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";

      return () => {
        lenis?.start();
        document.documentElement.style.overflow = origHtmlOverflow;
        document.body.style.overflow = origBodyOverflow;
      };
    }
  }, [isOpen]);

  const handleTabChange = (tab: "details" | "requirements" | "quote") => {
    setActiveTab(tab);
    if (cardRef.current) {
      cardRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!isOpen || !pkg) return null;

  const handleWhatsAppInquiry = () => {
    const url = buildWhatsAppQuoteUrl({
      serviceOrPackage: `${pkg.title} (${pkg.duration}) — Starting AED ${pkg.priceAED.toLocaleString()}/person`,
      name: formData.name.trim() || undefined,
      phone: formData.phone.trim() || undefined,
      email: formData.email.trim() || undefined,
      date: formData.date || undefined,
      travelers: formData.travelers,
      visaAssistance: formData.visaAssistance,
      notes: formData.notes.trim() || undefined,
    });
    window.open(url, "_blank");
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!formData.name.trim()) {
      setSubmitError("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setSubmitError("Please provide a valid email address to receive your quote.");
      return;
    }
    if (!formData.phone.trim()) {
      setSubmitError("Please provide your phone / WhatsApp number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageId: pkg.id,
          packageTitle: pkg.title,
          destination: pkg.destination,
          priceAED: pkg.priceAED,
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          travelDate: formData.date || undefined,
          travelers: formData.travelers,
          visaAssistance: formData.visaAssistance,
          notes: formData.notes.trim() || undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setSubmitSuccess(data.bookingRef || "AR-PKG-" + Math.floor(100000 + Math.random() * 900000));
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openMailClient = () => {
    const url = buildEmailQuoteUrl({
      serviceOrPackage: `${pkg.title} (${pkg.duration})`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      travelers: formData.travelers,
      visaAssistance: formData.visaAssistance,
      notes: formData.notes,
    });
    window.location.href = url;
  };

  const inputCls =
    "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-600 bg-white placeholder:text-slate-400";

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-900/75 backdrop-blur-sm overflow-hidden"
      onClick={onClose}
      onWheel={(e) => {
        // When user scrolls on the backdrop outside the card, scroll the card!
        if (cardRef.current) {
          cardRef.current.scrollTop += e.deltaY;
        }
      }}
    >
      <div
        ref={cardRef}
        data-lenis-prevent
        className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-y-auto overscroll-contain animate-fade-in-up flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero Image */}
        <div className="relative h-48 sm:h-56 w-full shrink-0">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/60" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 backdrop-blur-md text-white hover:bg-slate-900 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Overlay Info */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-2xl leading-none">{pkg.countryFlag}</span>
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white bg-white/20 backdrop-blur-md">
                {pkg.region}
              </span>
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold text-amber-300 bg-black/40 backdrop-blur-md">
                <Star className="w-3 h-3 fill-amber-300" />
                {pkg.rating.toFixed(1)} ({pkg.reviewsCount} verified reviews)
              </span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-white leading-tight">
              {pkg.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2.5 text-xs text-white/80">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {pkg.destination}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                {pkg.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-sky-400" />
                {pkg.bestFor.join(", ")}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs - Sticky */}
        <div className="sticky top-0 z-20 flex items-center border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 sm:px-6 overflow-x-auto hide-scrollbar shadow-xs shrink-0">
          <button
            onClick={() => handleTabChange("details")}
            className={`py-3.5 px-3 sm:px-4 text-xs font-bold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === "details"
                ? "border-sky-600 text-sky-600 bg-white"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <span>1. Itinerary & Inclusions</span>
          </button>

          <button
            onClick={() => handleTabChange("requirements")}
            className={`py-3.5 px-3 sm:px-4 text-xs font-bold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === "requirements"
                ? "border-sky-600 text-sky-600 bg-white"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-amber-500" />
            <span>2. Required Documents</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-amber-100 text-amber-800">
              {pkg.requirements.length} Required
            </span>
          </button>

          <button
            onClick={() => handleTabChange("quote")}
            className={`py-3.5 px-3 sm:px-4 text-xs font-bold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === "quote"
                ? "border-sky-600 text-sky-600 bg-white"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>3. Get Quote & Book</span>
          </button>
        </div>

        {/* Modal Body - Single Unified Scroll */}
        <div className="p-5 sm:p-7">
          {/* TAB 1: DETAILS & ITINERARY */}
          {activeTab === "details" && (
            <div className="space-y-7 animate-fade-in">
              {/* Price Banner */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-sky-50 border border-sky-100 shadow-sm">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-sky-600 mb-0.5">
                    Starting From
                  </p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold text-slate-900">
                      AED {pkg.priceAED.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/ person</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Includes 4★/5★ stays, private transfers, and guided sightseeing.
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveTab("requirements")}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors uppercase tracking-wider"
                  >
                    <FileText className="w-4 h-4 text-amber-600" />
                    <span>View Requirements</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("quote")}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors uppercase tracking-wider shadow-sm"
                  >
                    <span>Book / Get Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Day-Wise Itinerary */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-sky-600">
                    Day-by-Day Detailed Itinerary
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">
                    {pkg.itinerary.length} Days Planned
                  </span>
                </div>
                <div className="relative space-y-0 pl-1">
                  {pkg.itinerary.map((day, idx) => (
                    <div key={day.day} className="flex gap-4">
                      {/* Timeline */}
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-sm">
                          {day.day}
                        </div>
                        {idx < pkg.itinerary.length - 1 && (
                          <div className="w-0.5 flex-1 bg-sky-200 my-1.5" />
                        )}
                      </div>
                      {/* Content */}
                      <div className="pb-6 flex-1">
                        <h4 className="text-sm font-bold text-slate-900">{day.title}</h4>
                        <p className="text-[13px] text-slate-600 leading-relaxed mt-1">
                          {day.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Inclusions */}
                <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-100">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-3 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-[13px] text-slate-700 leading-snug"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="p-5 rounded-xl bg-rose-50/70 border border-rose-100">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-rose-800 mb-3 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-rose-500" />
                    Not Included
                  </h3>
                  <ul className="space-y-2">
                    {pkg.exclusions.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-[13px] text-slate-600 leading-snug"
                      >
                        <X className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mandatory Checklist Teaser */}
              <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                      Mandatory Travel & Document Checklist
                    </h4>
                    <p className="text-xs text-amber-800/80 mt-0.5">
                      Review {pkg.requirements.length} required documents (Passport validity, Visa rules, insurance, vouchers) before booking.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab("requirements")}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-amber-900 bg-amber-200/80 hover:bg-amber-300 transition-colors uppercase tracking-wider shrink-0"
                >
                  Check Documents →
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: REQUIRED DOCUMENTS & TRAVEL CHECKLIST */}
          {activeTab === "requirements" && (
            <div className="space-y-6 animate-fade-in">
              <div className="p-5 rounded-2xl bg-slate-900 text-white flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-400">
                    Mandatory Travel Advisory
                  </span>
                  <h3 className="font-editorial text-xl font-bold text-white mt-0.5">
                    Essential Documents for {pkg.destination}
                  </h3>
                  <p className="text-white/60 text-xs mt-1 leading-relaxed">
                    To guarantee a smooth journey without border delays, please ensure every traveler has the following documents in order.
                  </p>
                </div>
              </div>

              {/* Requirement Checklist */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    Travel Document Checklist
                  </span>
                  <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Verified for 2026 Season
                  </span>
                </div>
                <div className="divide-y divide-slate-100">
                  {pkg.requirements.map((req, idx) => (
                    <div key={idx} className="p-4 flex items-start gap-3.5 hover:bg-slate-50/50 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-snug">
                          {req}
                        </p>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Visa Advisory Box */}
              <div className="p-5 rounded-2xl bg-amber-50/90 border border-amber-200 flex items-start gap-3.5">
                <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                    Official Visa Guidance
                  </h4>
                  <p className="text-xs text-amber-800 leading-relaxed mt-1">
                    {pkg.visaNote}
                  </p>
                </div>
              </div>

              {/* Al Raheeq Concierge Assistance Box */}
              <div className="p-5 rounded-2xl bg-sky-50 border border-sky-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs font-bold text-sky-900 uppercase tracking-wider">
                    Need Visa or Travel Insurance Support?
                  </h4>
                  <p className="text-xs text-sky-700 mt-1 leading-relaxed max-w-lg">
                    Our team at Al Masraf Building, Deira can prepare your complete visa application, flight vouchers, and verified travel insurance in 24–48 hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, visaAssistance: true }));
                    setActiveTab("quote");
                  }}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors uppercase tracking-wider shrink-0 shadow-sm"
                >
                  Proceed to Quote →
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: INSTANT QUOTE & BOOKING FORM */}
          {activeTab === "quote" && (
            <div className="space-y-6 animate-fade-in">
              {submitSuccess ? (
                /* Success Screen */
                <div className="py-8 px-6 text-center space-y-4 bg-emerald-50/60 rounded-2xl border border-emerald-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 block">
                    Quote Request Dispatched
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-slate-900">
                    Thank You, {formData.name || "Traveler"}!
                  </h3>
                  <div className="max-w-md mx-auto p-4 rounded-xl bg-white border border-emerald-200 text-left space-y-2 text-xs">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                      <span className="text-slate-500">Booking Reference:</span>
                      <span className="font-mono font-bold text-slate-900 text-sm">
                        {submitSuccess}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Selected Package:</span>
                      <span className="font-bold text-slate-800">{pkg.title}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Destination:</span>
                      <span className="font-medium text-slate-800">{pkg.destination}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Contact Email:</span>
                      <span className="font-medium text-slate-800">{formData.email}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">WhatsApp / Phone:</span>
                      <span className="font-medium text-slate-800">{formData.phone}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Our travel concierge in Deira has received your request and will send the official quotation PDF to your email within <strong>15 minutes</strong>.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                    <button
                      onClick={handleWhatsAppInquiry}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors uppercase tracking-wider shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp Now</span>
                    </button>
                    <button
                      onClick={onClose}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold text-slate-600 bg-white hover:bg-slate-100 border border-slate-200 transition-colors uppercase tracking-wider"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleEmailSubmit} className="space-y-5">
                  {/* Selected Package Summary Card */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{pkg.countryFlag}</span>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 leading-tight">
                          {pkg.title}
                        </h4>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {pkg.destination} • {pkg.duration}
                        </span>
                      </div>
                    </div>
                    <div className="text-left sm:text-right shrink-0">
                      <span className="text-xs text-slate-400 block font-medium">From</span>
                      <span className="text-sm font-extrabold text-sky-600">
                        AED {pkg.priceAED.toLocaleString()} / person
                      </span>
                    </div>
                  </div>

                  {/* Requirements Acknowledgement Pill */}
                  <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-2.5">
                    <FileText className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div className="text-[11px] text-amber-800 leading-snug">
                      <strong className="font-semibold text-amber-900">Checklist Checked:</strong> Ensure you have a passport valid for at least 6 months and requisite visas for {pkg.destination}.
                    </div>
                  </div>

                  {submitError && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Fields Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Mansoor"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={inputCls}
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                        Email Address (For Quote PDF) *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. tariq@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={inputCls}
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                        WhatsApp / Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={inputCls}
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                        Expected Travel Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className={inputCls}
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                        Number of Travelers
                      </label>
                      <select
                        value={formData.travelers}
                        onChange={(e) =>
                          setFormData({ ...formData, travelers: e.target.value })
                        }
                        className={inputCls}
                      >
                        <option value="1 Person (Solo)">1 Person (Solo)</option>
                        <option value="2 Persons (Couple)">2 Persons (Couple)</option>
                        <option value="3-4 Persons (Small Family)">
                          3-4 Persons (Small Family)
                        </option>
                        <option value="5-8 Persons (Group)">5-8 Persons (Group)</option>
                        <option value="9+ Persons (Corporate / Large)">
                          9+ Persons (Corporate / Large)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                        Visa Assistance Needed?
                      </label>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, visaAssistance: true })
                          }
                          className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all text-center ${
                            formData.visaAssistance
                              ? "bg-sky-600 text-white border-sky-600 shadow-sm"
                              : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          Yes, please assist
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, visaAssistance: false })
                          }
                          className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all text-center ${
                            !formData.visaAssistance
                              ? "bg-sky-600 text-white border-sky-600 shadow-sm"
                              : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          I have valid visa
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                      Special Requests / Hotel Preferences (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. 5-star hotel upgrade, vegetarian meals, airport child car seat..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className={inputCls}
                    />
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-2 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* WhatsApp Option */}
                      <button
                        type="button"
                        onClick={handleWhatsAppInquiry}
                        className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors uppercase tracking-wider shadow-sm"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Get Quote via WhatsApp</span>
                      </button>

                      {/* Email Submission Option */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 disabled:opacity-50 transition-colors uppercase tracking-wider shadow-sm"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Processing Request...</span>
                          </>
                        ) : (
                          <>
                            <Mail className="w-4 h-4" />
                            <span>Send Quote to Email</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-2 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                        Zero obligation • Instant confirmation
                      </span>
                      <button
                        type="button"
                        onClick={openMailClient}
                        className="text-sky-600 hover:underline flex items-center gap-1"
                      >
                        <span>Open Mail App</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Modal Sticky Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <Phone className="w-3.5 h-3.5 text-sky-600" />
            <span>
              Direct Hotline:{" "}
              <a
                href={`tel:${COMPANY_INFO.cleanPhone}`}
                className="font-bold text-slate-800 hover:text-sky-600 transition-colors"
              >
                {COMPANY_INFO.phone}
              </a>
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {activeTab !== "quote" ? (
              <button
                onClick={() => handleTabChange("quote")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors uppercase tracking-wider shadow-sm"
              >
                <span>Proceed to Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => handleTabChange("requirements")}
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 transition-colors"
              >
                <span>← Back to Checklist</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

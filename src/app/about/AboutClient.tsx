"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Compass,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2,
  Plane,
  FileCheck,
  Users2,
  Building2,
  Sparkles,
  Globe2,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import InstantQuoteModal from "@/components/InstantQuoteModal";
import { COMPANY_INFO } from "@/lib/data";

const MILESTONES = [
  {
    year: "2014",
    title: "Started in Deira, Dubai",
    description:
      "Al Raheeq Tourism LLC opened its doors in Al Rigga, Deira with full licensing from the Dubai Department of Economy and Tourism (DET).",
  },
  {
    year: "2018",
    title: "Major Airline Deals",
    description:
      "Partnered with leading international airlines to offer cheap flight deals and easy booking support for UAE residents and tourists.",
  },
  {
    year: "2021",
    title: "Holiday Packages",
    description:
      "Started all-inclusive vacation packages to Georgia, Azerbaijan, Turkey, Egypt, Bali, and Switzerland with hotels and tours included.",
  },
  {
    year: "2026",
    title: "15,000+ Happy Travelers",
    description:
      "Expanded with fast 24-48 hour UAE visit visa processing and 24/7 WhatsApp customer help, serving over 15,000 happy travelers.",
  },
];

const CORE_PILLARS = [
  {
    icon: ShieldCheck,
    title: "Fast UAE Tourist Visas",
    subtitle: "30-Day & 60-Day Visas",
    description:
      "We apply directly through official UAE immigration systems for quick 24 to 48-hour visa approvals with simple document requirements and zero hidden fees.",
  },
  {
    icon: Plane,
    title: "Affordable Flight Bookings",
    subtitle: "500+ Airlines Worldwide",
    description:
      "Great flight deals on Emirates, Flydubai, Air Arabia, and top global airlines with quick rebooking, seat choices, and easy date changes.",
  },
  {
    icon: Compass,
    title: "Dubai Tours & Holiday Trips",
    subtitle: "Desert Safaris & City Tours",
    description:
      "Exciting desert safaris, dhow dinner cruises, Burj Khalifa entry tickets, and family holiday packages with clean cars and friendly guides.",
  },
  {
    icon: FileCheck,
    title: "Clear Pricing, No Hidden Fees",
    subtitle: "Official UAE VAT Bills",
    description:
      "What you see is what you pay. Every booking comes with an honest price quote, official tax invoice, and 100% secure payment methods.",
  },
];

const MULTILINGUAL_LANGUAGES = [
  { name: "English", native: "International" },
  { name: "Arabic", native: "العربية" },
  { name: "Hindi", native: "हिन्दी" },
  { name: "Urdu", native: "اردو" },
  { name: "Tagalog", native: "Filipino" },
  { name: "Russian", native: "Русский" },
];

export default function AboutClient() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState("General Travel Inquiry");

  const handleOpenConsultation = (service = "Travel Consultation") => {
    setQuoteService(service);
    setIsQuoteOpen(true);
  };

  return (
    <>
      <div className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=80')",
              opacity: 0.22,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-[11px] font-bold uppercase tracking-widest">
                Licensed UAE Travel Agency
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-xs text-sky-300 font-arabic">
                الرحيق للسياحة ذ.م.م — دبي
              </span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Your Trusted Travel Partner
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-sky-400">
                in Dubai & Worldwide
              </span>
            </h1>

            <div className="w-20 h-1 bg-sky-500 rounded-full" />

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-light leading-relaxed">
              Located on the 22nd Floor of Al Masraf Building on Al Rigga Road, Deira.
              We help tourists, families, and businesses with fast UAE visit visas, cheap flights,
              desert safaris, and complete holiday packages with honest pricing.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleOpenConsultation("General Inquiry")}
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Talk to a Travel Expert</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                  "Hello Al Raheeq Tourism, I would like to ask about my travel plans."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Floating Numbers Strip */}
        <section className="relative -mt-10 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900 leading-none">
                  12+ Years
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">Experience in Dubai</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                <Users2 className="w-6 h-6" />
              </div>
              <div>
                <p className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900 leading-none">
                  15,000+
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">Happy Travelers</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <p className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900 leading-none">
                  40+
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">Destinations Covered</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <p className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900 leading-none">
                  22nd Floor
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">Office in Deira</p>
              </div>
            </div>
          </div>
        </section>

        {/* Heritage Story Section */}
        <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Text Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600 block mb-1">
                    About Our Company
                  </span>
                  <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                    Serving Travelers from Deira, Dubai Since 2014
                  </h2>
                </div>

                <div className="w-16 h-1 bg-sky-500 rounded-full" />

                <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    Deira has always been the bustling heart of Dubai&apos;s trade, traditional markets,
                    and travel connections. That is why{" "}
                    <strong className="text-slate-900 font-semibold">Al Raheeq Tourism LLC</strong>{" "}
                    opened its main office right here on Al Rigga Road.
                  </p>
                  <p>
                    From our office on the{" "}
                    <span className="text-slate-900 font-medium">
                      22nd Floor of Al Masraf Building
                    </span>
                    , we help thousands of tourists, residents, and visiting families every year.
                    Whether you need a quick UAE visit visa, cheap flights for your vacation, or a
                    fun desert safari, we get it done fast and without hassle.
                  </p>
                  <p>
                    We believe in honest, face-to-face service. You can walk into our office, sit down
                    with our friendly team, compare your options, and book with complete peace of mind.
                  </p>
                </div>

                {/* Accreditations Badges */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Dubai Tourism Licensed</p>
                      <p className="text-[10px] text-slate-500">Official Travel Agency (DET)</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">UAE Tax Registered</p>
                      <p className="text-[10px] text-slate-500">Official 5% VAT Tax Bills</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Showcase Stack */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 h-[440px] sm:h-[480px]">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                    alt="Al Raheeq Tourism Dubai Office Building"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-600/90 text-[11px] font-bold backdrop-blur-xs">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Al Masraf Tower • 22nd Floor</span>
                    </div>
                    <p className="font-editorial text-xl font-bold leading-tight drop-shadow-xs">
                      Al Rigga Road, Deira, Dubai
                    </p>
                    <p className="text-xs text-slate-300 font-light">
                      2 minutes walk from Al Rigga Metro Station
                    </p>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-3 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-editorial font-bold text-lg">
                    AR
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Al Raheeq Tourism</p>
                    <p className="text-[10px] text-slate-500">Deira, Dubai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600 block">
                What We Do
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                How We Help You Plan Your Trip
              </h2>
              <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto" />
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Whether you need a visit visa, a cheap flight ticket, or a full holiday package,
                we make sure everything is simple, clear, and on time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CORE_PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-sky-300 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-editorial text-xl font-bold text-slate-300 group-hover:text-sky-300 transition-colors">
                          0{idx + 1}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 block mb-1">
                          {pillar.subtitle}
                        </span>
                        <h3 className="font-editorial text-lg font-bold text-slate-900">
                          {pillar.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => handleOpenConsultation(pillar.title)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors"
                      >
                        <span>Ask About This Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600 block">
                Our Story
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                How We Have Grown Over the Years
              </h2>
              <div className="w-16 h-1 bg-sky-500 rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {MILESTONES.map((item) => (
                <div
                  key={item.year}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between space-y-3 hover:border-sky-300 transition-colors"
                >
                  <div className="space-y-2">
                    <span className="font-editorial text-3xl font-bold text-sky-600 block">
                      {item.year}
                    </span>
                    <h4 className="font-editorial text-base font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Multilingual Team & Advisory */}
        <section className="py-20 lg:py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400 block mb-1">
                    Friendly Team
                  </span>
                  <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                    We Speak Your Language
                  </h2>
                </div>

                <div className="w-16 h-1 bg-sky-500 rounded-full" />

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Dubai is home to people from all over the world. Our friendly staff in Deira speaks
                  English, Arabic, Hindi, Urdu, Tagalog, and Russian so you can explain your travel plans
                  easily and comfortably.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  {MULTILINGUAL_LANGUAGES.map((lang) => (
                    <div
                      key={lang.name}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 text-center"
                    >
                      <p className="text-xs font-bold text-white">{lang.name}</p>
                      <p className="text-[10px] text-sky-400 mt-0.5">{lang.native}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-800/80 rounded-3xl p-8 sm:p-10 border border-slate-700/80 space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-700">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-lg font-bold text-white">
                      Visit Our Office in Deira
                    </h3>
                    <p className="text-xs text-slate-400">
                      22nd Floor, Al Masraf Building, Al Rigga Road, Dubai
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>
                      Al Masraf Building, 22nd Floor, Al Rigga Road, Deira (Beside Al Rigga Metro Station)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                    <a href={`tel:${COMPANY_INFO.cleanPhone}`} className="hover:text-white transition-colors">
                      {COMPANY_INFO.phone} (Office Phone)
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <p>{COMPANY_INFO.timings.weekdays}</p>
                      <p className="text-[11px] text-rose-400 mt-0.5">{COMPANY_INFO.timings.sunday}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleOpenConsultation("Office Visit")}
                    className="btn-primary w-full sm:w-auto text-center justify-center flex items-center gap-2"
                  >
                    <span>Book an Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto text-center px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-bold transition-colors"
                  >
                    <span>View Map & Metro Route</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stories Cross-Link */}
        <section className="py-16 bg-slate-100 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 block">
                  Customer Reviews & Trips
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900">
                  See Photos & Stories from Our Travelers
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light max-w-xl">
                  Check out real photos and experiences from families and travelers who visited
                  Dubai, Turkey, Georgia, Bali, and Switzerland with us.
                </p>
              </div>

              <Link
                href="/stories"
                className="btn-primary shrink-0 flex items-center gap-2 !py-3 !px-6"
              >
                <span>Read Traveler Stories</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <InstantQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={quoteService}
      />
    </>
  );
}

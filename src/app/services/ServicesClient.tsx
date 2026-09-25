"use client";

import { useState } from "react";
import {
  Plane,
  FileCheck,
  Building2,
  Compass,
  ShieldCheck,
  ArrowRight,
  FileText,
} from "lucide-react";
import InstantQuoteModal from "@/components/InstantQuoteModal";
import { SERVICES_DATA, COMPANY_INFO } from "@/lib/data";

export default function ServicesClient() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activeService, setActiveService] = useState("UAE Tourist Visa (30/60 Days)");

  const openQuote = (serviceName: string) => {
    setActiveService(serviceName);
    setIsQuoteOpen(true);
  };

  const getServiceIcon = (name: string) => {
    const cls = "w-6 h-6 text-sky-600";
    switch (name) {
      case "Plane": return <Plane className={cls} />;
      case "FileCheck": return <FileCheck className={cls} />;
      case "Building2": return <Building2 className={cls} />;
      case "Compass": return <Compass className={cls} />;
      case "ShieldCheck": return <ShieldCheck className={cls} />;
      default: return <Compass className={cls} />;
    }
  };

  return (
    <>
      {/* Header */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=2000&q=80')",
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-400">
            What We Offer
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Our Travel Services in Dubai
          </h1>
          <div className="divider-sky" />
          <p className="text-sm text-slate-300 max-w-xl leading-relaxed font-light">
            Visit our office in Deira or book online. We help you with quick UAE visit visas, cheap flight tickets, Dubai desert safaris, hotel reservations, and travel insurance.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {SERVICES_DATA.map((srv, idx) => (
            <div
              key={srv.id}
              id={srv.id}
              className="bg-white rounded-xl p-6 sm:p-10 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-24"
            >
              {/* Main Content */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-editorial text-4xl font-bold text-slate-200 leading-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="w-12 h-12 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <div>
                    {srv.badge && (
                      <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded mb-1 inline-block uppercase tracking-wider">
                        {srv.badge}
                      </span>
                    )}
                    <h2 className="font-editorial text-xl sm:text-2xl font-bold text-slate-900">
                      {srv.title}
                    </h2>
                    {srv.titleArabic && (
                      <p className="text-xs text-slate-400">{srv.titleArabic}</p>
                    )}
                  </div>
                </div>

                <p className="text-xs font-semibold text-sky-600 uppercase tracking-wider">
                  {srv.tagline}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">{srv.description}</p>

                <div className="pt-3">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] mb-3">
                    Included Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="w-1 h-1 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => openQuote(srv.title)}
                    className="btn-primary flex items-center gap-2 !py-2.5 !px-5"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`tel:${COMPANY_INFO.cleanPhone}`}
                    className="btn-outline flex items-center gap-2 !py-2.5 !px-4"
                  >
                    Call: {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Right Panel */}
              <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-3.5">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <FileText className="w-4 h-4 text-sky-600" />
                  <span>Good to Know</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  {[
                    "Handled directly by our team in Deira, Dubai",
                    "Clear invoice with official 5% UAE VAT",
                    "A personal travel agent to assist you anytime",
                    "Fast confirmation sent directly to your WhatsApp or email",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-600">
              Travel Information
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-2">
              Frequently Asked Questions
            </h2>
            <div className="divider-sky mt-4" />
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does a UAE 30-day or 60-day tourist visa take to process?",
                a: "Standard processing takes 24 to 48 working hours. Express processing is available for urgent applications upon request.",
              },
              {
                q: "What documents are required to apply for a Dubai tourist visa?",
                a: "A color passport copy (valid for at least 6 months), passport-size photograph with white background, and your return flight booking.",
              },
              {
                q: "Can I customize a private desert safari or city tour for my family?",
                a: "Yes. We offer private luxury 4x4 vehicles, VIP desert camp seating, and personalized private yacht charters.",
              },
              {
                q: "How do I pay for my booking?",
                a: "We accept credit/debit cards, bank wire transfers, and cash at our office on the 22nd Floor of Al Masraf Building, Al Rigga Road, Deira.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="text-sm font-bold text-slate-900">{faq.q}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InstantQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={activeService}
      />
    </>
  );
}

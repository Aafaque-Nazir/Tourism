import type { Metadata } from "next";
import Link from "next/link";
import { Scale, FileCheck2, AlertCircle, HelpCircle, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions | Al Raheeq Tourism LLC Dubai",
  description:
    "Terms and Conditions of booking and services for Al Raheeq Tourism LLC (Deira, Dubai, UAE). Covers booking terms, visa disclaimers, ticketing rules, and governing UAE law.",
  alternates: {
    canonical: "https://alraheeqtourism.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Al Raheeq Tourism LLC Dubai",
    description:
      "Read our official booking conditions, visa assistance guidelines, and client terms at Al Raheeq Tourism LLC Dubai.",
    url: "https://alraheeqtourism.com/terms-and-conditions",
    siteName: "Al Raheeq Tourism LLC",
  },
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "September 24, 2026";

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="relative bg-slate-900 text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/30 via-slate-900 to-slate-950" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Legal</span>
            <span>/</span>
            <span className="text-white">Terms & Conditions</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm text-slate-400 font-light max-w-2xl">
            Official terms of service and booking contract between travelers and Al Raheeq Tourism LLC, operating under Department of Economy and Tourism (DET) licensing in Dubai, UAE.
          </p>
          <div className="pt-2 text-[11px] text-slate-500">
            Effective Date: <span className="text-slate-300 font-medium">{lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar quick info */}
            <div className="lg:col-span-4 order-2 lg:order-1 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 sticky top-24">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Legal Jurisdiction</h3>
                    <p className="text-[11px] text-slate-500">Dubai Courts, UAE</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-amber-900">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Important Visa Notice</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-amber-800">
                    Visa issuance is solely at the sovereign authority of UAE Immigration (ICP & GDRFA). Our agency acts as your authorized filing agent.
                  </p>
                </div>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>Al Masraf Building, 22nd Floor, Al Rigga, Deira, Dubai, UAE</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                    <a href={`tel:${COMPANY_INFO.cleanPhone}`} className="hover:text-sky-600 transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-sky-600 transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-colors"
                >
                  <span>Need Clarification? Contact Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Document Body */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-10 text-slate-700 text-sm leading-relaxed">
              {/* Section 1 */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-sky-600 font-bold text-xs uppercase tracking-wider">
                  <Scale className="w-4 h-4" />
                  <span>1. Agreement & Scope</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-slate-900">
                  Contractual Relationship
                </h2>
                <p>
                  These Terms & Conditions constitute a legally binding agreement between you (&ldquo;Client&rdquo;, &ldquo;Traveler&rdquo;, or &ldquo;User&rdquo;) and <strong>Al Raheeq Tourism LLC</strong> (&ldquo;Company&rdquo;), a commercial tourism entity licensed by the Dubai Department of Economy and Tourism (DET) and the UAE government.
                </p>
                <p>
                  By confirming any reservation, purchasing flight tickets, booking holiday tour packages, or instructing us to submit visa applications, you confirm that you are at least 18 years of age and accept these terms unconditionally.
                </p>
              </div>

              {/* Section 2 */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-sky-600 font-bold text-xs uppercase tracking-wider">
                  <FileCheck2 className="w-4 h-4" />
                  <span>2. Bookings, Quotes & Confirmation</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-slate-900">
                  Reservations & Invoicing
                </h2>
                <ul className="space-y-3 list-disc pl-5 text-slate-600">
                  <li>
                    <strong>Rate Quotations:</strong> Quotes provided via WhatsApp, email, or telephone are based on live supplier inventory and are subject to availability until payment confirmation.
                  </li>
                  <li>
                    <strong>Confirmation Voucher:</strong> A booking is finalized only once cleared funds have been received and an official Al Raheeq Tourism LLC booking reference or airline Passenger Name Record (PNR) has been issued.
                  </li>
                  <li>
                    <strong>Documentation Accuracy:</strong> The traveler is strictly responsible for providing full legal names as spelled on passports. Any ticket reissue charges stemming from misspelled client names are payable by the customer.
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-sky-600 font-bold text-xs uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>3. UAE Tourist Visa Assistance Terms</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-slate-900">
                  Government Visa Application Mandate
                </h2>
                <p>
                  Al Raheeq Tourism LLC acts as an authorized processing facilitator for UAE entry visas (30-day, 60-day, multiple entry, and express categories). Clients expressly acknowledge:
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
                  <p>
                    <strong>Sovereign Decision:</strong> The granting, delay, or refusal of any visa is the absolute sovereign prerogative of the UAE Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) and the General Directorate of Residency and Foreigners Affairs (GDRFA).
                  </p>
                  <p>
                    <strong>Non-Refundable Government Levies:</strong> All visa application fees paid to the UAE government and immigration systems are non-refundable under all circumstances, even in the event of rejection or security holds.
                  </p>
                  <p>
                    <strong>Overstay Penalties:</strong> Visitors must exit the UAE or extend their legal stay before visa expiry. Overstay fines imposed by UAE Immigration are the sole legal liability of the visa holder.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-sky-600 font-bold text-xs uppercase tracking-wider">
                  <FileCheck2 className="w-4 h-4" />
                  <span>4. Pricing, Currency & Taxes</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-slate-900">
                  Financial Terms & UAE VAT
                </h2>
                <p>
                  All package prices and service charges are quoted in <strong>UAE Dirhams (AED)</strong> unless specified otherwise in writing. Where applicable, services include the standard <strong>5% UAE Value Added Tax (VAT)</strong> in accordance with UAE Federal Tax Authority (FTA) regulations.
                </p>
                <p>
                  <strong>Hotel Tourism Dirham Fee:</strong> In accordance with Dubai Executive Council Resolution No. 2 of 2014, Dubai hotels charge a nominal &ldquo;Tourism Dirham&rdquo; per room, per night (typically AED 10 to AED 20 depending on star classification), payable directly by guests at hotel check-in/check-out.
                </p>
              </div>

              {/* Section 5 */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-sky-600 font-bold text-xs uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" />
                  <span>5. Travel Insurance & Health Requirements</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-slate-900">
                  Traveler Safety & Medical Coverage
                </h2>
                <p>
                  International travel carries inherent risks. While we provide full assistance in procuring comprehensive travel insurance, travelers are strongly urged to carry adequate medical, personal baggage, and trip cancellation insurance coverage throughout their journey.
                </p>
                <p>
                  Travelers are personally responsible for complying with international health, vaccination, and passport validity standards (minimum 6 months validity from return date).
                </p>
              </div>

              {/* Section 6 */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-sky-600 font-bold text-xs uppercase tracking-wider">
                  <Scale className="w-4 h-4" />
                  <span>6. Governing Law & Dispute Resolution</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-slate-900">
                  Jurisdiction of Dubai Courts
                </h2>
                <p>
                  These terms, and any dispute, controversy, or claim arising out of or in connection with them, shall be governed by and construed in accordance with the <strong>Federal Laws of the United Arab Emirates</strong> and the local laws of the <strong>Emirate of Dubai</strong>.
                </p>
                <p>
                  The courts of Dubai shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with this agreement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

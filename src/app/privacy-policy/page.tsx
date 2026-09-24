import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, FileText, CheckCircle2, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | Al Raheeq Tourism LLC Dubai",
  description:
    "Privacy Policy of Al Raheeq Tourism LLC (Dubai, UAE). Understand how we collect, protect, and process your travel data in compliance with UAE Federal Decree-Law No. 45 of 2021.",
  alternates: {
    canonical: "https://alraheeqtourism.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Al Raheeq Tourism LLC Dubai",
    description:
      "Understand how Al Raheeq Tourism LLC collects, protects, and handles your personal and booking information.",
    url: "https://alraheeqtourism.com/privacy-policy",
    siteName: "Al Raheeq Tourism LLC",
  },
};

export default function PrivacyPolicyPage() {
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
            <span className="text-white">Privacy Policy</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400 font-light max-w-2xl">
            Al Raheeq Tourism LLC is dedicated to safeguarding your personal data in accordance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL).
          </p>
          <div className="pt-2 text-[11px] text-slate-500">
            Last Reviewed & Updated: <span className="text-slate-300 font-medium">{lastUpdated}</span>
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
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Data Controller</h3>
                    <p className="text-[11px] text-slate-500">Al Raheeq Tourism LLC</p>
                  </div>
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

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Key Guarantees
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>No selling of personal data</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>256-Bit SSL encryption</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>UAE PDPL compliant</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
                >
                  <span>Contact Our Privacy Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Document Body */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-10 text-slate-700 text-sm leading-relaxed">
              {/* Section 1 */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-sky-600 font-bold text-xs uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>1. Introduction & Overview</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-slate-900">
                  Our Commitment to Your Privacy
                </h2>
                <p>
                  This Privacy Policy describes how <strong>Al Raheeq Tourism LLC</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), registered in the Emirate of Dubai, United Arab Emirates, collects, utilizes, stores, and protects personal information provided by travelers, clients, and visitors using our website (
                  <span className="text-slate-900 font-medium">alraheeqtourism.com</span>) or our offline office services located in Al Rigga, Deira, Dubai.
                </p>
                <p>
                  By accessing our platform, booking holiday packages, submitting passport documents for UAE tourist visas, or requesting flight reservations, you acknowledge and agree to the practices outlined in this policy.
                </p>
              </div>

              {/* Section 2 */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-sky-600 font-bold text-xs uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>2. Information We Collect</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-slate-900">
                  Data Collected for Travel Services
                </h2>
                <p>
                  To deliver seamless visa, flight, and tour arrangements, we may gather the following categories of data:
                </p>
                <ul className="space-y-2.5 list-disc pl-5 text-slate-600">
                  <li>
                    <strong className="text-slate-800">Identity & Passport Details:</strong> Full name (matching passport exactly), passport number, nationality, date of birth, place of issue, expiration date, and digital copies of passport photo pages required by UAE immigration (ICP/GDRFA).
                  </li>
                  <li>
                    <strong className="text-slate-800">Contact Information:</strong> Email address, mobile telephone number (including WhatsApp), residential address, and emergency contact details.
                  </li>
                  <li>
                    <strong className="text-slate-800">Travel Itinerary & Booking Preferences:</strong> Flight dates, airline seat/meal choices, hotel reservation specifics, excursion selections, and special accessibility or medical requests.
                  </li>
                  <li>
                    <strong className="text-slate-800">Payment & Transaction Data:</strong> Transaction references, currency amount, billing addresses, and payment method details. Note: We do not store full credit card CVV codes on our servers; card payments are handled via secure, PCI-DSS certified payment gateways.
                  </li>
                  <li>
                    <strong className="text-slate-800">Technical & Device Data:</strong> IP address, browser type, operating system, and anonymous analytics via cookies to ensure optimal site rendering and security against fraudulent access.
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-sky-600 font-bold text-xs uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>3. How We Use Your Information</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-slate-900">
                  Lawful Purposes of Processing
                </h2>
                <p>
                  We process personal data solely for legitimate commercial and travel operational purposes, including:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-semibold text-slate-900 text-xs block mb-1">Visa Processing</span>
                    <span className="text-xs text-slate-500">Lodging applications directly with the UAE ICP and GDRFA immigration portals.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-semibold text-slate-900 text-xs block mb-1">Airline & Hotel Ticketing</span>
                    <span className="text-xs text-slate-500">Securing confirmed flight tickets, PNR numbers, and hotel vouchers.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-semibold text-slate-900 text-xs block mb-1">Customer Support</span>
                    <span className="text-xs text-slate-500">Providing round-the-clock WhatsApp, phone, and email updates on booking changes.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-semibold text-slate-900 text-xs block mb-1">Legal & Tax Compliance</span>
                    <span className="text-xs text-slate-500">Issuing UAE VAT tax invoices and complying with UAE Department of Economy & Tourism mandates.</span>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-sky-600 font-bold text-xs uppercase tracking-wider">
                  <Lock className="w-4 h-4" />
                  <span>4. Third-Party Sharing & Disclosure</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-slate-900">
                  Strict Confidentiality
                </h2>
                <p>
                  <strong>We do NOT sell, rent, or trade your personal data to marketing brokers or unrelated third parties under any circumstances.</strong> Data is shared strictly on a need-to-know basis with:
                </p>
                <ul className="space-y-2 list-disc pl-5 text-slate-600">
                  <li><strong>Government Authorities:</strong> UAE ICP, Dubai GDRFA, and civil aviation border control entities.</li>
                  <li><strong>Travel Suppliers:</strong> Airlines (GDS systems such as Amadeus/Sabre), partner hotel chains, and licensed tour vehicle operators.</li>
                  <li><strong>Payment Processors:</strong> Licensed UAE banks and regulated payment gateways for authorization and anti-fraud verification.</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-sky-600 font-bold text-xs uppercase tracking-wider">
                  <Shield className="w-4 h-4" />
                  <span>5. Data Security & Retention</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-slate-900">
                  Protection of Your Personal Documents
                </h2>
                <p>
                  We implement robust physical, technical, and administrative controls to protect sensitive files like passport scans. All data transmitted through our web portal is encrypted using high-grade <strong>256-Bit Transport Layer Security (TLS/SSL)</strong>.
                </p>
                <p>
                  Passport and visa records are retained only for the duration required to complete your travel services and to fulfill statutory accounting and DTCM regulatory auditing obligations.
                </p>
              </div>

              {/* Section 6 */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-sky-600 font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>6. Your Rights & Contact Details</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-slate-900">
                  Exercising Your Rights Under UAE Law
                </h2>
                <p>
                  Under UAE Federal Decree-Law No. 45 of 2021, you have the right to request access to the personal data we hold about you, request rectification of erroneous records, or request deletion of data that is no longer required for statutory compliance.
                </p>
                <p>
                  For any privacy requests or questions regarding this statement, please contact our Compliance Officer at:
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 font-medium text-slate-800">
                  <p>Al Raheeq Tourism LLC — Legal & Compliance Department</p>
                  <p>Al Masraf Building, 22nd Floor, Al Rigga Road, Deira, Dubai, UAE</p>
                  <p>Email: <a href="mailto:info@alraheeqtourism.com" className="text-sky-600 underline">info@alraheeqtourism.com</a></p>
                  <p>Telephone: +971 4 396 9478</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

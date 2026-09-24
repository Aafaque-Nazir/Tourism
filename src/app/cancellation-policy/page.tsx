import type { Metadata } from "next";
import Link from "next/link";
import { RotateCcw, AlertTriangle, Clock, CreditCard, CheckCircle2, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Al Raheeq Tourism LLC Dubai",
  description:
    "Official Refund & Cancellation Policy of Al Raheeq Tourism LLC (Dubai). Clear guidelines for flight cancellations, UAE tourist visas, hotel bookings, and tour packages.",
  alternates: {
    canonical: "https://alraheeqtourism.com/cancellation-policy",
  },
  openGraph: {
    title: "Refund & Cancellation Policy | Al Raheeq Tourism LLC Dubai",
    description:
      "Transparent refund conditions and cancellation terms for flights, holiday packages, and visa services.",
    url: "https://alraheeqtourism.com/cancellation-policy",
    siteName: "Al Raheeq Tourism LLC",
  },
};

export default function CancellationPolicyPage() {
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
            <span className="text-white">Cancellation & Refund Policy</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Refund & Cancellation Policy
          </h1>
          <p className="text-sm text-slate-400 font-light max-w-2xl">
            Clear, transparent guidelines for refund eligibility, booking modifications, airline ticketing rules, and cancellation processing timeframes.
          </p>
          <div className="pt-2 text-[11px] text-slate-500">
            Last Updated: <span className="text-slate-300 font-medium">{lastUpdated}</span>
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
                    <RotateCcw className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Standard Turnaround</h3>
                    <p className="text-[11px] text-slate-500">7 to 14 Business Days</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="font-semibold text-slate-900 text-[11px] block">Refund Destination:</span>
                    <span className="text-slate-500 text-[11px]">Strictly refunded to the original payment source (credit card / bank account).</span>
                  </div>
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
                    Quick Summary
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Transparent policy breakdown</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Dedicated support team</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
                >
                  <span>Submit Cancellation Request</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Document Body */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-10 text-slate-700 text-sm leading-relaxed">
              {/* Section 1 */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-sky-600 font-bold text-xs uppercase tracking-wider">
                  <RotateCcw className="w-4 h-4" />
                  <span>1. General Principles</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-slate-900">
                  Transparent Refund Management
                </h2>
                <p>
                  At <strong>Al Raheeq Tourism LLC</strong>, we prioritize fair and clear billing practices. Because our services encompass a variety of third-party carriers (airlines, luxury hotel partners, and government immigration systems), cancellation and refund eligibility varies depending on the specific service booked.
                </p>
              </div>

              {/* Section 2 */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-rose-600 font-bold text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  <span>2. UAE Tourist Visas & Government Fees</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-slate-900">
                  Strictly Non-Refundable
                </h2>
                <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200/80 text-xs text-rose-900 space-y-2">
                  <p className="font-semibold">
                    Important Notice on Visa Applications:
                  </p>
                  <p>
                    Once a UAE tourist visa application (30 Days, 60 Days, or Express) has been lodged with the UAE Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) or GDRFA Dubai, <strong>all visa and government processing fees are 100% non-refundable</strong> under all conditions.
                  </p>
                  <p>
                    This applies unconditionally whether the visa application is approved, delayed by government security screening, or rejected by immigration authorities.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-sky-600 font-bold text-xs uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>3. Flight Tickets & Airfare</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-slate-900">
                  Airline Fare Rules & Penalties
                </h2>
                <ul className="space-y-3 list-disc pl-5 text-slate-600">
                  <li>
                    <strong>Airline Tariff Rules:</strong> Flight cancellations, date changes, and refunds are dictated strictly by the operating airline&apos;s published tariff rules.
                  </li>
                  <li>
                    <strong>Non-Refundable Fares:</strong> Discounted, promotional, or basic economy airfares are frequently non-refundable once ticketed. Only unutilized government departure taxes may be eligible for recovery per airline rules.
                  </li>
                  <li>
                    <strong>Agency Handling Fee:</strong> In addition to airline penalties, a standard agency cancellation handling fee of AED 100 per passenger applies to process airline refund submissions.
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-sky-600 font-bold text-xs uppercase tracking-wider">
                  <RotateCcw className="w-4 h-4" />
                  <span>4. Holiday Packages & Excursions</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-slate-900">
                  Tour Cancellation Schedule
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-slate-100 text-slate-700 uppercase tracking-wider text-[10px]">
                      <tr>
                        <th className="py-3 px-4">Cancellation Timeframe</th>
                        <th className="py-3 px-4">Refund Percentage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr>
                        <td className="py-3 px-4 font-medium text-slate-800">7 or more days prior to departure</td>
                        <td className="py-3 px-4 text-emerald-600 font-bold">90% Refund (or 100% Travel Credit)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-slate-800">3 to 6 days prior to departure</td>
                        <td className="py-3 px-4 text-amber-600 font-bold">50% Refund</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-slate-800">Less than 48 hours or No-Show</td>
                        <td className="py-3 px-4 text-rose-600 font-bold">0% (Strictly Non-Refundable)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 pt-2">
                  *Note: Non-refundable admission passes (such as Burj Khalifa At The Top, Museum of the Future, or theme park entry tickets) will be deducted at face value.
                </p>
              </div>

              {/* Section 5 */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-sky-600 font-bold text-xs uppercase tracking-wider">
                  <CreditCard className="w-4 h-4" />
                  <span>5. Refund Timeline & Processing Method</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-slate-900">
                  How Refunds Are Credited
                </h2>
                <p>
                  Approved refunds will be processed strictly back to the original method of payment (the credit/debit card used for the transaction, or via official UAE bank transfer).
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 text-slate-700">
                  <p>
                    <strong>Processing Window:</strong> Refunds typically reflect in the client&apos;s bank or credit card account within <strong>7 to 14 business days</strong> from the date of refund approval, depending on the issuing bank&apos;s billing cycle.
                  </p>
                  <p>
                    <strong>Cash Payments:</strong> For cash settlements paid in person at our Deira office, refunds will be issued via bank transfer or office cash voucher upon presentation of the original official receipt.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-sky-600 font-bold text-xs uppercase tracking-wider">
                  <Mail className="w-4 h-4" />
                  <span>6. How to Request a Cancellation</span>
                </div>
                <h2 className="font-editorial text-2xl font-bold text-slate-900">
                  Initiating Your Request
                </h2>
                <p>
                  To request a cancellation or refund, please submit an official written request including your Booking Reference Number, Full Passenger Name, and Reason for Cancellation to:
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 font-medium text-slate-800">
                  <p>Al Raheeq Tourism LLC — Reservations & Accounts Desk</p>
                  <p>Al Masraf Building, 22nd Floor, Al Rigga Road, Deira, Dubai, UAE</p>
                  <p>Email: <a href="mailto:info@alraheeqtourism.com" className="text-sky-600 underline">info@alraheeqtourism.com</a></p>
                  <p>WhatsApp / Phone: +971 4 396 9478</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

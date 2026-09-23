import Link from "next/link";
import { Compass, Home, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-slate-50">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-200">
        <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto shadow-md shadow-sky-500/10">
          <Compass className="w-8 h-8 text-sky-600 animate-pulse" />
        </div>

        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600 px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
            Error 404 • Destination Not Found
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
            Lost in the Desert?
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-2">
            The page you are looking for doesn&apos;t exist or may have been relocated. Let&apos;s guide you back to safety.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <a
            href={`tel:${COMPANY_INFO.cleanPhone}`}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-medium text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-sky-600" />
            <span>Contact Support: {COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

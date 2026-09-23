"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log sanitized error message without exposing sensitive internals
    console.error("Application error boundary triggered:", error.message);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-slate-50">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-200">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto shadow-md shadow-amber-500/10">
          <AlertTriangle className="w-8 h-8 text-amber-600" />
        </div>

        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-700 px-3 py-1 rounded-full bg-amber-50 border border-amber-200">
            System Notice
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-3">
            Something went momentarily wrong
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-2">
            We encountered a temporary hiccup loading this resource. Please try again or return to the main portal.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-xs"
          >
            <RefreshCcw className="w-4 h-4" />
            <span>Reload & Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-medium text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-sky-600" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

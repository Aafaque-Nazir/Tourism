"use client";

import { MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export default function WhatsAppFloating() {
  const url = `https://wa.me/${COMPANY_INFO.cleanPhone}?text=${encodeURIComponent("Hello Al Raheeq Tourism! I'd like to inquire about your travel services.")}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center gap-2 px-4 py-3 rounded-full bg-slate-900 text-white shadow-lg border border-slate-700 hover:bg-slate-800 transition-all duration-300">
        <MessageSquare className="w-4 h-4 text-sky-400" />
        <span className="text-xs font-semibold hidden sm:inline">Chat with us</span>
      </div>
    </a>
  );
}

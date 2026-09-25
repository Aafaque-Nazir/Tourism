"use client";

import { COMPANY_INFO } from "@/lib/data";

export default function WhatsAppFloating() {
  const floatingMessage = [
    `*AL RAHEEQ TOURISM LLC • DUBAI*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `Hello! 👋 I am browsing your website and would like to inquire about your travel services:`,
    ``,
    `• UAE Visit Visas (30 & 60 Days)`,
    `• Flight Bookings & Inquiries`,
    `• Dubai Desert Safari & City Tours`,
    `• International Tour Packages`,
    `• Hotel Reservations`,
    ``,
    `━━━━━━━━━━━━━━━━━━━━`,
    `Kindly connect me with a travel specialist. Thank you!`
  ].join("\n");

  const url = `https://wa.me/${COMPANY_INFO.cleanPhone.replace("+", "")}?text=${encodeURIComponent(floatingMessage)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center gap-2 px-4 py-3 rounded-full bg-slate-900 text-white shadow-lg border border-slate-700 hover:bg-slate-800 transition-all duration-300">
        <svg
          className="w-4 h-4 text-emerald-400 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.52 3.48A11.93 11.93 0 0012.04 0C5.47 0 .12 5.35.12 11.92c0 2.1.55 4.14 1.59 5.95L0 24l6.32-1.66a11.87 11.87 0 005.72 1.46h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.19-1.24-6.18-3.45-8.4zM12.05 21.8c-1.78 0-3.53-.48-5.06-1.39l-.36-.22-3.76.99 1-3.66-.24-.38a9.92 9.92 0 01-1.52-5.22c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.15 1.04 7.03 2.92a9.9 9.9 0 012.92 7.03c0 5.48-4.46 9.95-9.96 9.95zm5.46-7.46c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.18.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.52-.07-.15-.68-1.65-.94-2.26-.25-.6-.5-.51-.68-.52h-.58c-.2 0-.53.07-.8.38-.28.3-1.07 1.05-1.07 2.56s1.1 2.97 1.25 3.17c.15.2 2.16 3.3 5.23 4.63.73.32 1.3.51 1.74.65.73.23 1.4.2 1.93.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35z"/>
        </svg>
        <span className="text-xs font-semibold hidden sm:inline">Chat with us</span>
      </div>
    </a>
  );
}

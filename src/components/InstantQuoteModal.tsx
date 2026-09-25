"use client";

import { useState, useEffect } from "react";
import { X, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO, buildWhatsAppQuoteUrl } from "@/lib/data";

interface InstantQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function InstantQuoteModal({
  isOpen,
  onClose,
  defaultService = "General Inquiry",
}: InstantQuoteModalProps) {
  const [service, setService] = useState(defaultService);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("1-2 Persons");
  const [notes, setNotes] = useState("");

  const [prevDefaultService, setPrevDefaultService] = useState(defaultService);
  if (defaultService !== prevDefaultService) {
    setPrevDefaultService(defaultService);
    setService(defaultService);
  }

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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppQuoteUrl({
      serviceOrPackage: service,
      name: name.trim() || undefined,
      phone: phone.trim() || undefined,
      date: date || undefined,
      travelers: travelers,
      notes: notes.trim() || undefined,
    });
    window.open(url, "_blank");
    onClose();
  };

  const inputCls = "w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-600 bg-white placeholder:text-slate-400";

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/75 backdrop-blur-sm overflow-hidden"
      onClick={onClose}
    >
      <div
        data-lenis-prevent
        className="relative w-full max-w-lg max-h-[92vh] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-y-auto overscroll-contain animate-fade-in-up my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-slate-900 p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-md text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-400 block mb-1">
            Al Raheeq Tourism LLC • Dubai
          </span>
          <h3 className="font-editorial text-xl font-bold text-white">
            Private Travel Consultation
          </h3>
          <p className="text-white/40 text-xs mt-1">
            Our concierge in Deira will respond with confirmed rates.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Service Required
            </label>
            <select value={service} onChange={(e) => setService(e.target.value)} className={inputCls}>
              <option value="UAE Tourist Visa (30/60 Days)">UAE Tourist Visa (30 / 60 Days)</option>
              <option value="VIP Desert Safari & BBQ Dinner">VIP Red Dune Desert Safari</option>
              <option value="Dubai Marina Luxury Dhow Cruise">Dubai Marina Dhow Cruise</option>
              <option value="Burj Khalifa & Aquarium Combo">Burj Khalifa At The Top + Aquarium</option>
              <option value="Worldwide Flight Bookings">Worldwide Flight Bookings</option>
              <option value="Dubai & Global Hotel Booking">Luxury Hotel Reservations</option>
              <option value="Abu Dhabi Full Day City Tour">Abu Dhabi City Tour</option>
              <option value="Custom Dubai Vacation Package">Custom Dubai Holiday Package</option>
              <option value="International Travel Insurance">International Travel Insurance</option>
              <option value="Other Travel Service">Other Service / Inquiry</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className={inputCls} required />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Phone / WhatsApp
              </label>
              <input type="tel" placeholder="+971 50 123 4567" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputCls} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Travel Date
              </label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Travelers
              </label>
              <select value={travelers} onChange={(e) => setTravelers(e.target.value)} className={inputCls}>
                <option value="1 Solo Traveler">1 Solo Traveler</option>
                <option value="2 Persons (Couple)">2 Persons (Couple)</option>
                <option value="3-5 Persons (Family)">3 – 5 Persons (Family)</option>
                <option value="6+ Persons (Group)">6+ Persons (Group)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Additional Notes
            </label>
            <textarea
              rows={2}
              placeholder="Dates, hotels, airlines, budget preferences…"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className={`${inputCls} resize-none`}
            />
          </div>

          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.cleanPhone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-semibold text-xs text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 pt-1">
            <CheckCircle2 className="w-3 h-3 text-sky-600" />
            <span>22nd Floor, Al Masraf Building, Al Rigga, Deira, Dubai</span>
          </div>
        </form>
      </div>
    </div>
  );
}

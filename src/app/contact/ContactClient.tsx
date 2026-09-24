"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { COMPANY_INFO, buildWhatsAppQuoteUrl } from "@/lib/data";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending, then redirect to WhatsApp
    setTimeout(() => {
      const url = buildWhatsAppQuoteUrl({
        serviceOrPackage: formData.subject,
        name: formData.name,
        notes: `Email: ${formData.email}\nMessage: ${formData.message}`,
      });
      window.open(url, "_blank");
      setIsSubmitting(false);
      setFormData({ name: "", phone: "", email: "", subject: "General Inquiry", message: "" });
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputCls = "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition-all placeholder:text-slate-400";

  return (
    <>
      {/* Header */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=2000&q=80')",
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-400">
            Our Dubai Office
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Contact Al Raheeq
            <br />Tourism LLC
          </h1>
          <div className="divider-sky" />
          <p className="text-sm text-white/50 max-w-xl leading-relaxed">
            Visit our office on the 22nd floor of Al Masraf Building in Deira, call us directly, or chat with us on WhatsApp for fast help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
            
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="font-editorial text-3xl font-bold text-slate-900 tracking-tight">
                  Get in Touch
                </h2>
                <div className="divider-sky mt-4" />
                <p className="text-sm text-slate-500 mt-4 leading-relaxed">
                  Our friendly team is here 6 days a week to help you with tourist visas, cheap flights, and holiday tours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Office Address</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {COMPANY_INFO.address.line1}<br />
                      {COMPANY_INFO.address.line2}<br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
                    </p>
                    <a 
                      href={COMPANY_INFO.address.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Office Hours</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      <strong className="font-semibold text-slate-900">Mon - Sat:</strong> {COMPANY_INFO.timings.weekdays.split(' (')[0]}<br />
                      <strong className="font-semibold text-slate-900">Sunday:</strong> {COMPANY_INFO.timings.sunday}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${COMPANY_INFO.cleanPhone}`} className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-600 hover:bg-sky-50 transition-all group">
                    <Phone className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Call Us</div>
                      <div className="text-sm font-semibold text-slate-900">{COMPANY_INFO.phone}</div>
                    </div>
                  </a>
                  
                  <a href={`mailto:${COMPANY_INFO.email}`} className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-600 hover:bg-sky-50 transition-all group">
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email Us</div>
                      <div className="text-sm font-semibold text-slate-900">{COMPANY_INFO.email}</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200">
                <h3 className="font-editorial text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h3>
                <p className="text-sm text-slate-500 mb-8">
                  Fill out the form below and our team will get back to you quickly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputCls} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className={inputCls} placeholder="+971 50 123 4567" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputCls} placeholder="your@email.com" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className={inputCls}>
                      <option value="General Inquiry">General Question</option>
                      <option value="UAE Tourist Visa">UAE Tourist Visa</option>
                      <option value="Flight Booking">Flight Booking</option>
                      <option value="Tour or Safari Booking">Tour or Desert Safari</option>
                      <option value="Hotel Reservation">Hotel Booking</option>
                      <option value="Corporate Travel">Company Travel</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Your Message *
                    </label>
                    <textarea id="message" name="message" required rows={4} value={formData.message} onChange={handleChange} className={`${inputCls} resize-none`} placeholder="Tell us about your travel dates, passenger count, or questions..." />
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 transition-colors disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    
                    <a
                      href={buildWhatsAppQuoteUrl({ serviceOrPackage: "General Contact Inquiry" })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Us</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

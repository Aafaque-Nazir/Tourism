"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Menu, X, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

function DubaiClock() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    function update() {
      const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" })
      );
      const hours = now.getHours();
      const mins = String(now.getMinutes()).padStart(2, "0");
      const h12 = hours % 12 || 12;
      const ampm = hours >= 12 ? "PM" : "AM";
      setTime(`${h12}:${mins} ${ampm}`);

      const day = now.getDay();
      const hour = now.getHours();
      setIsOpen(day >= 1 && day <= 6 && hour >= 9 && hour < 22);
    }
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!mounted || !time) return null;

  return (
    <>
      <span className="text-slate-700" aria-hidden="true">|</span>
      <span className="flex items-center gap-1.5 text-[11px] text-slate-400">
        <span className="font-medium">
          Dubai {time} GST — {isOpen ? "Office Open" : "Closed"}
        </span>
      </span>
    </>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scrolling and pause Lenis when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
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
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/packages", label: "Packages" },
    { href: "/stories", label: "Stories" },
  ];

  return (
    <>
      {/* Utility Strip */}
      <div className="hidden lg:block bg-slate-900 text-slate-400 text-[11px] py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-sky-400" />
              <span>22nd Floor, Al Masraf Building, Al Rigga, Deira, Dubai</span>
            </span>
            <DubaiClock />
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-sky-400" />
              <span>Mon – Sat: 9 AM – 10 PM</span>
            </span>
            <span className="text-slate-700">|</span>
            <a
              href={`tel:${COMPANY_INFO.cleanPhone}`}
              className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors font-medium"
            >
              <Phone className="w-3 h-3" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
            : "bg-white border-b border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 relative z-50 group">
            <div className="relative w-11 h-11 rounded-xl bg-white border border-slate-200/90 shadow-2xs p-1 flex items-center justify-center overflow-hidden group-hover:border-sky-300 transition-colors">
              <Image
                src="/logo-icon.png"
                alt="Al Raheeq Tourism LLC Dubai"
                width={40}
                height={40}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div>
              <span className="font-editorial text-lg sm:text-xl font-bold text-slate-900 tracking-tight block leading-tight group-hover:text-sky-700 transition-colors">
                Al Raheeq
              </span>
              <span className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-sky-600 block">
                Tourism LLC • Dubai
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="sky-underline text-[13px] font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-sm hover:shadow"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 rounded-lg text-slate-900 hover:bg-slate-100 transition-colors relative z-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Mobile Menu Panel */}
        <div
          className={`absolute top-0 left-0 w-full bg-white shadow-2xl z-40 lg:hidden transition-transform duration-500 ease-[0.22,1,0.36,1] ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Spacer for Header */}
          <div className="h-[72px]" />
          
          <div className="px-6 pb-10 pt-4 flex flex-col h-[calc(100vh-72px)] overflow-y-auto">
            <nav className="flex flex-col space-y-2 mt-4">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-4 text-3xl font-editorial font-bold text-slate-900 hover:text-sky-600 border-b border-slate-100 transition-colors"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="mt-auto pt-10 space-y-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 shadow-md transition-all active:scale-95"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <a
                  href={`tel:${COMPANY_INFO.cleanPhone}`}
                  className="flex items-center gap-3 text-slate-900 mb-3"
                >
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Call Us</p>
                    <p className="text-sm font-bold">{COMPANY_INFO.phone}</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-slate-900">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Office</p>
                    <p className="text-sm font-medium leading-tight">Al Masraf Bldg, Deira</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

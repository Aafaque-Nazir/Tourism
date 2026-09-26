"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for dynamic glass elevation
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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Floating Glass Capsule Navigation — Fixed to eliminate top gap */}
      <header className="fixed top-4 sm:top-5 inset-x-0 z-50 w-full px-3.5 sm:px-6 pointer-events-none transition-all duration-300">
        <div
          className={`pointer-events-auto max-w-5xl lg:max-w-6xl mx-auto rounded-full px-5 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 backdrop-blur-2xl ${
            scrolled ? "glass-capsule-scrolled" : "glass-capsule"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full bg-white/90 p-1.5 flex items-center justify-center shadow-xs overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo-icon.png"
                alt="Al Raheeq Tourism LLC Dubai"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <span className="font-editorial text-lg sm:text-xl font-bold text-slate-900 tracking-tight block leading-tight group-hover:text-sky-700 transition-colors">
                Al Raheeq
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-sky-600 block">
                Tourism LLC • Dubai
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links — Translucent Capsule Pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/[0.05] p-1 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-[13px] transition-all duration-200 ${
                    active
                      ? "bg-white/95 text-sky-700 font-bold shadow-xs"
                      : "text-slate-800 hover:text-slate-950 hover:bg-white/60 font-semibold"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Direct Phone Call Button */}
            <a
              href={`tel:${COMPANY_INFO.cleanPhone}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-slate-700 hover:text-sky-600 hover:bg-white/60 transition-all text-xs font-semibold"
              title={`Call Al Raheeq: ${COMPANY_INFO.phone}`}
            >
              <div className="w-6 h-6 rounded-full bg-sky-500/10 text-sky-600 flex items-center justify-center">
                <Phone className="w-3 h-3" />
              </div>
              <span className="tracking-tight">{COMPANY_INFO.phone}</span>
            </a>

            {/* Contact CTA */}
            <Link
              href="/contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-500 transition-all shadow-[0_4px_14px_rgba(2,132,199,0.35)] hover:shadow-[0_6px_20px_rgba(2,132,199,0.45)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-slate-900 hover:bg-white/60 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-2xl z-50 lg:hidden transition-transform duration-500 ease-[0.22,1,0.36,1] ${
          mobileMenuOpen ? "translate-y-0 pointer-events-auto" : "-translate-y-full pointer-events-none"
        }`}
      >
        <div className="px-6 pb-10 pt-6 flex flex-col max-h-screen overflow-y-auto">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-100 p-1 flex items-center justify-center overflow-hidden">
                <Image src="/logo-icon.png" alt="Logo" width={32} height={32} className="object-contain" />
              </div>
              <span className="font-editorial text-lg font-bold text-slate-900">Al Raheeq</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full text-slate-900 hover:bg-slate-100"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-1 mt-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3.5 px-3 rounded-xl text-xl font-editorial font-bold transition-colors flex items-center justify-between ${
                    active ? "text-sky-600 bg-sky-50/70" : "text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-sky-500" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 space-y-4 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 shadow-md transition-all active:scale-95"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${COMPANY_INFO.cleanPhone}`}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 text-slate-900"
            >
              <div className="w-9 h-9 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Call Us</p>
                <p className="text-sm font-bold">{COMPANY_INFO.phone}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}



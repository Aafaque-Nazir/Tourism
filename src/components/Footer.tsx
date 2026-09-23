import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Lock } from "lucide-react";
import { COMPANY_INFO, SERVICES_DATA } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="pb-14 border-b border-slate-800">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400 block mb-3">
                Est. Dubai, UAE
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
                Al Raheeq Tourism
              </h2>
              <p className="text-sm text-slate-400 mt-2 max-w-md font-light">
                Licensed UAE travel agency. Visas, flights, luxury tours, and bespoke holiday experiences from the heart of Deira, Dubai.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end gap-2 text-xs">
              <span className="text-sky-400 font-semibold">الرحيق للسياحة</span>
              <span className="text-white/30">Al Raheeq Tourism LLC</span>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 border-b border-slate-800 text-sm">
          {/* Navigation */}
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-400 mb-5">
              Navigation
            </h5>
            <ul className="space-y-3 text-xs">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/#packages", label: "Packages" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="sky-underline text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-400 mb-5">
              Services
            </h5>
            <ul className="space-y-3 text-xs">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link href={`/services#${srv.id}`} className="sky-underline text-slate-400 hover:text-white transition-colors">
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office */}
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-400 mb-5">
              Dubai Office
            </h5>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address.line1},<br />
                  {COMPANY_INFO.address.line2}, {COMPANY_INFO.address.city}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.cleanPhone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p>{COMPANY_INFO.timings.weekdays}</p>
                  <p className="text-[11px] text-rose-400 mt-0.5">{COMPANY_INFO.timings.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.15em] text-sky-400 mb-5">
              Credentials
            </h5>
            <div className="space-y-3 text-xs">
              <p className="text-slate-400">
                Registered with the UAE Department of Economy and Tourism. Fully compliant with DTCM travel agency regulations.
              </p>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-medium text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Licensed UAE Tourism Agency</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Al Raheeq Tourism LLC. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link
              href="/admin/login"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-400 transition-colors"
              title="SEO Portal"
            >
              <Lock className="w-3 h-3" />
              <span>Portal</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

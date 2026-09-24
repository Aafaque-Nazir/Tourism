import { Plane, FileCheck, Building2, Compass, ShieldCheck, ArrowRight, Check } from "lucide-react";
import type { ServiceItem } from "@/lib/data";

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (serviceTitle: string) => void;
  index: number;
}

export default function ServiceCard({ service, onSelect, index }: ServiceCardProps) {
  const getIcon = (name: string) => {
    const cls = "w-5 h-5 text-sky-600 group-hover:text-white transition-colors duration-200";
    switch (name) {
      case "Plane": return <Plane className={cls} />;
      case "FileCheck": return <FileCheck className={cls} />;
      case "Building2": return <Building2 className={cls} />;
      case "Compass": return <Compass className={cls} />;
      case "ShieldCheck": return <ShieldCheck className={cls} />;
      default: return <Compass className={cls} />;
    }
  };

  return (
    <div className="bg-white border border-slate-200/90 hover:border-sky-300 rounded-2xl p-4 sm:p-5 flex flex-col justify-between group shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
      <div>
        {/* Top Header: Icon + Badge / Number */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center group-hover:bg-sky-600 group-hover:border-sky-600 transition-all duration-300 shrink-0">
            {getIcon(service.iconName)}
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            {service.badge && (
              <span className="text-[9px] font-bold text-sky-700 bg-sky-50/80 px-2 py-0.5 rounded-md border border-sky-100 uppercase tracking-wider">
                {service.badge}
              </span>
            )}
            <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-sky-400 transition-colors select-none">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Title & Arabic */}
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-editorial text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
              {service.title}
            </h3>
            {service.titleArabic && (
              <span className="text-[11px] text-slate-400 font-medium shrink-0 font-sans" dir="rtl">
                {service.titleArabic}
              </span>
            )}
          </div>
          <p className="text-[10px] font-bold text-sky-600 uppercase tracking-wider mt-0.5 line-clamp-1">
            {service.tagline}
          </p>
        </div>

        {/* Description - Compact 2-line clamp */}
        <p className="text-xs text-slate-500 leading-relaxed mt-2 line-clamp-2">
          {service.description}
        </p>

        {/* Key Features: Compact, clean tags */}
        <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-col gap-1.5">
          {service.features.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
              <Check className="w-3 h-3 text-emerald-500 shrink-0" />
              <span className="truncate leading-tight">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer / CTA Button */}
      <div className="mt-3.5 pt-2.5 border-t border-slate-100">
        <button
          onClick={() => onSelect(service.title)}
          className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-sky-700 bg-sky-50 group-hover:bg-sky-600 group-hover:text-white transition-all duration-200"
        >
          <span>Get Quote</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}

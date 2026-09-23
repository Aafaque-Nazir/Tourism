import { Plane, FileCheck, Building2, Compass, ShieldCheck, ArrowRight, Check } from "lucide-react";
import type { ServiceItem } from "@/lib/data";

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (serviceTitle: string) => void;
  index: number;
}

export default function ServiceCard({ service, onSelect, index }: ServiceCardProps) {
  const getIcon = (name: string) => {
    const cls = "w-6 h-6 text-sky-600";
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
    <div className="bg-white border border-slate-200 hover:border-sky-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300">
      <div>
        {/* Header: Icon + Number */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {getIcon(service.iconName)}
          </div>
          <span className="font-editorial text-4xl font-bold text-slate-100 group-hover:text-sky-100 transition-colors duration-300 select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-editorial text-2xl font-bold text-slate-900 leading-tight">
          {service.title}
        </h3>
        {service.titleArabic && (
          <p className="text-xs text-slate-400 mt-1">{service.titleArabic}</p>
        )}

        {/* Tagline */}
        <p className="text-xs font-bold text-sky-600 uppercase tracking-wider mt-4">
          {service.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mt-3 min-h-[4.5rem]">
          {service.description}
        </p>

        {/* Features */}
        <ul className="mt-6 space-y-2.5">
          {service.features.slice(0, 3).map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
              <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-sky-50 transition-colors">
                <Check className="w-3 h-3 text-sky-500" />
              </div>
              <span className="leading-snug">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer / CTA */}
      <div className="mt-8 pt-6 border-t border-slate-100">
        <button
          onClick={() => onSelect(service.title)}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-700 bg-slate-50 hover:bg-sky-600 hover:text-white transition-colors duration-300"
        >
          <span>Request Quote</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

import Image from "next/image";
import { Star, Clock, ArrowRight, Check, MapPin, Users } from "lucide-react";
import type { TourPackage } from "@/lib/data";

interface PackageCardProps {
  packageData: TourPackage;
  onBook: (pkg: TourPackage) => void;
  onViewItinerary: (pkg: TourPackage) => void;
}

export default function PackageCard({ packageData, onBook, onViewItinerary }: PackageCardProps) {
  return (
    <div className="bg-white border border-slate-200 hover:border-sky-300 rounded-2xl flex flex-col justify-between group shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
      {/* Image */}
      <div className="relative h-48 sm:h-50 w-full bg-slate-100 overflow-hidden">
        <Image
          src={packageData.image}
          alt={packageData.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Country Flag + Region Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="text-base leading-none" aria-hidden="true">{packageData.countryFlag}</span>
          <span className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-md">
            {packageData.region}
          </span>
        </div>

        {/* Rating & Duration */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="flex items-center gap-1 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-900 shadow-xs">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            {packageData.rating.toFixed(1)}
            <span className="text-slate-400 font-medium ml-0.5">({packageData.reviewsCount})</span>
          </span>
          <span className="flex items-center gap-1 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-white shadow-xs">
            <Clock className="w-3 h-3 text-sky-400" />
            {packageData.duration}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-4.5 flex-1 flex flex-col">
        {/* Destination */}
        <div className="flex items-center gap-1 text-[10px] text-slate-400 font-medium mb-1">
          <MapPin className="w-3 h-3 text-sky-500" />
          <span>{packageData.destination}</span>
        </div>

        <h3 className="font-editorial text-base font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-sky-700 transition-colors">
          {packageData.title}
        </h3>

        {/* Price */}
        <div className="mt-2 flex items-baseline gap-1.5">
          <span className="text-lg font-extrabold text-sky-600">AED {packageData.priceAED.toLocaleString()}</span>
          <span className="text-[10px] text-slate-400 font-medium">/ person</span>
        </div>

        {/* Quick Inclusion Chips */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {packageData.nights > 0 && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-50 text-[10px] font-semibold text-slate-500 border border-slate-100">
              🏨 {packageData.nights}N Hotel
            </span>
          )}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-50 text-[10px] font-semibold text-slate-500 border border-slate-100">
            🚗 Transfers
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-50 text-[10px] font-semibold text-slate-500 border border-slate-100">
            🎟️ Sightseeing
          </span>
        </div>

        {/* Highlights: 2 concise items */}
        <ul className="mt-3 pt-2.5 border-t border-slate-100 space-y-1.5 flex-1">
          {packageData.highlights.slice(0, 2).map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
              <Check className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
              <span className="line-clamp-1 leading-snug">{item}</span>
            </li>
          ))}
        </ul>

        {/* Best For */}
        <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-slate-400 font-medium">
          <Users className="w-3 h-3 text-slate-400" />
          <span>Best for: {packageData.bestFor.slice(0, 2).join(", ")}</span>
        </div>
      </div>

      {/* CTAs */}
      <div className="px-4 pb-4 space-y-1.5 mt-1">
        <button
          onClick={() => onViewItinerary(packageData)}
          className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-100 transition-colors duration-200"
        >
          <span>View Itinerary & Requirements</span>
          <ArrowRight className="w-3 h-3" />
        </button>
        <button
          onClick={() => onBook(packageData)}
          className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors duration-200"
        >
          <span>Book / Get Quote</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

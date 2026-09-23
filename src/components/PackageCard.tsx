import Image from "next/image";
import { Star, Clock, ArrowRight, Check } from "lucide-react";
import type { TourPackage } from "@/lib/data";

interface PackageCardProps {
  packageData: TourPackage;
  onBook: (packageTitle: string) => void;
}

export default function PackageCard({ packageData, onBook }: PackageCardProps) {
  return (
    <div className="bg-white border border-slate-200 hover:border-sky-200 rounded-2xl flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
        <Image
          src={packageData.image}
          alt={packageData.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-md">
            {packageData.category}
          </span>
        </div>

        {/* Rating & Duration */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-slate-900 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            {packageData.rating.toFixed(1)}
            <span className="text-slate-500 font-medium ml-0.5">({packageData.reviewsCount})</span>
          </span>
          <span className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm">
            <Clock className="w-3.5 h-3.5 text-sky-400" />
            {packageData.duration}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-editorial text-lg font-bold text-slate-900 line-clamp-2 leading-snug">
          {packageData.title}
        </h3>

        <div className="mt-3 text-sm font-bold text-sky-600 bg-sky-50 inline-block px-3 py-1 rounded-lg w-fit">
          {packageData.priceNote}
        </div>

        {/* Highlights */}
        <ul className="mt-5 pt-5 border-t border-slate-100 space-y-2.5 flex-1">
          {packageData.highlights.slice(0, 3).map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
              <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-sky-50 transition-colors">
                <Check className="w-3 h-3 text-sky-500" />
              </div>
              <span className="line-clamp-2 leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="px-6 pb-6 mt-2">
        <button
          onClick={() => onBook(packageData.title)}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-700 bg-slate-50 hover:bg-sky-600 hover:text-white transition-colors duration-300"
        >
          <span>Book Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

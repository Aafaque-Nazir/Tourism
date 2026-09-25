"use client";

import { useMemo } from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import type { ReviewItem } from "@/lib/data";

interface ReviewsCarouselProps {
  reviews: ReviewItem[];
}

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  // Duplicate reviews array to create an infinite, seamless marquee loop
  const duplicatedReviews = useMemo(() => {
    if (!reviews || reviews.length === 0) return [];
    return [...reviews, ...reviews];
  }, [reviews]);

  if (!reviews || reviews.length === 0) return null;

  return (
    <div className="relative">
      {/* Header — Clean & Elegant without bulky controller buttons */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-[10px] font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
          <span>Verified Reviews</span>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-slate-600 font-extrabold ml-0.5">4.9 / 5.0</span>
        </div>

        <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          What Our Travelers Say
        </h2>
        <div className="divider-sky mx-auto mt-3" />
        <p className="text-xs sm:text-sm text-slate-500 mt-2.5 max-w-lg mx-auto leading-relaxed">
          Real feedback from tourists, GCC residents, and corporate travelers served at our Deira headquarters.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Continuous Auto-Scrolling Marquee Track */}
        <div className="py-2 overflow-hidden">
          <div className="animate-marquee gap-5 sm:gap-6 flex">
            {duplicatedReviews.map((rev, index) => (
              <div
                key={`${rev.id}-${index}`}
                className="bg-white border border-slate-200/90 hover:border-sky-300 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shrink-0 w-[290px] sm:w-[370px] shadow-xs hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Rating Stars & Date */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {rev.date}
                    </span>
                  </div>

                  {/* Quote & Comment */}
                  <div className="relative mb-2">
                    <Quote className="w-5 h-5 text-sky-100 absolute -top-2 -left-1 -z-0" />
                    <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed italic relative z-10 font-normal">
                      &ldquo;{rev.comment}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Author Info & Verified Badge */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full ${
                        rev.avatarBg || "bg-sky-600"
                      } text-white flex items-center justify-center font-editorial font-bold text-sm shadow-xs ring-2 ring-white`}
                    >
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight group-hover:text-sky-700 transition-colors">
                        {rev.name}
                      </h4>
                      <p className="text-[10px] font-medium text-slate-500 mt-0.5">
                        {rev.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

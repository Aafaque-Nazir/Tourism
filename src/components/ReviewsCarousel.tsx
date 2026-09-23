"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, Pause, Play } from "lucide-react";
import type { ReviewItem } from "@/lib/data";

interface ReviewsCarouselProps {
  reviews: ReviewItem[];
}

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Update active index based on scroll position
  const updateScrollState = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;

    // Calculate approximate active card index
    const firstChild = container.firstElementChild as HTMLElement | null;
    if (firstChild) {
      const cardWidth = firstChild.offsetWidth + 24; // width + gap (gap-6 is 24px)
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(Math.max(index, 0), reviews.length - 1));
    }
  }, [reviews.length]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();

    return () => container.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  // Scroll to specific index
  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const firstChild = container.firstElementChild as HTMLElement | null;
    if (!firstChild) return;

    const cardWidth = firstChild.offsetWidth + 24;
    const targetScroll = index * cardWidth;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    } else {
      scrollToIndex(reviews.length - 1); // Loop to end
    }
  };

  const handleNext = () => {
    if (currentIndex < reviews.length - 1) {
      scrollToIndex(currentIndex + 1);
    } else {
      scrollToIndex(0); // Loop to start
    }
  };

  // Autoplay effect
  useEffect(() => {
    if (isPaused || reviews.length <= 1) return;

    const timer = setInterval(() => {
      if (!scrollRef.current) return;
      const nextIndex = (currentIndex + 1) % reviews.length;
      scrollToIndex(nextIndex);
    }, 4500);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, reviews.length, scrollToIndex]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Header with Title & Carousel Navigation Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-[10px] font-bold uppercase tracking-wider mb-2">
            <CheckCircle2 className="w-3 h-3 text-sky-600" />
            <span>Verified Customer Reviews</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            What Our Travelers Say
          </h2>
          <div className="divider-sky mt-4" />
        </div>

        {/* Navigation buttons & counters */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Slide progress counter */}
          <div className="text-xs font-bold text-slate-500 font-mono tracking-wider px-3 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-sky-600">{String(currentIndex + 1).padStart(2, "0")}</span>
            <span className="mx-1 text-slate-300">/</span>
            <span>{String(reviews.length).padStart(2, "0")}</span>
          </div>

          {/* Autoplay pause/play button */}
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Play review slideshow" : "Pause review slideshow"}
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-sky-500 text-slate-600 hover:text-sky-600 flex items-center justify-center transition-all duration-200 shadow-2xs cursor-pointer"
            title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
          >
            {isPaused ? <Play className="w-4 h-4 ml-0.5" /> : <Pause className="w-4 h-4" />}
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous review"
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-sky-500 hover:bg-sky-50 text-slate-700 hover:text-sky-700 flex items-center justify-center transition-all duration-200 shadow-2xs active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next review"
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-sky-500 hover:bg-sky-50 text-slate-700 hover:text-sky-700 flex items-center justify-center transition-all duration-200 shadow-2xs active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Track */}
      <div
        ref={scrollRef}
        data-lenis-prevent
        className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory hide-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none" }}
      >
        {reviews.map((rev, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={rev.id}
              className={`bg-white border rounded-2xl p-6 sm:p-7 flex flex-col justify-between shrink-0 snap-start w-[85vw] sm:w-[380px] lg:w-[410px] transition-all duration-300 ${
                isActive
                  ? "border-sky-400 shadow-md ring-2 ring-sky-50"
                  : "border-slate-200 hover:border-sky-200 shadow-xs hover:shadow-lg"
              }`}
            >
              <div>
                {/* Header: Stars & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-2xs"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {rev.date}
                  </span>
                </div>

                {/* Quote Icon & Text */}
                <div className="relative mb-2">
                  <Quote className="w-6 h-6 text-sky-100 absolute -top-2 -left-1 -z-0" />
                  <p className="text-sm text-slate-700 leading-relaxed italic relative z-10 font-normal">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author & Verification Info */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-full ${
                      rev.avatarBg || "bg-sky-600"
                    } text-white flex items-center justify-center font-editorial font-bold text-lg shadow-xs ring-2 ring-white`}
                  >
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] font-medium text-slate-500 mt-0.5">
                      {rev.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span className="hidden sm:inline">Verified</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 pt-4">
        {reviews.map((rev, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={rev.id}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to review ${index + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                isActive
                  ? "w-8 h-2.5 bg-sky-600 shadow-xs"
                  : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

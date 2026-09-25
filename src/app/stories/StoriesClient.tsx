"use client";

import Link from "next/link";
import {
  Camera,
  MessageCircle,
  ArrowRight,
  Plane,
  Compass,
  MapPin,
  Heart,
  Globe,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

const UPCOMING_TOPICS = [
  {
    title: "Dubai Desert Adventures",
    tag: "Dubai & UAE",
    desc: "Sunset dune bashing, stargazing in Lahbab, and authentic Arabian BBQ camps.",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Georgia & Caucasus Escapes",
    tag: "Caucasus",
    desc: "Snowy peaks in Gudauri, historic Kazbegi churches, and old town Tbilisi strolls.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Tropical Bali & Thailand",
    tag: "South East Asia",
    desc: "Cliffside temples, emerald rice terraces, and island hopping by speedboat.",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=700&q=80",
  },
];

export default function StoriesClient() {
  const shareStoriesMessage = [
    `*TRAVELER STORIES SUBMISSION* 📸`,
    `*Al Raheeq Tourism LLC • Dubai*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `Hello Al Raheeq Tourism! I would like to submit my vacation photos and feedback to be featured on your Traveler Stories wall:`,
    ``,
    `👤 *Traveler Name:* `,
    `📍 *Trip / Destination:* `,
    `⭐ *Trip Rating:* ⭐⭐⭐⭐⭐`,
    `💬 *My Experience / Review:* `,
    ``,
    `━━━━━━━━━━━━━━━━━━━━`,
    `Attached are my photos. Looking forward to seeing my feature!`
  ].join("\n");

  const sharePhotosWhatsApp = `https://wa.me/${COMPANY_INFO.cleanPhone.replace("+", "")}?text=${encodeURIComponent(
    shareStoriesMessage
  )}`;

  return (
    <div className="bg-slate-900 text-white min-h-[calc(100vh-72px)] flex flex-col justify-between selection:bg-sky-500 selection:text-white">
      {/* Background Ambience */}
      <div className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Real Travel Stories
              <br />
              <span className="text-sky-400">
                Are on the Way
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              We are creating a dedicated home to feature real vacation memories, photo journals, and genuine feedback from travelers who explored Dubai and the world with us.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a
              href={sharePhotosWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Share Your Travel Photos</span>
            </a>

            <Link
              href="/packages"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-sky-400/50 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>Explore Tour Packages</span>
              <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
            </Link>
          </div>

          {/* Teaser Preview Cards */}
          <div className="pt-14 text-left">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-sky-400" />
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  What’s Coming to This Page
                </h2>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">Launching Soon</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {UPCOMING_TOPICS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group relative rounded-2xl bg-slate-800/60 border border-slate-800 hover:border-sky-500/40 p-5 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-sky-950/30 flex flex-col justify-between"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-15 group-hover:opacity-25 group-hover:scale-105 transition-all duration-500 pointer-events-none"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="relative z-10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider px-2 py-0.5 rounded-md bg-sky-950/80 border border-sky-800/60">
                          {item.tag}
                        </span>
                        <Icon className="w-4 h-4 text-slate-400 group-hover:text-sky-300 transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-sky-200 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 pt-4 mt-4 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                      <span className="flex items-center gap-1.5 text-sky-400/90">
                        <Heart className="w-3 h-3 text-rose-400" />
                        <span>Traveler Memories</span>
                      </span>
                      <span>Coming Soon</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Invitation Box */}
          <div className="pt-8">
            <div className="rounded-2xl bg-slate-800 border border-slate-700/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
              <div className="space-y-1.5 max-w-xl">
                <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <Camera className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Traveled with Al Raheeq Tourism?</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  Send us 2–3 photos from your trip along with a short line about your experience. We would love to feature you on our launch wall!
                </p>
              </div>

              <a
                href={sharePhotosWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-sky-50 text-xs font-bold transition-all shadow-md active:scale-95"
              >
                <span>Send via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-900" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Footer Anchor Strip */}
      <div className="border-t border-slate-800 bg-slate-950/70 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>Al Masraf Tower, 22nd Floor, Al Rigga, Deira, Dubai</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/services" className="hover:text-white transition-colors">
              Our Services
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { Globe, Share2, AlertCircle, CheckCircle2 } from "lucide-react";

interface SeoPreviewCardProps {
  title: string;
  description: string;
  url: string;
  ogImage?: string;
  siteName?: string;
}

export default function SeoPreviewCard({
  title,
  description,
  url,
  ogImage,
  siteName = "alraheeqtourism.com"
}: SeoPreviewCardProps) {
  const titleLen = title.length;
  const descLen = description.length;

  const isTitleGood = titleLen >= 40 && titleLen <= 60;
  const isDescGood = descLen >= 120 && descLen <= 160;

  return (
    <div className="space-y-6">
      {/* Google SERP Preview Card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <Globe className="w-4 h-4 text-sky-600" />
            <span>Google Search Preview (Desktop / Mobile)</span>
          </div>
          <span className="text-[11px] font-semibold text-slate-400">Live Simulation</span>
        </div>

        {/* Live Snippet Box */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 font-sans">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-[9px] font-bold text-slate-700">
              AR
            </div>
            <div className="flex flex-col">
              <span className="text-slate-800 text-xs font-medium leading-none">{siteName}</span>
              <span className="text-slate-400 text-[10px] leading-tight truncate max-w-xs">{url}</span>
            </div>
          </div>

          <h4 className="text-base sm:text-lg font-medium text-blue-700 hover:underline cursor-pointer line-clamp-1 leading-snug">
            {title || "Please enter a page title..."}
          </h4>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {description || "Please enter a meta description to see how it looks on Google..."}
          </p>
        </div>

        {/* Character Health Indicators */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
            isTitleGood ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-amber-50 border-amber-200 text-amber-800"
          }`}>
            <div className="flex items-center gap-1.5">
              {isTitleGood ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <AlertCircle className="w-4 h-4 text-amber-600" />}
              <span className="font-semibold">Title Length:</span>
            </div>
            <span className="font-mono font-bold">{titleLen} / 60 chars</span>
          </div>

          <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
            isDescGood ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-amber-50 border-amber-200 text-amber-800"
          }`}>
            <div className="flex items-center gap-1.5">
              {isDescGood ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <AlertCircle className="w-4 h-4 text-amber-600" />}
              <span className="font-semibold">Description Length:</span>
            </div>
            <span className="font-mono font-bold">{descLen} / 160 chars</span>
          </div>
        </div>
      </div>

      {/* Social Media Card Preview */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <Share2 className="w-4 h-4 text-sky-600" />
            <span>Social Media Share Card (WhatsApp / Facebook)</span>
          </div>
        </div>

        <div className="max-w-md mx-auto rounded-xl border border-slate-200 overflow-hidden bg-slate-50 shadow-sm">
          {ogImage ? (
            <div className="relative h-44 w-full bg-slate-200 overflow-hidden">
              <Image src={ogImage} alt="Social Preview" fill unoptimized className="object-cover" />
            </div>
          ) : (
            <div className="h-44 w-full bg-sky-100 flex items-center justify-center text-sky-500 text-xs font-semibold">
              No OpenGraph Image Specified
            </div>
          )}
          <div className="p-3.5 space-y-1">
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              {siteName.toUpperCase()}
            </p>
            <h5 className="text-sm font-bold text-slate-900 line-clamp-1">
              {title}
            </h5>
            <p className="text-xs text-slate-600 line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Globe, 
  Save, 
  LogOut, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Share2, 
} from "lucide-react";
import type { FullSeoConfig, PageSeoConfig } from "@/lib/seo";
import SeoPreviewCard from "@/components/SeoPreviewCard";

export default function AdminSeoPage() {
  const router = useRouter();
  const [config, setConfig] = useState<FullSeoConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [activeTab, setActiveTab] = useState<"global" | "home" | "about" | "services" | "contact">("home");

  // Fetch current SEO configuration
  useEffect(() => {
    async function loadConfig() {
      try {
        const res = await fetch("/api/admin/seo");
        if (res.status === 401) {
          router.push("/admin/login");
          return;
        }
        const data = await res.json();
        if (data.config) {
          setConfig(data.config);
        }
      } catch (err) {
        console.error("Failed to load SEO config", err);
      } finally {
        setLoading(false);
      }
    }
    loadConfig();
  }, [router]);

  const handlePageChange = (pageKey: string, field: keyof PageSeoConfig, value: string) => {
    if (!config) return;
    setConfig({
      ...config,
      pages: {
        ...config.pages,
        [pageKey]: {
          ...config.pages[pageKey],
          [field]: value
        }
      }
    });
  };

  const handleGlobalChange = (field: string, value: string) => {
    if (!config) return;
    setConfig({
      ...config,
      global: {
        ...config.global,
        [field]: value
      }
    });
  };

  const handleSave = async () => {
    if (!config) return;
    setSaving(true);
    setMessage(null);

    try {
      const res = await fetch("/api/admin/seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to save");
      }

      setMessage({
        type: "success",
        text: "SEO updates saved successfully! Live website will immediately reflect changes."
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMessage({ type: "error", text: err.message });
      } else {
        setMessage({ type: "error", text: "An error occurred while saving." });
      }
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-full border-4 border-sky-200 border-t-sky-600 animate-spin mx-auto"></div>
          <p className="text-sm font-semibold text-slate-600">Loading SEO Configuration...</p>
        </div>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <AlertCircle className="w-10 h-10 text-rose-500 mx-auto" />
          <h2 className="text-xl font-bold">Failed to load configuration</h2>
          <button
            onClick={() => router.push("/admin/login")}
            className="px-4 py-2 bg-sky-600 text-white rounded-xl text-sm font-bold"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const currentPage = activeTab !== "global" ? config.pages[activeTab] : null;

  return (
    <div className="min-h-screen bg-slate-100/70 pb-20">
      {/* Top Admin Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-30 shadow-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sky-600 flex items-center justify-center shadow-xs">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-base sm:text-lg">SEO Management Console</h1>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-sky-500/20 text-sky-400 border border-sky-400/30">
                  Live Sync
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Al Raheeq Tourism LLC • Edit metadata without writing code
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{saving ? "Saving Changes..." : "Save All SEO Changes"}</span>
            </button>

            <button
              onClick={handleLogout}
              className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Toast / Message Banner */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-2xl border flex items-center justify-between text-sm ${
              message.type === "success"
                ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                : "bg-rose-50 border-rose-200 text-rose-800"
            }`}
          >
            <div className="flex items-center gap-3">
              {message.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              )}
              <span className="font-medium">{message.text}</span>
            </div>
            <button
              onClick={() => setMessage(null)}
              className="text-xs font-bold underline opacity-70 hover:opacity-100"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3 mb-8">
          {[
            { id: "home", label: "🏠 Home Page (/)" },
            { id: "about", label: "ℹ️ About Us (/about)" },
            { id: "services", label: "✈️ Services (/services)" },
            { id: "contact", label: "📍 Contact (/contact)" },
            { id: "global", label: "🌐 Global Settings & Analytics" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-white text-sky-700 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:bg-slate-200/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content: Page SEO Editor */}
        {activeTab !== "global" && currentPage && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Form Fields */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 capitalize">
                    {activeTab} Page SEO Details
                  </h3>
                  <p className="text-xs text-slate-500">
                    Edit title, meta description, and keywords for this page.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200 uppercase">
                  /{activeTab === "home" ? "" : activeTab}
                </span>
              </div>

              {/* Meta Title */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Meta Title
                  </label>
                  <span className={`text-[11px] font-mono font-bold ${
                    currentPage.title.length > 60 ? "text-rose-500" : "text-slate-400"
                  }`}>
                    {currentPage.title.length} / 60 chars recommended
                  </span>
                </div>
                <input
                  type="text"
                  value={currentPage.title}
                  onChange={(e) => handlePageChange(activeTab, "title", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Enter page title..."
                />
              </div>

              {/* Meta Description */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Meta Description
                  </label>
                  <span className={`text-[11px] font-mono font-bold ${
                    currentPage.description.length > 160 ? "text-rose-500" : "text-slate-400"
                  }`}>
                    {currentPage.description.length} / 160 chars recommended
                  </span>
                </div>
                <textarea
                  rows={3}
                  value={currentPage.description}
                  onChange={(e) => handlePageChange(activeTab, "description", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                  placeholder="Enter meta description that summarizes the page for search engines..."
                />
              </div>

              {/* Target Keywords */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Target Keywords (Comma Separated)
                </label>
                <input
                  type="text"
                  value={currentPage.keywords}
                  onChange={(e) => handlePageChange(activeTab, "keywords", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="e.g. Dubai travel agency, UAE visa 30 days, desert safari..."
                />
              </div>

              {/* OpenGraph Title & Description */}
              <div className="pt-4 border-t border-slate-100 space-y-4">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Share2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Social Share Customization (OpenGraph / WhatsApp)</span>
                </h4>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Social Share Image URL (OG Image)
                  </label>
                  <input
                    type="url"
                    value={currentPage.ogImage || ""}
                    onChange={(e) => handlePageChange(activeTab, "ogImage", e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
                    placeholder="https://... (1200x630 image)"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Social Title (Optional override)
                    </label>
                    <input
                      type="text"
                      value={currentPage.ogTitle || ""}
                      onChange={(e) => handlePageChange(activeTab, "ogTitle", e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
                      placeholder="Same as meta title if empty"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Search Engine Robots Directive
                    </label>
                    <select
                      value={currentPage.robots || "index, follow"}
                      onChange={(e) => handlePageChange(activeTab, "robots", e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                    >
                      <option value="index, follow">Index, Follow (Recommended)</option>
                      <option value="noindex, follow">No-Index, Follow</option>
                      <option value="noindex, nofollow">No-Index, No-Follow (Hidden)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={saving}
                  className="px-5 py-2 rounded-lg text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-xs"
                >
                  {saving ? "Saving..." : "Save Page Changes"}
                </button>
              </div>
            </div>

            {/* Right Column: Live SERP & Social Previews */}
            <div className="lg:col-span-5 space-y-6">
              <SeoPreviewCard
                title={currentPage.title}
                description={currentPage.description}
                url={`${config.global.siteUrl}/${activeTab === "home" ? "" : activeTab}`}
                ogImage={currentPage.ogImage || config.global.defaultOgImage}
                siteName="alraheeqtourism.com"
              />
            </div>
          </div>
        )}

        {/* Tab Content: Global Settings */}
        {activeTab === "global" && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm max-w-4xl space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-xl font-bold text-slate-900">
                Global SEO, Analytics & Schema Setup
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                These settings apply globally across all pages of Al Raheeq Tourism.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Website Brand Name
                </label>
                <input
                  type="text"
                  value={config.global.siteName}
                  onChange={(e) => handleGlobalChange("siteName", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Production Site URL
                </label>
                <input
                  type="url"
                  value={config.global.siteUrl}
                  onChange={(e) => handleGlobalChange("siteUrl", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Google Search Console Verification Code
                </label>
                <input
                  type="text"
                  placeholder="e.g. google-site-verification=abc..."
                  value={config.global.googleSiteVerification || ""}
                  onChange={(e) => handleGlobalChange("googleSiteVerification", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 font-mono text-xs"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Paste the verification token from Google Search Console.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Google Analytics 4 Measurement ID
                </label>
                <input
                  type="text"
                  placeholder="e.g. G-XXXXXXXXXX"
                  value={config.global.googleAnalyticsId || ""}
                  onChange={(e) => handleGlobalChange("googleAnalyticsId", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 font-mono text-xs"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Connect GA4 to track visitor clicks and inquiries.
                </p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Default OpenGraph Social Share Image URL
              </label>
              <input
                type="url"
                value={config.global.defaultOgImage}
                onChange={(e) => handleGlobalChange("defaultOgImage", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Schema.org LocalBusiness & TravelAgency JSON-LD is automatically generated</span>
              </div>
              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                className="px-5 py-2 rounded-lg text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-xs"
              >
                {saving ? "Saving..." : "Save Global Settings"}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

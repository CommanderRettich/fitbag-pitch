"use client";

import { type TabId } from "./TabNavigation";

interface HeroCoverProps {
  onStart: (tab: TabId) => void;
}

export function HeroCover({ onStart }: HeroCoverProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(233,69,96,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(74,108,247,0.08),transparent_50%)]" />

      <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-in">
        <div className="inline-block bg-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6 text-white">
          UMFASSENDES WEBSITE AUDIT
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
          fitbag.com
        </h1>
        <p className="text-xl md:text-2xl font-light text-accent-light mb-4">
          360-Grad-Analyse: SEO, Performance, UX, Brand & Wachstumsstrategie
        </p>
        <div className="text-sm text-white/60 space-y-1 mb-8">
          <p><strong className="text-white/80">Erstellt am:</strong> 21. Februar 2026</p>
          <p><strong className="text-white/80">Erstellt von:</strong> MaxMyBusiness</p>
          <p><strong className="text-white/80">Analysierte URL:</strong> https://www.fitbag.com/de</p>
          <p><strong className="text-white/80">Branche:</strong> Custom Phone & Device Sleeves | Made in Germany</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {["10 KI-Agents eingesetzt", "Chrome DevTools Live-Analyse", "Kritische Gegenprüfung", "60+ Quellen"].map((badge) => (
            <span key={badge} className="bg-white/10 px-4 py-1.5 rounded-full text-xs font-medium text-white/80">
              {badge}
            </span>
          ))}
        </div>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => onStart("report")}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-base cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(233,69,96,0.3)]"
          >
            Audit Report lesen
          </button>
          <button
            onClick={() => onStart("angebot")}
            className="px-8 py-4 rounded-xl bg-transparent text-muted font-semibold text-base cursor-pointer border border-border transition-all hover:border-muted hover:text-text"
          >
            Angebot ansehen
          </button>
          <button
            onClick={() => onStart("konzept")}
            className="px-8 py-4 rounded-xl bg-transparent text-muted font-semibold text-base cursor-pointer border border-border transition-all hover:border-muted hover:text-text"
          >
            Konzept
          </button>
        </div>
      </div>
    </section>
  );
}

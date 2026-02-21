"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

type View = "before" | "after";

function Toggle({ view, onChange }: { view: View; onChange: (v: View) => void }) {
  return (
    <div className="flex bg-card rounded-lg p-1 gap-1 w-fit mx-auto mb-6">
      <button
        onClick={() => onChange("before")}
        className={cn(
          "px-5 py-2 rounded-md text-sm font-semibold transition-all cursor-pointer",
          view === "before"
            ? "bg-danger/20 text-danger"
            : "text-muted hover:text-text"
        )}
      >
        Aktuell
      </button>
      <button
        onClick={() => onChange("after")}
        className={cn(
          "px-5 py-2 rounded-md text-sm font-semibold transition-all cursor-pointer",
          view === "after"
            ? "bg-success/20 text-success"
            : "text-muted hover:text-text"
        )}
      >
        Nach Optimierung
      </button>
    </div>
  );
}

/* ── 1. Google SERP Mockup ── */
function SerpMockup({ view }: { view: View }) {
  return (
    <div className="bg-white rounded-xl p-5 text-[#202124] font-sans">
      {/* Search bar */}
      <div className="flex items-center gap-3 mb-5 bg-white border border-[#dfe1e5] rounded-full px-4 py-2.5">
        <svg className="w-5 h-5 text-[#4285f4] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <span className="text-sm text-[#202124]">fitbag handyhülle maßanfertigung</span>
      </div>

      <p className="text-xs text-[#70757a] mb-4">Ungefähr 42.300 Ergebnisse (0,28 Sek.)</p>

      {/* Result */}
      <div className="border-b border-[#ebebeb] pb-4">
        <div className="text-xs text-[#202124] mb-0.5">https://www.fitbag.com › de</div>
        <a className="text-lg text-[#1a0dab] hover:underline leading-snug block mb-1">
          fitBAG – Maßgefertigte Handytaschen &amp; Sleeves | Made in Germany
        </a>

        {view === "after" && (
          <div className="flex items-center gap-2 mb-1.5">
            <div className="flex text-[#fbbc04] text-sm tracking-tight">★★★★★</div>
            <span className="text-xs text-[#70757a]">4,96 / 5 · 33.000+ Bewertungen</span>
            <span className="text-xs text-[#70757a]">·</span>
            <span className="text-xs text-[#202124] font-medium">ab 29,90 €</span>
            <span className="text-xs text-[#0f9d58]">✓ Auf Lager</span>
          </div>
        )}

        <p className="text-sm text-[#4d5156] leading-relaxed">
          {view === "before"
            ? "fitBAG - Handmade in Germany since 2003. Individuelle Taschen und Hüllen für Smartphones und Tablets. Über 1 Million verkauft."
            : "★ 33.000+ zufriedene Kunden | Maßgefertigte Handyhüllen aus Premium-Materialien | Made in Germany seit 2003 | Jetzt Hülle konfigurieren →"
          }
        </p>

        {view === "after" && (
          <div className="flex gap-4 mt-2 text-xs text-[#1a0dab]">
            <span className="hover:underline">Konfigurator</span>
            <span className="hover:underline">Alcantara® Kollektion</span>
            <span className="hover:underline">Leder Kollektion</span>
            <span className="hover:underline">Alle Geräte</span>
          </div>
        )}
      </div>

      {/* Competing result */}
      <div className="pt-4 opacity-60">
        <div className="text-xs text-[#202124] mb-0.5">https://www.amazon.de › ...</div>
        <a className="text-lg text-[#1a0dab] leading-snug block mb-1">
          Handyhülle maßgefertigt - Amazon.de
        </a>
        <p className="text-sm text-[#4d5156]">
          Ergebnisse für maßgefertigte Handyhüllen. Große Auswahl an Marken ...
        </p>
      </div>
    </div>
  );
}

/* ── 2. Mobile Product Page Mockup ── */
function MobileMockup({ view }: { view: View }) {
  return (
    <div className="mx-auto max-w-[320px]">
      {/* Phone frame */}
      <div className="bg-[#1a1a2e] rounded-[2rem] border-4 border-[#2a2a4a] p-2 shadow-2xl">
        {/* Screen */}
        <div className="bg-white rounded-[1.5rem] overflow-hidden relative" style={{ height: 520 }}>
          {/* Status bar */}
          <div className="flex justify-between items-center px-5 py-1.5 text-[10px] text-black/70 font-semibold bg-[#f8f8f8]">
            <span>9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-4 h-2.5 border border-black/40 rounded-sm relative">
                <div className="absolute inset-0.5 bg-black/40 rounded-[1px]" style={{ width: "70%" }} />
              </div>
            </div>
          </div>

          {/* Nav bar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-[#eee]">
            <span className="text-[10px] font-bold text-[#333]">fitBAG</span>
            <div className="flex gap-2">
              <div className="w-4 h-4 bg-[#eee] rounded" />
              <div className="w-4 h-4 bg-[#eee] rounded" />
            </div>
          </div>

          {/* Product image placeholder */}
          <div className="bg-gradient-to-br from-[#f0e6d3] to-[#d4c4a8] h-44 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-28 bg-[#8B4513]/30 rounded-lg mx-auto border-2 border-[#8B4513]/50" />
              <p className="text-[9px] text-[#8B4513] mt-1 font-medium">Alcantara® Sleeve</p>
            </div>
          </div>

          {/* Product info */}
          <div className="px-3 py-2">
            <p className="text-[11px] font-bold text-[#333]">fitBAG Classic Grau</p>
            <p className="text-[9px] text-[#777] mt-0.5">Maßgefertigt für iPhone 16 Pro Max</p>

            {view === "after" && (
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[#fbbc04] text-[10px]">★★★★★</span>
                <span className="text-[8px] text-[#666]">4,96 (33.000+)</span>
              </div>
            )}

            <div className="flex items-center justify-between mt-2">
              <span className="text-[14px] font-bold text-[#333]">23,99 €</span>
              {view === "before" && (
                <span className="text-[8px] text-[#0a8f0a]">✓ Lieferbar</span>
              )}
            </div>

            {view === "after" && (
              <div className="flex gap-1 mt-1.5">
                <span className="bg-[#e8f5e9] text-[#2e7d32] text-[7px] px-1.5 py-0.5 rounded-full font-medium">Made in Germany</span>
                <span className="bg-[#e8f5e9] text-[#2e7d32] text-[7px] px-1.5 py-0.5 rounded-full font-medium">1 Mio+ verkauft</span>
                <span className="bg-[#e8f5e9] text-[#2e7d32] text-[7px] px-1.5 py-0.5 rounded-full font-medium">Handmade</span>
              </div>
            )}
          </div>

          {/* Scrollable content indicator */}
          <div className="px-3 py-2 border-t border-[#eee]">
            <div className="h-2 bg-[#f0f0f0] rounded mb-1.5 w-full" />
            <div className="h-2 bg-[#f0f0f0] rounded mb-1.5 w-4/5" />
            <div className="h-2 bg-[#f0f0f0] rounded w-3/5" />
          </div>

          {view === "before" && (
            <div className="px-3 py-2">
              <div className="h-2 bg-[#f0f0f0] rounded mb-1.5 w-full" />
              <div className="h-2 bg-[#f0f0f0] rounded w-2/3" />
            </div>
          )}

          {/* Sticky CTA - only in "after" */}
          {view === "after" && (
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#eee] px-3 py-2.5 flex items-center justify-between">
              <div>
                <p className="text-[12px] font-bold text-[#333]">23,99 €</p>
                <p className="text-[8px] text-[#0a8f0a]">✓ Kostenloser Versand</p>
              </div>
              <button className="bg-[#e94560] text-white text-[10px] font-bold px-4 py-2 rounded-lg">
                In den Warenkorb
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── 3. Homepage Hero Mockup ── */
function HeroMockup({ view }: { view: View }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden text-[#202124]">
      {/* Browser chrome */}
      <div className="bg-[#dee1e6] px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ed6a5e]" />
          <div className="w-3 h-3 rounded-full bg-[#f5bf4f]" />
          <div className="w-3 h-3 rounded-full bg-[#62c554]" />
        </div>
        <div className="flex-1 bg-white rounded text-xs px-3 py-1 text-[#5f6368]">
          fitbag.com/de
        </div>
      </div>

      {/* Page content */}
      <div className="relative">
        {/* Hero area */}
        <div className={cn(
          "px-6 py-8",
          view === "before"
            ? "bg-gradient-to-r from-[#f5f0e8] to-[#e8dcc8]"
            : "bg-gradient-to-r from-[#1a1a2e] to-[#2d1f3d] text-white"
        )}>
          {/* Nav */}
          <div className="flex items-center justify-between mb-6">
            <span className={cn("text-sm font-bold", view === "after" && "text-white")}>
              fitBAG
            </span>
            <div className="flex gap-3 text-[10px]">
              <span className={view === "after" ? "text-white/70" : "text-[#666]"}>Shop</span>
              <span className={view === "after" ? "text-white/70" : "text-[#666]"}>Konfigurator</span>
              <span className={view === "after" ? "text-white/70" : "text-[#666]"}>Über uns</span>
            </div>
          </div>

          {view === "after" && (
            <div className="flex justify-center gap-3 mb-4 text-[8px]">
              <span className="bg-white/10 px-2 py-1 rounded-full text-white/80">★ 4,96 / 5 Sterne</span>
              <span className="bg-white/10 px-2 py-1 rounded-full text-white/80">1 Mio+ verkauft</span>
              <span className="bg-white/10 px-2 py-1 rounded-full text-white/80">Made in Germany</span>
              <span className="bg-white/10 px-2 py-1 rounded-full text-white/80">Handmade since 2003</span>
            </div>
          )}

          <div className="text-center">
            {view === "before" ? (
              <>
                <div className="w-24 h-36 bg-[#8B4513]/20 rounded-lg mx-auto mb-3 border-2 border-[#8B4513]/30 flex items-center justify-center">
                  <span className="text-[8px] text-[#8B4513]/60">Produktbild</span>
                </div>
                <p className="text-xs text-[#666] mb-4">
                  Handmade in Germany since 2003
                </p>
                {/* No CTA, no USP */}
              </>
            ) : (
              <>
                <h1 className="text-lg font-extrabold mb-2">
                  Deine Hülle. Dein Style.<br />
                  <span className="text-[#e94560]">Maßgefertigt in Deutschland.</span>
                </h1>
                <p className="text-xs text-white/70 mb-4 max-w-xs mx-auto">
                  Premium-Materialien, über 100 Farben, passt perfekt auf dein Gerät.
                  Von Hand gefertigt seit 2003.
                </p>
                <div className="flex gap-2 justify-center">
                  <button className="bg-[#e94560] text-white text-[10px] font-bold px-4 py-2 rounded-lg">
                    Jetzt konfigurieren →
                  </button>
                  <button className="border border-white/30 text-white text-[10px] px-4 py-2 rounded-lg">
                    Bestseller ansehen
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {view === "before" && (
          <div className="px-6 py-3 text-center">
            <p className="text-[10px] text-[#999]">↓ Scrollen für mehr</p>
            <div className="mt-2 space-y-1.5">
              <div className="h-2 bg-[#f0f0f0] rounded w-full" />
              <div className="h-2 bg-[#f0f0f0] rounded w-4/5 mx-auto" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Mockup Card Wrapper ── */
function MockupCard({
  title,
  description,
  children,
  view,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  view: View;
}) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="p-5 border-b border-border">
        <h4 className="font-semibold text-base mb-1">{title}</h4>
        <p className="text-sm text-muted">{description}</p>
        <div className="mt-2">
          {view === "before" ? (
            <span className="inline-block bg-danger/15 text-danger text-xs font-semibold px-3 py-1 rounded-full">
              Aktueller Zustand
            </span>
          ) : (
            <span className="inline-block bg-success/15 text-success text-xs font-semibold px-3 py-1 rounded-full">
              Nach Optimierung
            </span>
          )}
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export function BeforeAfterMockups() {
  const [view, setView] = useState<View>("before");

  return (
    <section>
      <SectionTitle number="14." title="Vorher / Nachher – So sieht der Unterschied aus" />

      <p className="text-muted mb-6">
        Klicke zwischen &quot;Aktuell&quot; und &quot;Nach Optimierung&quot;, um den Unterschied zu sehen.
        Diese Mockups zeigen die konkreten Auswirkungen der vorgeschlagenen Maßnahmen.
      </p>

      <Toggle view={view} onChange={setView} />

      <div className="space-y-8">
        <MockupCard
          title="Google-Suchergebnis"
          description="Schema.org Rich Snippets machen aus einem normalen Suchergebnis einen echten Klick-Magneten: Goldene Sterne, Preis und Verfügbarkeit direkt in Google."
          view={view}
        >
          <SerpMockup view={view} />
        </MockupCard>

        <div className="grid md:grid-cols-2 gap-6">
          <MockupCard
            title="Mobile Produktseite"
            description="Sticky CTA, Trust-Badges und Bewertungen direkt sichtbar – statt verstecktem Warenkorb-Button."
            view={view}
          >
            <MobileMockup view={view} />
          </MockupCard>

          <MockupCard
            title="Homepage Hero-Bereich"
            description="Vom statischen Produktbild ohne CTA zu einer überzeugenden Hero-Section mit klarer Handlungsaufforderung."
            view={view}
          >
            <HeroMockup view={view} />
          </MockupCard>
        </div>
      </div>
    </section>
  );
}

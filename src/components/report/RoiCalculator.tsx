"use client";

import { useState, useMemo } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FindingBox } from "@/components/ui/FindingBox";

function NumberInput({
  label,
  value,
  onChange,
  suffix,
  min = 0,
  max = 999999,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  suffix: string;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <div>
      <label className="text-sm text-muted block mb-1.5">{label}</label>
      <div className="flex items-center bg-card border border-border rounded-lg overflow-hidden">
        <input
          type="number"
          value={value}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            if (!isNaN(v) && v >= min && v <= max) onChange(v);
          }}
          min={min}
          max={max}
          step={step}
          className="flex-1 bg-transparent text-text text-right text-lg font-semibold px-4 py-3 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <span className="text-muted text-sm pr-4 shrink-0">{suffix}</span>
      </div>
    </div>
  );
}

function BarMetric({
  label,
  currentValue,
  newValue,
  format,
  improvement,
}: {
  label: string;
  currentValue: number;
  newValue: number;
  format: (v: number) => string;
  improvement: string;
}) {
  const maxVal = Math.max(currentValue, newValue) || 1;
  const currentPct = (currentValue / maxVal) * 100;
  const newPct = (newValue / maxVal) * 100;

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-xs bg-success/15 text-success px-2 py-0.5 rounded-full font-semibold">
          {improvement}
        </span>
      </div>

      {/* Current */}
      <div className="mb-2">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-muted">Aktuell</span>
          <span className="text-danger font-medium">{format(currentValue)}</span>
        </div>
        <div className="h-3 bg-bg rounded-full overflow-hidden">
          <div
            className="h-full bg-danger/60 rounded-full transition-all duration-700"
            style={{ width: `${currentPct}%` }}
          />
        </div>
      </div>

      {/* Projected */}
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span className="text-muted">Nach Optimierung</span>
          <span className="text-success font-medium">{format(newValue)}</span>
        </div>
        <div className="h-3 bg-bg rounded-full overflow-hidden">
          <div
            className="h-full bg-success rounded-full transition-all duration-700"
            style={{ width: `${newPct}%` }}
          />
        </div>
      </div>
    </div>
  );
}

const optimizations = [
  {
    name: "Schema.org Rich Snippets",
    ctrMultiplier: 1.20,
    conversionMultiplier: 1.0,
    description: "+20 % CTR durch goldene Sterne in Google",
  },
  {
    name: "Performance & Ladezeit",
    ctrMultiplier: 1.0,
    conversionMultiplier: 1.12,
    description: "+12 % Conversion durch schnellere Ladezeit",
  },
  {
    name: "Hreflang-Korrektur",
    ctrMultiplier: 1.15,
    conversionMultiplier: 1.05,
    description: "+15 % DE-Traffic, +5 % Conversion (richtige Sprache)",
  },
  {
    name: "Konfigurator-Redesign",
    ctrMultiplier: 1.0,
    conversionMultiplier: 1.25,
    description: "+25 % Conversion durch vereinfachten Kaufprozess",
  },
  {
    name: "Bewertungen & Social Proof",
    ctrMultiplier: 1.0,
    conversionMultiplier: 1.15,
    description: "+15 % Conversion durch Vertrauen auf Produktseiten",
  },
];

function formatEuro(v: number): string {
  return v.toLocaleString("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
}

function formatNumber(v: number): string {
  return v.toLocaleString("de-DE", { maximumFractionDigits: 0 });
}

function formatPercent(v: number): string {
  return v.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + " %";
}

export function RoiCalculator() {
  const [monthlyVisitors, setMonthlyVisitors] = useState(50000);
  const [conversionRate, setConversionRate] = useState(1.5);
  const [avgOrderValue, setAvgOrderValue] = useState(35);

  const results = useMemo(() => {
    const currentOrders = monthlyVisitors * (conversionRate / 100);
    const currentRevenue = currentOrders * avgOrderValue;

    let cumulativeCtr = 1.0;
    let cumulativeConversion = 1.0;

    for (const opt of optimizations) {
      cumulativeCtr *= opt.ctrMultiplier;
      cumulativeConversion *= opt.conversionMultiplier;
    }

    const newVisitors = monthlyVisitors * cumulativeCtr;
    const newConversionRate = conversionRate * cumulativeConversion;
    const newOrders = newVisitors * (newConversionRate / 100);
    const newRevenue = newOrders * avgOrderValue;

    const monthlyGain = newRevenue - currentRevenue;
    const yearlyGain = monthlyGain * 12;
    const investment = 10000;
    const roiMonths = monthlyGain > 0 ? investment / monthlyGain : Infinity;

    return {
      currentOrders,
      currentRevenue,
      newVisitors,
      newConversionRate,
      newOrders,
      newRevenue,
      monthlyGain,
      yearlyGain,
      investment,
      roiMonths,
    };
  }, [monthlyVisitors, conversionRate, avgOrderValue]);

  return (
    <section>
      <SectionTitle number="15." title="Interaktiver ROI-Rechner" />

      <p className="text-muted mb-6">
        Passe die Werte an eure tatsächlichen Zahlen an und sieh in Echtzeit,
        welchen Umsatz-Impact die vorgeschlagenen Maßnahmen haben.
      </p>

      {/* Input fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <NumberInput
          label="Monatliche Besucher"
          value={monthlyVisitors}
          onChange={setMonthlyVisitors}
          suffix="/ Monat"
          min={1000}
          max={1000000}
          step={1000}
        />
        <NumberInput
          label="Aktuelle Conversion-Rate"
          value={conversionRate}
          onChange={setConversionRate}
          suffix="%"
          min={0.1}
          max={20}
          step={0.1}
        />
        <NumberInput
          label="Ø Bestellwert"
          value={avgOrderValue}
          onChange={setAvgOrderValue}
          suffix="€"
          min={5}
          max={500}
          step={1}
        />
      </div>

      {/* Result bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <BarMetric
          label="Monatliche Besucher"
          currentValue={monthlyVisitors}
          newValue={results.newVisitors}
          format={(v) => formatNumber(v)}
          improvement={`+${formatNumber(results.newVisitors - monthlyVisitors)}`}
        />
        <BarMetric
          label="Conversion-Rate"
          currentValue={conversionRate}
          newValue={results.newConversionRate}
          format={(v) => formatPercent(v)}
          improvement={`+${formatPercent(results.newConversionRate - conversionRate)}`}
        />
        <BarMetric
          label="Bestellungen / Monat"
          currentValue={results.currentOrders}
          newValue={results.newOrders}
          format={(v) => formatNumber(v)}
          improvement={`+${formatNumber(results.newOrders - results.currentOrders)}`}
        />
        <BarMetric
          label="Monatlicher Umsatz"
          currentValue={results.currentRevenue}
          newValue={results.newRevenue}
          format={(v) => formatEuro(v)}
          improvement={`+${formatEuro(results.monthlyGain)}`}
        />
      </div>

      {/* Summary box */}
      <div className="bg-gradient-to-r from-success/10 to-success/5 border border-success/30 rounded-xl p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-muted text-sm mb-1">Zusätzlicher Umsatz / Monat</p>
            <p className="text-3xl font-extrabold text-success">{formatEuro(results.monthlyGain)}</p>
          </div>
          <div>
            <p className="text-muted text-sm mb-1">Zusätzlicher Umsatz / Jahr</p>
            <p className="text-3xl font-extrabold text-success">{formatEuro(results.yearlyGain)}</p>
          </div>
          <div>
            <p className="text-muted text-sm mb-1">Investition amortisiert nach</p>
            <p className="text-3xl font-extrabold text-accent">
              {results.roiMonths < 1
                ? "< 1 Monat"
                : results.roiMonths === Infinity
                  ? "–"
                  : `${results.roiMonths.toFixed(1)} Monaten`}
            </p>
          </div>
        </div>
      </div>

      {/* Per-optimization breakdown */}
      <h3 className="text-lg font-semibold mb-4">Auswirkung pro Maßnahme</h3>
      <div className="space-y-2 mb-6">
        {optimizations.map((opt) => {
          const totalMultiplier = opt.ctrMultiplier * opt.conversionMultiplier;
          const impactPct = (totalMultiplier - 1) * 100;
          return (
            <div key={opt.name} className="bg-card border border-border rounded-lg p-4 flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{opt.name}</p>
                <p className="text-xs text-muted">{opt.description}</p>
              </div>
              <div className="shrink-0 text-right">
                <span className="text-success font-bold text-lg">+{impactPct.toFixed(0)} %</span>
                <p className="text-xs text-muted">Umsatz-Impact</p>
              </div>
              <div className="w-24 shrink-0">
                <div className="h-2.5 bg-bg rounded-full overflow-hidden">
                  <div
                    className="h-full bg-success rounded-full"
                    style={{ width: `${Math.min(impactPct * 2, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <FindingBox type="info">
        <p className="font-semibold mb-1">Konservative Schätzung</p>
        <p className="text-sm">
          Diese Berechnung basiert auf konservativen Branchenwerten. Die tatsächlichen
          Ergebnisse können besser ausfallen – besonders bei einer Marke mit so starkem
          Produkt und 33.000+ positiven Bewertungen wie fitBAG.
        </p>
      </FindingBox>
    </section>
  );
}

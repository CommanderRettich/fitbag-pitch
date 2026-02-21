import { SectionTitle } from "@/components/ui/SectionTitle";
import { CardWrapper } from "@/components/ui/CardWrapper";

export function PriceSummary() {
  return (
    <section>
      <SectionTitle title="Investitionsübersicht" />

      <CardWrapper>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="bg-[#1a1a2e] text-white px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider rounded-tl-lg">
                  Phase
                </th>
                <th className="bg-[#1a1a2e] text-white px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                  Leistung
                </th>
                <th className="bg-[#1a1a2e] text-white px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider rounded-tr-lg">
                  Investition
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border bg-card">
                <td className="px-4 py-3 font-semibold">Phase 1</td>
                <td className="px-4 py-3">
                  Quick Wins & technische Basis
                  <br />
                  <span className="text-muted text-xs">Performance, SEO-Grundlagen, Sofort-Fixes</span>
                </td>
                <td className="px-4 py-3 text-right font-semibold whitespace-nowrap">2.500 € netto</td>
              </tr>
              <tr className="border-b border-border bg-card/50">
                <td className="px-4 py-3 font-semibold">Phase 2</td>
                <td className="px-4 py-3">
                  Konfigurator & Conversion
                  <br />
                  <span className="text-muted text-xs">Step-by-Step Wizard, Mobile-Optimierung, JTL-Anbindung</span>
                </td>
                <td className="px-4 py-3 text-right font-semibold whitespace-nowrap">7.500 € netto</td>
              </tr>
              <tr className="border-b border-border bg-card">
                <td className="px-4 py-3 font-semibold">Phase 3</td>
                <td className="px-4 py-3">
                  Laufende Betreuung
                  <br />
                  <span className="text-muted text-xs">Email-Marketing, SEO, Content, Monitoring</span>
                </td>
                <td className="px-4 py-3 text-right font-semibold whitespace-nowrap">750 €/Monat netto</td>
              </tr>
              <tr className="border-t-[3px] border-accent">
                <td className="px-4 pt-4 pb-3"></td>
                <td className="px-4 pt-4 pb-3 text-lg font-bold">Einmalig (Phase 1 + 2)</td>
                <td className="px-4 pt-4 pb-3 text-right text-lg font-bold text-accent whitespace-nowrap">
                  10.000 € netto
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardWrapper>

      <CardWrapper title="Zahlungsoptionen">
        <p className="mb-3">
          <strong>Option A – Phasenweise:</strong> Jede Phase einzeln beauftragen. Phase 1
          startet sofort, Phase 2 nach Abnahme von Phase 1.
        </p>
        <p className="mb-3">
          <strong>Option B – Gesamtpaket:</strong> Phase 1 + 2 zusammen beauftragen →{" "}
          <strong className="text-success">9.000 € statt 10.000 €</strong> (10% Rabatt).
          Phase 3 startet nach Abnahme.
        </p>
        <p className="mt-4 text-muted text-xs">
          Alle Preise zzgl. 19% MwSt. Zahlungsziel: 14 Tage nach Rechnungsstellung.
          Bei Phase 2: 50% bei Auftragserteilung, 50% bei Abnahme.
        </p>
      </CardWrapper>
    </section>
  );
}

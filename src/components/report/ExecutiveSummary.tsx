import { SectionTitle } from "@/components/ui/SectionTitle";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { ScoreCard } from "@/components/ui/ScoreCard";
import { CardWrapper } from "@/components/ui/CardWrapper";
import { MetricRow } from "@/components/ui/MetricRow";
import { FindingBox } from "@/components/ui/FindingBox";

export function ExecutiveSummary() {
  return (
    <section>
      <SectionTitle number="1." title="Executive Summary" />

      <p className="text-text/80 leading-relaxed mb-4">
        fitBAG ist eine deutsche Premium-Marke für maßgefertigte Handyhüllen mit über 20 Jahren
        Marktpräsenz, mehr als 1 Million verkaufter Produkte und einer außergewöhnlichen
        Kundenzufriedenheit (4,96/5 bei 33.059 Bewertungen). Trotz dieser beeindruckenden
        Produktqualität zeigt der digitale Auftritt erhebliche Schwächen, die das Wachstumspotenzial
        massiv einschränken.
      </p>

      <HighlightBox variant="primary" title="Kernaussage">
        <p>
          fitBAG verkauft ein <strong>9/10-Produkt</strong> über einen{" "}
          <strong>3,5/10-Onlineauftritt</strong>. Die Diskrepanz zwischen Produktqualität und
          digitaler Präsenz ist das zentrale Problem &ndash; und gleichzeitig die größte Chance.
          Bereits mit überschaubaren Maßnahmen lässt sich hier signifikantes Wachstum erzielen.
        </p>
      </HighlightBox>

      {/* Score Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-8">
        <ScoreCard label="Tech SEO" score="2/10" color="red" sublabel="Kritisch" />
        <ScoreCard label="On-Page SEO" score="3/10" color="red" sublabel="Schwach" />
        <ScoreCard label="Content & Brand" score="3/10" color="red" sublabel="Schwach" />
        <ScoreCard label="Social Media" score="2/10" color="red" sublabel="Kritisch" />
        <ScoreCard label="UX & Conversion" score="5,5/10" color="yellow" sublabel="Mittel" />
        <ScoreCard label="Backlinks" score="5/10" color="yellow" sublabel="Mittel" />
        <ScoreCard label="Wettbewerb" score="4/10" color="yellow" sublabel="Unterdurchschnittlich" />
        <ScoreCard label="Produktqualität" score="9/10" color="green" sublabel="Exzellent" />
        <ScoreCard label="Gesamt" score="3,5/10" color="red" sublabel="Dringender Handlungsbedarf" />
      </div>

      {/* Company Profile */}
      <SectionTitle number="2." title="Unternehmensprofil fitBAG" />

      <div className="grid md:grid-cols-2 gap-5">
        <CardWrapper title="Fakten">
          <MetricRow label="Inhaberin" value="Andrea Pfeil" />
          <MetricRow label="Gründung" value="2003" />
          <MetricRow label="Standort" value="Meinerzhagen (NRW)" />
          <MetricRow label="Verkaufte Produkte" value="1.000.000+" />
          <MetricRow label="Shop-System" value="JTL-Shop 5" />
          <MetricRow
            label="Bewertungen"
            value={<span className="text-success">4,96/5 (33.059 Reviews via Trustami)</span>}
          />
          <MetricRow label="Zahlungsarten" value="PayPal, Kreditkarte, Vorkasse, Sofort" />
          <MetricRow label="Versand" value="DHL, kostenlos ab Bestellwert" />
          <MetricRow label="Domain-Alter" value="22+ Jahre (seit 2003)" />
        </CardWrapper>

        <CardWrapper title="Produktportfolio & Preise">
          <MetricRow
            label="Beat (Echtleder)"
            value={<span className="font-bold text-accent">24,99 €</span>}
          />
          <MetricRow
            label="Classic (Alcantara)"
            value={<span className="font-bold text-accent">23,99 €</span>}
          />
          <MetricRow
            label="Twist (Nylon)"
            value={<span className="font-bold text-accent">19,99 €</span>}
          />
          <MetricRow
            label="Jive (Filz)"
            value={<span className="font-bold text-accent">19,99 €</span>}
          />
          <MetricRow label="Fertigungsschritte" value="17 pro Hülle" />
          <MetricRow label="Fertigung" value="Handgefertigt in Meinerzhagen" />
          <MetricRow label="Materialien" value="4 Kollektionen, 80+ Farben" />
          <MetricRow label="Geräte-Kompatibilität" value="Apple, Samsung, Google, Fairphone u.v.m." />
        </CardWrapper>
      </div>

      <FindingBox type="positive">
        <p className="font-semibold mb-1">Starke USPs vorhanden</p>
        <p className="text-sm">
          Made in Germany, 17 Fertigungsschritte, 22 Jahre Erfahrung, 33.000+ Bewertungen mit
          4,96/5 &ndash; diese Alleinstellungsmerkmale werden online kaum kommuniziert. Das ist die
          größte verpasste Chance im gesamten Audit.
        </p>
      </FindingBox>
    </section>
  );
}

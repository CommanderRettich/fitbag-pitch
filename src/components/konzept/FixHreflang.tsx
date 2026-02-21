import { CardWrapper } from "@/components/ui/CardWrapper";
import { FindingBox } from "@/components/ui/FindingBox";
import { MetricRow } from "@/components/ui/MetricRow";
import { StepGuide } from "@/components/ui/StepGuide";

export function FixHreflang() {
  return (
    <section>
      <CardWrapper title="Fix #3: Hreflang-Tags korrigieren">
        <FindingBox type="critical">
          <p className="font-semibold mb-1">Problem</p>
          <p className="text-sm">
            Hreflang-Tags sind inkonsistent. <code className="text-accent">hreflang=&quot;de&quot;</code> zeigt
            auf <code className="text-accent">/</code> statt <code className="text-accent">/de</code>.
            Folge: Englische Seiten ranken für deutsche Suchanfragen.
          </p>
        </FindingBox>

        <FindingBox type="warning">
          <p className="font-semibold mb-1">Impact</p>
          <p className="text-sm">
            Deutsche Kunden landen auf englischen Seiten → höhere Bounce Rate, weniger Conversions.
            Google kann die Sprachversionen nicht korrekt zuordnen und zeigt im schlimmsten Fall die
            falsche Sprachversion in den Suchergebnissen.
          </p>
        </FindingBox>

        <div className="my-4">
          <MetricRow label="Aufwand" value="1 Stunde" />
          <MetricRow label="Priorität" value={<span className="text-danger font-bold">Kritisch</span>} />
          <MetricRow label="Impact" value={<span className="text-success font-bold">Sehr Hoch</span>} />
        </div>

        <h4 className="text-base font-semibold mb-2 mt-6">Lösung</h4>
        <StepGuide
          steps={[
            {
              title: "Aktuelle Hreflang-Tags prüfen",
              description:
                "Im HTML-Quelltext nach <link rel='alternate' hreflang='...'> suchen und die aktuelle Zuordnung dokumentieren.",
            },
            {
              title: "Korrekte Hreflang-Tags setzen",
              description:
                "Jede Sprachversion muss auf die korrekte URL zeigen. x-default definiert die Fallback-Sprache.",
              code: `<link rel="alternate" hreflang="de" href="https://www.fitbag.com/de" />
<link rel="alternate" hreflang="en" href="https://www.fitbag.com/en" />
<link rel="alternate" hreflang="x-default" href="https://www.fitbag.com/en" />`,
            },
            {
              title: "In allen Templates und Seitentypen umsetzen",
              description:
                "Nicht nur auf der Startseite, sondern auf ALLEN Seiten – Produktseiten, Kategorien, Blog. Am besten im Template-Header zentral.",
            },
            {
              title: "Google Search Console prüfen",
              description:
                "URL-Prüfung → Hreflang-Bericht kontrollieren. Hier zeigt Google Fehler und Warnungen zu den Hreflang-Tags an.",
            },
          ]}
        />
      </CardWrapper>
    </section>
  );
}

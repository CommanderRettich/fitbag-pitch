import { CardWrapper } from "@/components/ui/CardWrapper";
import { FindingBox } from "@/components/ui/FindingBox";
import { MetricRow } from "@/components/ui/MetricRow";
import { StepGuide } from "@/components/ui/StepGuide";

export function FixH1() {
  return (
    <section>
      <CardWrapper title="Fix #2: H1-Tag auf Startseite">
        <FindingBox type="critical">
          <p className="font-semibold mb-1">Problem</p>
          <p className="text-sm">
            Die Startseite hat <strong>kein H1-Tag</strong>. Google weiß nicht, worum es auf der
            Seite geht.
          </p>
        </FindingBox>

        <FindingBox type="warning">
          <p className="font-semibold mb-1">Impact</p>
          <p className="text-sm">
            Ohne H1 fehlt Google das wichtigste Signal für das Hauptthema der Seite. Die Startseite
            kann dadurch für zentrale Keywords wie &bdquo;maßgefertigte Handytaschen&ldquo; nicht
            optimal ranken.
          </p>
        </FindingBox>

        <div className="my-4">
          <MetricRow label="Aufwand" value="15 Minuten" />
          <MetricRow label="Priorität" value={<span className="text-danger font-bold">Hoch</span>} />
          <MetricRow label="Impact" value={<span className="text-success font-bold">Mittel</span>} />
        </div>

        <h4 className="text-base font-semibold mb-2 mt-6">Lösung</h4>
        <StepGuide
          steps={[
            {
              title: "Im JTL-Shop Template die Startseite bearbeiten",
              description: "Im AVIA-Template den Hero-Bereich finden.",
            },
            {
              title: "H1-Tag setzen",
              description:
                "Enthält das Hauptkeyword 'Maßgefertigte Handytaschen' + Brand-Signal 'Made in Germany' + Trust-Signal '2003'.",
              code: `<h1>Maßgefertigte Handytaschen & Schutzhüllen – Made in Germany seit 2003</h1>`,
            },
            {
              title: "Sicherstellen, dass nur ein H1 pro Seite existiert",
              description:
                "Alle anderen Überschriften auf der Startseite müssen H2, H3 etc. sein. Nie mehr als ein H1 pro Seite.",
            },
          ]}
        />
      </CardWrapper>
    </section>
  );
}

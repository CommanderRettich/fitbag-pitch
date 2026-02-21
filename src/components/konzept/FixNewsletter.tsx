import { CardWrapper } from "@/components/ui/CardWrapper";
import { FindingBox } from "@/components/ui/FindingBox";
import { MetricRow } from "@/components/ui/MetricRow";
import { StepGuide } from "@/components/ui/StepGuide";

export function FixNewsletter() {
  return (
    <section>
      <CardWrapper title="Fix #6: Newsletter-Popup optimieren">
        <FindingBox type="critical">
          <p className="font-semibold mb-1">Problem</p>
          <p className="text-sm">
            Popup erscheint <strong>sofort beim ersten Besuch</strong>, blockiert den gesamten
            Viewport. Auf Mobile schwer zu schließen.
          </p>
        </FindingBox>

        <FindingBox type="warning">
          <p className="font-semibold mb-1">Impact</p>
          <p className="text-sm">
            Sofortige Popups erhöhen die Bounce Rate um{" "}
            <strong>15&ndash;25%</strong>. Google wertet aggressive Interstitials negativ &ndash;
            das kostet Rankings und Conversions gleichzeitig.
          </p>
        </FindingBox>

        <div className="my-4">
          <MetricRow label="Aufwand" value="1–2 Stunden" />
          <MetricRow label="Priorität" value={<span className="text-danger font-bold">Hoch</span>} />
          <MetricRow label="Impact" value={<span className="text-success font-bold">Hoch</span>} />
        </div>

        <h4 className="text-base font-semibold mb-2 mt-6">Lösung</h4>
        <StepGuide
          steps={[
            {
              title: "Popup-Trigger ändern",
              description:
                "Statt 'sofort bei Seitenaufruf': erst nach 30 Sekunden ODER nach 50% Scroll-Tiefe – je nachdem was zuerst eintritt.",
            },
            {
              title: "Exit-Intent statt Sofort-Popup",
              description:
                "Auf Desktop: Popup zeigen wenn die Maus Richtung Browser-Leiste bewegt wird (Exit Intent). Auf Mobile: nach 60 Sekunden.",
            },
            {
              title: "Frequency Cap setzen",
              description:
                "Popup maximal 1x pro Woche pro Besucher zeigen. Cookie setzen nach dem Schließen.",
            },
            {
              title: "Mobile-freundlich gestalten",
              description:
                "Maximal 50% des Viewports benutzen. Großer, gut sichtbarer Schließen-Button. Kein Layout-Shift.",
            },
          ]}
        />
      </CardWrapper>
    </section>
  );
}

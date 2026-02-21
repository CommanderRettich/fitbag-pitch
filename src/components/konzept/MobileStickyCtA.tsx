import { CardWrapper } from "@/components/ui/CardWrapper";
import { FindingBox } from "@/components/ui/FindingBox";
import { MetricRow } from "@/components/ui/MetricRow";
import { StepGuide } from "@/components/ui/StepGuide";

export function MobileStickyCtA() {
  return (
    <section>
      <CardWrapper title="Fix #7: Sticky CTA-Button für Mobile">
        <FindingBox type="critical">
          <p className="font-semibold mb-1">Problem</p>
          <p className="text-sm">
            Auf dem Smartphone muss der User durch den gesamten Konfigurator scrollen um{" "}
            <strong>&bdquo;In den Warenkorb&ldquo;</strong> zu erreichen.
          </p>
        </FindingBox>

        <FindingBox type="warning">
          <p className="font-semibold mb-1">Impact</p>
          <p className="text-sm">
            Fehlender Sticky CTA kostet geschätzt{" "}
            <strong>10&ndash;15% Mobile Conversion</strong>. Bei einem steigenden Mobile-Anteil
            ist das ein erheblicher Umsatzverlust.
          </p>
        </FindingBox>

        <div className="my-4">
          <MetricRow label="Aufwand" value="2–4 Stunden" />
          <MetricRow label="Priorität" value={<span className="text-danger font-bold">Hoch</span>} />
          <MetricRow label="Impact" value={<span className="text-success font-bold">Sehr Hoch</span>} />
        </div>

        <h4 className="text-base font-semibold mb-2 mt-6">Lösung</h4>
        <StepGuide
          steps={[
            {
              title: "Sticky Bar am unteren Bildschirmrand",
              description:
                "Fixierter Balken der beim Scrollen immer sichtbar bleibt. Nur auf Mobile, verschwindet auf Desktop.",
              code: `.sticky-cta {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #1a1a2e;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -4px 20px rgba(0,0,0,0.3);
  z-index: 999;
}

@media (min-width: 768px) {
  .sticky-cta { display: none; }
}`,
            },
            {
              title: "Live-Preis anzeigen",
              description:
                "Der Sticky Bar zeigt den aktuellen Gesamtpreis und einen 'In den Warenkorb'-Button. Preis aktualisiert sich bei jeder Konfigurationsänderung.",
            },
            {
              title: "Nur auf Produktseiten anzeigen",
              description:
                "Der Sticky CTA erscheint nur auf Produktseiten mit Konfigurator, nicht auf Kategorie- oder Infoseiten.",
            },
          ]}
        />
      </CardWrapper>
    </section>
  );
}

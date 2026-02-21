import { CardWrapper } from "@/components/ui/CardWrapper";
import { FindingBox } from "@/components/ui/FindingBox";
import { MetricRow } from "@/components/ui/MetricRow";
import { StepGuide } from "@/components/ui/StepGuide";

export function WebPConversion() {
  return (
    <section>
      <CardWrapper title="Fix #5: WebP-Bildformat einführen">
        <FindingBox type="critical">
          <p className="font-semibold mb-1">Problem</p>
          <p className="text-sm">
            91 von 93 Bildern sind JPG. <strong>9,44 MB auf der Startseite</strong>. Nur 2 Bilder
            nutzen WebP.
          </p>
        </FindingBox>

        <FindingBox type="warning">
          <p className="font-semibold mb-1">Impact</p>
          <p className="text-sm">
            WebP reduziert Bildgrößen um <strong>60&ndash;70%</strong>. Das bedeutet: Startseite
            von 9,4 MB auf <strong className="text-success">~3 MB</strong> &ndash; fast dreimal so
            schnell.
          </p>
        </FindingBox>

        <div className="my-4">
          <MetricRow label="Aufwand" value="2 Stunden" />
          <MetricRow label="Priorität" value={<span className="text-danger font-bold">Hoch</span>} />
          <MetricRow label="Impact" value={<span className="text-success font-bold">Sehr Hoch</span>} />
        </div>

        <h4 className="text-base font-semibold mb-2 mt-6">Lösung</h4>
        <StepGuide
          steps={[
            {
              title: "JTL WebP-Plugin installieren",
              description:
                "Im JTL-Extension-Store nach 'WebP' suchen. Kostet ca. 129 € einmalig. Konvertiert alle Bilder automatisch.",
            },
            {
              title: "Plugin konfigurieren",
              description:
                "Qualität auf 80–85% setzen (optimales Verhältnis Größe/Qualität). Automatische Konvertierung beim Upload aktivieren.",
            },
            {
              title: "Bestehende Bilder konvertieren",
              description:
                "Das Plugin bietet eine Bulk-Konvertierung für alle vorhandenen Bilder. Das kann je nach Bildanzahl 30–60 Minuten dauern.",
            },
            {
              title: "Fallback prüfen",
              description:
                "Das Plugin liefert automatisch JPG an alte Browser die kein WebP unterstützen (Safari < 14, IE11).",
            },
          ]}
        />
      </CardWrapper>
    </section>
  );
}

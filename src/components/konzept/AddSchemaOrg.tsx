import { CardWrapper } from "@/components/ui/CardWrapper";
import { FindingBox } from "@/components/ui/FindingBox";
import { MetricRow } from "@/components/ui/MetricRow";
import { StepGuide } from "@/components/ui/StepGuide";

export function AddSchemaOrg() {
  return (
    <section>
      <CardWrapper title="Fix #4: Schema.org für Rich Snippets">
        <FindingBox type="critical">
          <p className="font-semibold mb-1">Problem</p>
          <p className="text-sm">
            33.000+ Bewertungen mit 4,96 Sternen &ndash; aber{" "}
            <strong>keine goldenen Sterne in Google</strong>. Das strukturierte Daten-Markup
            (Schema.org) fehlt komplett.
          </p>
        </FindingBox>

        <FindingBox type="warning">
          <p className="font-semibold mb-1">Impact</p>
          <p className="text-sm">
            Rich Snippets erhöhen die Click-Through-Rate um{" "}
            <strong>20&ndash;35%</strong>. Bei geschätzt 50.000 monatlichen Impressions ={" "}
            <strong className="text-success">10.000&ndash;17.500 zusätzliche Klicks/Monat</strong>.
          </p>
        </FindingBox>

        <div className="my-4">
          <MetricRow label="Aufwand" value="2–4 Stunden" />
          <MetricRow label="Priorität" value={<span className="text-danger font-bold">Kritisch</span>} />
          <MetricRow label="Impact" value={<span className="text-success font-bold">Sehr Hoch</span>} />
        </div>

        <h4 className="text-base font-semibold mb-2 mt-6">Lösung</h4>
        <StepGuide
          steps={[
            {
              title: "JSON-LD Block erstellen",
              description:
                "Strukturierte Daten im JSON-LD Format für die Organisation und die Gesamtbewertung.",
              code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "fitBAG",
  "url": "https://www.fitbag.com",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.96",
    "reviewCount": "33059",
    "bestRating": "5"
  }
}
</script>`,
            },
            {
              title: "In den Template-Header einfügen",
              description:
                "Im JTL-Shop unter 'Template bearbeiten' → Header-Bereich → vor </head>.",
            },
            {
              title: "Produktseiten mit Product-Schema erweitern",
              description:
                "Für jede Produktseite: Product-Schema mit Name, Price, Availability, Reviews. JTL hat hierfür ggf. Plugins.",
            },
            {
              title: "Mit Google Rich Results Test validieren",
              description:
                "https://search.google.com/test/rich-results → URL eingeben → prüfen ob Sterne angezeigt werden.",
            },
          ]}
        />
      </CardWrapper>
    </section>
  );
}

import { SectionTitle } from "@/components/ui/SectionTitle";
import { DataTable } from "@/components/ui/DataTable";
import { FindingBox } from "@/components/ui/FindingBox";
import { CardWrapper } from "@/components/ui/CardWrapper";
import { MetricRow } from "@/components/ui/MetricRow";

export function SeoAnalysis() {
  return (
    <section>
      <SectionTitle number="4." title="SEO-Analyse & Keyword-Rankings" />

      <p className="text-text/80 leading-relaxed mb-4">
        Die aktuelle Keyword-Situation offenbart ein schwerwiegendes hreflang-Problem: Englische
        Seiten ranken für deutsche Suchanfragen und kannibalisieren so die eigenen Rankings.
      </p>

      <DataTable
        headers={["Keyword", "Position", "URL die rankt", "Problem"]}
        rows={[
          [
            "handyhülle leder",
            "42",
            "/en/leather-phone-case",
            <span key="k1" className="text-danger">EN-Seite rankt für DE-Suche</span>,
          ],
          [
            "handytasche maßanfertigung",
            "38",
            "/en/custom-phone-sleeve",
            <span key="k2" className="text-danger">EN-Seite rankt für DE-Suche</span>,
          ],
          [
            "fitbag handyhülle",
            "3",
            "/de/",
            <span key="k3" className="text-success">Korrekt (Marken-Keyword)</span>,
          ],
          [
            "handyhülle filz",
            "55+",
            "Nicht in Top 100",
            <span key="k4" className="text-danger">Nicht sichtbar</span>,
          ],
          [
            "handyhülle alcantara",
            "28",
            "/en/alcantara-sleeve",
            <span key="k5" className="text-danger">EN-Seite rankt für DE-Suche</span>,
          ],
          [
            "handyhülle made in germany",
            "55+",
            "Nicht in Top 100",
            <span key="k6" className="text-danger">Größte verpasste Chance</span>,
          ],
          [
            "samsung galaxy hülle leder",
            "55+",
            "Nicht in Top 100",
            <span key="k7" className="text-danger">Kein Long-Tail-Content</span>,
          ],
          [
            "iphone hülle maßgefertigt",
            "55+",
            "Nicht in Top 100",
            <span key="k8" className="text-danger">Kein Long-Tail-Content</span>,
          ],
        ]}
      />

      <FindingBox type="critical">
        <p className="font-semibold mb-1">Hreflang-Problem: Englische Seiten ranken für deutsche Suchanfragen</p>
        <p className="text-sm">
          Google zeigt die englischen Versionen der Seiten für deutschsprachige Nutzer an. Das führt
          dazu, dass potenzielle Kunden auf einer englischsprachigen Seite landen und sofort
          abspringen. Die hreflang-Tags sind inkonsistent implementiert und müssen dringend
          korrigiert werden.
        </p>
      </FindingBox>

      <h3 className="text-lg font-semibold mt-8 mb-3">Robots.txt & Sitemap</h3>

      <CardWrapper>
        <MetricRow
          label="Robots.txt"
          value={<span className="text-success">Vorhanden</span>}
        />
        <MetricRow
          label="Crawl-Delay"
          value={<span className="text-danger">5 Sekunden (zu hoch!)</span>}
        />
        <MetricRow
          label="XML-Sitemap"
          value={<span className="text-success">Vorhanden</span>}
        />
        <MetricRow
          label="Sitemap-Einträge"
          value={<span className="text-warning">~320 URLs</span>}
        />
        <MetricRow
          label="Indexierte Seiten (Google)"
          value={<span className="text-warning">~280 (von ~320)</span>}
        />
      </CardWrapper>

      <FindingBox type="warning">
        <p className="font-semibold mb-1">Crawl-Delay von 5 Sekunden bremst die Indexierung</p>
        <p className="text-sm">
          Ein Crawl-Delay von 5 Sekunden bedeutet, dass Google maximal 12 Seiten pro Minute crawlen
          kann. Bei ~320 URLs dauert ein vollständiger Crawl über 26 Minuten. Für eine kleine
          Website dieser Größe ist kein Crawl-Delay nötig &ndash; er sollte entfernt oder auf 1
          Sekunde reduziert werden.
        </p>
      </FindingBox>
    </section>
  );
}

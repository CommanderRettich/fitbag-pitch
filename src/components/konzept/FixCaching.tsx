import { CardWrapper } from "@/components/ui/CardWrapper";
import { FindingBox } from "@/components/ui/FindingBox";
import { MetricRow } from "@/components/ui/MetricRow";
import { StepGuide } from "@/components/ui/StepGuide";

export function FixCaching() {
  return (
    <section>
      <CardWrapper title="Fix #1: Browser-Caching aktivieren">
        <FindingBox type="critical">
          <p className="font-semibold mb-1">Problem</p>
          <p className="text-sm">
            Der Server sendet <code className="text-accent">Cache-Control: no-store, no-cache,
            must-revalidate</code> &ndash; das verhindert jegliches Browser-Caching komplett.
          </p>
        </FindingBox>

        <FindingBox type="warning">
          <p className="font-semibold mb-1">Impact</p>
          <p className="text-sm">
            Bei jedem Seitenaufruf werden <strong>alle</strong> Assets komplett neu heruntergeladen.
            Bei einer Startseite mit 9,4 MB Bildern bedeutet das{" "}
            <strong>15+ Sekunden Ladezeit</strong> für wiederkehrende Besucher &ndash; obwohl diese
            Bilder bereits im Browser liegen könnten.
          </p>
        </FindingBox>

        <div className="my-4">
          <MetricRow label="Aufwand" value="1 Stunde" />
          <MetricRow label="Priorität" value={<span className="text-danger font-bold">Kritisch</span>} />
          <MetricRow label="Impact" value={<span className="text-success font-bold">Hoch</span>} />
        </div>

        <h4 className="text-base font-semibold mb-2 mt-6">Lösung</h4>
        <StepGuide
          steps={[
            {
              title: "LiteSpeed Cache Plugin im JTL-Shop aktivieren",
              description:
                "Das Plugin ist bereits auf dem Server verfügbar (LiteSpeed Webserver). Es muss nur konfiguriert werden.",
            },
            {
              title: "Cache-Regeln konfigurieren",
              description:
                "Statische Assets wie Bilder, CSS und JavaScript mit langen Cache-Zeiten versehen.",
              code: `# .htaccess Ergänzung
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>`,
            },
            {
              title: "Testen mit Chrome DevTools",
              description:
                "Network Tab öffnen → Seite zweimal laden → beim zweiten Mal müssen Bilder aus dem Cache kommen (Status 304 oder 'from cache').",
            },
          ]}
        />
      </CardWrapper>
    </section>
  );
}

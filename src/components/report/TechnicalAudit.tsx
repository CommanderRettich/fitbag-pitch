import { SectionTitle } from "@/components/ui/SectionTitle";
import { DataTable } from "@/components/ui/DataTable";
import { FindingBox } from "@/components/ui/FindingBox";
import { CardWrapper } from "@/components/ui/CardWrapper";
import { MetricRow } from "@/components/ui/MetricRow";

export function TechnicalAudit() {
  return (
    <section>
      <SectionTitle number="3." title="Technisches Audit & Performance" />

      {/* 3.1 Server & Performance */}
      <h3 className="text-lg font-semibold mt-8 mb-3">3.1 Server & Performance</h3>

      <DataTable
        headers={["Metrik", "Wert", "Bewertung"]}
        rows={[
          [
            "TTFB (Time to First Byte)",
            "640–850 ms",
            <span key="ttfb" className="text-warning">Langsam (Ziel: &lt;200 ms)</span>,
          ],
          [
            "DOM Content Loaded",
            "2,1–2,8 s",
            <span key="dom" className="text-warning">Akzeptabel</span>,
          ],
          [
            "Page Load (komplett)",
            "4,5–6,2 s",
            <span key="load" className="text-danger">Zu langsam</span>,
          ],
          [
            "HTML-Größe",
            "~45 KB",
            <span key="html" className="text-success">OK</span>,
          ],
          [
            "Bilder gesamt",
            "9,44 MB (93 Bilder)",
            <span key="img" className="text-danger">Viel zu groß</span>,
          ],
          [
            "WebP-Nutzung",
            "2 von 93 Bildern",
            <span key="webp" className="text-danger">Kaum vorhanden</span>,
          ],
          [
            "Lazy Loading",
            "Nicht implementiert",
            <span key="lazy" className="text-danger">Fehlt</span>,
          ],
          [
            "Cache-Control",
            "no-cache",
            <span key="cache" className="text-danger">Kein Browser-Caching</span>,
          ],
          [
            "Gzip/Brotli",
            "Gzip aktiv",
            <span key="gzip" className="text-success">OK</span>,
          ],
          [
            "HTTP/2",
            "Aktiv",
            <span key="http2" className="text-success">OK</span>,
          ],
        ]}
      />

      <FindingBox type="critical">
        <p className="font-semibold mb-1">Kein Browser-Caching konfiguriert</p>
        <p className="text-sm">
          Der Header <code className="bg-white/10 px-1 rounded">Cache-Control: no-cache</code> sorgt
          dafür, dass bei jedem Seitenaufruf alle 9,44 MB Bilder neu geladen werden. Das
          verschlechtert die Ladezeit massiv und erhöht die Serverkosten unnötig. Nur 2 von 93
          Bildern nutzen das moderne WebP-Format.
        </p>
      </FindingBox>

      {/* 3.2 SEO Basics */}
      <h3 className="text-lg font-semibold mt-8 mb-3">3.2 SEO-Grundlagen (On-Page)</h3>

      <DataTable
        headers={["Element", "Status", "Bewertung"]}
        rows={[
          [
            "Title Tag",
            "\"fitBAG - individuelle Handytasche aus Deutschland\"",
            <span key="title" className="text-warning">Zu generisch, kein Keyword-Fokus</span>,
          ],
          [
            "Meta Description",
            "Vorhanden, ~140 Zeichen",
            <span key="meta" className="text-warning">Schwach, kein Call-to-Action</span>,
          ],
          [
            "H1-Tag",
            "FEHLT auf der Startseite",
            <span key="h1" className="text-danger">Kritisch</span>,
          ],
          [
            "H2-Tags",
            "Vorhanden, aber nicht keywordoptimiert",
            <span key="h2" className="text-warning">Verbesserungswürdig</span>,
          ],
          [
            "Schema.org / Structured Data",
            "FEHLT komplett",
            <span key="schema" className="text-danger">Kritisch</span>,
          ],
          [
            "Open Graph Tags",
            "Basis vorhanden",
            <span key="og" className="text-warning">Unvollständig</span>,
          ],
          [
            "Canonical Tags",
            "Vorhanden",
            <span key="canonical" className="text-success">OK</span>,
          ],
          [
            "Hreflang",
            "de-DE &amp; en-US implementiert",
            <span key="hreflang" className="text-danger">Inkonsistent, EN-Seiten ranken für DE</span>,
          ],
          [
            "Alt-Texte (Bilder)",
            "Teilweise vorhanden",
            <span key="alt" className="text-warning">Unvollständig</span>,
          ],
          [
            "Interne Verlinkung",
            "Schwach",
            <span key="internal" className="text-danger">Kaum Struktur</span>,
          ],
        ]}
      />

      <FindingBox type="critical">
        <p className="font-semibold mb-1">33.000+ Bewertungen ohne Rich Snippets</p>
        <p className="text-sm">
          fitBAG hat eine der besten Bewertungen im gesamten Handyhüllen-Markt (4,96/5), aber
          durch fehlende Schema.org-Auszeichnung werden diese Sterne in den Google-Suchergebnissen
          nicht angezeigt. Das ist wie ein Michelin-Stern-Restaurant ohne Schild an der Tür.
        </p>
      </FindingBox>

      {/* 3.3 Security Headers */}
      <h3 className="text-lg font-semibold mt-8 mb-3">3.3 Sicherheits-Header</h3>

      <DataTable
        headers={["Header", "Status", "Risiko"]}
        rows={[
          [
            "HTTPS",
            <span key="https" className="text-success">Aktiv (SSL/TLS)</span>,
            "Kein Risiko",
          ],
          [
            "HSTS",
            <span key="hsts" className="text-danger">Fehlt</span>,
            "Mittel",
          ],
          [
            "X-Content-Type-Options",
            <span key="xcto" className="text-danger">Fehlt</span>,
            "Niedrig",
          ],
          [
            "X-Frame-Options",
            <span key="xfo" className="text-danger">Fehlt</span>,
            "Mittel (Clickjacking)",
          ],
          [
            "Content-Security-Policy",
            <span key="csp" className="text-danger">Fehlt</span>,
            "Hoch (XSS-Schutz)",
          ],
          [
            "Referrer-Policy",
            <span key="ref" className="text-danger">Fehlt</span>,
            "Niedrig",
          ],
          [
            "Permissions-Policy",
            <span key="perm" className="text-danger">Fehlt</span>,
            "Niedrig",
          ],
        ]}
      />

      {/* 3.4 Tracking & Consent */}
      <h3 className="text-lg font-semibold mt-8 mb-3">3.4 Tracking & Consent</h3>

      <CardWrapper>
        <MetricRow
          label="Cookie-Banner"
          value={<span className="text-success">Vorhanden (CookieFirst)</span>}
        />
        <MetricRow
          label="Google Analytics"
          value={<span className="text-success">GA4 implementiert</span>}
        />
        <MetricRow
          label="Google Tag Manager"
          value={<span className="text-success">Aktiv</span>}
        />
        <MetricRow
          label="Consent-Modus"
          value={<span className="text-success">Google Consent Mode v2</span>}
        />
        <MetricRow
          label="Facebook Pixel"
          value={<span className="text-warning">Nicht erkannt</span>}
        />
        <MetricRow
          label="Server-Side Tracking"
          value={<span className="text-warning">Nicht implementiert</span>}
        />
      </CardWrapper>

      <FindingBox type="positive">
        <p className="font-semibold mb-1">Consent-Implementierung vorbildlich</p>
        <p className="text-sm">
          CookieFirst mit Google Consent Mode v2 ist eine solide, DSGVO-konforme Lösung. Dies ist
          einer der wenigen Bereiche, in denen fitBAG technisch gut aufgestellt ist.
        </p>
      </FindingBox>
    </section>
  );
}

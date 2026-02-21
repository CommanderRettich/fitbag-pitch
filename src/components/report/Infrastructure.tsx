import { SectionTitle } from "@/components/ui/SectionTitle";
import { DataTable } from "@/components/ui/DataTable";
import { FindingBox } from "@/components/ui/FindingBox";

export function Infrastructure() {
  return (
    <section>
      <SectionTitle number="16." title="Infrastruktur-Empfehlungen" />

      <FindingBox type="info">
        <p className="font-semibold mb-1">Pragmatischer Ansatz: JTL-Shop optimieren statt ersetzen</p>
        <p className="text-sm">
          Ein vollständiger Relaunch auf ein neues Shopsystem wäre teuer (20.000&ndash;50.000 €)
          und riskant. Der pragmatischere Weg: Den bestehenden JTL-Shop 5 gezielt optimieren
          und parallel eine Content-Subdomain aufbauen. So bleiben die bestehenden Prozesse
          (Warenwirtschaft, Fulfillment) intakt.
        </p>
      </FindingBox>

      <h3 className="text-lg font-semibold mt-8 mb-3">JTL-Shop Optimierungen (kurzfristig)</h3>

      <DataTable
        headers={["Maßnahme", "Aufwand", "Auswirkung", "Priorität"]}
        rows={[
          [
            "Cache-Control-Header aktivieren",
            "1–2 Stunden",
            "Drastisch bessere Ladezeit für Wiederkäufer",
            <span key="j1" className="text-danger font-bold">Sofort</span>,
          ],
          [
            "Bilder in WebP konvertieren",
            "1 Tag (automatisiert)",
            "~70 % weniger Bildgröße",
            <span key="j2" className="text-danger font-bold">Sofort</span>,
          ],
          [
            "Lazy Loading implementieren",
            "2–4 Stunden (JTL-Plugin)",
            "Schnellerer First Paint",
            <span key="j3" className="text-danger font-bold">Sofort</span>,
          ],
          [
            "Schema.org-Markup ergänzen",
            "1–2 Tage",
            "Rich Snippets in Google",
            <span key="j4" className="text-danger font-bold">Sofort</span>,
          ],
          [
            "Hreflang-Tags korrigieren",
            "2–4 Stunden",
            "DE-Seiten ranken für DE-Suchen",
            <span key="j5" className="text-danger font-bold">Sofort</span>,
          ],
          [
            "Security-Header hinzufügen",
            "1–2 Stunden (.htaccess)",
            "Bessere Sicherheit, leichtes SEO-Signal",
            <span key="j6" className="text-warning font-bold">Woche 1–2</span>,
          ],
          [
            "H1-Tags auf allen Seiten prüfen",
            "2–3 Stunden",
            "SEO-Grundstruktur",
            <span key="j7" className="text-warning font-bold">Woche 1–2</span>,
          ],
          [
            "Bewertungs-Widget auf Produktseiten",
            "1–2 Tage (JTL-Plugin/Widget)",
            "Social Proof direkt am Produkt",
            <span key="j8" className="text-warning font-bold">Woche 2–3</span>,
          ],
          [
            "Sticky Add-to-Cart (Mobile)",
            "4–8 Stunden (CSS/JS)",
            "Höhere mobile Conversion",
            <span key="j9" className="text-warning font-bold">Woche 2–3</span>,
          ],
          [
            "USP-Leiste im Header",
            "2–4 Stunden",
            "Sofortiger Trust-Boost",
            <span key="j10" className="text-warning font-bold">Woche 1</span>,
          ],
        ]}
      />

      <h3 className="text-lg font-semibold mt-8 mb-3">Langfristige Subdomain-Strategie</h3>

      <DataTable
        headers={["Subdomain", "Zweck", "Technologie", "Zeitrahmen"]}
        rows={[
          [
            "fitbag.de (Haupt-Shop)",
            "E-Commerce & Konfigurator",
            "JTL-Shop 5 (optimiert)",
            "Laufend",
          ],
          [
            "stories.fitbag.de",
            "Blog, Gründer-Story, Content-Hub",
            "Next.js / WordPress",
            "Phase 2 (Monat 2–3)",
          ],
          [
            "help.fitbag.de",
            "FAQ, Materialguide, Pflegetipps",
            "Next.js / Notion",
            "Phase 3 (Monat 4–5)",
          ],
          [
            "corporate.fitbag.de",
            "B2B-Landingpage für Firmenkunden",
            "Next.js",
            "Phase 4 (ab Monat 6)",
          ],
        ]}
      />

      <FindingBox type="info">
        <p className="font-semibold mb-1">Warum Subdomains statt Unterseiten?</p>
        <p className="text-sm">
          Der JTL-Shop ist auf E-Commerce optimiert, nicht auf Content-Marketing. Subdomains
          ermöglichen es, moderne, schnelle Content-Seiten zu betreiben, ohne den Shop
          anzufassen. Die Domain Authority von fitbag.de wird durch Subdomains gestärkt, nicht
          geschwächt &ndash; solange die interne Verlinkung stimmt.
        </p>
      </FindingBox>
    </section>
  );
}

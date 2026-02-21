import { SectionTitle } from "@/components/ui/SectionTitle";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { DataTable } from "@/components/ui/DataTable";

export function RoiCalculation() {
  return (
    <section>
      <SectionTitle number="13." title="ROI-Berechnung & Quick Wins" />

      <HighlightBox variant="success" title="Die 5 schnellsten ROI-Maßnahmen">
        <p>
          Diese Maßnahmen haben das beste Verhältnis von Aufwand zu Ertrag und können
          innerhalb von 4&ndash;8 Wochen umgesetzt werden:
        </p>
      </HighlightBox>

      <DataTable
        headers={["#", "Maßnahme", "Investition", "Geschätzter ROI", "Zeitrahmen"]}
        rows={[
          [
            "1",
            "Schema.org / Rich Snippets implementieren",
            "500–1.000 €",
            <span key="r1" className="text-success font-bold">+15–25 % CTR in Google</span>,
            "1–2 Wochen",
          ],
          [
            "2",
            "Bilder optimieren (WebP + Lazy Loading)",
            "300–500 €",
            <span key="r2" className="text-success font-bold">-50 % Ladezeit, -20 % Bounce</span>,
            "1 Woche",
          ],
          [
            "3",
            "Hreflang korrigieren",
            "200–400 €",
            <span key="r3" className="text-success font-bold">+30–50 % DE-Traffic</span>,
            "1 Woche",
          ],
          [
            "4",
            "Bewertungen auf Produktseiten einbinden",
            "500–800 €",
            <span key="r4" className="text-success font-bold">+15–25 % Conversion</span>,
            "2–3 Wochen",
          ],
          [
            "5",
            "Post-Purchase-Email-Flow",
            "300–600 €",
            <span key="r5" className="text-success font-bold">+10–20 % Wiederkäufer</span>,
            "2–4 Wochen",
          ],
        ]}
      />

      <h3 className="text-lg font-semibold mt-8 mb-3">Sofort umsetzbare Maßnahmen (ohne Entwickler)</h3>

      <DataTable
        headers={["#", "Maßnahme", "Aufwand", "Wirkung"]}
        rows={[
          [
            "1",
            "H1-Tag auf Startseite ergänzen",
            "5 Minuten",
            <span key="s1" className="text-success">SEO-Grundlage</span>,
          ],
          [
            "2",
            "Meta-Description mit CTA umschreiben",
            "10 Minuten",
            <span key="s2" className="text-success">Höhere CTR in Google</span>,
          ],
          [
            "3",
            "\"Made in Germany\"-Badge auf Produktseiten",
            "30 Minuten",
            <span key="s3" className="text-success">Sofortiger Trust-Boost</span>,
          ],
          [
            "4",
            "\"1 Mio. verkauft\"-Badge im Header",
            "15 Minuten",
            <span key="s4" className="text-success">Social Proof</span>,
          ],
          [
            "5",
            "Crawl-Delay in robots.txt auf 1s setzen",
            "2 Minuten",
            <span key="s5" className="text-success">Schnellere Indexierung</span>,
          ],
          [
            "6",
            "Alt-Texte für Top-20-Bilder ergänzen",
            "1 Stunde",
            <span key="s6" className="text-success">Bild-SEO + Barrierefreiheit</span>,
          ],
          [
            "7",
            "Google Business Profil vervollständigen",
            "30 Minuten",
            <span key="s7" className="text-success">Lokale Sichtbarkeit</span>,
          ],
          [
            "8",
            "Social-Media-Links im Footer aktualisieren",
            "10 Minuten",
            <span key="s8" className="text-warning">Hygiene-Faktor</span>,
          ],
          [
            "9",
            "USP-Leiste above the fold ergänzen",
            "30 Minuten",
            <span key="s9" className="text-success">Conversion-Boost</span>,
          ],
        ]}
      />
    </section>
  );
}

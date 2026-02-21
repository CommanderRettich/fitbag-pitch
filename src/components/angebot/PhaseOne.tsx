import { PhaseHeader } from "@/components/ui/PhaseHeader";
import { CardWrapper } from "@/components/ui/CardWrapper";
import { DataTable } from "@/components/ui/DataTable";
import { CheckList } from "@/components/ui/CheckList";
import { HighlightBox } from "@/components/ui/HighlightBox";

export function PhaseOne() {
  return (
    <section>
      <PhaseHeader
        number={1}
        title="Quick Wins & technische Basis"
        subtitle="Sofort spürbar, höchster ROI"
        price="2.500 €"
      />

      <p className="mb-4">
        Die wichtigsten technischen Probleme lösen, die euch jeden Tag Kunden und Rankings
        kosten. Alles innerhalb des bestehenden JTL-Shops – kein Umbau, kein Risiko.
      </p>

      <CardWrapper title="Performance & Ladezeit">
        <DataTable
          headers={["Maßnahme", "Problem heute", "Ergebnis"]}
          rows={[
            [
              "Browser-Caching aktivieren",
              "Cache-Control steht auf \"no-cache\" – jeder Seitenaufruf lädt alles neu",
              "Wiederkehrende Besucher laden 70% schneller",
            ],
            [
              "WebP-Bildformat einführen",
              "91 von 93 Bildern sind JPG, 9,4 MB auf der Startseite",
              "Bildgröße -60%, Ladezeit deutlich kürzer",
            ],
            [
              "Lazy Loading vervollständigen",
              "36 Bilder laden sofort, auch wenn sie nicht sichtbar sind",
              "Startseite rendert schneller",
            ],
            [
              "Crawl-Delay reduzieren",
              "Google darf nur alle 5 Sekunden eine Seite crawlen",
              "Neue Inhalte werden schneller indexiert",
            ],
          ]}
        />
      </CardWrapper>

      <CardWrapper title="SEO-Grundlagen reparieren">
        <DataTable
          headers={["Maßnahme", "Problem heute", "Ergebnis"]}
          rows={[
            [
              "Schema.org / Rich Snippets",
              "33.000+ Bewertungen, aber keine Sterne in Google",
              "Goldene Sterne in Suchergebnissen, +20-35% Klickrate",
            ],
            [
              "H1-Tag auf Startseite",
              "Fehlt komplett – Google versteht die Seite nicht richtig",
              "Besseres Ranking für Hauptkeywords",
            ],
            [
              "Hreflang-Tags korrigieren",
              "Englische Seiten ranken für deutsche Suchanfragen",
              "Deutsche Kunden finden die deutsche Seite",
            ],
            [
              "Title-Tags der Top-Seiten optimieren",
              "Kein Markenname, kein Call-to-Action",
              "Höhere Klickrate in Google",
            ],
          ]}
        />
      </CardWrapper>

      <CardWrapper title="Sofort-Fixes">
        <CheckList
          items={[
            "Newsletter-Popup entschärfen: Erst nach 30 Sekunden oder Scroll, nicht sofort",
            "Tippfehler korrigieren (\"Dateschutzerklärung\", \"Zum Schnueffel\")",
            "Google Business Profile anlegen",
          ]}
        />
      </CardWrapper>

      <HighlightBox variant="success" title="Erwartetes Ergebnis Phase 1">
        <p><strong>Ladezeit:</strong> Von ~15 Sekunden auf ~5-7 Sekunden</p>
        <p><strong>Sichtbarkeit in Google:</strong> Rich Snippets mit 4,96 Sternen → +20-35% mehr Klicks</p>
        <p><strong>Geschätzter Mehrumsatz:</strong> 15.000 – 30.000 € im ersten Jahr</p>
        <p className="mt-3 text-sm opacity-80">Umsetzung: 1-2 Wochen</p>
      </HighlightBox>
    </section>
  );
}

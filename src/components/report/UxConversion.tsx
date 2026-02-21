import { SectionTitle } from "@/components/ui/SectionTitle";
import { DataTable } from "@/components/ui/DataTable";
import { FindingBox } from "@/components/ui/FindingBox";
import { CardWrapper } from "@/components/ui/CardWrapper";
import { MetricRow } from "@/components/ui/MetricRow";
import { ScreenshotImage } from "@/components/ui/ScreenshotImage";

export function UxConversion() {
  return (
    <section>
      <SectionTitle number="5." title="UX & Conversion-Analyse" />

      {/* 5.1 Above the Fold */}
      <h3 className="text-lg font-semibold mt-8 mb-3">5.1 Above the Fold (Startseite)</h3>

      <ScreenshotImage
        src="/screenshots/01-homepage-above-fold.webp"
        alt="fitBAG Homepage Above the Fold"
        caption="Startseite: Kein klarer CTA, kein Vertrauenselement im sichtbaren Bereich"
      />

      <FindingBox type="warning">
        <p className="font-semibold mb-1">Kein klarer Call-to-Action im sichtbaren Bereich</p>
        <p className="text-sm">
          Der Above-the-Fold-Bereich zeigt ein Produktbild, aber keinen überzeugenden CTA,
          keine USP-Kommunikation und keine Vertrauenssignale. Besucher erkennen nicht sofort,
          warum fitBAG besser ist als eine Amazon-Hülle für 9,99 €.
        </p>
      </FindingBox>

      <DataTable
        headers={["Element", "Status", "Bewertung"]}
        rows={[
          [
            "Hero-Bereich",
            "Produktbild mit Slider",
            <span key="hero" className="text-warning">Kein emotionaler Hook</span>,
          ],
          [
            "USP-Kommunikation",
            "Nicht sichtbar",
            <span key="usp" className="text-danger">Fehlt komplett</span>,
          ],
          [
            "Vertrauenssignale",
            "Trustami-Widget im Footer",
            <span key="trust" className="text-warning">Zu weit unten</span>,
          ],
          [
            "Navigation",
            "Übersichtlich, 5 Hauptpunkte",
            <span key="nav" className="text-success">OK</span>,
          ],
          [
            "Suchfunktion",
            "Vorhanden",
            <span key="search" className="text-success">OK</span>,
          ],
          [
            "Mobile Hamburger-Menü",
            "Vorhanden",
            <span key="mobile" className="text-success">OK</span>,
          ],
        ]}
      />

      {/* 5.2 Product Page */}
      <h3 className="text-lg font-semibold mt-8 mb-3">5.2 Produktseiten-Analyse</h3>

      <div className="grid md:grid-cols-2 gap-5">
        <CardWrapper title="Positiv">
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-success shrink-0">&#10003;</span>
              <span>Hochwertige Produktbilder</span>
            </li>
            <li className="flex gap-2">
              <span className="text-success shrink-0">&#10003;</span>
              <span>Farbauswahl visuell ansprechend</span>
            </li>
            <li className="flex gap-2">
              <span className="text-success shrink-0">&#10003;</span>
              <span>Preis transparent sichtbar</span>
            </li>
            <li className="flex gap-2">
              <span className="text-success shrink-0">&#10003;</span>
              <span>Lieferzeit angegeben</span>
            </li>
            <li className="flex gap-2">
              <span className="text-success shrink-0">&#10003;</span>
              <span>Materialinformationen vorhanden</span>
            </li>
          </ul>
        </CardWrapper>

        <CardWrapper title="Kritisch">
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-danger shrink-0">&#10007;</span>
              <span>Keine Kundenbewertungen auf der Produktseite</span>
            </li>
            <li className="flex gap-2">
              <span className="text-danger shrink-0">&#10007;</span>
              <span>Kein Social Proof (&quot;1.000.000+ verkauft&quot;)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-danger shrink-0">&#10007;</span>
              <span>Keine Cross-Selling-Empfehlungen</span>
            </li>
            <li className="flex gap-2">
              <span className="text-danger shrink-0">&#10007;</span>
              <span>Kein &quot;Made in Germany&quot;-Badge</span>
            </li>
            <li className="flex gap-2">
              <span className="text-danger shrink-0">&#10007;</span>
              <span>Keine Größentabelle / Passform-Garantie</span>
            </li>
          </ul>
        </CardWrapper>
      </div>

      {/* 5.3 Configurator */}
      <h3 className="text-lg font-semibold mt-8 mb-3">5.3 Konfigurator &ndash; Der größte Conversion-Killer</h3>

      <ScreenshotImage
        src="/screenshots/02-konfigurator.webp"
        alt="fitBAG Konfigurator"
        caption="Der Konfigurator erfordert 13+ Entscheidungspunkte vor dem Kauf"
      />

      <FindingBox type="critical">
        <p className="font-semibold mb-1">13+ Entscheidungspunkte überfordern den Kunden</p>
        <p className="text-sm">
          Der Konfigurator ist fitBAGs größte Stärke (Individualisierung) und gleichzeitig die
          größte Conversion-Hürde. Kunden müssen Kollektion, Material, Farbe, Gerätemarke,
          Gerätemodell und weitere Optionen auswählen &ndash; ohne klare Führung durch den Prozess.
        </p>
      </FindingBox>

      <DataTable
        headers={["Problem", "Detail", "Auswirkung"]}
        rows={[
          [
            "Freitext-Feld für Gerät",
            "Kunden müssen Gerätenamen eintippen statt auswählen",
            <span key="c1" className="text-danger">Hohe Fehlerquote, Abbrüche</span>,
          ],
          [
            "13+ Entscheidungspunkte",
            "Kollektion → Material → Farbe → Marke → Modell → ...",
            <span key="c2" className="text-danger">Entscheidungsmüdigkeit</span>,
          ],
          [
            "Keine Fortschrittsanzeige",
            "Kunden wissen nicht, wie viele Schritte noch kommen",
            <span key="c3" className="text-danger">Unsicherheit, Abbrüche</span>,
          ],
          [
            "Keine Vorschau",
            "Kein Live-Preview der konfigurierten Hülle",
            <span key="c4" className="text-warning">Kein visuelles Feedback</span>,
          ],
          [
            "Keine Empfehlungen",
            "Kein \"Bestseller\" oder \"Empfohlen für dein Gerät\"",
            <span key="c5" className="text-warning">Keine Orientierungshilfe</span>,
          ],
          [
            "Kein Speichern",
            "Konfiguration geht bei Browser-Schließen verloren",
            <span key="c6" className="text-warning">Verlorene Leads</span>,
          ],
        ]}
      />

      {/* 5.4 Mobile */}
      <h3 className="text-lg font-semibold mt-8 mb-3">5.4 Mobile Usability</h3>

      <DataTable
        headers={["Aspekt", "Status", "Bewertung"]}
        rows={[
          [
            "Responsive Design",
            "Grundlegend vorhanden",
            <span key="m1" className="text-success">OK</span>,
          ],
          [
            "Touch-Targets",
            "Teilweise zu klein",
            <span key="m2" className="text-warning">Verbesserungswürdig</span>,
          ],
          [
            "Mobile Ladezeit",
            "5+ Sekunden (3G)",
            <span key="m3" className="text-danger">Zu langsam</span>,
          ],
          [
            "Sticky Add-to-Cart",
            "Nicht vorhanden",
            <span key="m4" className="text-danger">Fehlt</span>,
          ],
          [
            "Mobile Navigation",
            "Hamburger-Menü funktional",
            <span key="m5" className="text-success">OK</span>,
          ],
          [
            "Mobile Konfigurator",
            "Schwer bedienbar",
            <span key="m6" className="text-danger">Kritisch auf Mobile</span>,
          ],
        ]}
      />

      <FindingBox type="warning">
        <p className="font-semibold mb-1">Kein Sticky CTA auf Mobilgeräten</p>
        <p className="text-sm">
          Auf Mobilgeräten verschwindet der &quot;In den Warenkorb&quot;-Button beim Scrollen.
          Ein sticky CTA-Button am unteren Bildschirmrand könnte die mobile Conversion-Rate
          signifikant steigern. Bei über 60 % mobilem Traffic ist das ein kritischer Hebel.
        </p>
      </FindingBox>

      {/* 5.5 Top 5 Conversion Killers */}
      <h3 className="text-lg font-semibold mt-8 mb-3">5.5 Top 5 Conversion-Killer</h3>

      <DataTable
        headers={["#", "Conversion-Killer", "Geschätzter Umsatzverlust", "Priorität"]}
        rows={[
          [
            "1",
            "Konfigurator-Komplexität (13+ Entscheidungen)",
            "Hoch",
            <span key="ck1" className="text-danger font-bold">Kritisch</span>,
          ],
          [
            "2",
            "Keine Bewertungen auf Produktseiten",
            "Hoch",
            <span key="ck2" className="text-danger font-bold">Kritisch</span>,
          ],
          [
            "3",
            "Ladezeit 4,5–6,2 s (Mobile noch schlechter)",
            "Mittel-Hoch",
            <span key="ck3" className="text-danger font-bold">Kritisch</span>,
          ],
          [
            "4",
            "Kein Social Proof im sichtbaren Bereich",
            "Mittel",
            <span key="ck4" className="text-warning font-bold">Hoch</span>,
          ],
          [
            "5",
            "Fehlende Produkt-Empfehlungen / Cross-Selling",
            "Mittel",
            <span key="ck5" className="text-warning font-bold">Hoch</span>,
          ],
        ]}
      />
    </section>
  );
}

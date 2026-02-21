import { SectionTitle } from "@/components/ui/SectionTitle";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { DataTable } from "@/components/ui/DataTable";
import { FindingBox } from "@/components/ui/FindingBox";

export function LegalRisks() {
  return (
    <section>
      <SectionTitle number="11." title="Rechtliche Risiken" />

      <HighlightBox variant="danger" title="BFSG-Barrierefreiheit: Hohes Risiko">
        <p>
          Ab <strong>28. Juni 2025</strong> gilt das Barrierefreiheitsstärkungsgesetz (BFSG) für alle
          Online-Shops. Verstöße können mit Bußgeldern bis zu <strong>100.000 €</strong> geahndet
          werden. Die aktuelle fitbag.de-Website weist mehrere BFSG-relevante Mängel auf:
        </p>
        <ul className="mt-3 space-y-1 text-sm">
          <li>&#8226; Fehlende oder unzureichende Alt-Texte bei Bildern</li>
          <li>&#8226; Farbkontraste teilweise unter WCAG-AA-Standard</li>
          <li>&#8226; Konfigurator nicht per Tastatur bedienbar</li>
          <li>&#8226; Keine ARIA-Labels für interaktive Elemente</li>
          <li>&#8226; Formulare ohne zugeordnete Labels</li>
        </ul>
      </HighlightBox>

      <h3 className="text-lg font-semibold mt-8 mb-3">Rechtliche Prüfpunkte</h3>

      <DataTable
        headers={["Bereich", "Status", "Risiko", "Handlungsbedarf"]}
        rows={[
          [
            "Impressum",
            <span key="imp" className="text-success">Vorhanden, vollständig</span>,
            "Keins",
            "Kein Handlungsbedarf",
          ],
          [
            "Datenschutzerklärung",
            <span key="dse" className="text-success">Vorhanden</span>,
            "Niedrig",
            "Prüfung auf Aktualität empfohlen",
          ],
          [
            "Cookie-Consent",
            <span key="cookie" className="text-success">CookieFirst implementiert</span>,
            "Keins",
            "Gut umgesetzt",
          ],
          [
            "AGB",
            <span key="agb" className="text-success">Vorhanden</span>,
            "Niedrig",
            "Prüfung auf aktuelle Gesetzeslage",
          ],
          [
            "Widerrufsbelehrung",
            <span key="widerruf" className="text-success">Vorhanden</span>,
            "Niedrig",
            "Standard-konform",
          ],
          [
            "BFSG / Barrierefreiheit",
            <span key="bfsg" className="text-danger">Nicht konform</span>,
            <span key="bfsgr" className="text-danger font-bold">Hoch (bis 100.000 €)</span>,
            <span key="bfsga" className="text-danger">Dringend bis 06/2025</span>,
          ],
          [
            "DSGVO (Tracking)",
            <span key="dsgvo" className="text-success">Consent Mode v2 aktiv</span>,
            "Niedrig",
            "Gut umgesetzt",
          ],
          [
            "Preisangabenverordnung",
            <span key="preis" className="text-success">Preise korrekt ausgezeichnet</span>,
            "Keins",
            "Konform",
          ],
          [
            "Urheberrecht (Bilder)",
            <span key="urheber" className="text-warning">Nicht geprüft</span>,
            "Mittel",
            "Lizenzprüfung empfohlen",
          ],
        ]}
      />

      <FindingBox type="info">
        <p className="font-semibold mb-1">Grundlegende Rechtslage solide</p>
        <p className="text-sm">
          Impressum, Datenschutzerklärung, AGB und Widerrufsbelehrung sind vorhanden und
          grundsätzlich konform. Der einzige kritische Punkt ist die BFSG-Barrierefreiheit,
          die bis Juni 2025 umgesetzt werden muss. Dies sollte in Phase 1 der Roadmap
          priorisiert werden.
        </p>
      </FindingBox>
    </section>
  );
}

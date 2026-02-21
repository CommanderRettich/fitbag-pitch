import { CardWrapper } from "@/components/ui/CardWrapper";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { FindingBox } from "@/components/ui/FindingBox";

export function ConfiguratorConcept() {
  return (
    <section>
      <CardWrapper title="Konzept: 4-Schritt-Konfigurator">
        <HighlightBox variant="primary" title="Der größte Conversion-Hebel">
          <p>
            Der aktuelle Konfigurator verliert geschätzt 20&ndash;30% der Kunden. Ein geführter
            4-Schritt-Prozess mit visuellem Feedback kann das ändern.
          </p>
        </HighlightBox>

        <div className="space-y-5 my-6">
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
              1
            </div>
            <div>
              <p className="font-semibold">Schritt 1: Gerät wählen</p>
              <p className="text-sm text-muted mt-1">
                Visueller Gerätefinder statt Freitextfeld. Der Kunde wählt Hersteller → Modellreihe
                → exaktes Modell in drei Klicks. Autovervollständigung und Bilderkennung als
                Alternative.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
              2
            </div>
            <div>
              <p className="font-semibold">Schritt 2: Material wählen</p>
              <p className="text-sm text-muted mt-1">
                Bildkarten statt Dropdown. Jedes Material mit Foto, Haptik-Beschreibung und
                Preisunterschied. Der Kunde sieht und &bdquo;fühlt&ldquo; die Unterschiede sofort.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
              3
            </div>
            <div>
              <p className="font-semibold">Schritt 3: Extras wählen</p>
              <p className="text-sm text-muted mt-1">
                Visuelle Karten statt Checkboxen. Jedes Extra (Gürtelschlaufe, Reinigungstuch etc.)
                mit Bild und Kurzbeschreibung. Preis aktualisiert sich live.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
              4
            </div>
            <div>
              <p className="font-semibold">Schritt 4: Zusammenfassung</p>
              <p className="text-sm text-muted mt-1">
                Große Übersicht mit allen gewählten Optionen, Gesamtpreis und Trust-Signalen
                (Bewertungen, Made in Germany, kostenloser Versand). Ein klarer
                &bdquo;In den Warenkorb&ldquo;-Button.
              </p>
            </div>
          </div>
        </div>

        <FindingBox type="info">
          <p className="text-sm">
            Das vollständige Konfigurator-Konzept wird in <strong>Phase 2</strong> im Detail
            ausgearbeitet. Die obige Darstellung zeigt die Grundidee &ndash; die konkrete Umsetzung
            wird in enger Abstimmung mit fitBAG entwickelt.
          </p>
        </FindingBox>
      </CardWrapper>
    </section>
  );
}

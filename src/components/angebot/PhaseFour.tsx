import { PhaseHeader } from "@/components/ui/PhaseHeader";
import { CardWrapper } from "@/components/ui/CardWrapper";
import { CheckList } from "@/components/ui/CheckList";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { DataTable } from "@/components/ui/DataTable";

export function PhaseFour() {
  return (
    <section>
      <PhaseHeader
        number={4}
        title="B2B-Portal & Corporate-Geschäft"
        subtitle="Der unerschlossene Wachstumskanal"
        price="Auf Anfrage"
      />

      <HighlightBox variant="primary" title="Warum B2B ein Gamechanger ist">
        <p>
          fitBAG verkauft aktuell ausschließlich B2C. Dabei liegt im B2B-Bereich
          enormes Potenzial: Unternehmen suchen hochwertige, individualisierbare
          Geschenke für Mitarbeiter und Kunden. Eine maßgefertigte Hülle mit
          Firmenlogo &ndash; Made in Germany &ndash; ist das perfekte
          Corporate Gift. Höhere Stückzahlen, höhere Margen, planbare Umsätze.
        </p>
      </HighlightBox>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
        <CardWrapper title="B2B-Portal Features">
          <CheckList
            items={[
              "Eigener Firmenkundenbereich mit Login",
              "Bulk-Konfigurator: Gerät wählen, Material, Farbe + Logo-Upload",
              "Staffelpreise ab 10 / 50 / 100+ Stück automatisch berechnet",
              "Angebotsanfrage mit einem Klick – direkt an fitBAG",
              "Wiederkehrende Bestellungen für Onboarding-Pakete",
            ]}
          />
        </CardWrapper>

        <CardWrapper title="Zielgruppen">
          <CheckList
            items={[
              "Tech-Unternehmen – Onboarding-Geschenke für neue Mitarbeiter",
              "Agenturen & Beratungen – Premium-Kundengeschenke",
              "Startups – Merch mit Qualitätsanspruch statt Billig-Hoodies",
              "Firmen-Events & Messen – gebrandete Giveaways mit Wow-Faktor",
              "Weihnachtsgeschenke – jährlich wiederkehrendes Geschäft",
            ]}
          />
        </CardWrapper>
      </div>

      <DataTable
        headers={["Aspekt", "B2C (heute)", "B2B (Potenzial)"]}
        rows={[
          [
            "Ø Bestellwert",
            "30–45 €",
            <span key="b1" className="text-success font-semibold">500–5.000 €</span>,
          ],
          [
            "Kundenakquise",
            "Google / Social pro Einzelkunde",
            <span key="b2" className="text-success font-semibold">1 Firmenkunde = 50–500 Hüllen</span>,
          ],
          [
            "Wiederkauf",
            "Gering (neues Handy alle 2–3 Jahre)",
            <span key="b3" className="text-success font-semibold">Jährlich (Onboarding, Events, Weihnachten)</span>,
          ],
          [
            "Marge",
            "Standard",
            <span key="b4" className="text-success font-semibold">Höher durch Staffelproduktion</span>,
          ],
          [
            "Planbarkeit",
            "Saisonal schwankend",
            <span key="b5" className="text-success font-semibold">Verträge & wiederkehrende Aufträge</span>,
          ],
        ]}
      />

      <div className="mt-6 bg-card border border-border rounded-xl p-6 text-center">
        <p className="text-muted text-sm mb-2">Ausblick</p>
        <p className="text-lg font-semibold">
          Das B2B-Portal wird nach den Phasen 1&ndash;3 gemeinsam geplant &ndash; basierend
          auf den Ergebnissen und eurer Kapazität. Kein Risiko, keine Verpflichtung,
          aber ein klarer Wachstumspfad.
        </p>
      </div>
    </section>
  );
}

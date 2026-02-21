import { SectionTitle } from "@/components/ui/SectionTitle";
import { CardWrapper } from "@/components/ui/CardWrapper";
import { CheckList } from "@/components/ui/CheckList";
import { HighlightBox } from "@/components/ui/HighlightBox";

export function WhyUs() {
  return (
    <section>
      <SectionTitle title="Warum MaxMyBusiness" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <CardWrapper title="Was du bekommst">
          <CheckList
            items={[
              "Einen Ansprechpartner für alles Digitale – kein Agentur-Pingpong",
              "Schnelle Umsetzung durch KI-gestützten Entwicklungsprozess",
              "Erfahrung mit JTL-Shops und E-Commerce",
              "Transparente Kommunikation – du weißt immer, woran ich arbeite",
              "Ergebnisse statt Foliendecks",
            ]}
          />
        </CardWrapper>

        <CardWrapper title="Was mich unterscheidet">
          <CheckList
            items={[
              "Agentur-Qualität zu Freelancer-Preisen durch smarten KI-Einsatz",
              "Ich baue, was ihr braucht – nicht was die meisten Stunden bringt",
              "Keine Bindung: Phase 3 monatlich kündbar",
              "Audit als Basis – nicht aus dem Bauch heraus, sondern datengetrieben",
            ]}
          />
        </CardWrapper>
      </div>

      <SectionTitle title="Nächste Schritte" />

      <HighlightBox variant="primary" title="So geht es weiter">
        <p><strong>1.</strong> Du schaust dir dieses Angebot in Ruhe an.</p>
        <p>
          <strong>2.</strong> Wir telefonieren kurz – ich beantworte deine Fragen und wir
          besprechen, welche Phasen Priorität haben.
        </p>
        <p><strong>3.</strong> Bei Zusage kann ich innerhalb einer Woche starten.</p>
        <p className="mt-5">
          Ich freue mich darauf, fitBAG digital dahin zu bringen, wo euer Produkt längst ist.
        </p>
        <p className="mt-3">
          <strong>Max</strong>
          <br />
          MaxMyBusiness
        </p>
      </HighlightBox>
    </section>
  );
}

import { SectionTitle } from "@/components/ui/SectionTitle";
import { HighlightBox } from "@/components/ui/HighlightBox";

export function KonzeptIntro() {
  return (
    <section>
      <SectionTitle title="So setzen wir das um" />

      <HighlightBox variant="primary" title="Transparenz statt Blackbox">
        <p>
          Die folgenden Seiten zeigen konkret, wie wir die im Audit identifizierten Probleme lösen.
          Jeder Fix enthält das Problem, den Impact, die Lösung und eine Aufwandsschätzung. Das ist
          unser Arbeitsstil: keine Magie, sondern nachvollziehbare Schritte.
        </p>
      </HighlightBox>

      <p className="text-text/80 leading-relaxed mt-4">
        Die hier dargestellten Maßnahmen entsprechen <strong>Phase 1 &ndash; Quick Wins</strong>,
        die innerhalb von <strong>1&ndash;2 Wochen</strong> umgesetzt werden können. Jeder Fix ist
        unabhängig voneinander implementierbar und liefert sofort messbare Ergebnisse.
      </p>
    </section>
  );
}

import { SectionTitle } from "@/components/ui/SectionTitle";

export function SwotAnalysis() {
  return (
    <section>
      <SectionTitle number="10." title="SWOT-Analyse" />

      <div className="grid md:grid-cols-2 gap-5 my-6">
        {/* Strengths */}
        <div className="bg-success/10 border border-success/30 rounded-xl p-6">
          <h3 className="text-lg font-bold text-success mb-4">Stärken (Strengths)</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-success shrink-0 font-bold">+</span>
              <span>22+ Jahre Marktpräsenz &amp; Domain-Alter</span>
            </li>
            <li className="flex gap-2">
              <span className="text-success shrink-0 font-bold">+</span>
              <span>1.000.000+ verkaufte Produkte</span>
            </li>
            <li className="flex gap-2">
              <span className="text-success shrink-0 font-bold">+</span>
              <span>4,96/5 Bewertung bei 33.059 Reviews</span>
            </li>
            <li className="flex gap-2">
              <span className="text-success shrink-0 font-bold">+</span>
              <span>Made in Germany / Handgefertigt in Meinerzhagen</span>
            </li>
            <li className="flex gap-2">
              <span className="text-success shrink-0 font-bold">+</span>
              <span>17 Fertigungsschritte = echtes Handwerk</span>
            </li>
            <li className="flex gap-2">
              <span className="text-success shrink-0 font-bold">+</span>
              <span>4 Kollektionen, 80+ Farben, breite Geräteabdeckung</span>
            </li>
            <li className="flex gap-2">
              <span className="text-success shrink-0 font-bold">+</span>
              <span>Faire Preise (19,99–24,99 €) für Premium-Qualität</span>
            </li>
            <li className="flex gap-2">
              <span className="text-success shrink-0 font-bold">+</span>
              <span>Starke Amazon-Präsenz als Umsatzbasis</span>
            </li>
          </ul>
        </div>

        {/* Weaknesses */}
        <div className="bg-danger/10 border border-danger/30 rounded-xl p-6">
          <h3 className="text-lg font-bold text-danger mb-4">Schwächen (Weaknesses)</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-danger shrink-0 font-bold">&minus;</span>
              <span>Technisch veralteter Webauftritt (Performance, SEO)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-danger shrink-0 font-bold">&minus;</span>
              <span>Keine Gründer-Story, kein Storytelling</span>
            </li>
            <li className="flex gap-2">
              <span className="text-danger shrink-0 font-bold">&minus;</span>
              <span>Konfigurator überfordert Kunden (13+ Entscheidungen)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-danger shrink-0 font-bold">&minus;</span>
              <span>Social Media praktisch inexistent (1.287 IG-Follower)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-danger shrink-0 font-bold">&minus;</span>
              <span>Keine Schema.org-Auszeichnung (Sterne fehlen in Google)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-danger shrink-0 font-bold">&minus;</span>
              <span>Hreflang-Fehler (EN-Seiten ranken für DE-Suchen)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-danger shrink-0 font-bold">&minus;</span>
              <span>Kein Email-Marketing / Newsletter-System</span>
            </li>
            <li className="flex gap-2">
              <span className="text-danger shrink-0 font-bold">&minus;</span>
              <span>Du/Sie-Inkonsistenz über alle Kanäle</span>
            </li>
          </ul>
        </div>

        {/* Opportunities */}
        <div className="bg-info/10 border border-info/30 rounded-xl p-6">
          <h3 className="text-lg font-bold text-info mb-4">Chancen (Opportunities)</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-info shrink-0 font-bold">&#9733;</span>
              <span>&quot;Made in Germany&quot;-Trend wächst</span>
            </li>
            <li className="flex gap-2">
              <span className="text-info shrink-0 font-bold">&#9733;</span>
              <span>Nachhaltigkeits-Bewegung stärkt Premium-Segment</span>
            </li>
            <li className="flex gap-2">
              <span className="text-info shrink-0 font-bold">&#9733;</span>
              <span>Email-Marketing hat höchsten ROI (42:1)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-info shrink-0 font-bold">&#9733;</span>
              <span>Schema.org kann sofort mehr Google-Traffic bringen</span>
            </li>
            <li className="flex gap-2">
              <span className="text-info shrink-0 font-bold">&#9733;</span>
              <span>33.000 Bewertungen = ungenutztes Social-Proof-Gold</span>
            </li>
            <li className="flex gap-2">
              <span className="text-info shrink-0 font-bold">&#9733;</span>
              <span>Tablet- &amp; Laptop-Hüllen als Produkterweiterung</span>
            </li>
            <li className="flex gap-2">
              <span className="text-info shrink-0 font-bold">&#9733;</span>
              <span>B2B / Corporate-Bereich (Firmen-Branding)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-info shrink-0 font-bold">&#9733;</span>
              <span>Kooperation mit nachhaltigen Handy-Marken (Fairphone, Shift)</span>
            </li>
          </ul>
        </div>

        {/* Threats */}
        <div className="bg-warning/10 border border-warning/30 rounded-xl p-6">
          <h3 className="text-lg font-bold text-warning mb-4">Risiken (Threats)</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-warning shrink-0 font-bold">&#9888;</span>
              <span>Amazon-Abhängigkeit (stärkster Kanal, aber hohe Gebühren)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-warning shrink-0 font-bold">&#9888;</span>
              <span>Billig-Konkurrenz drückt Preise im Massenmarkt</span>
            </li>
            <li className="flex gap-2">
              <span className="text-warning shrink-0 font-bold">&#9888;</span>
              <span>BFSG-Barrierefreiheit ab 06/2025 Pflicht (Bußgelder bis 100.000 €)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-warning shrink-0 font-bold">&#9888;</span>
              <span>Wettbewerber investieren in Digital (stilbag, SmukBird)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-warning shrink-0 font-bold">&#9888;</span>
              <span>Handy-Hersteller bieten eigene Premium-Hüllen an</span>
            </li>
            <li className="flex gap-2">
              <span className="text-warning shrink-0 font-bold">&#9888;</span>
              <span>Sinkende organische Reichweite bei Google (AI Overviews)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-warning shrink-0 font-bold">&#9888;</span>
              <span>Steigende Materialkosten (Leder, Alcantara)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

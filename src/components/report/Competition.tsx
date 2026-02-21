import { SectionTitle } from "@/components/ui/SectionTitle";
import { DataTable } from "@/components/ui/DataTable";
import { FindingBox } from "@/components/ui/FindingBox";
import { CardWrapper } from "@/components/ui/CardWrapper";

export function Competition() {
  return (
    <section>
      <SectionTitle number="8." title="Wettbewerbs- & Marktanalyse" />

      <p className="text-text/80 leading-relaxed mb-4">
        fitBAG operiert in einem Nischenmarkt zwischen generischen Massenanbietern (Amazon/AliExpress)
        und wenigen spezialisierten Premium-Anbietern. Die Analyse zeigt: Die direkten Wettbewerber
        sind in der digitalen Präsenz zum Teil deutlich besser aufgestellt.
      </p>

      <DataTable
        headers={["Wettbewerber", "Produkt", "Preissegment", "Stärken", "Schwächen"]}
        rows={[
          [
            "stilbag",
            "Filztaschen, Maßanfertigung",
            "15–30 €",
            <span key="s1" className="text-success">Gute SEO, Gründer-Story prominent</span>,
            "Weniger Materialauswahl",
          ],
          [
            "SmukBird",
            "Lederhüllen Premium",
            "30–50 €",
            <span key="s2" className="text-success">Starkes Branding, Storytelling</span>,
            "Höherer Preis, kleiner Katalog",
          ],
          [
            "VANDEBAG",
            "Designer-Hüllen",
            "40–80 €",
            <span key="s3" className="text-success">Starke Markenidentität, PR</span>,
            "Deutlich teurer",
          ],
          [
            "Caseable",
            "Customize-Hüllen",
            "20–35 €",
            <span key="s4" className="text-success">Großer Katalog, gutes UX</span>,
            "Kein Handwerk-Narrativ",
          ],
          [
            "kwmobile",
            "Massenware",
            "8–15 €",
            <span key="s5" className="text-success">Amazon-Dominanz, günstiger Preis</span>,
            "Keine Differenzierung, Asien-Fertigung",
          ],
          [
            "Amazon-Seller",
            "No-Name Hüllen",
            "5–15 €",
            <span key="s6" className="text-success">Niedrigpreis, Prime-Versand</span>,
            "Austauschbar, Qualitätsprobleme",
          ],
        ]}
      />

      <FindingBox type="warning">
        <p className="font-semibold mb-1">Wettbewerber setzen auf Gründer-Story &ndash; fitBAG nicht</p>
        <p className="text-sm">
          stilbag zeigt den Gründer prominent auf der Startseite, SmukBird hat eine emotionale
          Markengeschichte, VANDEBAG setzt auf Designer-Positionierung. fitBAG hat die stärkste
          Geschichte (22 Jahre, 1 Mio. Produkte, Inhaberin aus dem Handwerk) &ndash; erzählt sie
          aber nicht. Das ist der größte strategische Fehler im Wettbewerbsvergleich.
        </p>
      </FindingBox>

      <div className="grid md:grid-cols-2 gap-5 mt-6">
        <CardWrapper title="Wachstumstrends (positiv für fitBAG)">
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-success shrink-0">&#9650;</span>
              <span>&quot;Made in Germany&quot; als Suchtrend steigt seit 2020 kontinuierlich</span>
            </li>
            <li className="flex gap-2">
              <span className="text-success shrink-0">&#9650;</span>
              <span>Nachhaltigkeits-Bewusstsein treibt Premium-Segment</span>
            </li>
            <li className="flex gap-2">
              <span className="text-success shrink-0">&#9650;</span>
              <span>Smartphone-Zubehör-Markt wächst ~8 % p.a.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-success shrink-0">&#9650;</span>
              <span>Individualisierungs-Trend (Mass Customization) nimmt zu</span>
            </li>
            <li className="flex gap-2">
              <span className="text-success shrink-0">&#9650;</span>
              <span>Gegentrend zu Amazon-Massenware verstärkt sich</span>
            </li>
          </ul>
        </CardWrapper>

        <CardWrapper title="Marktdaten">
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-info shrink-0">&#9679;</span>
              <span>Globaler Handyhüllen-Markt: ~25 Mrd. $ (2025)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-info shrink-0">&#9679;</span>
              <span>DACH-Markt: ~800 Mio. € (geschätzt)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-info shrink-0">&#9679;</span>
              <span>Premium-Segment (20+ €): ~15 % Marktanteil</span>
            </li>
            <li className="flex gap-2">
              <span className="text-info shrink-0">&#9679;</span>
              <span>Online-Anteil: ~70 % (steigend)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-info shrink-0">&#9679;</span>
              <span>Durchschnittliche Wiederkaufrate: 1,2 Jahre (neues Handy)</span>
            </li>
          </ul>
        </CardWrapper>
      </div>
    </section>
  );
}

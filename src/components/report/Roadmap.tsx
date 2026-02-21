import { SectionTitle } from "@/components/ui/SectionTitle";
import { DataTable } from "@/components/ui/DataTable";
import { FindingBox } from "@/components/ui/FindingBox";
import { HighlightBox } from "@/components/ui/HighlightBox";

export function Roadmap() {
  return (
    <section>
      <SectionTitle number="17." title="Priorisierte Roadmap" />

      <DataTable
        headers={["Phase", "Zeitraum", "Maßnahmen", "Budget (geschätzt)", "Erwarteter Impact"]}
        rows={[
          [
            <span key="p1" className="font-bold text-danger">Phase 1 &ndash; Quick Wins</span>,
            "Monat 1–2",
            <div key="p1m" className="text-sm space-y-1">
              <p>&#8226; Schema.org / Rich Snippets</p>
              <p>&#8226; Bilder-Optimierung (WebP, Lazy Loading)</p>
              <p>&#8226; Cache-Control-Header aktivieren</p>
              <p>&#8226; Hreflang-Korrektur</p>
              <p>&#8226; H1-Tags, Meta-Descriptions</p>
              <p>&#8226; USP-Leiste &amp; Badges</p>
              <p>&#8226; BFSG-Barrierefreiheit (Grundlagen)</p>
            </div>,
            "2.000–4.000 €",
            <span key="p1i" className="text-success font-bold">+20–40 % organischer Traffic, bessere Conversion</span>,
          ],
          [
            <span key="p2" className="font-bold text-warning">Phase 2 &ndash; Content & Brand</span>,
            "Monat 2–4",
            <div key="p2m" className="text-sm space-y-1">
              <p>&#8226; Gründer-Story erstellen</p>
              <p>&#8226; Behind-the-Scenes-Content (17 Schritte)</p>
              <p>&#8226; Brand Voice vereinheitlichen (Du)</p>
              <p>&#8226; Bewertungen auf Produktseiten</p>
              <p>&#8226; Materialguide erstellen</p>
              <p>&#8226; Content-Subdomain aufsetzen</p>
            </div>,
            "3.000–6.000 €",
            <span key="p2i" className="text-success font-bold">+15–25 % Conversion, Markenbindung</span>,
          ],
          [
            <span key="p3" className="font-bold text-info">Phase 3 &ndash; Marketing & Growth</span>,
            "Monat 4–6",
            <div key="p3m" className="text-sm space-y-1">
              <p>&#8226; Email-Marketing aufbauen</p>
              <p>&#8226; Post-Purchase-Flow</p>
              <p>&#8226; Newsletter-System</p>
              <p>&#8226; Geräte-Landingpages (Top 10)</p>
              <p>&#8226; Google Business optimieren</p>
              <p>&#8226; Pressemitteilung &quot;1 Mio. verkauft&quot;</p>
            </div>,
            "3.000–5.000 €",
            <span key="p3i" className="text-success font-bold">+10–20 % Wiederkäufer, PR-Backlinks</span>,
          ],
          [
            <span key="p4" className="font-bold text-accent">Phase 4 &ndash; Skalierung</span>,
            "Ab Monat 6",
            <div key="p4m" className="text-sm space-y-1">
              <p>&#8226; Konfigurator UX-Redesign</p>
              <p>&#8226; Social Media Strategie (Instagram, Pinterest)</p>
              <p>&#8226; B2B / Corporate-Landingpage</p>
              <p>&#8226; Linkbuilding-Kampagne</p>
              <p>&#8226; Blog-Content-Strategie (SEO)</p>
              <p>&#8226; Video-Content Produktion</p>
            </div>,
            "5.000–10.000 €",
            <span key="p4i" className="text-success font-bold">Nachhaltige Marktposition, Markenaufbau</span>,
          ],
        ]}
      />

      <FindingBox type="info">
        <p className="font-semibold mb-1">Saisonalität beachten</p>
        <p className="text-sm">
          Der Handyhüllen-Markt hat Spitzen im September/Oktober (neue iPhones) und November/Dezember
          (Weihnachtsgeschäft). Phase 1 und 2 sollten idealerweise vor dem Q4-Peak abgeschlossen sein,
          um vom saisonalen Traffic-Anstieg maximal zu profitieren.
        </p>
      </FindingBox>

      <HighlightBox variant="primary" title="Fazit">
        <p>
          fitBAG hat alle Zutaten für eine erfolgreiche Premium-Marke: ein herausragendes Produkt,
          über 22 Jahre Erfahrung, eine Million zufriedene Kunden und eine authentische
          Handwerksgeschichte. Was fehlt, ist ausschließlich die <strong>digitale Umsetzung</strong>.
        </p>
        <p className="mt-3">
          Die gute Nachricht: Die meisten identifizierten Probleme sind mit überschaubarem Budget
          lösbar. Die Kombination aus technischen Quick Wins (Schema.org, Performance),
          Content-Strategie (Gründer-Story, Materialguide) und Marketing-Basics (Email, Social Proof)
          kann innerhalb von 6 Monaten eine <strong>signifikante Steigerung</strong> von Traffic,
          Conversion und Umsatz bewirken.
        </p>
        <p className="mt-3">
          Der wichtigste erste Schritt: <strong>Die Geschichte erzählen</strong>. fitBAG ist kein
          gesichtsloses Amazon-Produkt &ndash; sondern Handwerkskunst aus Meinerzhagen. Diese
          Geschichte muss online endlich sichtbar werden.
        </p>
      </HighlightBox>
    </section>
  );
}

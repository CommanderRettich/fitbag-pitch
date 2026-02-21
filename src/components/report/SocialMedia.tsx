import { SectionTitle } from "@/components/ui/SectionTitle";
import { DataTable } from "@/components/ui/DataTable";
import { FindingBox } from "@/components/ui/FindingBox";

export function SocialMedia() {
  return (
    <section>
      <SectionTitle number="9." title="Social Media & Markenpräsenz" />

      <DataTable
        headers={["Plattform", "Status", "Follower/Präsenz", "Aktivität", "Bewertung"]}
        rows={[
          [
            "Instagram",
            "Aktiv",
            "1.287 Follower",
            "~2–3 Posts/Monat",
            <span key="sm1" className="text-danger">Schwach für 1M+ Produkte</span>,
          ],
          [
            "Facebook",
            "Vorhanden",
            "~800 Likes",
            "Unregelmäßig",
            <span key="sm2" className="text-danger">Vernachlässigt</span>,
          ],
          [
            "Pinterest",
            "Nicht vorhanden",
            "—",
            "—",
            <span key="sm3" className="text-danger">Verpasste Chance (visuelles Produkt!)</span>,
          ],
          [
            "TikTok",
            "Nicht vorhanden",
            "—",
            "—",
            <span key="sm4" className="text-warning">Optional, aber Potenzial</span>,
          ],
          [
            "YouTube",
            "Nicht vorhanden",
            "—",
            "—",
            <span key="sm5" className="text-danger">Fehlt (Behind-the-Scenes!)</span>,
          ],
          [
            "Amazon",
            "Aktiv",
            "33.000+ Reviews",
            "Marketplace",
            <span key="sm6" className="text-success">Stärkster Kanal</span>,
          ],
          [
            "LinkedIn",
            "Nicht vorhanden",
            "—",
            "—",
            <span key="sm7" className="text-warning">Für B2B/PR sinnvoll</span>,
          ],
          [
            "Google Business",
            "Unvollständig",
            "Wenige Bewertungen",
            "—",
            <span key="sm8" className="text-danger">Nicht optimiert</span>,
          ],
        ]}
      />

      <FindingBox type="critical">
        <p className="font-semibold mb-1">1.287 Instagram-Follower bei 1.000.000+ verkauften Produkten</p>
        <p className="text-sm">
          Das Verhältnis von verkauften Produkten zu Social-Media-Followern ist katastrophal.
          Selbst wenn nur 1 % der Käufer zu Followern konvertiert wären, müssten es 10.000+ sein.
          Das zeigt: Es wurde nie aktiv versucht, Käufer in eine Community zu überführen. Kein
          Unboxing-Content, keine User-Generated-Content-Kampagnen, keine Follow-up-Emails mit
          Social-Media-Link.
        </p>
      </FindingBox>

      <FindingBox type="info">
        <p className="font-semibold mb-1">Katastrophal niedrige Bewertungsquote auf der eigenen Website</p>
        <p className="text-sm">
          33.059 Bewertungen klingen nach viel &ndash; aber diese sind fast ausschließlich über
          Amazon und Trustami gesammelt. Auf der eigenen Website fehlen direkte
          Kundenstimmen. Der Traffic (und damit die Conversion-Power) der Bewertungen kommt
          Amazon zugute, nicht fitbag.de. Eine eigene Review-Strategie nach dem Kauf (Email mit
          Bewertungs-Link) könnte die Website-Conversion um 15&ndash;25 % steigern.
        </p>
      </FindingBox>
    </section>
  );
}

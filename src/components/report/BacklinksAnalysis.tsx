import { SectionTitle } from "@/components/ui/SectionTitle";
import { DataTable } from "@/components/ui/DataTable";
import { FindingBox } from "@/components/ui/FindingBox";
import { CardWrapper } from "@/components/ui/CardWrapper";
import { MetricRow } from "@/components/ui/MetricRow";

export function BacklinksAnalysis() {
  return (
    <section>
      <SectionTitle number="7." title="Backlinks & Domain Authority" />

      <CardWrapper title="Domain-Metriken">
        <MetricRow label="Domain-Alter" value="22+ Jahre (seit 2003)" />
        <MetricRow
          label="Geschätzte Domain Authority"
          value={<span className="text-warning">25–35 (von 100)</span>}
        />
        <MetricRow
          label="Google Knowledge Panel"
          value={<span className="text-danger">Nicht vorhanden</span>}
        />
        <MetricRow label="Backlink-Profil" value="Vorwiegend alte Links" />
        <MetricRow
          label="Referring Domains"
          value={<span className="text-warning">~120 (geschätzt)</span>}
        />
        <MetricRow
          label="Toxic Links"
          value={<span className="text-success">Gering</span>}
        />
      </CardWrapper>

      <h3 className="text-lg font-semibold mt-8 mb-3">Top 10 Backlinks</h3>

      <DataTable
        headers={["Quelle", "Typ", "DA (geschätzt)", "Status"]}
        rows={[
          [
            "connect.de",
            "Produkttest / Erwähnung",
            "65+",
            <span key="b1" className="text-success">Wertvoll</span>,
          ],
          [
            "chip.de",
            "Artikelerwähnung",
            "80+",
            <span key="b2" className="text-success">Sehr wertvoll</span>,
          ],
          [
            "giga.de",
            "Produktempfehlung",
            "75+",
            <span key="b3" className="text-success">Wertvoll</span>,
          ],
          [
            "handyflash.de",
            "Partnerlink",
            "40+",
            <span key="b4" className="text-warning">Mittel (veraltet?)</span>,
          ],
          [
            "smartphonemag.de",
            "Review",
            "35+",
            <span key="b5" className="text-warning">Mittel</span>,
          ],
          [
            "verschiedene Blogs",
            "Produkttests",
            "10–30",
            <span key="b6" className="text-warning">Gering–Mittel</span>,
          ],
          [
            "Branchenverzeichnisse",
            "Einträge",
            "20–40",
            <span key="b7" className="text-warning">Standard</span>,
          ],
          [
            "Amazon.de",
            "Marktplatz-Profil",
            "95+",
            <span key="b8" className="text-success">Wertvoller Marktplatz-Link</span>,
          ],
          [
            "Trustami",
            "Bewertungsportal",
            "30+",
            <span key="b9" className="text-success">Trust-Signal</span>,
          ],
          [
            "Diverse Foren",
            "Nutzerbeiträge",
            "10–25",
            <span key="b10" className="text-muted">Gering</span>,
          ],
        ]}
      />

      <FindingBox type="warning">
        <p className="font-semibold mb-1">Backlink-Profil veraltet &ndash; kaum neue Links</p>
        <p className="text-sm">
          Die meisten hochwertigen Backlinks stammen aus früheren Produkttests (2015&ndash;2020).
          Es gibt kaum neue Backlinks, was auf fehlende PR-Arbeit und Content-Marketing hindeutet.
          Die gute Nachricht: Die vorhandenen Links von chip.de, connect.de und giga.de sind ein
          starkes Fundament, auf dem aufgebaut werden kann.
        </p>
      </FindingBox>

      <h3 className="text-lg font-semibold mt-8 mb-3">Top 5 Linkbuilding-Chancen</h3>

      <DataTable
        headers={["Maßnahme", "Ziel-Seiten", "Schwierigkeit", "Erwarteter Impact"]}
        rows={[
          [
            "Pressemitteilung \"1 Mio. verkauft\"",
            "Lokalpresse NRW, Handelsblatt, Gründerszene",
            <span key="l1" className="text-success">Einfach</span>,
            <span key="l1i" className="text-success font-bold">Hoch</span>,
          ],
          [
            "Gastbeiträge \"Made in Germany\"",
            "Nachhaltigkeits-Blogs, Handwerk-Magazine",
            <span key="l2" className="text-warning">Mittel</span>,
            <span key="l2i" className="text-success font-bold">Hoch</span>,
          ],
          [
            "Produkttests neue Modelle",
            "Tech-Blogs, YouTube-Reviews",
            <span key="l3" className="text-warning">Mittel</span>,
            <span key="l3i" className="text-warning font-bold">Mittel</span>,
          ],
          [
            "Regionaler Handwerks-PR",
            "IHK, Handwerkskammer, Lokalpresse",
            <span key="l4" className="text-success">Einfach</span>,
            <span key="l4i" className="text-warning font-bold">Mittel</span>,
          ],
          [
            "Kooperationen mit Handy-Herstellern",
            "Fairphone-Blog, Shift-Blog",
            <span key="l5" className="text-danger">Schwer</span>,
            <span key="l5i" className="text-success font-bold">Hoch</span>,
          ],
        ]}
      />
    </section>
  );
}

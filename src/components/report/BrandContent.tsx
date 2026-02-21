import { SectionTitle } from "@/components/ui/SectionTitle";
import { DataTable } from "@/components/ui/DataTable";
import { FindingBox } from "@/components/ui/FindingBox";
import { CardWrapper } from "@/components/ui/CardWrapper";

export function BrandContent() {
  return (
    <section>
      <SectionTitle number="6." title="Brand Voice & Content-Strategie" />

      {/* 6.1 Tonality */}
      <h3 className="text-lg font-semibold mt-8 mb-3">6.1 Tonalität & Ansprache</h3>

      <DataTable
        headers={["Kanal", "Ansprache", "Tonalität", "Bewertung"]}
        rows={[
          [
            "Website (Shop)",
            "Sie",
            "Sachlich, distanziert",
            <span key="t1" className="text-warning">Passt nicht zur Zielgruppe</span>,
          ],
          [
            "Instagram",
            "Du",
            "Locker, persönlich",
            <span key="t2" className="text-success">Passend</span>,
          ],
          [
            "Newsletter",
            "Mischung Du/Sie",
            "Inkonsistent",
            <span key="t3" className="text-danger">Verwirrend</span>,
          ],
          [
            "Produktbeschreibungen",
            "Sie",
            "Technisch, nüchtern",
            <span key="t4" className="text-warning">Emotionslos</span>,
          ],
          [
            "Amazon",
            "Sie",
            "Standard-Marketplace",
            <span key="t5" className="text-warning">Austauschbar</span>,
          ],
          [
            "Über-uns-Seite",
            "Wir",
            "Distanziert, keine Persönlichkeit",
            <span key="t6" className="text-danger">Verschenktes Potenzial</span>,
          ],
        ]}
      />

      <FindingBox type="critical">
        <p className="font-semibold mb-1">Du/Sie-Inkonsistenz über alle Kanäle</p>
        <p className="text-sm">
          fitBAG nutzt auf Instagram &quot;Du&quot;, im Shop &quot;Sie&quot; und im Newsletter
          beides gemischt. Das wirkt unprofessionell und zerstört die Markenkonsistenz. Eine
          Premium-Handyhüllen-Marke mit jüngerer Zielgruppe (25–45) sollte sich für ein
          konsequentes &quot;Du&quot; entscheiden &ndash; persönlich, aber qualitätsbewusst.
        </p>
      </FindingBox>

      {/* 6.2 Content Audit */}
      <h3 className="text-lg font-semibold mt-8 mb-3">6.2 Content-Audit</h3>

      <DataTable
        headers={["Content-Bereich", "Status", "Bewertung"]}
        rows={[
          [
            "Blog",
            "Nur Geräte-Ankündigungen (\"Neues Samsung S25\")",
            <span key="c1" className="text-danger">Kein SEO-Wert, kein Mehrwert</span>,
          ],
          [
            "Gründer-Story",
            "Fehlt komplett",
            <span key="c2" className="text-danger">Größte Content-Lücke</span>,
          ],
          [
            "Fertigungsprozess",
            "Nicht dokumentiert",
            <span key="c3" className="text-danger">17 Schritte nie gezeigt</span>,
          ],
          [
            "Über-uns-Seite",
            "Minimal, keine Bilder, keine Story",
            <span key="c4" className="text-danger">Verschenktes Potenzial</span>,
          ],
          [
            "Materialguide",
            "Kurze Beschreibungen bei Produkten",
            <span key="c5" className="text-warning">Nicht als eigenständiger Content</span>,
          ],
          [
            "FAQ/Hilfe",
            "Vorhanden, aber mager",
            <span key="c6" className="text-warning">Keine Long-Tail-Keywords</span>,
          ],
          [
            "Kundenstimmen",
            "Nur über Trustami-Widget",
            <span key="c7" className="text-warning">Keine eigene Testimonial-Seite</span>,
          ],
          [
            "Video-Content",
            "Nicht vorhanden",
            <span key="c8" className="text-danger">Fehlt komplett</span>,
          ],
        ]}
      />

      <FindingBox type="warning">
        <p className="font-semibold mb-1">Blog ohne SEO-Strategie</p>
        <p className="text-sm">
          Der Blog besteht ausschließlich aus Geräte-Ankündigungen (&quot;fitBAG jetzt für Samsung
          Galaxy S25&quot;). Diese Beiträge generieren keinen organischen Traffic, beantworten keine
          Nutzerfragen und bieten keinen Mehrwert. Ein strategischer Blog könnte hunderte von
          Long-Tail-Keywords abdecken.
        </p>
      </FindingBox>

      {/* 6.3 Storytelling Deficits */}
      <h3 className="text-lg font-semibold mt-8 mb-3">6.3 Storytelling-Defizite</h3>

      <CardWrapper title="Verschenkte Geschichten">
        <div className="space-y-4 text-sm">
          <div className="flex gap-3 items-start">
            <span className="text-danger font-bold shrink-0">1.</span>
            <div>
              <p className="font-semibold">Gründer-Story fehlt komplett</p>
              <p className="text-muted">
                Andrea Pfeil hat 2003 ein Unternehmen gegründet, das über 1 Million Produkte
                verkauft hat &ndash; diese Geschichte wird nirgendwo erzählt. Kein Foto, kein
                Zitat, keine Motivation. In einer Welt von gesichtslosen Amazon-Produkten wäre
                das ein enormer Differenzierungsfaktor.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-danger font-bold shrink-0">2.</span>
            <div>
              <p className="font-semibold">17 Fertigungsschritte nie gezeigt</p>
              <p className="text-muted">
                fitBAG bewirbt &quot;17 Fertigungsschritte&quot;, zeigt aber keinen einzigen davon.
                Kein Werkstatt-Foto, kein Behind-the-Scenes-Video, keine Infografik. Das ist wie
                ein Sternekoch, der nie seine Küche zeigt.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-danger font-bold shrink-0">3.</span>
            <div>
              <p className="font-semibold">Keine Gesichter, keine Menschen</p>
              <p className="text-muted">
                Die gesamte Website zeigt kein einziges menschliches Gesicht. Keine Mitarbeiter,
                keine Kunden, keine Handwerker bei der Arbeit. Das widerspricht komplett dem
                &quot;Made in Germany / Handgefertigt&quot;-Narrativ.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-warning font-bold shrink-0">4.</span>
            <div>
              <p className="font-semibold">Rechtschreibfehler & Qualitätsmängel</p>
              <p className="text-muted">
                Vereinzelte Tippfehler in Produktbeschreibungen und inkonsistente Formatierung
                untergraben den Premium-Anspruch. Bei einem Produkt, das &quot;Handwerkskunst&quot;
                verkauft, muss auch die textliche Qualität stimmen.
              </p>
            </div>
          </div>
        </div>
      </CardWrapper>
    </section>
  );
}

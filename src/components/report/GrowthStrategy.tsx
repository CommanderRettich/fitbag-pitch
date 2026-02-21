import { SectionTitle } from "@/components/ui/SectionTitle";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { DataTable } from "@/components/ui/DataTable";
import { CardWrapper } from "@/components/ui/CardWrapper";

export function GrowthStrategy() {
  return (
    <section>
      <SectionTitle number="12." title="Wachstumsstrategie" />

      <p className="text-text/80 leading-relaxed mb-6">
        Basierend auf der Audit-Analyse ergeben sich drei große Hebel, die mit überschaubarem
        Aufwand signifikantes Wachstum ermöglichen:
      </p>

      {/* 3 Biggest Levers */}
      <HighlightBox variant="success" title="Hebel #1: Email-Marketing aufbauen">
        <p>
          fitBAG hat über 1 Million Kunden verkauft, aber <strong>keine einzige Email-Adresse</strong> in
          einer eigenen Liste. Email-Marketing hat einen durchschnittlichen ROI von 42:1 &ndash;
          das bedeutet: Für jeden investierten Euro kommen 42 € zurück.
        </p>
        <ul className="mt-3 space-y-1 text-sm">
          <li>&#8226; Post-Purchase-Email-Flow aufsetzen (Danke, Review, Cross-Sell)</li>
          <li>&#8226; Newsletter-Anmeldung im Shop prominent platzieren</li>
          <li>&#8226; Automatisierte Willkommens-Serie (5 Emails)</li>
          <li>&#8226; Reaktivierungs-Kampagne bei neuem Gerät (alle 12&ndash;18 Monate)</li>
        </ul>
      </HighlightBox>

      <HighlightBox variant="success" title="Hebel #2: Schema.org & Rich Snippets">
        <p>
          33.059 Bewertungen mit 4,96/5 Sternen &ndash; aber Google zeigt keine einzige davon in den
          Suchergebnissen an. Schema.org-Markup kann innerhalb von <strong>2&ndash;4 Wochen</strong> implementiert
          werden und bringt sofort mehr Klicks aus den Suchergebnissen.
        </p>
        <ul className="mt-3 space-y-1 text-sm">
          <li>&#8226; Product-Schema mit AggregateRating</li>
          <li>&#8226; Organization-Schema für Knowledge Panel</li>
          <li>&#8226; BreadcrumbList für bessere SERP-Darstellung</li>
          <li>&#8226; FAQ-Schema auf Hilfe-Seiten</li>
        </ul>
      </HighlightBox>

      <HighlightBox variant="success" title="Hebel #3: Performance-Basics fixen">
        <p>
          9,44 MB Bilder, kein Browser-Caching, kein WebP &ndash; die technischen Basics sind
          schnell fixbar und bringen sofortige Verbesserungen bei Ladezeit, Bounce-Rate und
          Conversion.
        </p>
        <ul className="mt-3 space-y-1 text-sm">
          <li>&#8226; Alle Bilder in WebP konvertieren (Ersparnis: ~70 %)</li>
          <li>&#8226; Browser-Caching aktivieren (Cache-Control-Header)</li>
          <li>&#8226; Lazy Loading für Below-the-Fold-Bilder</li>
          <li>&#8226; Crawl-Delay auf 1s reduzieren oder entfernen</li>
        </ul>
      </HighlightBox>

      {/* Brand Voice Guideline */}
      <h3 className="text-lg font-semibold mt-8 mb-3">Brand Voice Guideline (Empfehlung)</h3>

      <DataTable
        headers={["Dimension", "Aktuell", "Empfehlung"]}
        rows={[
          [
            "Ansprache",
            <span key="bv1a" className="text-danger">Gemischt (Du/Sie)</span>,
            <span key="bv1b" className="text-success">Konsequentes &quot;Du&quot;</span>,
          ],
          [
            "Tonalität",
            <span key="bv2a" className="text-danger">Sachlich, distanziert</span>,
            <span key="bv2b" className="text-success">Warm, kompetent, persönlich</span>,
          ],
          [
            "Markenkern",
            <span key="bv3a" className="text-warning">Nicht definiert</span>,
            <span key="bv3b" className="text-success">&quot;Handwerkskunst für dein Lieblings-Gerät&quot;</span>,
          ],
          [
            "Differenzierung",
            <span key="bv4a" className="text-warning">Wird nicht kommuniziert</span>,
            <span key="bv4b" className="text-success">&quot;Made in Meinerzhagen, nicht in China&quot;</span>,
          ],
          [
            "Visuell",
            <span key="bv5a" className="text-danger">Kein Gesicht, keine Menschen</span>,
            <span key="bv5b" className="text-success">Andrea als Gesicht der Marke</span>,
          ],
          [
            "Storytelling",
            <span key="bv6a" className="text-danger">Nicht vorhanden</span>,
            <span key="bv6b" className="text-success">Handwerk, Leidenschaft, Qualität</span>,
          ],
        ]}
      />

      {/* Top 5 Content Pieces */}
      <h3 className="text-lg font-semibold mt-8 mb-3">Top 5 Content-Pieces zum Erstellen</h3>

      <CardWrapper>
        <div className="space-y-4 text-sm">
          <div className="flex gap-3 items-start">
            <span className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">1</span>
            <div>
              <p className="font-semibold">Gründer-Story: &quot;Wie Andrea Pfeil 1 Million Handyhüllen nähte&quot;</p>
              <p className="text-muted">
                Emotionale Seite mit Fotos, Zitaten und der Geschichte hinter fitBAG.
                SEO-Keywords: &quot;handyhülle made in germany&quot;, &quot;handyhülle handgefertigt&quot;
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">2</span>
            <div>
              <p className="font-semibold">Behind the Scenes: &quot;17 Schritte zu deiner perfekten Hülle&quot;</p>
              <p className="text-muted">
                Bildstrecke oder Video des Fertigungsprozesses. Zeigt echtes Handwerk statt
                leerer Versprechen. Ideal für Social Media und Blog.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">3</span>
            <div>
              <p className="font-semibold">Materialguide: &quot;Leder vs. Alcantara vs. Filz &ndash; welches Material passt zu dir?&quot;</p>
              <p className="text-muted">
                Vergleichsseite mit Vor-/Nachteilen, Pflege-Tipps und Empfehlungen pro
                Lebensstil. Deckt mehrere Long-Tail-Keywords ab.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">4</span>
            <div>
              <p className="font-semibold">Kundengeschichten: &quot;Warum 33.000 Menschen fitBAG lieben&quot;</p>
              <p className="text-muted">
                Kuratierte Testimonial-Seite mit echten Bewertungen, Fotos und Zitaten.
                Stärkt Vertrauen und liefert SEO-Content.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">5</span>
            <div>
              <p className="font-semibold">Geräte-Landingpages: &quot;Die beste Hülle für dein iPhone 16 Pro&quot;</p>
              <p className="text-muted">
                Dedizierte Landingpages pro Top-Gerät mit Schema.org, Bewertungen und
                Konfigurator-Einstieg. Zielt auf Long-Tail-Keywords wie
                &quot;iphone 16 pro hülle leder&quot;.
              </p>
            </div>
          </div>
        </div>
      </CardWrapper>
    </section>
  );
}

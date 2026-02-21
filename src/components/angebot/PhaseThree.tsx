import { PhaseHeader } from "@/components/ui/PhaseHeader";
import { CardWrapper } from "@/components/ui/CardWrapper";
import { CheckList } from "@/components/ui/CheckList";
import { FindingBox } from "@/components/ui/FindingBox";

export function PhaseThree() {
  return (
    <section>
      <PhaseHeader
        number={3}
        title="Laufende Betreuung"
        subtitle="Wachstum, das nicht aufhört"
        price="750 €/Monat"
      />

      <p className="mb-4">
        Die technische Basis steht, der Konfigurator konvertiert – jetzt geht es darum,
        kontinuierlich mehr Kunden zu euch zu bringen und bestehende Kunden zurückzuholen.
      </p>

      <CardWrapper title="Email-Marketing (der unterschätzte Riesen-Hebel)">
        <p className="mb-3">
          fitBAG hat über eine Million Kunden, aber keinen aktiven Email-Kanal. Dabei kaufen
          Deutsche im Schnitt alle 2-3 Jahre ein neues Smartphone – und brauchen dann eine
          neue Hülle.
        </p>
        <CheckList
          items={[
            <span key="e1"><strong>Wiederkauf-Automation:</strong> &quot;Neues Smartphone? Deine neue fitBAG wartet.&quot; – automatisch getriggert</span>,
            <span key="e2"><strong>Post-Purchase-Flow:</strong> Bewertung anfragen, Pflegetipps, Cross-Sell (Tablet-Hülle zum Handy dazu)</span>,
            <span key="e3"><strong>Saisonale Kampagnen:</strong> iPhone-Launch (September), Samsung Galaxy S (Januar), Weihnachtsgeschenke</span>,
            <span key="e4"><strong>Newsletter:</strong> 1-2x pro Monat – neue Materialien, Einblicke aus der Werkstatt, Kundenstories</span>,
          ]}
        />
        <p className="mt-3">
          <strong>Konservative Rechnung:</strong> 50.000 Bestandskunden x 5% Wiederkauf x 25 € = 62.500 € Zusatzumsatz/Jahr
        </p>
      </CardWrapper>

      <CardWrapper title="SEO & Content">
        <CheckList
          items={[
            <span key="s1"><strong>Keyword-Monitoring:</strong> Rankings tracken, bei Veränderungen reagieren</span>,
            <span key="s2"><strong>Content-Erstellung:</strong> 2-4 SEO-optimierte Blogartikel pro Monat (Materialguides, Pflegetipps, Vergleiche statt nur Geräte-Ankündigungen)</span>,
            <span key="s3"><strong>Backlink-Aufbau:</strong> Kontakt zu Testportalen bei Smartphone-Launches (CHIP, ComputerBild)</span>,
            <span key="s4"><strong>Technisches Monitoring:</strong> Core Web Vitals, Crawl-Errors, Indexierungs-Probleme</span>,
          ]}
        />
      </CardWrapper>

      <CardWrapper title="Conversion-Optimierung">
        <CheckList
          items={[
            <span key="c1"><strong>A/B-Tests:</strong> CTA-Texte, Farben, Popup-Timing – datenbasiert optimieren</span>,
            <span key="c2"><strong>Bewertungs-Management:</strong> Mehr Reviews generieren, Trustpilot aktiv bespielen</span>,
            <span key="c3"><strong>Saisonale Anpassungen:</strong> Landing Pages für Smartphone-Launches vorbereiten</span>,
          ]}
        />
      </CardWrapper>

      <FindingBox type="warning">
        <h4 className="font-semibold mb-2">Wichtiger Hinweis: BFSG-Compliance</h4>
        <p className="mb-2">
          Das Barrierefreiheitsstärkungsgesetz ist seit Juni 2025 in Kraft. Der Audit hat
          mehrere Verstöße identifiziert (fehlende Alt-Texte, keine ARIA-Landmarks,
          Formularfelder ohne Labels).{" "}
          <strong>Bußgelder bis 100.000 € sind möglich, erste Abmahnwellen laufen.</strong>
        </p>
        <p>
          Ich empfehle dringend ein separates BFSG-Audit durch einen spezialisierten Anbieter.
          Das ist kein Bestandteil dieses Angebots, aber ich unterstütze gerne bei der
          Umsetzung der Ergebnisse.
        </p>
      </FindingBox>
    </section>
  );
}

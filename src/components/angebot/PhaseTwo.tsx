import { PhaseHeader } from "@/components/ui/PhaseHeader";
import { CardWrapper } from "@/components/ui/CardWrapper";
import { DataTable } from "@/components/ui/DataTable";
import { CheckList } from "@/components/ui/CheckList";
import { MetricRow } from "@/components/ui/MetricRow";
import { HighlightBox } from "@/components/ui/HighlightBox";

export function PhaseTwo() {
  return (
    <section>
      <PhaseHeader
        number={2}
        title="Konfigurator & Conversion"
        subtitle="Der größte Umsatz-Hebel"
        price="7.500 €"
      />

      <p className="mb-4">
        Der Konfigurator ist das Herzstück von fitBAG – und gleichzeitig der größte
        Conversion-Killer. Kunden müssen ihr Handymodell in ein leeres Textfeld tippen,
        sich durch 13+ Optionen kämpfen, und auf dem Smartphone ist der
        &quot;Kaufen&quot;-Button erst nach endlosem Scrollen erreichbar.
      </p>

      <p className="mb-4">
        <strong>Geschätzter Conversion-Verlust heute: 20-30%.</strong>
      </p>

      <CardWrapper title="Step-by-Step statt Endlos-Formular">
        <DataTable
          headers={["Schritt", "Heute", "Neu"]}
          rows={[
            [
              <strong key="s1">1. Gerät wählen</strong>,
              "Leeres Textfeld, keine Hilfe",
              "Visueller Gerätefinder: Marke → Modell → Variante. Top-10-Modelle als Quick-Select. Autocomplete für alles andere.",
            ],
            [
              <strong key="s2">2. Material wählen</strong>,
              "Dropdown-Liste mit Namen",
              "Bildkarten mit Nahaufnahmen der Materialien. Kurzbeschreibung (\"Weich & elegant\" / \"Robust & business\"). Preis pro Material sichtbar.",
            ],
            [
              <strong key="s3">3. Extras</strong>,
              "Checkbox-Liste",
              "Visuelle Karten: IO Pocket, Handykette, Bumper-Anpassung. Mit Bildern und \"+X €\" Preisen.",
            ],
            [
              <strong key="s4">4. Zusammenfassung</strong>,
              "Kleine Textbox rechts",
              "Große Zusammenfassung mit Live-Vorschau, Gesamtpreis prominent, Lieferzeit, Vertrauenssignale (Bewertungen, Made in Germany, Rückgabe).",
            ],
          ]}
        />
      </CardWrapper>

      <CardWrapper title="Mobile-Optimierung">
        <CheckList
          items={[
            <span key="m1"><strong>Sticky CTA-Button</strong> am unteren Bildschirmrand mit Live-Preis – immer sichtbar, egal wo der Kunde scrollt</span>,
            <span key="m2"><strong>Touch-optimierte Auswahl</strong> – große Tap-Targets, Swipe-Gesten für Materialauswahl</span>,
            <span key="m3"><strong>Fortschrittsanzeige</strong> – Kunde sieht immer, in welchem Schritt er ist</span>,
            <span key="m4"><strong>Express-Option</strong> – &quot;Meistverkauft für dein Modell&quot; als 1-Klick-Variante</span>,
          ]}
        />
      </CardWrapper>

      <CardWrapper title="Technische Umsetzung">
        <MetricRow label="Technologie" value="Next.js (React)" />
        <MetricRow label="Integration" value="Embed im JTL-Shop oder Subdomain" />
        <MetricRow label="Anbindung" value="JTL-Wawi API für Produkte & Warenkorb" />
        <MetricRow label="Hosting" value="Vercel (kostenlos im Hobby-Tier, ~20€/Monat Pro)" />
        <MetricRow label="Geräte-Datenbank" value="Automatisch aktualisiert bei neuen Modellen" />
      </CardWrapper>

      <HighlightBox variant="success" title="Erwartetes Ergebnis Phase 2">
        <p><strong>Conversion-Rate Konfigurator:</strong> +20-30% weniger Abbrüche</p>
        <p><strong>Mobile Conversion:</strong> +10-15% durch Sticky CTA</p>
        <p><strong>Durchschnittlicher Warenkorbwert:</strong> +10-15% durch visuelle Upsells (Extras als Bildkarten statt Checkboxen)</p>
        <p><strong>Geschätzter Mehrumsatz:</strong> 40.000 – 80.000 € im ersten Jahr</p>
        <p className="mt-3 text-sm opacity-80">Umsetzung: 3-4 Wochen</p>
      </HighlightBox>
    </section>
  );
}

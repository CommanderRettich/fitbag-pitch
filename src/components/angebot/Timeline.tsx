import { SectionTitle } from "@/components/ui/SectionTitle";
import { CardWrapper } from "@/components/ui/CardWrapper";

interface TimelineItemProps {
  week: string;
  title: string;
  description: string;
}

function TimelineItem({ week, title, description }: TimelineItemProps) {
  return (
    <div className="flex gap-5 my-5 pl-5 border-l-[3px] border-accent">
      <div className="font-bold text-accent min-w-[80px] shrink-0">{week}</div>
      <div>
        <strong>{title}</strong>
        <br />
        <span className="text-muted">{description}</span>
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <section>
      <SectionTitle title="Zeitplan" />

      <CardWrapper>
        <TimelineItem
          week="Woche 1-2"
          title="Phase 1: Quick Wins"
          description="Performance-Optimierung, SEO-Basics, Sofort-Fixes. Zwischenbericht nach Woche 1."
        />
        <TimelineItem
          week="Woche 3"
          title="Review & Abstimmung Phase 2"
          description="Ergebnisse Phase 1 besprechen. Konfigurator-Anforderungen im Detail abstimmen (Geräteliste, Materialien, Extras, JTL-Anbindung)."
        />
        <TimelineItem
          week="Woche 4-7"
          title="Phase 2: Konfigurator-Entwicklung"
          description="Prototyp nach Woche 5. Testphase und Feinschliff in Woche 6-7."
        />
        <TimelineItem
          week="Woche 8"
          title="Go-Live Konfigurator & Start Phase 3"
          description="Konfigurator live schalten. Email-Marketing Setup beginnen."
        />
        <TimelineItem
          week="Ab Woche 9"
          title="Laufende Betreuung"
          description="Monatlicher Report mit Zahlen: Traffic, Rankings, Conversion, Umsatz-Impact. Quartalsweise Strategie-Call."
        />
      </CardWrapper>
    </section>
  );
}

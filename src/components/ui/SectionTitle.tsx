interface SectionTitleProps {
  number?: string;
  title: string;
}

export function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <h2 className="text-2xl font-bold mt-12 mb-5 pb-3 border-b-2 border-accent">
      {number && <span className="text-accent mr-2">{number}</span>}
      {title}
    </h2>
  );
}

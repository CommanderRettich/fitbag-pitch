interface PhaseHeaderProps {
  number: number;
  title: string;
  subtitle: string;
  price: string;
}

export function PhaseHeader({ number, title, subtitle, price }: PhaseHeaderProps) {
  return (
    <div className="flex items-center gap-4 mt-12 mb-5 pb-3 border-b-2 border-accent flex-wrap">
      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center font-extrabold text-xl text-white shrink-0">
        {number}
      </div>
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="text-sm text-muted">{subtitle}</span>
      </div>
      <div className="text-xl font-bold text-accent">{price}</div>
    </div>
  );
}

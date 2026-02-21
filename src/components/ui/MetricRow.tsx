import { cn } from "@/lib/utils";

interface MetricRowProps {
  label: string;
  value: string | React.ReactNode;
  className?: string;
}

export function MetricRow({ label, value, className }: MetricRowProps) {
  return (
    <div className={cn("flex justify-between py-2.5 border-b border-border last:border-b-0", className)}>
      <span className="text-muted">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

import { cn } from "@/lib/utils";

type FindingType = "critical" | "positive" | "warning" | "info";

const styleMap: Record<FindingType, string> = {
  critical: "border-l-danger bg-danger/10",
  positive: "border-l-success bg-success/10",
  warning: "border-l-warning bg-warning/10",
  info: "border-l-info bg-info/10",
};

interface FindingBoxProps {
  type: FindingType;
  children: React.ReactNode;
  className?: string;
}

export function FindingBox({ type, children, className }: FindingBoxProps) {
  return (
    <div className={cn("border-l-4 p-4 my-4 rounded-r-lg", styleMap[type], className)}>
      {children}
    </div>
  );
}

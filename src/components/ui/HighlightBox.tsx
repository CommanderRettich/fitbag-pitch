import { cn } from "@/lib/utils";

type HighlightVariant = "primary" | "success" | "danger";

const variantMap: Record<HighlightVariant, string> = {
  primary: "bg-gradient-to-br from-[#1a1a2e] to-[#0f3460]",
  success: "bg-gradient-to-br from-success to-[#00cec9]",
  danger: "bg-gradient-to-br from-danger to-[#d63031]",
};

interface HighlightBoxProps {
  variant?: HighlightVariant;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function HighlightBox({ variant = "primary", title, children, className }: HighlightBoxProps) {
  return (
    <div className={cn("p-7 rounded-xl my-6 text-white", variantMap[variant], className)}>
      <h3 className={cn("text-lg font-bold mb-3", variant === "primary" ? "text-accent-light" : variant === "danger" ? "text-warning" : "text-white")}>{title}</h3>
      <div className="text-white/90 space-y-2">{children}</div>
    </div>
  );
}

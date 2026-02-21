import { cn } from "@/lib/utils";

type ScoreColor = "red" | "yellow" | "green" | "blue";

const colorMap: Record<ScoreColor, string> = {
  red: "text-danger",
  yellow: "text-warning",
  green: "text-success",
  blue: "text-info",
};

interface ScoreCardProps {
  label: string;
  score: string;
  color: ScoreColor;
  sublabel: string;
}

export function ScoreCard({ label, score, color, sublabel }: ScoreCardProps) {
  return (
    <div className="bg-card rounded-xl p-5 text-center border border-border">
      <div className="text-xs text-muted font-medium uppercase tracking-wider">{label}</div>
      <div className={cn("text-4xl font-extrabold my-2", colorMap[color])}>{score}</div>
      <div className="text-xs text-muted font-medium">{sublabel}</div>
    </div>
  );
}

import { cn } from "@/lib/utils";

interface CardWrapperProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function CardWrapper({ title, children, className }: CardWrapperProps) {
  return (
    <div className={cn("bg-card rounded-xl p-6 my-5 border border-border", className)}>
      {title && <h4 className="text-base font-semibold mb-4">{title}</h4>}
      {children}
    </div>
  );
}

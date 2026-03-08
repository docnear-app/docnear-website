import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  inverted?: boolean;
}

export default function SectionBadge({ children, inverted = false }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full",
        inverted
          ? "bg-teal-400/20 text-teal-300"
          : "bg-teal-50 text-teal-700 border border-teal-100",
      )}
    >
      {children}
    </span>
  );
}

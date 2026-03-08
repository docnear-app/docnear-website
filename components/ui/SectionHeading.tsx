import { cn } from "@/lib/utils";
import SectionBadge from "@/components/ui/SectionBadge";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  inverted?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
      {label && (
        <div className="mb-4">
          <SectionBadge inverted={inverted}>{label}</SectionBadge>
        </div>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl font-bold tracking-tight",
          inverted ? "text-white" : "text-gray-900",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            inverted ? "text-gray-300" : "text-gray-500",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

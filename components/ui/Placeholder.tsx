import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type PlaceholderProps = {
  gradient?: string;
  label?: ReactNode;
  aspectRatio?: string;
  className?: string;
  labelClassName?: string;
};

const defaultGradient =
  "linear-gradient(135deg, #1a1a2e 0%, #2c3e50 50%, #4a6b8e 100%)";

export function Placeholder({
  gradient = defaultGradient,
  label,
  aspectRatio,
  className,
  labelClassName,
}: PlaceholderProps) {
  const style: CSSProperties = { backgroundImage: gradient };
  if (aspectRatio) style.aspectRatio = aspectRatio;

  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden flex items-center justify-center",
        className,
      )}
      style={style}
      aria-hidden={label ? undefined : true}
    >
      {label && (
        <span
          className={cn(
            "font-display text-white/80 text-[clamp(2rem,5vw,4rem)] font-light tracking-[0.05em]",
            labelClassName,
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}

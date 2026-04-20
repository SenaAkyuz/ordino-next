import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  emphasis?: ReactNode;
  description?: ReactNode;
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

const titleSizes: Record<NonNullable<SectionHeaderProps["as"]>, string> = {
  h1: "text-[clamp(3rem,7vw,6.5rem)]",
  h2: "text-[clamp(2.2rem,4vw,4rem)]",
  h3: "text-[clamp(1.6rem,2.5vw,2.4rem)]",
};

export function SectionHeader({
  eyebrow,
  title,
  emphasis,
  description,
  as = "h2",
  align = "left",
  className,
  titleClassName,
}: SectionHeaderProps) {
  const Heading = as as ElementType;
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={cn("max-w-[70ch]", alignClass, className)}>
      {eyebrow && (
        <p className="font-body text-[0.72rem] uppercase tracking-[4px] text-gray mb-6">
          {eyebrow}
        </p>
      )}

      <Heading
        className={cn(
          "font-display font-light leading-[1.05] tracking-[-0.01em] text-balance",
          titleSizes[as],
          titleClassName,
        )}
      >
        {title}
        {emphasis && (
          <>
            {" "}
            <em className="italic font-normal">{emphasis}</em>
          </>
        )}
      </Heading>

      {description && (
        <p className="font-body text-[1.05rem] leading-[1.7] text-gray-dark mt-6 max-w-[60ch]">
          {description}
        </p>
      )}
    </div>
  );
}

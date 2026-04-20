import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "cta";

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2 rounded-[10em] font-body transition-[background,color,border-color] duration-500 cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-black text-white border border-black px-[30px] py-3 text-[0.95rem] hover:bg-white hover:text-black",
  secondary:
    "bg-transparent text-black border border-black px-[30px] py-3 text-[0.95rem] hover:bg-black hover:text-white",
  cta:
    "bg-black text-white border border-black px-10 py-4 text-[1.05rem] tracking-[0.02em] hover:bg-white hover:text-black",
};

const isInternal = (href: string) => href.startsWith("/") || href.startsWith("#");

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const classes = cn(base, variants[variant], props.className);

  if ("href" in props && props.href !== undefined) {
    if (isInternal(props.href)) {
      return (
        <Link href={props.href} className={classes}>
          {props.children}
        </Link>
      );
    }
    return (
      <a href={props.href} className={classes}>
        {props.children}
      </a>
    );
  }

  const { variant: _variant, className: _className, children, ...rest } = props;
  void _variant;
  void _className;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

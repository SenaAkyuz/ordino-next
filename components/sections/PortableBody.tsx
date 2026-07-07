import Image from "next/image";
import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { urlForImage } from "@/sanity/lib/image";

// Sanity asset ref'inden (image-<hash>-<w>x<h>-<ext>) gercek boyutlari cikarir → CLS onler.
function refDimensions(ref?: string): { width: number; height: number } {
  const m = ref?.match(/-(\d+)x(\d+)-/);
  if (!m) return { width: 1600, height: 900 };
  return { width: Number(m[1]), height: Number(m[2]) };
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => (
      <h2 className="mt-12 mb-5 font-display text-[clamp(1.6rem,2.6vw,2.2rem)] font-light leading-[1.25] tracking-[-0.3px] text-black">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 mb-4 font-display text-[clamp(1.35rem,2vw,1.7rem)] font-normal leading-[1.3] text-black">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 mb-3 font-body text-[1.1rem] font-medium leading-[1.4] text-black">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-10 border-l-2 border-accent pl-6 font-display text-[clamp(1.2rem,1.6vw,1.4rem)] font-light italic leading-[1.5] text-[#444]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-6 list-disc space-y-2 pl-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-6 list-decimal space-y-2 pl-6">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-medium text-black">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const href = (value?.href as string) || "#";
      const blank = Boolean(value?.blank);
      return (
        <a
          href={href}
          {...(blank
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="text-accent underline underline-offset-2 transition-opacity hover:opacity-70"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const ref = value?.asset?._ref as string | undefined;
      if (!ref) return null;
      // Query lqip/dimensions dereference ediyorsa onu kullan, yoksa ref'ten cikar (CLS=0).
      const dims = value?.dimensions as
        | { width?: number; height?: number }
        | undefined;
      const { width, height } =
        dims?.width && dims?.height
          ? { width: dims.width, height: dims.height }
          : refDimensions(ref);
      const lqip = value?.lqip as string | undefined;
      const url = urlForImage(value).width(1600).fit("max").auto("format").url();
      return (
        <figure className="my-10">
          <Image
            src={url}
            alt={(value?.alt as string) || ""}
            width={width}
            height={height}
            sizes="(max-width: 800px) 100vw, 800px"
            className="h-auto w-full rounded-[4px]"
            {...(lqip ? { placeholder: "blur", blurDataURL: lqip } : {})}
          />
        </figure>
      );
    },
  },
};

export function PortableBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}

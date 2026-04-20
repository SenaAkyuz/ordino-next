import { site } from "@/lib/data/site";

export function SideFixed() {
  return (
    <>
      <div className="hidden md:flex fixed left-[35px] bottom-0 z-[999] flex-col items-center gap-5">
        <a
          href={`mailto:${site.email}`}
          className="[writing-mode:vertical-rl] text-xs tracking-[1px] text-gray hover:text-black transition-colors duration-300"
        >
          {site.email}
        </a>
        <div className="w-px h-[60px] bg-gray" aria-hidden="true" />
      </div>

      <div className="hidden md:flex fixed right-[35px] bottom-0 z-[999] flex-col items-center gap-[15px]">
        <div className="w-px h-10 bg-gray mb-[5px]" aria-hidden="true" />
        {site.social.map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.name}
            className="[writing-mode:vertical-rl] text-[0.7rem] tracking-[1px] text-gray hover:text-black transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}

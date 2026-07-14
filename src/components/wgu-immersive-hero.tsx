import Image from "next/image";
import type { ReactNode } from "react";

type Accent = "signal" | "amber" | "magenta";

type WguImmersiveHeroProps = {
  accent?: Accent;
  children: ReactNode;
  imageAlt: string;
  imageSrc: string;
  minHeight?: DesktopMinHeight;
};

type DesktopMinHeight =
  | "min-h-[660px]"
  | "min-h-[680px]"
  | "min-h-[700px]"
  | "min-h-[720px]";

const accentWash: Record<Accent, string> = {
  signal: "bg-[radial-gradient(circle_at_72%_40%,rgba(25,214,197,0.24),transparent_36%)]",
  amber: "bg-[radial-gradient(circle_at_72%_40%,rgba(242,184,75,0.22),transparent_36%)]",
  magenta:
    "bg-[radial-gradient(circle_at_72%_40%,rgba(255,79,216,0.2),transparent_36%)]",
};

const desktopMinHeight: Record<DesktopMinHeight, string> = {
  "min-h-[660px]": "min-h-0 sm:min-h-[660px]",
  "min-h-[680px]": "min-h-0 sm:min-h-[680px]",
  "min-h-[700px]": "min-h-0 sm:min-h-[700px]",
  "min-h-[720px]": "min-h-0 sm:min-h-[720px]",
};

export function WguImmersiveHero({
  accent = "signal",
  children,
  imageAlt,
  imageSrc,
  minHeight = "min-h-[680px]",
}: WguImmersiveHeroProps) {
  return (
    <section
      className={`relative isolate ${desktopMinHeight[minHeight]} overflow-hidden border-b border-white/10`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,13,17,0.98)] via-[rgba(10,13,17,0.76)] to-[rgba(10,13,17,0.24)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,13,17,0.95)] via-transparent to-[rgba(10,13,17,0.58)]" />
      <div className={`absolute inset-0 ${accentWash[accent]}`} />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--ink)] to-transparent" />
      <div className="relative z-10 flex min-h-[inherit] items-center">
        {children}
      </div>
    </section>
  );
}

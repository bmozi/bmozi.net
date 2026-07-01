import Image from "next/image";

type BrandLockupProps = {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  mode?: "stacked" | "single";
};

export function BrandLockup({
  className = "",
  markClassName = "h-10 w-10",
  textClassName = "",
  mode = "stacked",
}: BrandLockupProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="shrink-0 overflow-hidden border border-white/15 bg-[var(--ink)] shadow-[5px_5px_0_var(--signal)]">
        <Image
          src="/brand/bmozi-technical-mark.svg"
          alt=""
          width={256}
          height={256}
          className={`${markClassName} object-cover`}
        />
      </span>
      {mode === "single" ? (
        <span
          className={`font-display font-semibold leading-none text-white ${textClassName}`}
        >
          BMOZI Technical
        </span>
      ) : (
        <span className={`flex flex-col leading-none ${textClassName}`}>
          <span className="font-display font-extrabold tracking-normal text-white">
            BMOZI
          </span>
          <span className="mt-1 font-mono text-[0.72em] font-medium uppercase tracking-[0.08em] text-[var(--muted)]">
            Technical
          </span>
        </span>
      )}
    </span>
  );
}

import type { CSSProperties } from "react";

type WguMechanismStep = {
  label: string;
  detail: string;
  tone?: "signal" | "amber" | "magenta" | "muted";
};

type WguMechanismDiagramProps = {
  eyebrow: string;
  title: string;
  caption: string;
  steps: WguMechanismStep[];
  aside?: string;
  light?: boolean;
};

const tones = {
  signal: {
    border: "border-[var(--signal)]",
    text: "text-[var(--signal)]",
    bg: "bg-[rgba(25,214,197,0.1)]",
  },
  amber: {
    border: "border-[var(--amber)]",
    text: "text-[var(--amber)]",
    bg: "bg-[rgba(242,184,75,0.12)]",
  },
  magenta: {
    border: "border-[var(--magenta)]",
    text: "text-[var(--magenta)]",
    bg: "bg-[rgba(255,79,216,0.1)]",
  },
  muted: {
    border: "border-white/20",
    text: "text-white/65",
    bg: "bg-white/[0.045]",
  },
} as const;

export function WguMechanismDiagram({
  eyebrow,
  title,
  caption,
  steps,
  aside,
  light = false,
}: WguMechanismDiagramProps) {
  return (
    <section
      className={
        light
          ? "border-b border-black/10 bg-[var(--paper)] text-[var(--ink)]"
          : "border-b border-white/10 bg-[#0b1017] text-[var(--paper)]"
      }
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div
          className={
            light
              ? "border border-black/10 bg-white p-5 shadow-[10px_10px_0_rgba(12,17,22,0.08)] sm:p-6"
              : "border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[10px_10px_0_rgba(25,214,197,0.08)] sm:p-6"
          }
        >
          <div className="grid gap-8 lg:grid-cols-[0.3fr_0.7fr]">
            <div>
              <p
                className={
                  light
                    ? "font-mono text-xs uppercase text-[var(--magenta)]"
                    : "font-mono text-xs uppercase text-[var(--signal)]"
                }
              >
                {eyebrow}
              </p>
              <h2
                className={
                  light
                    ? "mt-3 font-display text-3xl font-black leading-tight"
                    : "mt-3 font-display text-3xl font-black leading-tight text-white"
                }
              >
                {title}
              </h2>
              <p
                className={
                  light
                    ? "mt-4 text-sm leading-6 text-black/68"
                    : "mt-4 text-sm leading-6 text-[var(--soft)]"
                }
              >
                {caption}
              </p>
              {aside ? (
                <p
                  className={
                    light
                      ? "mt-5 border-l-2 border-[var(--magenta)] pl-4 font-mono text-xs uppercase leading-5 text-black/55"
                      : "mt-5 border-l-2 border-[var(--magenta)] pl-4 font-mono text-xs uppercase leading-5 text-white/70"
                  }
                >
                  {aside}
                </p>
              ) : null}
            </div>
            <div className="overflow-x-auto pb-2">
              <div
                className="grid min-w-[46rem] grid-cols-[repeat(var(--step-count),minmax(0,1fr))] gap-3"
                style={{ "--step-count": steps.length } as CSSProperties}
              >
                {steps.map((step, index) => {
                  const tone = tones[step.tone ?? "muted"];
                  return (
                    <div key={step.label} className="relative">
                      {index < steps.length - 1 ? (
                        <span
                          className={
                            light
                              ? "absolute left-[calc(100%-0.25rem)] top-7 z-0 h-px w-4 bg-black/20"
                              : "absolute left-[calc(100%-0.25rem)] top-7 z-0 h-px w-4 bg-white/25"
                          }
                        />
                      ) : null}
                      <div
                        className={`relative z-10 h-full border ${tone.border} ${
                          light ? "bg-white" : tone.bg
                        } p-4`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`grid h-8 w-8 place-items-center border ${tone.border} ${
                              light ? "bg-black/[0.03]" : "bg-black/35"
                            } font-mono text-xs ${tone.text}`}
                          >
                            {index + 1}
                          </span>
                          <h3
                            className={
                              light
                                ? "font-display text-lg font-black leading-tight"
                                : "font-display text-lg font-black leading-tight text-white"
                            }
                          >
                            {step.label}
                          </h3>
                        </div>
                        <p
                          className={
                            light
                              ? "mt-4 text-sm leading-6 text-black/65"
                              : "mt-4 text-sm leading-6 text-[var(--soft)]"
                          }
                        >
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

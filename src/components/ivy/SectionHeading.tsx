import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <Reveal>
          <div
            className={`mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-soft ${
              align === "center" ? "" : ""
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
          {title} {highlight && <span className="text-gradient-gold">{highlight}</span>}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={`mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg ${
              align === "center" ? "mx-auto max-w-2xl" : ""
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

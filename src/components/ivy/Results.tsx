import { STATS } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

export function Results() {
  return (
    <section id="results" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_60%_at_50%_0%,oklch(0.3_0.06_158/0.35),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Results That Speak"
          title="Numbers behind our"
          highlight="global success"
          subtitle="We focus on what truly drives results — personalized planning, dedicated mentorship and consistent academic rigor."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={(i % 3) * 0.1} direction="up">
              <div className="group relative overflow-hidden rounded-3xl glass-strong p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-gold)]">
                <span className="pointer-events-none absolute -inset-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(circle,oklch(0.78_0.13_88/0.15),transparent_60%)]" />
                <div className="relative font-display text-5xl font-semibold text-gradient-gold sm:text-6xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="relative mt-3 text-sm font-medium text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

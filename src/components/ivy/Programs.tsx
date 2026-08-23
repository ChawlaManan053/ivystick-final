import { PROGRAMS } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

export function Programs() {
  return (
    <section id="programs" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Our Programs"
          title="World-class preparation for"
          highlight="every exam"
          subtitle="Elite, mentor-led programs designed to turn ambition into admission — each one tailored to your goals and target universities."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08} direction="up">
              <TiltCard className="h-full">
                <div className="relative h-full overflow-hidden rounded-3xl glass p-6 transition-colors duration-300 group-hover:border-gold/40">
                  {/* animated border sheen */}
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px [background:var(--gradient-gold)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="mb-5 inline-grid h-14 w-14 place-items-center rounded-2xl [background:var(--gradient-forest)] text-gold-soft transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                    <p.icon size={24} />
                  </div>
                  <h3 className="font-display text-2xl text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-gold-soft opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

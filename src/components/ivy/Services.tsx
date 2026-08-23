import { SERVICES } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="What We Offer"
          title="A complete, premium"
          highlight="support system"
          subtitle="From your first diagnostic to your final acceptance letter, every detail is handled by dedicated mentors."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06} direction="scale">
              <div className="group flex h-full flex-col items-start gap-4 rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[var(--shadow-gold)]">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/[0.04] text-gold-soft ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:[background:var(--gradient-forest)] group-hover:text-gold-soft">
                  <s.icon size={20} />
                </div>
                <h3 className="font-display text-lg leading-tight text-foreground">{s.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

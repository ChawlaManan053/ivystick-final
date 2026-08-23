import { WHY_CHOOSE } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

export function WhyChoose() {
  return (
    <section id="why" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-gold/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Why IVY STICK"
          title="The advantages that"
          highlight="set us apart"
          subtitle="A premium experience engineered end-to-end for measurable, life-changing outcomes."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {WHY_CHOOSE.map((w, i) => (
            <Reveal key={w.title} delay={(i % 5) * 0.06} direction="up">
              <TiltCard className="h-full" intensity={8}>
                <div className="relative flex h-full flex-col rounded-3xl glass p-6 transition-colors duration-300 group-hover:border-gold/40">
                  <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl [background:var(--gradient-forest)] text-gold-soft transition-transform duration-300 group-hover:scale-110">
                    <w.icon size={20} />
                  </div>
                  <h3 className="font-display text-xl leading-tight text-foreground">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

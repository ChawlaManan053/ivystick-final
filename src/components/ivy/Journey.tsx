import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { JOURNEY } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 70%"],
  });
  const height = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 80,
    damping: 24,
  });

  return (
    <section id="roadmap" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Student Journey"
          title="Your roadmap to"
          highlight="global success"
          subtitle="A guided, milestone-driven path — from first conversation to acceptance letter."
        />

        <div ref={ref} className="relative mx-auto mt-16 max-w-4xl">
          {/* central line */}
          <div className="absolute left-6 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              style={{ height }}
              className="w-full [background:var(--gradient-gold)] shadow-[0_0_16px_var(--gold)]"
            />
          </div>

          <div className="space-y-10">
            {JOURNEY.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={step.title}
                  className={`relative flex items-center gap-6 pl-16 md:pl-0 ${
                    left ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* node */}
                  <div className="absolute left-6 z-10 -translate-x-1/2 md:left-1/2">
                    <div className="grid h-11 w-11 place-items-center rounded-full [background:var(--gradient-forest)] text-gold-soft ring-4 ring-background">
                      <step.icon size={16} />
                    </div>
                  </div>

                  <div className="hidden flex-1 md:block" />
                  <Reveal
                    className="flex-1"
                    direction={left ? "right" : "left"}
                    delay={0.05}
                  >
                    <div className="group rounded-2xl glass p-5 transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.06]">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-2xl text-gradient-gold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-xl text-foreground">{step.title}</h3>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

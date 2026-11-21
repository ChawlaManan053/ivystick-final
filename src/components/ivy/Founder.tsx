import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Reveal } from "./Reveal";

export function Founder() {
  const sigRef = useRef(null);
  const sigInView = useInView(sigRef, { once: true, margin: "-100px" });

  return (
    <section id="founder" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gold/10 blur-[130px]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <div>
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Meet Our Founder
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              Transforming ambitious students into <span className="text-gradient-gold">global scholars</span>
            </h2>
          </Reveal>

          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <Reveal delay={0.1}>
              <p>
                The visionary behind IVY STICK is passionate about transforming ambitious
                students into globally competitive scholars. His mentorship philosophy is built
                upon personalized attention, strategic preparation, academic excellence and
                long-term success.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Through years of dedication, he has inspired students to unlock opportunities at
                the world's most prestigious universities. His mission is not just to improve
                scores — but to transform futures.
              </p>
            </Reveal>
          </div>

          {/* Quote */}
          <Reveal delay={0.2}>
            <div className="relative mx-auto mt-10 flex max-w-2xl flex-col items-center rounded-3xl glass-strong p-8 text-center sm:p-10">
              <FaQuoteLeft className="mb-4 text-gold/60" size={28} />
              <p className="font-display text-2xl italic leading-snug text-foreground sm:text-3xl">
                "Success is built through consistency, guidance, and belief."
              </p>

              {/* Animated signature */}
              <svg
                ref={sigRef}
                viewBox="0 0 320 80"
                className="mt-6 h-16 w-56 text-gold"
                fill="none"
              >
                <motion.path
                  d="M6 54 C 30 10, 46 70, 64 34 S 96 4, 110 46 C 120 70, 132 20, 150 44 C 166 66, 178 18, 200 40 C 220 60, 236 24, 262 42 C 286 58, 300 30, 314 20"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={sigInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2.4, ease: "easeInOut" }}
                />
              </svg>
              <div className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Founder, IVY STICK
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

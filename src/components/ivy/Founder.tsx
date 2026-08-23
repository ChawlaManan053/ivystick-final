import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Reveal } from "./Reveal";
import founderAsset from "@/assets/founder.jpg.asset.json";

const founder = founderAsset.url;

export function Founder() {
  const sigRef = useRef(null);
  const sigInView = useInView(sigRef, { once: true, margin: "-100px" });

  return (
    <section id="founder" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Image */}
          <Reveal direction="right">
            <div className="group relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[2.5rem] [background:var(--gradient-gold)] opacity-25 blur-2xl transition-opacity duration-500 group-hover:opacity-45" />
              <div className="absolute -right-4 -top-4 h-24 w-24 animate-spin-slow rounded-full border border-dashed border-gold/40" />
              <div className="relative overflow-hidden rounded-[2rem] border border-gold/25 shadow-[var(--shadow-soft)]">
                <img
                  src={founder}
                  alt="Founder of IVY STICK"
                  loading="lazy"
                  width={618}
                  height={922}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl glass-strong px-5 py-3">
                  <div className="font-display text-xl text-foreground">Founder &amp; Chief Mentor</div>
                  <div className="text-xs text-gold-soft">IVY STICK Education</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
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

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
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
              <div className="relative mt-8 rounded-3xl glass-strong p-7">
                <FaQuoteLeft className="mb-3 text-gold/60" size={26} />
                <p className="font-display text-2xl italic leading-snug text-foreground sm:text-3xl">
                  "Success is built through consistency, guidance, and belief."
                </p>

                {/* Animated signature */}
                <svg
                  ref={sigRef}
                  viewBox="0 0 320 80"
                  className="mt-5 h-16 w-56 text-gold"
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
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Founder, IVY STICK
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

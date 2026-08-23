import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import { TESTIMONIALS } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(id);
  }, [paused, count]);

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);
  const t = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      className="section-pad relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/12 blur-[130px]" />
      <div className="relative mx-auto max-w-5xl px-5">
        <SectionHeading
          eyebrow="Success Stories"
          title="Loved by students &"
          highlight="parents worldwide"
        />

        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 rounded-[2rem] glass-strong p-8 sm:p-10 md:grid-cols-[1fr_1.4fr]"
            >
              {/* video placeholder */}
              <div className="group relative aspect-video overflow-hidden rounded-2xl [background:var(--gradient-forest)] md:aspect-auto">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,oklch(0.5_0.1_158),oklch(0.18_0.03_158))]" />
                <button
                  aria-label="Play video testimonial"
                  className="absolute inset-0 grid place-items-center"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full glass-strong text-gold transition-transform duration-300 group-hover:scale-110">
                    <FaPlay size={18} className="ml-1" />
                  </span>
                </button>
                <span className="absolute bottom-3 left-3 rounded-full glass px-3 py-1 text-xs text-foreground">
                  Video Testimonial
                </span>
              </div>

              <div className="flex flex-col justify-center">
                <FaQuoteLeft className="mb-4 text-gold/50" size={26} />
                <p
                  className={`font-display italic leading-snug text-foreground ${
                    t.quote.length > 220
                      ? "text-lg sm:text-xl"
                      : t.quote.length > 140
                        ? "text-xl sm:text-2xl"
                        : "text-2xl sm:text-3xl"
                  }`}
                >
                  {t.quote}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full [background:var(--gradient-gold)] font-display text-lg font-bold text-accent-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-gold-soft">{t.role}</div>
                  </div>
                </div>
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                    >
                      <FaStar className="text-gold" size={18} />
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              aria-label="Previous"
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center rounded-full glass transition-colors hover:border-gold/50 hover:text-gold"
            >
              <FaChevronLeft />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 [background:var(--gradient-gold)]" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center rounded-full glass transition-colors hover:border-gold/50 hover:text-gold"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

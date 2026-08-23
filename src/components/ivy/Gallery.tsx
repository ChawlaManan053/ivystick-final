import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiX } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const IMAGES = [
  { src: g2, label: "Global Admissions", span: "row-span-2" },
  { src: g3, label: "1:1 Mentorship", span: "" },
  { src: g6, label: "Our Students", span: "" },
  { src: g5, label: "Premium Library", span: "row-span-2" },
  { src: g4, label: "Workshops & Events", span: "" },
  { src: g1, label: "Study Lounge", span: "" },
];

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Inside IVY STICK"
          title="A glimpse into our"
          highlight="world of excellence"
          subtitle="Institute spaces, events, workshops and the students who make it all worthwhile."
        />

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-3 lg:auto-rows-[220px]">
          {IMAGES.map((img, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} direction="scale" className={img.span}>
              <button
                onClick={() => setActive(img.src)}
                className={`group relative h-full w-full overflow-hidden rounded-2xl border border-border/60`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-0 flex items-end justify-between p-4">
                  <span className="font-display text-lg text-foreground">{img.label}</span>
                  <span className="grid h-9 w-9 translate-y-2 place-items-center rounded-full glass text-gold opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <FaSearchPlus size={14} />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[9500] grid place-items-center bg-background/90 p-6 backdrop-blur-md"
          >
            <button
              aria-label="Close"
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full glass text-foreground"
            >
              <FiX size={22} />
            </button>
            <motion.img
              src={active}
              alt="Gallery"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-2xl border border-gold/20 shadow-[var(--shadow-soft)]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

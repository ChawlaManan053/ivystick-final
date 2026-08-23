import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  FaBookOpen,
  FaGraduationCap,
  FaGlobeAmericas,
  FaUniversity,
  FaCertificate,
  FaStar,
} from "react-icons/fa";
import { ParticleField } from "./ParticleField";
import { MagneticButton } from "./MagneticButton";
import { CONTACT } from "@/lib/site-data";

const floaters = [
  { Icon: FaGraduationCap, x: "12%", y: "14%", size: 30, delay: 0, dur: 8 },
  { Icon: FaBookOpen, x: "70%", y: "8%", size: 26, delay: 0.6, dur: 9 },
  { Icon: FaGlobeAmericas, x: "82%", y: "58%", size: 34, delay: 1.2, dur: 10 },
  { Icon: FaUniversity, x: "8%", y: "66%", size: 28, delay: 0.9, dur: 11 },
  { Icon: FaCertificate, x: "46%", y: "80%", size: 24, delay: 0.3, dur: 8.5 },
];

function ParallaxCard({
  Icon,
  label,
  sub,
  className,
  depth,
  mouse,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  sub: string;
  className: string;
  depth: number;
  mouse: { x: number; y: number };
}) {
  return (
    <motion.div
      style={{ x: mouse.x * depth, y: mouse.y * depth }}
      className={`absolute ${className}`}
    >
      <div className="animate-floaty rounded-3xl glass-strong p-4 shadow-[var(--shadow-soft)]">
        <div className="mb-2 grid h-11 w-11 place-items-center rounded-2xl [background:var(--gradient-forest)] text-gold-soft">
          <Icon size={20} />
        </div>
        <div className="font-display text-lg leading-tight text-foreground">{label}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 }).current;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const onMouse = (e: React.MouseEvent) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;
    mouse.x = nx * 20;
    mouse.y = ny * 20;
    if (mouseRef.current) {
      mouseRef.current.style.setProperty("--mx", `${nx * 12}px`);
      mouseRef.current.style.setProperty("--my", `${ny * 12}px`);
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMouse}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="absolute inset-0 [background:var(--gradient-hero)]" />
      <ParticleField className="absolute inset-0 h-full w-full" />
      {/* animated glows */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 animate-pulse-glow rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 animate-pulse-glow rounded-full bg-gold/15 blur-[120px]" />

      {/* floating background icons */}
      {floaters.map(({ Icon, x, y: fy, size, delay, dur }, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute text-gold/15"
          style={{ left: x, top: fy }}
          animate={{ y: [0, -26, 0], rotate: [0, 8, 0] }}
          transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide text-gold-soft"
          >
            <FaStar size={11} /> Premium International Education · SAT · ACT · AP · IBDP
          </motion.div>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="block"
            >
              Master SAT · AP · IB
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block"
            >
              IGCSE &amp; ACT
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8 }}
              className="mt-2 block text-gradient-gold"
            >
              Where Top Scores Meet Global Dreams.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Helping ambitious students gain admission to the world's most prestigious
            universities through expert mentorship, personalized guidance, and world-class
            preparation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#register" variant="gold">
              Book Free Consultation
            </MagneticButton>
            <MagneticButton href="#programs" variant="outline">
              Explore Programs
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
          >
            <span><strong className="text-gradient-gold font-display text-xl">1500+</strong> SAT Achievers</span>
            <span><strong className="text-gradient-gold font-display text-xl">90%</strong> Top-University Admits</span>
            <span><strong className="text-gradient-gold font-display text-xl">50+</strong> Partner Schools</span>
          </motion.div>
        </div>

        {/* Floating 3D-ish education cluster */}
        <div ref={mouseRef} className="relative hidden h-[460px] lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-gold/20"
          />
          <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20" />
          <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full [background:var(--gradient-forest)] opacity-30 blur-2xl" />

          <ParallaxCard Icon={FaGraduationCap} label="Global Admits" sub="Ivy League & beyond" className="left-2 top-4" depth={1.4} mouse={mouse} />
          <ParallaxCard Icon={FaGlobeAmericas} label="21+ Universities" sub="Partnered worldwide" className="right-0 top-24" depth={0.8} mouse={mouse} />
          <ParallaxCard Icon={FaBookOpen} label="50,000+" sub="Practice questions" className="bottom-6 left-6" depth={1.1} mouse={mouse} />
          <ParallaxCard Icon={FaCertificate} label="Perfect Scores" sub="1600 SAT achievers" className="bottom-16 right-4" depth={1.6} mouse={mouse} />
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#universities"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-9 w-5 rounded-full border border-white/25 p-1">
          <span className="mx-auto block h-2 w-1 rounded-full bg-gold" />
        </span>
      </motion.a>
    </section>
  );
}

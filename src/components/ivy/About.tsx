import { FaBullseye, FaRocket, FaHeart } from "react-icons/fa";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import gallery from "@/assets/gallery-1.jpg";

const pillars = [
  {
    icon: FaBullseye,
    title: "Our Mission",
    text: "Empower students with the confidence, knowledge and skills required to achieve exceptional academic success.",
  },
  {
    icon: FaRocket,
    title: "Our Approach",
    text: "Personalized mentorship, strategic academic planning and high-performance learning systems built for results.",
  },
  {
    icon: FaHeart,
    title: "Our Belief",
    text: "Every ambitious student deserves a clear, guided path to the world's leading universities.",
  },
];

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/15 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="group relative">
              <div className="absolute -inset-3 rounded-[2rem] [background:var(--gradient-forest)] opacity-30 blur-2xl transition-opacity group-hover:opacity-50" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border/70">
                <img
                  src={gallery}
                  alt="IVY STICK premium study lounge"
                  loading="lazy"
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-2xl glass-strong px-5 py-4">
                  <div className="font-display text-3xl text-gradient-gold">Est. Excellence</div>
                  <div className="text-xs text-muted-foreground">A premium learning environment</div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="About IVY STICK"
              title="A premium institute built for"
              highlight="global achievers"
              subtitle="IVY STICK is a premium international education institute dedicated to helping students unlock admissions into the world's leading universities. We specialize in SAT, AP, IB, IGCSE and ACT preparation through personalized mentorship, strategic academic planning and high-performance learning systems."
            />

            <div className="mt-8 space-y-4">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.1} direction="left">
                  <div className="group flex items-start gap-4 rounded-2xl glass p-5 transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.06]">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl [background:var(--gradient-forest)] text-gold-soft transition-transform group-hover:scale-110">
                      <p.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-foreground">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

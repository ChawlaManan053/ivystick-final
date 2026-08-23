import { motion } from "motion/react";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { CONTACT } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { RegistrationForm } from "./RegistrationForm";

export function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-primary/15 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build your"
          highlight="global future"
          subtitle="For expert consultation, a diagnostic test, or a demo class — reach out and our team will respond within 24 hours."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: contact info */}
          <div className="space-y-4">
            <Reveal direction="right">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="group flex items-center gap-4 rounded-2xl glass p-5 transition-all hover:border-gold/40 hover:bg-white/[0.06]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl [background:var(--gradient-forest)] text-gold-soft transition-transform group-hover:scale-110">
                  <FaPhoneAlt />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Call us</div>
                  <div className="font-display text-lg text-foreground">{CONTACT.phone}</div>
                </div>
              </a>
            </Reveal>

            <Reveal direction="right" delay={0.05}>
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-4 rounded-2xl glass p-5 transition-all hover:border-gold/40 hover:bg-white/[0.06]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl [background:var(--gradient-forest)] text-gold-soft transition-transform group-hover:scale-110">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email us</div>
                  <div className="font-display text-lg text-foreground">{CONTACT.email}</div>
                </div>
              </a>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl glass p-5 transition-all hover:border-gold/40 hover:bg-white/[0.06]"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="grid h-12 w-12 place-items-center rounded-xl bg-[linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)] text-white transition-transform group-hover:scale-110 group-hover:rotate-6"
                >
                  <FaInstagram size={20} />
                </motion.div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Follow us</div>
                  <div className="font-display text-lg text-foreground">@ivystickeducation</div>
                </div>
              </a>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <div className="flex items-center gap-4 rounded-2xl glass p-5">
                <div className="grid h-12 w-12 place-items-center rounded-xl [background:var(--gradient-forest)] text-gold-soft">
                  <FaClock />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Office timing</div>
                  <div className="font-display text-lg text-foreground">Mon – Sat · 9:00 AM – 8:00 PM</div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <div className="relative overflow-hidden rounded-2xl border border-border/60">
                <div className="flex aspect-[16/9] items-center justify-center [background:radial-gradient(circle_at_40%_30%,oklch(0.3_0.06_158),oklch(0.16_0.02_158))]">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <FaMapMarkerAlt className="text-gold" size={30} />
                    <span className="font-display text-lg text-foreground">Visit Our Campus</span>
                    <span className="text-xs text-muted-foreground">Google Maps location coming soon</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.25}>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-5 py-4 font-semibold text-[#0B0B0B] transition-transform hover:scale-[1.02]"
              >
                <FaWhatsapp size={22} /> Chat with us on WhatsApp
              </a>
            </Reveal>
          </div>

          {/* Right: registration form */}
          <Reveal direction="left">
            <RegistrationForm />
          </Reveal>
        </div>
      </div>

      {/* floating instagram button */}
      <motion.a
        href={CONTACT.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="fixed bottom-6 right-6 z-[800] grid h-14 w-14 place-items-center rounded-full bg-[linear-gradient(45deg,#f09433,#dc2743,#bc1888)] text-white shadow-[0_10px_30px_-6px_rgba(220,39,67,0.6)]"
        whileHover={{ scale: 1.12, rotate: 8 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ y: { duration: 2.4, repeat: Infinity } }}
      >
        <FaInstagram size={26} />
      </motion.a>
    </section>
  );
}

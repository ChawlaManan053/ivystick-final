import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaInstagram, FaPhoneAlt, FaEnvelope, FaArrowUp, FaWhatsapp } from "react-icons/fa";
import { NAV_LINKS, PROGRAMS, CONTACT } from "@/lib/site-data";
import logo from "@/assets/ivy-stick-logo.png.asset.json";

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-border/60 pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px [background:var(--gradient-gold)] opacity-40" />
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="IVY STICK" width={52} height={52} className="h-13 w-13 rounded-lg" />
              <span className="font-display text-2xl font-semibold text-foreground">
                IVY <span className="text-gradient-gold">STICK</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A premium international education institute helping ambitious students unlock
              admissions into the world's leading universities.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full glass text-foreground transition-colors hover:text-gold">
                <FaInstagram />
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full glass text-foreground transition-colors hover:text-gold">
                <FaWhatsapp />
              </a>
              <a href={`mailto:${CONTACT.email}`} aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-full glass text-foreground transition-colors hover:text-gold">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.slice(0, 6).map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground">Programs</h4>
            <ul className="mt-4 space-y-2.5">
              {PROGRAMS.slice(0, 6).map((p) => (
                <li key={p.title}>
                  <a href="#programs" className="text-sm text-muted-foreground transition-colors hover:text-gold">
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold">
                  <FaPhoneAlt size={13} /> {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold">
                  <FaEnvelope size={13} /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold">
                  <FaInstagram size={13} /> @ivystickeducation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/60 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} IVY STICK. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-gold">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-gold">Terms</a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-24 right-6 z-[800] grid h-12 w-12 place-items-center rounded-full [background:var(--gradient-gold)] text-accent-foreground glow-gold"
            whileHover={{ y: -3 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

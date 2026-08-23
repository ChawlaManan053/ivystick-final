import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS } from "@/lib/site-data";
import logo from "@/assets/ivy-stick-logo.png.asset.json";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-[900] px-4 pt-3 sm:px-6"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5",
          scrolled ? "glass-strong shadow-[0_10px_40px_-15px_black]" : "border border-transparent",
        )}
      >
        <a href="#home" className="flex items-center gap-2.5" aria-label="IVY STICK home">
          <img src={logo.url} alt="IVY STICK" width={44} height={44} className="h-11 w-11 rounded-lg" />
          <span className="hidden font-display text-xl font-semibold tracking-wide text-foreground sm:block">
            IVY <span className="text-gradient-gold">STICK</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative rounded-full px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 [background:var(--gradient-gold)] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#register"
            className="relative hidden overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold text-accent-foreground [background:var(--gradient-gold)] sm:inline-flex glow-gold"
          >
            Register
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full glass xl:hidden"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl glass-strong p-4 xl:hidden"
          >
            <ul className="grid grid-cols-2 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-xl py-3 text-center text-sm font-semibold text-accent-foreground [background:var(--gradient-gold)]"
            >
              Register Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

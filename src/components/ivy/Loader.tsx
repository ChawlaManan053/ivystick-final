import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import logo from "@/assets/ivy-stick-logo.png.asset.json";

export function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let val = 0;
    const id = setInterval(() => {
      val += Math.random() * 16 + 6;
      if (val >= 100) {
        val = 100;
        clearInterval(id);
        setTimeout(() => setDone(true), 500);
      }
      setProgress(Math.floor(val));
    }, 160);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 opacity-60 [background:var(--gradient-hero)]" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center"
          >
            <div className="relative">
              <div className="absolute -inset-6 animate-pulse-glow rounded-full bg-gold/20 blur-2xl" />
              <img
                src={logo.url}
                alt="IVY STICK"
                width={130}
                height={130}
                className="relative h-32 w-auto rounded-2xl"
              />
            </div>
            <div className="mt-8 h-px w-56 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full [background:var(--gradient-gold)]"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <div className="mt-4 font-sans text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Elevating Excellence · {progress}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

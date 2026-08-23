import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

const offsets: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 42 },
  down: { y: -42 },
  left: { x: 60 },
  right: { x: -60 },
  scale: { scale: 0.9 },
  none: {},
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  once = true,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });
  const off = offsets[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...off }}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

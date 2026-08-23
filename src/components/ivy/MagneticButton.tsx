import { forwardRef, type ButtonHTMLAttributes } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Magnetic, glass-sheen premium button. Follows the cursor slightly.
 */
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "gold" | "outline";
  as?: "a";
  href?: string;
};

export const MagneticButton = forwardRef<HTMLButtonElement, Props>(
  ({ variant = "gold", className, children, href, ...props }, ref) => {
    const handleMove = (e: React.MouseEvent<HTMLElement>) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
    };
    const handleLeave = (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.transform = "translate(0,0)";
    };

    const classes = cn(
      "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide transition-[transform,box-shadow] duration-300 will-change-transform",
      variant === "gold"
        ? "text-accent-foreground [background:var(--gradient-gold)] glow-gold hover:shadow-[0_16px_50px_-8px_var(--gold)]"
        : "glass text-foreground hover:border-gold/50",
      className,
    );

    const inner = (
      <>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[var(--gradient-sheen)] transition-transform duration-700 group-hover/btn:translate-x-full" />
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className={classes}
        >
          {inner}
        </a>
      );
    }

    return (
      <motion.button
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={classes}
        {...(props as any)}
      >
        {inner}
      </motion.button>
    );
  },
);
MagneticButton.displayName = "MagneticButton";

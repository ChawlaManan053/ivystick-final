import { useEffect, useRef, useState } from "react";

/**
 * Luxury custom cursor: a soft dot + a lagging gold ring that grows over
 * interactive elements. Disabled on touch / coarse pointers.
 */
export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }
      const t = e.target as HTMLElement;
      const interactive = t.closest("a, button, [data-cursor], input, textarea, select, .group");
      ringRef.current?.classList.toggle("cursor-ring--active", !!interactive);
    };

    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.15;
      ring.y += (pos.y - ring.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-1 -mt-1 h-2 w-2 rounded-full bg-gold mix-blend-difference"
      />
      <div
        ref={ringRef}
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9998] -ml-4 -mt-4 h-8 w-8 rounded-full border border-gold/60 transition-[width,height,opacity] duration-200"
      />
      <style>{`
        .cursor-ring--active { width: 3rem; height: 3rem; margin-left: -1.5rem; margin-top: -1.5rem; opacity: 0.9; box-shadow: 0 0 24px -4px var(--gold); }
      `}</style>
    </>
  );
}

import { useState } from "react";
import { UNIVERSITIES } from "@/lib/site-data";

type Uni = (typeof UNIVERSITIES)[number];

export function Marquee() {
  const row = [...UNIVERSITIES, ...UNIVERSITIES];
  return (
    <section id="universities" className="relative overflow-hidden border-y border-border/60 py-12">
      <div className="mx-auto mb-8 max-w-7xl px-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          Our students now study at the world's leading universities
        </p>
      </div>

      <div className="group relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-4 pr-4 group-hover:[animation-play-state:paused]">
          {row.map((u, i) => (
            <UniPill key={`a${i}`} uni={u} />
          ))}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 animate-marquee items-center gap-4 pr-4 group-hover:[animation-play-state:paused]"
        >
          {row.map((u, i) => (
            <UniPill key={`b${i}`} uni={u} />
          ))}
        </div>
      </div>
    </section>
  );
}

function UniPill({ uni }: { uni: Uni }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group/pill flex items-center gap-3 whitespace-nowrap rounded-2xl border border-border/60 bg-white/[0.02] px-6 py-4 transition-all duration-300 hover:border-gold/50 hover:bg-white/[0.05] hover:shadow-[0_0_30px_-8px_var(--gold)]">
      <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full bg-white/90 transition-transform group-hover/pill:scale-110">
        {failed ? (
          <span className="grid h-full w-full place-items-center [background:var(--gradient-forest)] font-display text-xs font-bold text-gold-soft">
            {uni.name.charAt(0)}
          </span>
        ) : (
          <img
            src={`https://www.google.com/s2/favicons?domain=${uni.domain}&sz=128`}
            alt={`${uni.name} logo`}
            loading="lazy"
            decoding="async"
            width={36}
            height={36}
            onError={() => setFailed(true)}
            className="h-7 w-7 object-contain"
          />
        )}
      </span>
      <span className="font-display text-lg font-medium text-muted-foreground transition-colors group-hover/pill:text-foreground">
        {uni.name}
      </span>
    </div>
  );
}

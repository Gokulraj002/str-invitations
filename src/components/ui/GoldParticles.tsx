// Ambient gold dust drifting upward. Pure CSS motion — no JavaScript per frame.
// Positions come from a seeded generator so server and browser render identically.
function seeded(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

export function GoldParticles({ count = 22, seed = 7, className = "" }: { count?: number; seed?: number; className?: string }) {
  const rand = seeded(seed);
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: (rand() * 100).toFixed(2),
    delay: (rand() * 9).toFixed(2),
    duration: (9 + rand() * 9).toFixed(2),
    size: (2 + rand() * 4).toFixed(1),
    drift: Math.round(rand() * 40 - 20),
  }));

  return (
    <div className={`gold-particles ${className}`} aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          style={
            {
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `-${p.delay}s`,
              animationDuration: `${p.duration}s`,
              "--drift": `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

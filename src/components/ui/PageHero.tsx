type Props = {
  eyebrow?: string;
  title: string;
  accentWord?: string;
  subtitle?: string;
  variant?: "default" | "tribute";
};

export function PageHero({ eyebrow, title, accentWord, subtitle, variant = "default" }: Props) {
  const renderTitle = () => {
    if (!accentWord) return title;
    const idx = title.toLowerCase().indexOf(accentWord.toLowerCase());
    if (idx === -1) return title;
    return (
      <>
        {title.slice(0, idx)}
        <span className="text-gold">{title.slice(idx, idx + accentWord.length)}</span>
        {title.slice(idx + accentWord.length)}
      </>
    );
  };

  return (
    <section
      className={`page-hero ${variant === "tribute" ? "page-hero--tribute" : ""} relative overflow-hidden border-b border-gold/20`}
    >
      <div className="container-x relative py-20 md:py-28">
        {eyebrow && (
          <div className="eyebrow mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-gold/60" />
            {eyebrow}
            <span className="w-8 h-px bg-gold/60" />
          </div>
        )}
        <h1 className="text-4xl md:text-6xl text-ivory max-w-2xl">{renderTitle()}</h1>
        {subtitle && (
          <p className="mt-6 text-base md:text-lg text-ivory/70 max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

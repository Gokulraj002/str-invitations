type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  const isCenter = align === "center";
  return (
    <div className={`mb-14 md:mb-20 ${isCenter ? "text-center max-w-3xl mx-auto" : ""}`}>
      {eyebrow && (
        <div className={`eyebrow mb-5 flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}>
          <span className="w-8 h-px bg-gold/60" />
          {eyebrow}
          {isCenter && <span className="w-8 h-px bg-gold/60" />}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl text-ivory">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base md:text-lg text-ivory/60 leading-relaxed font-light ${isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

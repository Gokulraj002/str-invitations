type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  const isCenter = align === "center";
  return (
    <div className={`section-heading ${isCenter ? "section-heading--center" : ""}`}>
      {eyebrow && (
        <p className="eyebrow section-heading-eyebrow">
          <span aria-hidden />
          {eyebrow}
          {isCenter && <span aria-hidden />}
        </p>
      )}
      <h2>{title}</h2>
      {subtitle && <p className="section-heading-sub">{subtitle}</p>}
    </div>
  );
}

type Props = { size?: number; className?: string; withText?: boolean };

export function Logo({ size = 44, className = "", withText = true }: Props) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className="relative shrink-0 grid place-items-center overflow-hidden"
        style={{ width: size, height: size }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-str.PNG"
          alt="STR Invitations"
          width={size - 6}
          height={size - 6}
          className="object-contain"
        />
      </span>
      {withText && (
        <span className="flex flex-col leading-none">
          <span className="logo-wordmark">
            STR
            <small>INVITATIONS</small>
          </span>
          <span className="logo-tagline">
            Moments That Matter, Beautifully Yours
          </span>
        </span>
      )}
    </span>
  );
}

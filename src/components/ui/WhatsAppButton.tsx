import { whatsappLink } from "@/lib/whatsapp";

type Props = {
  message?: string;
  children?: React.ReactNode;
  variant?: "gold" | "outline" | "green";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function WhatsAppButton({
  message,
  children = "Enquire on WhatsApp",
  variant = "green",
  size = "md",
  className = "",
}: Props) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all";
  const variants = {
    gold: "bg-gradient-to-b from-gold to-gold-dark text-obsidian hover:shadow-gold",
    outline: "border border-gold/60 text-gold hover:bg-gold hover:text-obsidian",
    green: "bg-[#25D366] text-white hover:bg-[#1DA851] shadow-card",
  }[variant];
  const sizes = {
    sm: "px-3.5 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  }[size];

  return (
    <a href={whatsappLink(message)} target="_blank" rel="noopener" className={`${base} ${variants} ${sizes} ${className}`}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.5 3.5A11 11 0 0 0 3.7 17.3L2 22l4.9-1.6A11 11 0 1 0 20.5 3.5Zm-8.5 18a9 9 0 0 1-4.6-1.3l-.3-.2-2.9 1 .9-2.9-.2-.3A9 9 0 1 1 12 21.5Zm5.2-6.6c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1s-.8.9-1 1.1c-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2s0-.4.1-.6c.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-.9-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5 1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3Z" />
      </svg>
      {children}
    </a>
  );
}

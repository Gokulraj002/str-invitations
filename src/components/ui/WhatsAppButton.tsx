import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

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
  const iconSize = { sm: 15, md: 18, lg: 21 }[size];

  return (
    <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className={`${base} ${variants} ${sizes} ${className}`}>
      <WhatsAppIcon size={iconSize} />
      {children}
    </a>
  );
}

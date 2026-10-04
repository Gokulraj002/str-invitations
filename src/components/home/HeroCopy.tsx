"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Clapperboard, Globe, Flower2 } from "lucide-react";
import { whatsappLink, generalEnquiryMessage } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { softSpring } from "@/components/ui/Reveal";

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: softSpring },
};

const services = [
  { icon: Clapperboard, top: "Premium", bottom: "Video Invitations" },
  { icon: Globe, top: "Modern", bottom: "Invitation Websites" },
  { icon: Flower2, top: "Heartfelt", bottom: "RIP Tribute Videos" },
];

export function HeroCopy() {
  // On a first visit the logo intro plays for ~2s, so the hero waits for it.
  const [startDelay, setStartDelay] = useState<number | null>(null);
  useEffect(() => {
    setStartDelay(document.documentElement.classList.contains("intro-seen") ? 0.1 : 1.6);
  }, []);

  return (
    <motion.div
      className="hero-copy"
      initial="hidden"
      animate={startDelay === null ? "hidden" : "visible"}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14, delayChildren: startDelay ?? 0 } } }}
    >
      <motion.p variants={item} className="hero-kicker">TRADITION&nbsp;&nbsp; | &nbsp;&nbsp;TECHNOLOGY&nbsp;&nbsp; | &nbsp;&nbsp;TIMELESS MEMORIES</motion.p>
      <motion.h1 variants={item}>Beautiful Invitations<br />for Life&apos;s Special Moments</motion.h1>
      <motion.p variants={item} className="hero-subtitle">Video Invitations&nbsp;&nbsp; | &nbsp;&nbsp;Invitation Websites&nbsp;&nbsp; | &nbsp;&nbsp;RIP Tribute Videos</motion.p>
      <motion.div variants={item} className="hero-services">
        {services.map(({ icon: Icon, top, bottom }) => (
          <div key={bottom}><Icon className="line-icon" size={26} strokeWidth={1.5} aria-hidden /><strong>{top}<br />{bottom}</strong></div>
        ))}
      </motion.div>
      <motion.div variants={item} className="hero-actions">
        <a className="wa-main" href={whatsappLink(generalEnquiryMessage())} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={22} /> Chat on WhatsApp <b>›</b></a>
        <span className="script-note">Let&apos;s create your<br />special invitation</span>
      </motion.div>
    </motion.div>
  );
}

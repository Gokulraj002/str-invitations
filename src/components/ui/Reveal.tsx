"use client";

import { motion, type Transition } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number; // ms
  className?: string;
  as?: "div" | "section" | "article" | "li";
};

const tags = { div: motion.div, section: motion.section, article: motion.article, li: motion.li };

// One spring for the whole site so every entrance feels like the same material.
export const softSpring: Transition = { type: "spring", stiffness: 70, damping: 14 };

export function Reveal({ children, delay = 0, className = "", as = "div" }: Props) {
  const Tag = tags[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ ...softSpring, delay: delay / 1000 }}
    >
      {children}
    </Tag>
  );
}

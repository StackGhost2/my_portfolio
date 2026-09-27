import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  // Delay the animation when several items should appear one after another.
  delay?: number;
  duration?: number;
  // Starting vertical offset, in pixels.
  y?: number;
  className?: string;
}

// Reuse one scroll-triggered entrance animation across page sections.
export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 30,
  className = "",
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        // Animate each element only on its first entrance into view.
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

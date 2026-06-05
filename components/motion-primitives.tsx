"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function BentoCard({ children, className = "", delay = 0 }: BentoCardProps) {
  return (
    <motion.article
      className={`grain group relative overflow-hidden rounded-lg border border-white/10 bg-panel/80 p-5 shadow-glow backdrop-blur-xl ${className}`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 180, damping: 24, delay }}
      whileHover={{ scale: 1.015, y: -4 }}
      whileTap={{ scale: 0.995 }}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 rounded-lg opacity-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(88, 214, 255, 0.22), rgba(155, 109, 255, 0.08) 42%, rgba(62, 255, 192, 0.16))"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        whileHover={{ opacity: 1 }}
      />
      <div className="relative z-10">{children}</div>
    </motion.article>
  );
}

export const MotionDiv = motion.div;
export const MotionNav = motion.nav;
export const MotionButton = motion.button;

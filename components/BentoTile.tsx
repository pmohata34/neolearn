"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { tileVariants } from "./motion/MotionPrimitives";

type Props = HTMLMotionProps<"article"> & { className?: string };

export default function BentoTile({ className = "", children, ...rest }: Props) {
  return (
    <motion.article
      variants={tileVariants}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={
        "group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-5 will-change-transform " +
        "shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:shadow-[0_0_40px_-10px_rgba(124,92,255,0.45)] " +
        className
      }
      {...rest}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                   bg-[radial-gradient(120%_120%_at_0%_0%,rgba(124,92,255,0.18),transparent_60%),radial-gradient(120%_120%_at_100%_100%,rgba(34,211,238,0.14),transparent_60%)]"
      />
      <div className="relative">{children as React.ReactNode}</div>
    </motion.article>
  );
}

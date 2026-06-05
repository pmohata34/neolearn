"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, Trophy, MessageSquare, Settings } from "lucide-react";

const items = [
  { id: "home", Icon: LayoutDashboard },
  { id: "courses", Icon: BookOpen },
  { id: "achievements", Icon: Trophy },
  { id: "messages", Icon: MessageSquare },
  { id: "settings", Icon: Settings },
];

export default function MobileNav() {
  const [active, setActive] = useState("home");

  return (
    <nav
      aria-label="Mobile primary"
      className="md:hidden fixed bottom-3 left-3 right-3 z-50 flex justify-around items-center rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)]/90 backdrop-blur px-2 py-2"
    >
      {items.map(({ id, Icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => setActive(id)}
            className="relative p-3 rounded-xl"
            aria-label={id}
          >
            {isActive && (
              <motion.span
                layoutId="mobile-active"
                className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[var(--accent)]/30 to-[var(--accent-2)]/20"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <Icon size={20} className="relative z-10" />
          </button>
        );
      })}
    </nav>
  );
}

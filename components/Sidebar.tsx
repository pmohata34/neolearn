"use client";

import { BarChart3, BookOpen, Home, Settings, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  { label: "Home", icon: Home },
  { label: "Courses", icon: BookOpen },
  { label: "Progress", icon: BarChart3 },
  { label: "Awards", icon: Trophy },
  { label: "Settings", icon: Settings }
];

export function Sidebar() {
  const [active, setActive] = useState("Home");

  return (
    <>
      <aside className="fixed left-0 top-0 z-30 hidden h-dvh w-20 border-r border-white/10 bg-black/30 px-3 py-5 backdrop-blur-xl md:block lg:w-64">
        <nav aria-label="Primary navigation" className="flex h-full flex-col">
          <a href="#dashboard" className="mb-8 flex h-11 items-center gap-3 rounded-lg px-2">
            <span className="grid size-10 place-items-center rounded-lg bg-cyan-300 text-slate-950">
              <BookOpen size={20} aria-hidden="true" />
            </span>
            <span className="hidden text-sm font-semibold tracking-wide text-white lg:inline">NeoLearn</span>
          </a>
          <ul className="space-y-2">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.label;

              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => setActive(item.label)}
                    className="relative flex h-12 w-full items-center justify-center gap-3 rounded-lg px-3 text-sm text-slate-300 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-cyan-200 lg:justify-start"
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="sidebar-active"
                        className="absolute inset-0 rounded-lg border border-cyan-200/20 bg-cyan-200/10"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    ) : null}
                    <Icon className="relative z-10" size={19} aria-hidden="true" />
                    <span className="relative z-10 hidden lg:inline">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-3 bottom-3 z-40 rounded-lg border border-white/10 bg-black/70 p-2 backdrop-blur-xl md:hidden"
      >
        <ul className="grid grid-cols-5 gap-1">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.label;

            return (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => setActive(item.label)}
                  aria-label={item.label}
                  className="relative grid h-11 w-full place-items-center rounded-lg text-slate-300"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="bottom-active"
                      className="absolute inset-0 rounded-lg bg-cyan-200/[0.12]"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  ) : null}
                  <Icon className="relative z-10" size={19} aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

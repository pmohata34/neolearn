"use client";
import { Home, BookOpen, BarChart3, Settings, GraduationCap } from "lucide-react";
import Link from "next/link";

const nav = [
  { label: "Dashboard", icon: Home, href: "/" },
  { label: "Courses", icon: BookOpen, href: "/courses" },
  { label: "Progress", icon: BarChart3, href: "/progress" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 flex-col bg-slate-900 text-slate-100 p-4 gap-2">
      <div className="flex items-center gap-2 mb-6 px-2">
        <GraduationCap className="h-6 w-6 text-indigo-400" />
        <span className="font-semibold text-lg">NeoLearn</span>
      </div>
      {nav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm"
        >
          <item.icon className="h-4 w-4" />
          {item.label}
        </Link>
      ))}
    </aside>
  );
}

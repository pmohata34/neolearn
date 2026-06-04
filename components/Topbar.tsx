"use client";
import { Bell, Search, User } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6">
      <div className="flex items-center gap-2 w-1/3">
        <Search className="h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full bg-transparent outline-none text-sm"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-slate-100">
          <Bell className="h-4 w-4" />
        </button>
        <div className="h-8 w-8 rounded-full bg-indigo-500 text-white flex items-center justify-center">
          <User className="h-4 w-4" />
        </div>
      </div>
    </header>
  );
}

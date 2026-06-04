"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export function useStats() {
  const [stats, setStats] = useState({ enrolled: 0, avgProgress: 0, completed: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from("courses").select("progress");
      if (error) {
        console.error("Supabase error:", error.message, error.details, error.hint, error.code);
        setLoading(false);
        return;
      }
      const enrolled = data.length;
      const avgProgress = enrolled
        ? Math.round(data.reduce((s, c) => s + (c.progress ?? 0), 0) / enrolled)
        : 0;
      const completed = data.filter((c) => (c.progress ?? 0) >= 100).length;
      setStats({ enrolled, avgProgress, completed });
      setLoading(false);
    })();
  }, []);

  return { stats, loading };
}

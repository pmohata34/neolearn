"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export type Stats = {
  coursesEnrolled: number;
  hoursLearned: number;
  certificates: number;
};

export function useStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("courses")
        .select("hours_completed, completed");

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      setStats({
        coursesEnrolled: data.length,
        hoursLearned: data.reduce((s, c) => s + (c.hours_completed ?? 0), 0),
        certificates: data.filter((c) => c.completed).length,
      });
      setLoading(false);
    })();
  }, []);

  return { stats, loading };
}

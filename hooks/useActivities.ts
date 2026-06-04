"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export function useActivities() {
  const [data, setData] = useState<{ day: string; intensity: number }[]>([]);
  useEffect(() => {
    (async () => {
      const since = new Date(Date.now() - 6 * 86400000).toISOString().slice(0, 10);
      const { data, error } = await supabase
        .from("activities")
        .select("day, intensity")
        .gte("day", since)
        .order("day");
      if (error) { console.error(error.message); return; }
      setData(
        (data ?? []).map((d) => ({
          day: new Date(d.day).toLocaleDateString("en", { weekday: "short" }),
          intensity: d.intensity,
        }))
      );
    })();
  }, []);
  return data;
}

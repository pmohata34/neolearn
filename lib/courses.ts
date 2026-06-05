import { createClient } from "@supabase/supabase-js";

export type Course = {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
};

export type CourseResult = {
  courses: Course[];
  error: string | null;
  source: "supabase" | "fallback";
};

const fallbackCourses: Course[] = [
  {
    id: "a91f2782-782c-4d0f-9880-a75c943f19c7",
    title: "AI/ML Foundations",
    progress: 72,
    icon_name: "BrainCircuit",
    created_at: "2026-06-05T15:33:49.517122+00:00"
  },
  {
    id: "a5693f65-ec60-478a-b318-8e0214e22b53",
    title: "Data Structures and Algorithms",
    progress: 64,
    icon_name: "Network",
    created_at: "2026-06-05T15:33:49.517122+00:00"
  },
  {
    id: "f84555eb-7bdb-4261-adcb-7d665929018f",
    title: "Full Stack Web Development",
    progress: 81,
    icon_name: "Layers",
    created_at: "2026-06-05T15:33:49.517122+00:00"
  },
  {
    id: "21c867a5-c123-445d-876a-e2c0ec02e9ad",
    title: "Database Management Systems",
    progress: 58,
    icon_name: "Database",
    created_at: "2026-06-05T15:33:49.517122+00:00"
  }
];

function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}

export async function getCourses(): Promise<CourseResult> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return {
      courses: fallbackCourses,
      error: "Supabase environment variables are missing. Showing local seed data.",
      source: "fallback"
    };
  }

  const { data, error } = await supabase
    .from("courses")
    .select("id,title,progress,icon_name,created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return {
      courses: fallbackCourses,
      error: error.message,
      source: "fallback"
    };
  }

  return {
    courses: data ?? [],
    error: null,
    source: "supabase"
  };
}

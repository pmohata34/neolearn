import { Dashboard } from "@/components/dashboard";
import { getCourses } from "@/lib/courses";

export const dynamic = "force-dynamic";

export default async function Page() {
  const result = await getCourses();

  return <Dashboard result={result} />;
}

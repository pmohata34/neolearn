import { createClient } from "@/lib/supabase/server";
import type { Course } from "@/lib/courses";
import CourseCard from "./CourseCard";
import { MotionDiv, containerVariants } from "./motion/MotionPrimitives";

export default async function CourseList() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    return (
      <p role="alert" className="text-sm text-red-400">
        Couldn't load courses: {error.message}
      </p>
    );
  }

  const courses = (data ?? []) as Course[];

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="contents"
    >
      {courses.map((c) => (
        <CourseCard key={c.id} course={c} />
      ))}
    </MotionDiv>
  );
}

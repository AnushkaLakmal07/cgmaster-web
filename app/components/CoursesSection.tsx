import { courses } from "@/lib/courses";
import CourseCard from "./CourseCard";

export default function CoursesSection() {
  const courseOrder = [
    "blender",
    "photoshop",
    "ai",
    "illustrator",
    "after-effects",
    "moho",
  ];
  const orderedCourses = courseOrder
    .map((slug) => courses.find((course) => course.slug === slug))
    .filter((course) => course !== undefined);

  return (
    <section
      id="courses"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Courses
        </h2>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2 xl:mt-14 xl:grid-cols-3 xl:gap-10">
        {orderedCourses.map((course, index) => (
          <CourseCard key={course.slug} course={course} index={index} />
        ))}
      </div>
    </section>
  );
}

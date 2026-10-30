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
    <section id="courses" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Courses
        </h2>
      </div>

      {/* Three columns on desktop keep the cards compact as courses are added. */}
      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {orderedCourses.map((course, index) => (
          <CourseCard key={course.slug} course={course} index={index} />
        ))}
      </div>
    </section>
  );
}

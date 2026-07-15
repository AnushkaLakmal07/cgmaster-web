import { courses } from "@/lib/courses";
import CourseCard from "./CourseCard";

export default function CoursesSection() {
  return (
    <section id="courses" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          පාඨමාලා
        </h2>
        <p className="mt-4 text-inkSoft">
          අප ආයතනය මගින් පවත්වන නවතම පාඨමාලා කිහිපයක් මෙහි දැක්වේ. සියලුම
          පාඨමාලා පිළිබඳ විස්තර සඳහා පාඨමාලාවේ කාඩ්පත මත ක්ලික් කරන්න.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </section>
  );
}

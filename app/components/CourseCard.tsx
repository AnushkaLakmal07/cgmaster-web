import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/courses";

export default function CourseCard({ course }: { course: Course }) {
  const CardInner = (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl2 border border-mist bg-white shadow-card transition-all hover:-translate-y-1.5 hover:shadow-soft">
      <div className="relative h-44 w-full overflow-hidden bg-paper2">
        <Image
          src={course.thumbnail}
          alt={course.nameEnglish}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {course.comingSoon && (
          <span className="absolute right-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-[11px] font-semibold text-paper">
            ළඟදීම
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-ink">
          {course.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-inkSoft">
          {course.shortDesc}
        </p>
        <span
          className={`mt-4 inline-flex w-fit items-center gap-1 rounded-full px-4 py-2 text-xs font-semibold ${
            course.comingSoon
              ? "bg-paper2 text-inkSoft"
              : "bg-violet text-paper group-hover:bg-violet-dark"
          }`}
        >
          {course.comingSoon ? "විස්තර ළඟදීම" : "වැඩිදුර විස්තර →"}
        </span>
      </div>
    </div>
  );

  if (course.comingSoon) {
    return <div className="h-full cursor-default">{CardInner}</div>;
  }

  return (
    <Link href={`/courses/${course.slug}`} className="block h-full">
      {CardInner}
    </Link>
  );
}

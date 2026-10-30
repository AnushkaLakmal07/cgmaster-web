"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/courses";
import CourseSocialProof from "./CourseSocialProof";

const courseThemes: Record<
  string,
  {
    hoverBorder: string;
    glow: string;
    glowSecondary: string;
    titleHover: string;
    comingSoon: string;
    fee: string;
    button: string;
  }
> = {
  blender: {
    hoverBorder: "md:hover:border-orange-500/50",
    glow: "bg-orange-500/20",
    glowSecondary: "bg-amber-400/20",
    titleHover: "md:group-hover:text-orange-600",
    comingSoon: "text-orange-700",
    fee: "bg-gradient-to-r from-orange-700 via-orange-500 to-amber-400 bg-clip-text text-transparent",
    button: "bg-gradient-to-r from-orange-700 via-orange-500 to-amber-400 text-white shadow-md shadow-orange-600/25 md:group-hover:shadow-lg md:group-hover:shadow-orange-500/40 md:group-hover:scale-105 active:scale-95",
  },
  illustrator: {
    hoverBorder: "md:hover:border-red-900/40",
    glow: "bg-red-950/25",
    glowSecondary: "bg-rose-900/20",
    titleHover: "md:group-hover:text-red-900",
    comingSoon: "text-red-900",
    fee: "bg-gradient-to-r from-red-900 to-rose-700 bg-clip-text text-transparent",
    button: "bg-gradient-to-r from-red-900 to-rose-950 text-white shadow-md shadow-red-950/20 border border-red-900/30",
  },
  moho: {
    hoverBorder: "md:hover:border-red-500/50",
    glow: "bg-red-600/20",
    glowSecondary: "bg-rose-500/20",
    titleHover: "md:group-hover:text-red-700",
    comingSoon: "text-red-700",
    fee: "bg-gradient-to-r from-red-800 to-rose-500 bg-clip-text text-transparent",
    button: "bg-gradient-to-r from-red-800 to-rose-500 text-white shadow-md shadow-red-700/25 border border-red-700/20",
  },
  photoshop: {
    hoverBorder: "md:hover:border-sky-500/50",
    glow: "bg-sky-500/20",
    glowSecondary: "bg-cyan-400/20",
    titleHover: "md:group-hover:text-sky-700",
    comingSoon: "text-sky-700",
    fee: "bg-gradient-to-r from-blue-800 to-cyan-600 bg-clip-text text-transparent",
    button: "bg-gradient-to-r from-blue-800 to-cyan-600 text-white shadow-md shadow-blue-700/25 border border-blue-700/20",
  },
  "after-effects": {
    hoverBorder: "md:hover:border-purple-500/50",
    glow: "bg-purple-600/20",
    glowSecondary: "bg-indigo-500/20",
    titleHover: "md:group-hover:text-purple-700",
    comingSoon: "text-purple-700",
    fee: "bg-gradient-to-r from-purple-800 to-indigo-600 bg-clip-text text-transparent",
    button: "bg-gradient-to-r from-purple-800 to-indigo-600 text-white shadow-md shadow-purple-700/25 border border-purple-700/20",
  },
  ai: {
    hoverBorder: "md:hover:border-emerald-500/50",
    glow: "bg-emerald-500/20",
    glowSecondary: "bg-lime-400/20",
    titleHover: "md:group-hover:text-emerald-700",
    comingSoon: "text-emerald-700",
    fee: "bg-gradient-to-r from-emerald-700 to-lime-500 bg-clip-text text-transparent",
    button: "bg-gradient-to-r from-emerald-700 to-lime-500 text-white shadow-md shadow-emerald-700/25 border border-emerald-700/20",
  },
};

export default function CourseCard({
  course,
  index = 0,
}: {
  course: Course;
  index?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const theme = courseThemes[course.slug] ?? courseThemes.blender;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    setIsVisible(false);
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  const CardInner = (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-mist/60 bg-white shadow-lg transition-all duration-500 md:hover:-translate-y-2 md:hover:shadow-2xl ${theme.hoverBorder}`}
    >
      {/* Keep a subtle course-colored glow on touch layouts; desktop reveals it on hover. */}
      <div
        className={`absolute -right-20 -top-20 -z-0 h-52 w-52 rounded-full blur-3xl opacity-0 transition-opacity duration-500 max-md:opacity-60 md:group-hover:opacity-100 ${
          theme.glow
        }`}
      />
      <div
        className={`absolute -left-20 -bottom-20 -z-0 h-52 w-52 rounded-full blur-3xl opacity-0 transition-opacity duration-500 max-md:opacity-60 md:group-hover:opacity-100 ${
          theme.glowSecondary
        }`}
      />

      {/* Image Banner — Perfect 4:3 Border-to-Border Full Frame Display */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-paper2 lg:aspect-[16/10]">
        <Image
          src={course.thumbnail}
          alt={course.nameEnglish}
          fill
          className="object-cover object-center transition-transform duration-500 md:group-hover:scale-105"
          priority={course.popular}
        />
      </div>

      {/* Card Content Body */}
      <div className="relative flex flex-1 flex-col p-4 sm:p-8 lg:p-5">
        {/* Title */}
        <h3
          className={`font-display text-xl leading-tight font-bold text-ink transition-colors duration-200 sm:text-2xl max-md:min-h-[2.75rem] max-md:line-clamp-2 max-md:text-lg ${theme.titleHover}`}
        >
          {course.nameEnglish}
        </h3>

        {/* Description */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-inkSoft lg:mt-2 max-md:min-h-[4.5rem] max-md:overflow-hidden max-md:[display:-webkit-box] max-md:[-webkit-box-orient:vertical] max-md:[-webkit-line-clamp:3]">
          {course.shortDesc}
        </p>

        <div className="mt-4">
          <CourseSocialProof
            learnerCount={course.learnerCount}
            rating={course.rating}
            compact
          />
        </div>

        {/* Bottom Action Footer */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-mist/50 pt-5 lg:mt-4 lg:pt-4">
          {course.detail ? (
            <div className="flex items-baseline gap-1 flex-wrap max-md:min-h-8 max-md:flex-nowrap">
              <p className={`font-display text-xl font-black sm:text-2xl ${theme.fee}`}>
                {course.detail.fee}
              </p>
              {course.detail.originalFee && (
                <span className="ml-2 text-base font-semibold text-red-400 line-through max-[639px]:ml-1 max-[639px]:text-xs">
                  {course.detail.originalFee}
                </span>
              )}
            </div>
          ) : (
            <div>
              <p className={`font-display text-sm font-bold ${theme.comingSoon}`}>Coming Soon</p>
            </div>
          )}

          <span
            className={`inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-bold shadow-sm transition-all duration-300 w-full sm:w-auto ${
              course.comingSoon
                ? `${theme.button} cursor-default`
                : `${theme.button} md:group-hover:scale-105 active:scale-95`
            }`}
          >
            {course.comingSoon ? "විස්තර ළඟදීම" : "Course Details"}
            {!course.comingSoon && (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="hidden sm:inline-block h-3 w-3 transition-transform duration-200 md:group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            )}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div
      ref={cardRef}
      className={`h-full transition-[opacity,transform] duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: isVisible ? `${Math.min(index, 4) * 90}ms` : "0ms" }}
    >
      {course.comingSoon ? (
        <div className="h-full cursor-default">{CardInner}</div>
      ) : (
        <Link href={`/courses/${course.slug}`} className="block h-full">
          {CardInner}
        </Link>
      )}
    </div>
  );
}

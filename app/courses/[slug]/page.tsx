import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { courses, getCourseBySlug } from "@/lib/courses";
import { buildWhatsAppLink } from "@/lib/site-config";

const softwareLogos: Record<string, string> = {
  Blender: "/software-icons/blender.svg",
  Photoshop: "/software-icons/photoshop.svg",
  "After Effects": "/software-icons/after-effects.svg",
  Illustrator: "/software-icons/illustrator.svg",
  Spine: "/software-icons/spine.svg",
  Moho: "/software-icons/moho.png",
  Unity: "/software-icons/unity.svg",
  "Unreal Engine": "/software-icons/unreal-engine.svg",
};

const courseLogos: Record<string, string> = {
  blender: softwareLogos.Blender,
  photoshop: softwareLogos.Photoshop,
  illustrator: softwareLogos.Illustrator,
  "after-effects": softwareLogos["After Effects"],
  moho: softwareLogos.Moho,
};

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = getCourseBySlug(params.slug);
  if (!course) notFound();

  if (course.comingSoon || !course.detail) {
    return (
      <main className="min-h-screen bg-paper">
        <Header />
        <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
          <span className="rounded-full bg-violet/10 px-4 py-1.5 text-xs font-semibold text-violet tracking-wider">
            Coming Soon · ළඟදීම
          </span>
          <h1 className="font-display mt-6 text-3xl font-bold text-ink sm:text-4xl">
            {course.name} පාඨමාලාවේ විස්තර ළඟදීම
          </h1>
          <p className="mt-4 text-inkSoft">
            මෙම පාඨමාලාවේ සම්පූර්ණ විස්තර ඉතා ඉක්මනින් මෙතන පළ කරනු ලැබේ.
            එතෙක් අපගේ Blender පාඨමාලාව බලන්න.
          </p>
          <Link
            href="/courses/blender"
            className="mt-8 rounded-full bg-violet px-7 py-3.5 text-sm font-semibold text-paper shadow-soft transition-transform active:scale-95 hover:bg-violet-dark"
          >
            Blender Course බලන්න
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const { detail } = course;

  const whatsappLink = buildWhatsAppLink(course.nameEnglish);
  const heroThemes = {
    blender: {
      title: "from-orange-700 via-orange-500 to-amber-400",
      accentText: "text-orange-700",
      border: "border-orange-500/25",
      requirementButton: "bg-gradient-to-r from-orange-700 via-orange-500 to-amber-400 shadow-orange-600/25",
      requirementGlow: "bg-gradient-to-r from-orange-700 via-orange-500 to-amber-400",
      mobileButton: "max-lg:border-orange-600 max-lg:from-orange-700 max-lg:to-amber-400 max-lg:shadow-orange-500/20",
      hover: "lg:hover:from-orange-600 lg:hover:to-amber-500 lg:hover:shadow-orange-500/25",
      desktopFee: "lg:bg-gradient-to-r lg:from-orange-700 lg:via-orange-500 lg:to-amber-400 lg:bg-clip-text lg:text-transparent",
      mobilePanel: "max-lg:border-orange-500/25 max-lg:from-orange-500/[0.08] max-lg:to-amber-400/[0.06]",
      mobileInstructorBorder: "max-lg:border-orange-500/25",
      ring: "focus-visible:ring-orange-500",
    },
    photoshop: {
      title: "from-blue-800 via-sky-600 to-cyan-400",
      accentText: "text-blue-700",
      border: "border-blue-500/25",
      requirementButton: "bg-gradient-to-r from-blue-800 to-cyan-600 shadow-blue-700/25",
      requirementGlow: "bg-gradient-to-r from-blue-800 to-cyan-600",
      mobileButton: "max-lg:border-blue-700 max-lg:from-blue-800 max-lg:to-cyan-500 max-lg:shadow-blue-500/20",
      hover: "lg:hover:from-blue-700 lg:hover:to-cyan-500 lg:hover:shadow-blue-500/25",
      desktopFee: "lg:bg-gradient-to-r lg:from-blue-800 lg:to-cyan-600 lg:bg-clip-text lg:text-transparent",
      mobilePanel: "max-lg:border-blue-500/25 max-lg:from-blue-500/[0.08] max-lg:to-cyan-400/[0.06]",
      mobileInstructorBorder: "max-lg:border-blue-500/25",
      ring: "focus-visible:ring-blue-500",
    },
    ai: {
      title: "from-emerald-700 to-lime-500",
      accentText: "text-emerald-700",
      border: "border-emerald-500/25",
      requirementButton: "bg-gradient-to-r from-emerald-700 to-lime-500 shadow-emerald-700/25",
      requirementGlow: "bg-gradient-to-r from-emerald-700 to-lime-500",
      mobileButton: "max-lg:border-emerald-700 max-lg:from-emerald-700 max-lg:to-lime-500 max-lg:shadow-emerald-500/20",
      hover: "lg:hover:from-emerald-700 lg:hover:to-lime-500 lg:hover:shadow-emerald-500/25",
      desktopFee: "lg:bg-gradient-to-r lg:from-emerald-700 lg:to-lime-500 lg:bg-clip-text lg:text-transparent",
      mobilePanel: "max-lg:border-emerald-500/25 max-lg:from-emerald-500/[0.08] max-lg:to-lime-400/[0.06]",
      mobileInstructorBorder: "max-lg:border-emerald-500/25",
      ring: "focus-visible:ring-emerald-500",
    },
    illustrator: {
      title: "from-red-900 to-rose-700",
      accentText: "text-red-900",
      border: "border-red-900/20",
      requirementButton: "bg-gradient-to-r from-red-900 to-rose-950 shadow-red-950/20",
      requirementGlow: "bg-gradient-to-r from-red-900 to-rose-950",
      mobileButton: "max-lg:border-red-900 max-lg:from-red-900 max-lg:to-rose-700 max-lg:shadow-red-900/20",
      hover: "lg:hover:from-red-900 lg:hover:to-rose-700 lg:hover:shadow-red-900/25",
      desktopFee: "lg:bg-gradient-to-r lg:from-red-900 lg:to-rose-700 lg:bg-clip-text lg:text-transparent",
      mobilePanel: "max-lg:border-red-900/20 max-lg:from-red-900/[0.07] max-lg:to-rose-700/[0.05]",
      mobileInstructorBorder: "max-lg:border-red-900/20",
      ring: "focus-visible:ring-red-900",
    },
    "after-effects": {
      title: "from-purple-800 to-indigo-600",
      accentText: "text-purple-700",
      border: "border-purple-500/25",
      requirementButton: "bg-gradient-to-r from-purple-800 to-indigo-600 shadow-purple-700/25",
      requirementGlow: "bg-gradient-to-r from-purple-800 to-indigo-600",
      mobileButton: "max-lg:border-purple-800 max-lg:from-purple-800 max-lg:to-indigo-600 max-lg:shadow-purple-500/20",
      hover: "lg:hover:from-purple-800 lg:hover:to-indigo-600 lg:hover:shadow-purple-500/25",
      desktopFee: "lg:bg-gradient-to-r lg:from-purple-800 lg:to-indigo-600 lg:bg-clip-text lg:text-transparent",
      mobilePanel: "max-lg:border-purple-500/25 max-lg:from-purple-600/[0.08] max-lg:to-indigo-500/[0.06]",
      mobileInstructorBorder: "max-lg:border-purple-500/25",
      ring: "focus-visible:ring-purple-500",
    },
    moho: {
      title: "from-red-800 to-rose-500",
      accentText: "text-red-700",
      border: "border-red-500/25",
      requirementButton: "bg-gradient-to-r from-red-800 to-rose-500 shadow-red-700/25",
      requirementGlow: "bg-gradient-to-r from-red-800 to-rose-500",
      mobileButton: "max-lg:border-red-700 max-lg:from-red-800 max-lg:to-rose-500 max-lg:shadow-red-500/20",
      hover: "lg:hover:from-red-800 lg:hover:to-rose-500 lg:hover:shadow-red-500/25",
      desktopFee: "lg:bg-gradient-to-r lg:from-red-800 lg:to-rose-500 lg:bg-clip-text lg:text-transparent",
      mobilePanel: "max-lg:border-red-500/25 max-lg:from-red-600/[0.08] max-lg:to-rose-500/[0.06]",
      mobileInstructorBorder: "max-lg:border-red-500/25",
      ring: "focus-visible:ring-red-500",
    },
  } as const;
  const heroTheme =
    heroThemes[course.slug as keyof typeof heroThemes] ?? heroThemes.blender;
  const courseLogo = courseLogos[course.slug];

  return (
    <main className="min-h-screen bg-paper overflow-x-hidden">
      <Header />

      {/* ── COURSE HERO ─────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden border-b border-mist bg-gradient-to-br from-white via-paper to-violet/[0.06] py-10 md:py-14 lg:py-16">
        {/* Glow Effects */}
        <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-96 w-96 rounded-full bg-violet/10 blur-[110px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-500/[0.08] blur-[110px]" />
        <div className="bg-grid pointer-events-none absolute inset-0 -z-20 opacity-20" />

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-x-14 lg:gap-y-14">
            <div className="contents lg:flex lg:flex-col lg:items-start lg:text-left">
              <Link
                href="/#courses"
                className={`group order-1 inline-flex justify-self-start items-center gap-2.5 rounded-full border ${heroTheme.border} bg-white/45 px-4 py-2.5 text-xs font-bold ${heroTheme.accentText} shadow-sm shadow-ink/5 backdrop-blur-md transition-all duration-300 max-lg:bg-gradient-to-r ${heroTheme.mobileButton} max-lg:text-white lg:order-none lg:mb-7 lg:hover:-translate-y-0.5 lg:hover:border-transparent lg:hover:bg-gradient-to-r ${heroTheme.hover} lg:hover:text-white lg:hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${heroTheme.ring}`}
              >
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                  <path className="transition-transform duration-300 lg:group-hover:-translate-x-0.5" strokeLinecap="round" strokeLinejoin="round" d="m12.5 4.5-5.0 5.5 5.0 5.5" />
                </svg>
                All courses
              </Link>
              <div className="order-2 w-full text-left lg:order-none">
                <p className={`mb-3 text-[11px] font-extrabold uppercase tracking-[0.24em] ${heroTheme.accentText}`}>
                  · Online Course
                </p>
                <div className="flex w-full items-center justify-between gap-3 lg:justify-start lg:gap-2">
                  <h1 className="min-w-0 flex-1 font-display text-[clamp(2.15rem,4vw,3.6rem)] font-black leading-[1.08] tracking-[-0.045em] text-ink">
                    <span className={`bg-gradient-to-r ${heroTheme.title} bg-clip-text text-transparent`}>
                      {course.nameEnglish}
                    </span>
                  </h1>
                  {courseLogo && (
                    <Image
                      src={courseLogo}
                      alt={`${course.nameEnglish} logo`}
                      width={96}
                      height={96}
                      sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                      className="h-[clamp(3.5rem,10vw,6rem)] w-[clamp(3.5rem,10vw,6rem)] shrink-0 object-contain lg:h-[clamp(6.5rem,11vw,8rem)] lg:w-[clamp(6.5rem,11vw,8rem)]"
                    />
                  )}
                </div>
              </div>

              <p className="order-5 mt-0 max-w-[38rem] text-left text-base leading-8 text-inkSoft sm:text-[1.05rem] sm:leading-8 lg:order-none lg:mt-6">
                {detail.summary}
              </p>

              <div className="order-8 mt-0 flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:order-none lg:mt-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border ${heroTheme.border} bg-white/40 px-6 py-3 text-sm font-bold text-ink shadow-sm shadow-ink/5 backdrop-blur-md transition-all duration-300 max-lg:bg-gradient-to-r ${heroTheme.mobileButton} max-lg:text-white lg:hover:-translate-y-1 lg:hover:border-transparent lg:hover:bg-gradient-to-r ${heroTheme.hover} lg:hover:text-white lg:hover:shadow-lg lg:active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${heroTheme.ring}`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform lg:group-hover:translate-x-0.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2 11 13" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m22 2-7 20-4-9-9-4 20-7Z" />
                  </svg>
                  Join Now
                </a>
                <a
                  href="#curriculum"
                  className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border ${heroTheme.border} bg-white/40 px-6 py-3 text-sm font-bold text-ink shadow-sm shadow-ink/5 backdrop-blur-md transition-all duration-300 max-lg:bg-gradient-to-r ${heroTheme.mobileButton} max-lg:text-white lg:hover:-translate-y-1 lg:hover:border-transparent lg:hover:bg-gradient-to-r ${heroTheme.hover} lg:hover:text-white lg:hover:shadow-lg lg:active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${heroTheme.ring}`}
                >
                  Course Content
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform duration-300 lg:group-hover:translate-y-0.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                  </svg>
                </a>
              </div>

              <a
                href="#instructor-details"
                aria-label={`View ${detail.instructor.name}'s full instructor details`}
                className={`order-6 mt-0 flex w-full cursor-pointer items-start gap-3 rounded-xl border-t border-mist/80 pt-5 transition-colors hover:bg-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/50 focus-visible:ring-offset-2 lg:order-none lg:mt-8 ${heroTheme.mobileInstructorBorder}`}
              >
                {detail.instructor.image ? (
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm ring-1 ring-violet/15">
                    <Image
                      src={detail.instructor.image}
                      alt={detail.instructor.name}
                      fill
                      sizes="44px"
                      className="object-cover object-center"
                    />
                  </div>
                ) : (
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet to-blue-600 font-display text-sm font-bold text-white">
                    {detail.instructor.name.charAt(0)}
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-inkSoft/55">
                    Course instructor
                  </p>
                  <p className="mt-0.5 text-sm font-bold leading-snug text-ink">
                    {detail.instructor.name}
                    {detail.instructor.experience && (
                      <span className="hidden font-medium text-inkSoft lg:inline"> ( {detail.instructor.experience} )</span>
                    )}
                  </p>
                  {detail.instructor.qualification && (
                    <p className={`mt-1 text-xs font-semibold leading-relaxed ${heroTheme.accentText}`}>
                      {detail.instructor.qualification}.
                    </p>
                  )}

                </div>
              </a>
            </div>

            <div className="contents lg:mx-auto lg:block lg:w-full lg:max-w-none">
              <div className="order-4 mx-auto w-full max-w-2xl rounded-[1.6rem] border border-white/80 bg-white/70 p-2.5 shadow-[0_24px_70px_-30px_rgba(47,30,89,0.38)] ring-1 ring-violet/[0.08] backdrop-blur-sm max-lg:-mx-3 max-lg:w-[calc(100%+1.5rem)] max-lg:max-w-none max-lg:rounded-[1.4rem] max-lg:border-mist/80 max-lg:bg-white/90 max-lg:p-2 max-lg:shadow-[0_18px_48px_-30px_rgba(47,30,89,0.42)] sm:p-3 lg:order-none">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-ink shadow-inner max-lg:rounded-[1rem]">
                {detail.youtubeVideoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${detail.youtubeVideoId}?rel=0&modestbranding=1&playsinline=1&controls=1`}
                    title={`${course.nameEnglish} Preview Video`}
                    className="pointer-events-auto h-full w-full touch-auto border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <Image
                    src={course.thumbnail}
                    alt={course.nameEnglish}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
                </div>
              </div>

              <div className={`order-7 mt-0 overflow-hidden rounded-2xl border border-mist/80 bg-white shadow-[0_16px_40px_-28px_rgba(47,30,89,0.45)] lg:order-none lg:mt-4 ${heroTheme.mobilePanel}`}>
                {(detail.duration || detail.mode) && (
                  <div className={`grid ${detail.duration && detail.mode ? "grid-cols-2 divide-x" : "grid-cols-1"} divide-mist`}>
                    {detail.duration && (
                      <div className="p-4 sm:p-5">
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-inkSoft/50">Duration</p>
                        <p className="mt-2 font-display text-xs font-bold leading-snug text-ink sm:text-sm">{detail.duration}</p>
                      </div>
                    )}
                    {detail.mode && (
                      <div className="p-4 sm:p-5">
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-inkSoft/50">Format</p>
                        <p className="mt-2 font-display text-xs font-bold leading-snug text-ink sm:text-sm">{detail.mode}</p>
                      </div>
                    )}
                  </div>
                )}

                <div className={`${(detail.duration || detail.mode) ? "border-t" : ""} border-mist bg-gradient-to-r from-violet/[0.035] to-blue-500/[0.035] p-4 sm:p-5 ${heroTheme.mobilePanel}`}>
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-inkSoft/50">Course fee</p>
                      <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className={`font-display text-2xl font-black text-black sm:text-3xl ${heroTheme.desktopFee}`}>
                          {detail.fee}
                        </span>
                        {detail.originalFee && (
                          <span className="text-sm font-semibold text-red-800 line-through">
                            {detail.originalFee}
                          </span>
                        )}
                      </div>
                    </div>
                    {detail.originalFee && (
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-emerald-700 ring-1 ring-emerald-600/10">
                        Special offer
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU LEARN ──────────────────────────────────── */}
      <section className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">

          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            What You&apos;ll Learn
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-inkSoft sm:text-base">
            මෙම පාඨමාලාව සාර්ථකව නිම කිරීමෙන් පසු ඔබට ලැබෙන ප්‍රායෝගික දැනුම
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2">
          {detail.whatYouLearn.map((item, index) => (
            <div
              key={item}
              className="group relative flex min-h-[76px] items-center gap-4 overflow-hidden rounded-2xl border border-mist/80 bg-white/90 p-4 shadow-[0_8px_24px_-18px_rgba(47,30,89,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-violet/25 hover:bg-white hover:shadow-[0_18px_36px_-20px_rgba(109,40,217,0.28)] sm:p-5"
              style={{ transitionDelay: `${Math.min(index, 7) * 35}ms` }}
            >
              <span className="absolute inset-y-3 left-0 w-1 origin-center scale-y-0 rounded-r-full bg-gradient-to-b from-violet to-magenta transition-transform duration-300 group-hover:scale-y-100" />
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet/10 to-magenta/10 text-violet ring-1 ring-violet/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-violet group-hover:to-magenta group-hover:text-white group-hover:ring-transparent">
                ✓
              </span>
              <span className="text-sm font-medium leading-relaxed text-inkSoft transition-colors duration-300 group-hover:text-ink sm:text-[15px]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CURRICULUM ──────────────────────────────────────── */}
      <section id="curriculum" className="relative overflow-hidden border-y border-mist bg-gradient-to-b from-white via-paper2/50 to-white py-16 md:py-20">
        <div className="pointer-events-none absolute -right-36 top-12 h-80 w-80 rounded-full bg-violet/[0.07] blur-[110px]" />
        <div className="pointer-events-none absolute -left-36 bottom-0 h-72 w-72 rounded-full bg-magenta/[0.05] blur-[100px]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Course Content
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-inkSoft sm:text-base">
              සතිපතා ක්‍රමානුකූලව ඉගැන්වෙන විෂය නිර්දේශය
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl space-y-4">
            {detail.curriculum.map((block, index) => (
              <div
                key={block.week}
                className="group relative overflow-hidden rounded-2xl border border-mist/80 bg-white/90 p-5 shadow-[0_10px_30px_-22px_rgba(47,30,89,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-violet/25 hover:bg-white hover:shadow-[0_20px_40px_-24px_rgba(109,40,217,0.25)] sm:p-6"
                style={{ transitionDelay: `${Math.min(index, 7) * 45}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-violet via-magenta to-blue-500 transition-transform duration-500 group-hover:scale-x-100" />

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-violet/10 bg-gradient-to-r from-violet/[0.08] to-magenta/[0.08] px-3.5 py-1.5 text-xs font-bold text-violet">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-black shadow-sm">
                      {index + 1}
                    </span>
                    {block.week}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-base font-bold text-ink transition-colors duration-300 group-hover:text-violet sm:text-lg">
                      {block.title}
                    </h3>
                  </div>
                </div>

                <ul className="mt-5 grid gap-3 border-t border-mist/60 pt-4 sm:grid-cols-2 sm:gap-x-8">
                  {block.points.map((p) => (
                    <li
                      key={p}
                      className="group/point flex items-start gap-3 text-sm leading-relaxed text-inkSoft"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet/[0.07] text-violet/70 transition-colors duration-300 group-hover/point:bg-violet group-hover/point:text-white">
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m3.5 8 3 3 6-6" />
                        </svg>
                      </span>
                      <span className="pt-0.5">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTRUCTOR ──────────────────────────────────────── */}
      <section id="instructor-details" className="relative scroll-mt-6 overflow-hidden px-6 py-16 md:py-20">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-violet/[0.06] blur-[110px]" />
        <div className="relative mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Meet Your Instructor
            </h2>
            <p className="mt-3 text-sm leading-6 text-inkSoft sm:text-base">
              ඔබේ ඉගෙනුම් ගමනට මඟ පෙන්වන පළපුරුදු industry professional
            </p>
          </div>

          <div className="group relative mt-9 overflow-hidden rounded-[1.75rem] border border-mist/80 bg-white/95 p-5 shadow-[0_24px_70px_-38px_rgba(47,30,89,0.38)] transition-all duration-500 hover:-translate-y-1 hover:border-violet/25 hover:shadow-[0_32px_80px_-38px_rgba(109,40,217,0.34)] sm:p-8">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet/[0.06] blur-3xl transition-colors duration-500 group-hover:bg-violet/10" />

            <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:text-left">
            {detail.instructor.image ? (
              <div className="relative mx-auto h-28 w-28 shrink-0 rounded-full bg-gradient-to-br from-violet via-magenta to-amber p-[3px] shadow-lg shadow-violet/15 transition-transform duration-500 group-hover:scale-[1.04] sm:mx-0 sm:h-32 sm:w-32">
                <div className="relative h-full w-full overflow-hidden rounded-full border-[3px] border-white bg-paper2">
                <Image
                  src={detail.instructor.image}
                  alt={detail.instructor.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 112px, 128px"
                  priority
                />
                </div>
              </div>
            ) : (
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet to-magenta font-display text-3xl font-bold text-paper shadow-lg shadow-violet/20 sm:h-32 sm:w-32">
                {detail.instructor.name.charAt(0)}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
                <p className="font-display text-xl font-black tracking-tight text-ink sm:text-2xl">
                  {detail.instructor.name}
                </p>
                {detail.instructor.experience && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-violet/15 bg-violet/[0.06] px-3 py-1.5 text-[11px] font-bold text-violet">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                      <path d="M10 1.8 12.45 6.77l5.48.8-3.96 3.86.94 5.46L10 14.31l-4.91 2.58.94-5.46-3.96-3.86 5.48-.8L10 1.8Z" />
                    </svg>
                    {detail.instructor.experience}
                  </span>
                )}
              </div>
              {detail.instructor.qualification && (
                <p className={`mt-2 text-xs font-semibold leading-relaxed ${heroTheme.accentText}`}>
                  {detail.instructor.qualification}
                </p>
              )}
              <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-inkSoft sm:mx-0">
                {detail.instructor.bio}
              </p>
            </div>
          </div>

          {/* Expertise & Skills */}
          {detail.instructor.skills && detail.instructor.skills.length > 0 && (
            <div className="relative mt-7 border-t border-mist/70 pt-6">
              <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-inkSoft/60">
                Expertise & Specializations
              </p>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                {detail.instructor.skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="group/skill flex items-center gap-2.5 rounded-xl border border-mist/70 bg-gradient-to-r from-paper2/55 to-white px-3 py-2.5 text-xs font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-violet/25 hover:shadow-md hover:shadow-violet/5"
                    style={{ transitionDelay: `${index * 25}ms` }}
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet/10 text-[10px] font-bold text-violet transition-colors duration-300 group-hover/skill:bg-violet group-hover/skill:text-white">
                      ✓
                    </span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Proficient Software & Tools */}
          {detail.instructor.tools && detail.instructor.tools.length > 0 && (
            <div className="relative mt-6 border-t border-mist/70 pt-6">
              <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-inkSoft/60">
                Software & Engine Proficiency
              </p>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
                {detail.instructor.tools.map((tool, index) => {
                  const logo = softwareLogos[tool];
                  return (
                    <div
                      key={tool}
                      className="flex min-h-16 min-w-0 items-center gap-2.5 rounded-xl border border-mist/70 bg-white p-2.5 text-xs font-bold text-ink shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet/25 hover:shadow-md hover:shadow-violet/10 sm:gap-3 sm:p-3"
                      style={{ transitionDelay: `${index * 25}ms` }}
                    >
                      {logo && (
                        <Image
                          src={logo}
                          alt={`${tool} logo`}
                          width={tool === "Moho" ? 64 : 40}
                          height={40}
                          className={`h-10 shrink-0 object-contain ${tool === "Moho" ? "w-16" : "w-10"}`}
                        />
                      )}
                      <span className="min-w-0 text-[11px] leading-tight sm:text-xs">{tool}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          </div>
        </div>
      </section>

      {/* ── REQUIREMENTS & CTA ───────────────────────────────── */}
      <section className="bg-paper2/60 border-t border-mist py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          {/* Requirements Column */}
          <div>
            <div className="text-center md:text-left">
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                Requirements
              </h2>
              <p className="mt-2 text-sm text-inkSoft">
                පාඨමාලාව ආරම්භ කිරීමට ඔබ සතු විය යුතු දේ
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4">
              {detail.requirements.map((r) => (
                <div
                  key={r}
                  className="flex items-start gap-4 rounded-xl2 border border-mist bg-white p-5 shadow-card transition-all duration-300 md:hover:-translate-y-0.5 md:hover:shadow-soft"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet/10 text-xs font-bold text-violet">
                    ✓
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-inkSoft">{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box Column */}
          <div className="relative flex flex-col items-center justify-center overflow-hidden p-8 text-center sm:p-10">
            {/* Glow orbs */}
            <div className="absolute -right-12 -top-12 -z-10 h-32 w-32 rounded-full bg-orange-400/10 blur-2xl" />
            <div className="absolute -bottom-12 -left-12 -z-10 h-24 w-24 rounded-full bg-amber/10 blur-2xl" />

            <p className="whitespace-nowrap font-display text-[11px] font-bold text-ink sm:text-sm lg:text-base">
              {course.nameEnglish} පාඨමාලාවට දැන්ම එකතු වන්න
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-inkSoft">
              Start your {course.nameEnglish} journey today !
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative mt-6 inline-flex items-center gap-3 rounded-full px-10 py-4 text-base font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 ${heroTheme.requirementButton}`}
            >
              <span className={`absolute -inset-0.5 -z-10 rounded-full opacity-60 blur animate-pulse ${heroTheme.requirementGlow}`} />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              Join Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

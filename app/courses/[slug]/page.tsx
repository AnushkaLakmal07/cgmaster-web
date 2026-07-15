import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { courses, getCourseBySlug } from "@/lib/courses";
import { buildWhatsAppLink } from "@/lib/site-config";

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
      <main>
        <Header />
        <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
          <span className="rounded-full bg-violet/10 px-4 py-1.5 text-xs font-semibold text-violet-dark">
            ළඟදීම
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
            className="mt-8 rounded-full bg-violet px-7 py-3.5 text-sm font-semibold text-paper shadow-soft transition-colors hover:bg-violet-dark"
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

  return (
    <main>
      <Header />

      {/* Course hero */}
      <section className="bg-grid border-b border-mist">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
          <div>
            <span className="inline-block rounded-full border border-violet/30 bg-violet/10 px-4 py-1.5 text-xs font-semibold text-violet-dark">
              {detail.level}
            </span>
            <h1 className="font-display mt-5 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              {course.nameEnglish}
            </h1>
            <p className="mt-4 max-w-lg text-inkSoft">{detail.summary}</p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <div className="rounded-xl2 border border-mist bg-white px-5 py-3 shadow-card">
                <p className="text-xs text-inkSoft">කාලසීමාව</p>
                <p className="mt-1 font-semibold text-ink">
                  {detail.duration}
                </p>
              </div>
              <div className="rounded-xl2 border border-mist bg-white px-5 py-3 shadow-card">
                <p className="text-xs text-inkSoft">ක්‍රමය</p>
                <p className="mt-1 font-semibold text-ink">{detail.mode}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-violet px-8 py-4 text-sm font-semibold text-paper shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-violet-dark"
              >
                Join Now — WhatsApp හරහා අප හා සම්බන්ධ වන්න
              </a>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-xl2 border border-mist shadow-soft">
            <Image
              src={course.thumbnail}
              alt={course.nameEnglish}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-4 bottom-4 rounded-xl2 bg-white/95 px-5 py-4 shadow-card backdrop-blur">
              <p className="text-xs text-inkSoft">පාඨමාලා ගාස්තුව</p>
              <div className="mt-1 flex items-baseline gap-2">
                <p className="font-display text-2xl font-bold text-violet-dark">
                  {detail.fee}
                </p>
                {detail.originalFee && (
                  <p className="text-sm text-inkSoft line-through">
                    {detail.originalFee}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          ඔබ ඉගෙන ගන්නා දේ
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {detail.whatYouLearn.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl2 border border-mist bg-white p-4 shadow-card"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet/10 text-xs font-bold text-violet-dark">
                ✓
              </span>
              <span className="text-sm text-inkSoft">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-paper2/60 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            පාඨමාලා විෂය මාලාව
          </h2>
          <div className="mt-8 space-y-4">
            {detail.curriculum.map((block) => (
              <div
                key={block.week}
                className="rounded-xl2 border border-mist bg-white p-6 shadow-card"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-violet px-3 py-1 text-xs font-semibold text-paper">
                    {block.week}
                  </span>
                  <h3 className="font-display font-semibold text-ink">
                    {block.title}
                  </h3>
                </div>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {block.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-inkSoft"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-magenta" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          උපදේශකයා
        </h2>
        <div className="mt-8 flex flex-col items-start gap-6 rounded-xl2 border border-mist bg-white p-6 shadow-card sm:flex-row sm:items-center">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet to-magenta font-display text-xl font-bold text-paper">
            {detail.instructor.name.charAt(0)}
          </div>
          <div>
            <p className="font-display font-semibold text-ink">
              {detail.instructor.name}
            </p>
            <p className="text-sm font-medium text-violet-dark">
              {detail.instructor.role}
            </p>
            <p className="mt-2 text-sm text-inkSoft">
              {detail.instructor.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Requirements + CTA */}
      <section className="bg-ink py-16 text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              අවශ්‍ය සුදුසුකම්
            </h2>
            <ul className="mt-6 space-y-3">
              {detail.requirements.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-paper/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl2 border border-paper/15 bg-paper/5 p-8 text-center">
            <p className="font-display text-xl font-bold">
              දැන්ම ඇතුළත් වන්න
            </p>
            <p className="mt-2 text-sm text-paper/70">
              Join Now ක්ලික් කර WhatsApp හරහා අප හා සම්බන්ධ වන්න.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-amber px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-amber-dark"
            >
              Join Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

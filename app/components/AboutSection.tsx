"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      num: "01",
      title: "Industry Expert Instructors",
      desc: "වසර ගණනාවක ක්ෂේත්‍ර පළපුරුද්දක් ඇති Industry Professionals විසින් සෘජුවම ඉගැන්වේ.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-7 w-7 text-violet">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84 51.39 51.39 0 0 0-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-5.25 6.557c0 1.54 1.155 2.85 2.652 2.973L12 18.25l2.598-.28c1.497-.123 2.652-1.433 2.652-2.973v-3.675" />
        </svg>
      ),
    },
    {
      num: "",
      title: "Project - Based Learning",
      desc: "Theory එකට පමණක් සීමා නොවී, Industry Standard Real-world Projects මඟින් ප්‍රායෝගිකව ඉගෙනීම.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-7 w-7 text-blue-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      ),
    },
    {
      num: "",
      title: "Lifetime Access",
      desc: "එක් වරක් ඇතුළත් වීමෙන් පාඨමාලා අන්තර්ගතයන් සඳහා ඕනෑම වේලාවක Lifetime Access හිමිවේ.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-7 w-7 text-emerald-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
    },
    {
      num: "",
      title: "Dedicated Community Support",
      desc: "ගැටළු මතු වූ සැනින් විසඳුම් ලබා ගැනීමට Instructors සහ Batch-mates සමඟ සෘජු Private Community සේවාව.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-7 w-7 text-amber">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a5.97 5.97 0 00-.942 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative flex min-h-[calc(100vh-72px)] scroll-mt-16 flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-paper2/50 via-paper to-white px-6 py-16 md:py-24"
    >
      {/* Background Ambient Glow Orbs */}
      <div className="absolute left-1/4 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/8 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-blue-600/8 blur-[120px]" />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {/* Header Title */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <h2 className="font-display mt-2 text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            About Us
          </h2>
        </div>

        {/* Feature Cards Grid — Full Width Layout */}
        <div className="mt-16 md:mt-20 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {features.map((f, i) => (
            <div
              key={f.title}
              style={{ transitionDelay: `${150 + i * 120}ms` }}
              className={`group relative flex flex-col justify-between gap-5 rounded-3xl border border-gray-200/80 bg-gray-100/60 p-7 shadow-sm backdrop-blur-md transition-all duration-700 ease-out md:hover:-translate-y-2 md:hover:shadow-xl md:hover:border-violet/40 md:hover:bg-white/80 ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              {/* Top accent line — active on mobile natively, hover on desktop */}
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-transparent via-violet/50 to-transparent opacity-100 md:opacity-0 transition-opacity duration-300 md:group-hover:opacity-100" />

              <div className="flex flex-col flex-1">
                {/* Header row with Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 shadow-sm border border-gray-200/60 transition-transform duration-300 md:group-hover:scale-110 md:group-hover:bg-violet/10">
                    {f.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display mt-5 text-base sm:text-lg font-bold text-ink transition-colors duration-200 md:group-hover:text-violet min-h-[56px] flex items-center">
                  {f.title}
                </h3>

                {/* Sinhala Description */}
                <p
                  className="mt-2 text-xs sm:text-sm leading-relaxed text-inkSoft flex-1"
                  style={{ fontFamily: "'Noto Serif Sinhala', 'Noto Sans Sinhala', serif" }}
                >
                  {f.desc}
                </p>
              </div>

              {/* Bottom Indicator Line — active on mobile natively, hover on desktop */}
              <div className="h-0.5 w-full md:w-8 rounded-full bg-violet/50 md:bg-violet/20 transition-all duration-300 md:group-hover:w-full md:group-hover:bg-violet/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

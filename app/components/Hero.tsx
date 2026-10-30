"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SITE } from "@/lib/site-config";

export default function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const whatsappMessage = "ආයුබෝවන් CGmaster! මට පාඨමාලා පිළිබඳ වැඩිදුර විස්තර දැනගැනීමට අවශ්‍යයි.";
  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <section className="relative overflow-hidden bg-white px-5 pb-8 pt-7 lg:hidden">
      <div className="pointer-events-none absolute -left-24 top-28 h-64 w-64 rounded-full bg-violet/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 top-52 h-64 w-64 rounded-full bg-magenta/10 blur-[100px]" />

      <div className="relative mx-auto flex max-w-lg flex-col items-center text-center">
        <h1 className="w-full font-[Outfit,sans-serif] text-[clamp(2rem,8vw,3rem)] font-extrabold leading-[1.08] tracking-tight">
          <span className="hero-text-enter block text-ink">Develop Your</span>
          <span className="hero-text-enter hero-text-enter-delay block bg-gradient-to-r from-violet via-fuchsia-600 to-magenta bg-clip-text text-transparent">
            Creativity and Knowledge !
          </span>
        </h1>

        <div className="relative mt-2 w-[calc(100%+1.5rem)] max-w-[460px]">
          <Image
            src="/mobile-hero-image.png"
            alt="CGmaster student creating digital art with creative software"
            width={1315}
            height={1196}
            sizes="(max-width: 640px) 100vw, 420px"
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        <div className="mt-4 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 rounded-full bg-white/90 px-4 py-2.5 shadow-lg shadow-violet/10">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet to-magenta text-white shadow-md shadow-violet/20">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m16 0v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
              </svg>
            </span>
            <span className="font-display text-sm font-extrabold text-gray-600 sm:text-base">
              1,000+ Creative Learners
            </span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-w-56 items-center justify-between gap-6 rounded-full bg-gradient-to-r from-violet to-blue-600 px-7 py-3 text-base font-bold text-white shadow-md shadow-violet-500/25 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            aria-label="Join us on WhatsApp"
          >
            Join With Us
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
        </div>

        <a
          href="#courses"
          className="group mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-violet/20 bg-white/80 px-5 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-violet shadow-sm shadow-violet/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet/40 hover:bg-violet hover:text-white hover:shadow-lg hover:shadow-violet/25 active:scale-95 active:bg-violet active:text-white"
          aria-label="Scroll down to courses section"
        >
          Explore Courses
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5 group-active:translate-y-0.5" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>

    <section className="relative hidden h-[calc(100vh-72px)] overflow-hidden bg-white lg:block">
      {/* Ambient Glow Effects */}
      <div className="absolute left-1/2 top-1/4 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/12 blur-[140px]" />
      <div className="absolute right-1/4 bottom-1/3 -z-10 h-80 w-80 rounded-full bg-magenta/8 blur-[120px]" />
      <div className="bg-grid absolute inset-0 -z-20 opacity-25 pointer-events-none" />

      <div className="absolute inset-0 z-10">
        <h1 className="absolute left-0 top-[33%] z-10 w-[42%] -translate-y-1/2 pl-[3%] font-[Outfit,sans-serif] text-[clamp(2.5rem,4.4vw,4.5rem)] font-extrabold leading-[1.12] tracking-tight">
          <span className="hero-text-enter block text-ink">Develop Your</span>
          <span className="hero-text-enter hero-text-enter-delay block bg-gradient-to-r from-violet via-fuchsia-600 to-magenta bg-clip-text text-transparent">
            Creativity and Knowledge !
          </span>
        </h1>
        <div className="absolute left-[3%] top-[52%] z-10 flex w-[40%] flex-col items-start gap-5">
          <div className="flex items-center gap-3 rounded-full bg-white/75 px-4 py-2.5 shadow-lg shadow-violet/5 backdrop-blur-sm">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet to-magenta text-white shadow-md shadow-violet/20">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m16 0v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
              </svg>
            </span>
            <p className="text-sm font-semibold leading-snug text-ink">
              <span className="block font-display text-base font-extrabold text-gray-600">1,000+ Creative Learners</span>
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-w-56 items-center justify-between gap-6 rounded-full bg-gradient-to-r from-violet to-blue-600 px-7 py-3 text-base font-bold text-white shadow-md shadow-violet-500/25 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            aria-label="Join us on WhatsApp"
          >
            Join With Us
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="absolute top-[3%] bottom-0 right-0 w-[86%]">
          <Image
            src="/main%20image.png"
            alt="CGmaster students creating digital art with creative software"
            width={1249}
            height={713}
            className="h-full w-full object-fill"
            priority
          />
        </div>
      </div>

      {/* Scroll Down Indicator — pinned to bottom */}
      <a
        href="#courses"
        className={`absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white transition-all duration-500 ${
          showScrollIndicator
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll down to courses section"
      >
        <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white drop-shadow-md">
          Scroll Down
        </span>
        <svg
          className="h-6 w-6 text-white drop-shadow-md animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </a>
    </section>
    </>
  );
}

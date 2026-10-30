"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site-config";

const navItems = [
  { label: "Courses", href: "/#courses" },
  { label: "FAQ", href: "/#faq" },
  { label: "About us", href: "/#about" },
  { label: "Contact us", href: "/#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll(); // check initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 border-b bg-paper/80 backdrop-blur-md transition-shadow duration-300 ${scrolled ? "border-mist/70 shadow-md" : "border-transparent"}`}>
        <div className="flex w-full items-center justify-between pl-4 pr-4 sm:pl-6 sm:pr-8 py-4">

          {/* Left Group: Logo + Nav Links */}
          <div className="flex items-center gap-8 lg:gap-12">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src={SITE.logo}
                alt={SITE.name}
                width={180}
                height={48}
                className="h-8 md:h-10 lg:h-11 w-auto object-contain transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>

            {/* Nav Links — Left aligned next to logo */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative text-base font-bold text-ink/80 transition-all duration-300 hover:text-violet group py-1"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-violet to-magenta transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* Right Section: Courses Button */}
          <div className="hidden md:flex items-center">
            <a
              href="/#courses"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet to-blue-600 px-7 py-2.5 text-base font-bold text-white shadow-md shadow-violet-500/25 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Courses
            </a>
          </div>

          {/* Hamburger — mobile only, min 44×44px touch target */}
          <button
            id="mobile-menu-btn"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-mist bg-paper/60 text-ink transition-all active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

        </div>
      </header>

      {/* ── Mobile Drawer ─────────────────────────────────────── */}

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Slide-in panel */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-[85vw] max-w-xs flex-col bg-paper shadow-2xl transition-transform duration-300 ease-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between border-b border-mist px-6 py-4">
          <Image
            src={SITE.logo}
            alt={SITE.name}
            width={120}
            height={32}
            className="h-8 w-auto object-contain"
          />
          {/* Close button — 44×44 touch target */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet/20 bg-white/80 text-violet shadow-sm transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-violet hover:to-blue-600 hover:text-white hover:shadow-md hover:shadow-violet/20 active:scale-95 active:bg-violet active:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-1 flex-col gap-3 overflow-y-auto px-5 py-7">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${80 + i * 60}ms` : "0ms" }}
              className={`group relative flex min-h-[58px] items-center overflow-hidden rounded-2xl border border-violet/15 bg-gradient-to-r from-violet/[0.07] via-white to-blue-600/[0.06] px-5 text-[16px] font-semibold text-ink shadow-[0_4px_16px_-12px_rgba(47,30,89,0.28)] transition-all duration-300 active:scale-[0.98] active:border-violet/30 active:from-violet/15 active:via-violet/[0.08] active:to-blue-600/10 ${isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
            >
              <span className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-violet/[0.04] to-blue-600/[0.04] opacity-0 transition-opacity duration-200 group-active:opacity-100" />
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Bottom copyright */}
        <div className="border-t border-mist px-6 py-5">
          <p className="text-center text-[11px] text-ink/30">
            © {new Date().getFullYear()} {SITE.name}
          </p>
        </div>
      </aside>

      {/* Spacer to offset fixed header height */}
      <div className="h-[72px]" />
    </>
  );
}

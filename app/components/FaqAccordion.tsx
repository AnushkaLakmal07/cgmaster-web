"use client";

import { useState } from "react";
import { faqs } from "@/lib/faqs";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-paper2/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-center text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
          FAQ
        </h2>
        <div className="mt-14 divide-y divide-mist/80 border-y border-mist/80">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="py-2 transition-colors duration-200 hover:bg-violet/[0.02]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-8 px-4 sm:px-6 py-6 text-left"
                >
                  <span
                    className="text-lg sm:text-xl font-bold text-ink leading-snug tracking-wide"
                    style={{ fontFamily: "'Noto Serif Sinhala', 'Gemunu Libre', 'Noto Sans Sinhala', serif" }}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet/10 text-xl font-bold text-violet transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-violet text-white" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="px-4 sm:px-6 pb-6 pt-1 text-base sm:text-lg leading-relaxed text-inkSoft"
                    style={{ fontFamily: "'Noto Serif Sinhala', 'Noto Sans Sinhala', serif" }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

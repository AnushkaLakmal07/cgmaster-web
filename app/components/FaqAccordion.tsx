"use client";

import { useState } from "react";
import { faqs } from "@/lib/faqs";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-paper2/60 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-center text-3xl font-bold text-ink sm:text-4xl">
          නිතර අසන ප්‍රශ්න
        </h2>
        <div className="mt-10 divide-y divide-mist rounded-xl2 border border-mist bg-white shadow-card">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-ink">{item.q}</span>
                  <span
                    className={`shrink-0 text-xl text-violet transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-inkSoft">
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

import ToolOrbit from "./ToolOrbit";

export default function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <h1 className="font-mixed-display mt-6 text-4xl font-bold leading-[1.15] text-ink sm:text-5xl">
            <span className="font-display block text-violet-dark">3D</span>
            Blender software එකෙන් <br className="hidden sm:block" />
            3D ඉගෙනගන්න ඔයත් කැමතිද?
          </h1>
          <p className="mt-6 max-w-md text-base text-inkSoft sm:text-lg">
            පරිගණකයක් සහ ඉගෙනීමට ඇති කැමැත්ත ප්‍රමාණවත්. Game Development,
            3D Visualization සහ Animation ලෝකයට ඔබේ පළමු පියවර අදම තියන්න.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/courses/blender"
              className="rounded-full bg-violet px-7 py-3.5 text-sm font-semibold text-paper shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-violet-dark"
            >
              Click Me — Blender Course බලන්න
            </a>
            <a
              href="/#courses"
              className="rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              සියලුම පාඨමාලා
            </a>
          </div>
        </div>
        <ToolOrbit />
      </div>
    </section>
  );
}

import type { Course } from "@/lib/courses";

export default function CourseSocialProof({
  learnerCount,
  rating,
  compact = false,
}: Pick<Course, "learnerCount" | "rating"> & { compact?: boolean }) {
  if (!learnerCount || !rating) return null;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div
      className={`flex flex-wrap items-center gap-x-5 gap-y-3 ${
        compact
          ? "text-xs max-md:flex-nowrap max-md:gap-x-2.5 max-md:whitespace-nowrap"
          : "rounded-2xl border border-white/80 bg-white/55 px-4 py-3 shadow-sm shadow-ink/5 backdrop-blur-sm sm:gap-x-6"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={`flex shrink-0 items-center justify-center rounded-full bg-violet/10 text-violet ${
            compact ? "h-8 w-8 max-md:h-7 max-md:w-7" : "h-10 w-10"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className={compact ? "h-4 w-4 max-md:h-3.5 max-md:w-3.5" : "h-5 w-5"}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m16 0v-2a4 4 0 0 0-3-3.87M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7-7.87a4 4 0 0 1 0 7.75"
            />
          </svg>
        </span>
        <span>
          <span className="block font-display font-black text-ink">
            {learnerCount}+
          </span>
          <span className={`mt-0.5 block text-inkSoft ${compact ? "text-[10px]" : "text-xs"}`}>
            creative learners
          </span>
        </span>
      </div>

      <span
        className={`hidden self-stretch border-l border-mist sm:block ${
          compact ? "my-0.5" : "my-1"
        }`}
        aria-hidden="true"
      />

      <div className="flex items-center gap-2">
        <span
          className="flex items-center gap-0.5 text-amber-500"
          role="img"
          aria-label={`${rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }, (_, index) => {
            const isFull = index < fullStars;
            const isHalf = index === fullStars && hasHalfStar;

            return (
              <span
                key={index}
                className={`${compact ? "text-base max-md:text-sm" : "text-base"} leading-none ${
                  isFull
                    ? "text-amber-500"
                    : isHalf
                      ? "bg-gradient-to-r from-amber-500 from-50% to-slate-300 to-50% bg-clip-text text-transparent"
                      : "text-slate-300"
                }`}
                aria-hidden="true"
              >
                ★
              </span>
            );
          })}
        </span>
        <span className="font-display font-black text-ink">{rating}/5</span>
      </div>
    </div>
  );
}

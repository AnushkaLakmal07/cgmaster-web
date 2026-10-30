import { SITE } from "@/lib/site-config";

const contactChannels = [
  {
    id: "whatsapp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+94 76 662 1518",
    action: "Tap to chat",
    href: `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent("ආයුබෝවන් CGmaster! මට පාඨමාලා පිළිබඳ වැඩිදුර විස්තර දැනගැනීමට අවශ්‍යයි.")}`,
    iconBg: "bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-md shadow-emerald-500/20",
  },
  {
    id: "email",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    value: "info@cgmaster.lk",
    action: "Send us an email",
    href: "mailto:info@cgmaster.lk",
    iconBg: "bg-gradient-to-br from-violet to-violet-light text-white shadow-md shadow-violet-500/20",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative isolate scroll-mt-24 overflow-hidden border-y border-mist/70 bg-gradient-to-b from-paper2/70 via-white to-paper2/50 py-16 sm:py-20">
      <div className="pointer-events-none absolute -left-24 top-8 -z-10 h-64 w-64 rounded-full bg-violet/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-64 w-64 rounded-full bg-magenta/[0.05] blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Contact Us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-7 text-inkSoft sm:text-base sm:leading-8">
            ඕනෑම ප්‍රශ්නයක් ඇත්නම් පහසුවෙන් අප හා සම්බන්ධ වන්න. අපි ඉක්මනින්ම ඔබට සහය වන්නෙමු.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2 sm:gap-5">
          {contactChannels.map((ch) => (
            <a
              key={ch.id}
              id={`contact-${ch.id}`}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${ch.label}: ${ch.value}. ${ch.action}`}
              className="group relative flex min-h-24 min-w-0 items-center gap-3 overflow-hidden rounded-2xl border border-violet/15 bg-gradient-to-r from-white via-white to-violet/[0.05] p-3 shadow-[0_12px_35px_-25px_rgba(47,30,89,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-violet/25 hover:bg-white hover:shadow-[0_20px_40px_-25px_rgba(47,30,89,0.35)] active:scale-[0.98] active:border-violet/35 active:from-violet/[0.08] active:to-blue-600/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 sm:min-h-28 sm:gap-4 sm:p-5"
            >
              <span className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-violet via-magenta to-amber opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12 sm:rounded-2xl ${ch.iconBg}`}
              >
                {ch.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-inkSoft">
                  {ch.label}
                </p>
                <p className="mt-1 overflow-hidden text-ellipsis whitespace-nowrap font-display text-[clamp(0.68rem,3.6vw,0.9375rem)] font-bold text-ink">
                  {ch.value}
                </p>
                <p className="mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-semibold text-violet sm:hidden">
                  {ch.action}
                </p>
              </div>
              <span className="ml-auto flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet/10 to-blue-600/10 text-violet transition-all duration-300 group-hover:translate-x-1 group-active:from-violet group-active:to-blue-600 group-active:text-white sm:h-10 sm:w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

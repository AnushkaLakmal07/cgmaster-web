import Image from "next/image";
import { SITE } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-ink via-[#21143D] to-[#17152E] text-paper">
      <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-violet/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-48 left-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-6 pt-14 sm:pt-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-12">
          <div>
            <a href="/" aria-label={`${SITE.name} home`} className="inline-flex">
              <Image
                src={SITE.logoWhite}
                alt={SITE.name}
                width={160}
                height={44}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-7 text-paper/65">
              ඔබේ creative journey එකට අවශ්‍ය practical skills
              සහ දැනුම අප සමඟ ගොඩනගා ගන්න.
            </p>
            <a
              href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent("ආයුබෝවන් CGmaster! මට පාඨමාලා පිළිබඳ වැඩිදුර විස්තර දැනගැනීමට අවශ්‍යයි.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/20 transition-transform hover:scale-[1.03] active:scale-95"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          <div className="hidden sm:block">
            <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-white">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-paper/65">
              <li><a href="/#courses" className="transition-colors hover:text-white">Courses</a></li>
              <li><a href="/#about" className="transition-colors hover:text-white">About us</a></li>
              <li><a href="/#faq" className="transition-colors hover:text-white">FAQ</a></li>
              <li><a href="/#contact" className="transition-colors hover:text-white">Contact us</a></li>
            </ul>
          </div>

          <div className="hidden sm:block">
            <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-white">
              Popular courses
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-paper/65">
              <li><a href="/courses/blender" className="transition-colors hover:text-white">Blender 3D</a></li>
              <li><a href="/courses/photoshop" className="transition-colors hover:text-white">Adobe Photoshop</a></li>
              <li><a href="/#courses" className="transition-colors hover:text-white">View all courses</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-white">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-paper/65">
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-emerald-300">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-xs text-paper/40">WhatsApp</span>
                    +94 76 662 1518
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:info@cgmaster.lk" className="flex items-center gap-3 transition-colors hover:text-white">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-xs text-paper/40">Email</span>
                    info@cgmaster.lk
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-paper/45">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs font-semibold text-paper/55 transition-colors hover:text-white"
          >
            Back to top
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m5 15 7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

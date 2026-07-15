import Image from "next/image";
import { SITE } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-ink py-14 text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <Image
          src={SITE.logoWhite}
          alt={SITE.name}
          width={160}
          height={44}
          className="h-10 w-auto object-contain"
        />
        <p id="about" className="max-w-xl scroll-mt-24 text-sm text-paper/70">
          CGmaster.lk — Himbuthugolla, Makulella, Bandarawela හි ලියාපදිංචි
          අන්තර්ජාල අධ්‍යාපන ආයතනයකි. ශ්‍රී ලංකාවේ විශ්වවිද්‍යාල සිසුන් සඳහා
          Game Development, Graphic Design, Video Editing ක්ෂේත්‍රවල Creative
          Software පාඨමාලා සිංහල මාධ්‍යයෙන් ලබා දෙයි.
        </p>
        <a
          href={`https://wa.me/${SITE.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-violet hover:text-paper"
        >
          WhatsApp හරහා අප හා සම්බන්ධ වන්න
        </a>
        <p className="text-xs text-paper/40">
          © {new Date().getFullYear()} {SITE.name}. සියලුම හිමිකම් ඇවිරිණි.
        </p>
      </div>
    </footer>
  );
}

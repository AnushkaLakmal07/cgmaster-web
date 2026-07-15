import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site-config";

const navItems = [
  { label: "Courses", href: "/#courses" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact us", href: "/#contact" },
  { label: "About us", href: "/#about" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-mist/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={SITE.logo}
            alt={SITE.name}
            width={150}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-[15px] font-medium text-ink/80 transition-colors hover:text-violet"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="/#courses"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-violet"
        >
          පාඨමාලා බලන්න
        </a>
      </div>
    </header>
  );
}

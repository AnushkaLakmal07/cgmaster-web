import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CGmaster.lk — 3D, Design & Creative Software පාඨමාලා",
  description:
    "CGmaster.lk — ශ්‍රී ලංකාවේ විශ්වවිද්‍යාල සිසුන් සඳහා Blender, Photoshop, Illustrator වැනි Creative Software සිංහල මාධ්‍යයෙන් ඉගෙන ගන්න.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="si">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Sinhala:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-mixed antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CGmaster.lk",
  description:
    "CGmaster.lk — සිසුන් සඳහා Blender, Photoshop, Illustrator වැනි Creative Software සිංහල මාධ්‍යයෙන් ඉගෙන ගන්න.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

import WhatsAppButton from "./components/WhatsAppButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="si">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Sinhala:wght@400;500;600;700;800&family=Gemunu+Libre:wght@400;600;700;800&family=Noto+Serif+Sinhala:wght@400;600;700;800&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-mixed antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

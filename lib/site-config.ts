// ---------------------------------------------------------------------------
// Central place to edit site-wide settings.
// ---------------------------------------------------------------------------

export const SITE = {
  name: "CGmaster.lk",
  tagline: "Sri Lanka ගොඩනැගිලි නවීන Creative Software පාඨමාලා",
  logo: "https://cgmaster.lk/wp-content/uploads/2026/01/cgmaster-logo.png",
  logoWhite:
    "https://cgmaster.lk/wp-content/uploads/2026/01/cgmaster_lk-white-logo.png",
  // WhatsApp number courses "Join Now" buttons message goes to.
  // Format: country code + number, no + sign, no spaces.
  whatsappNumber: "94784424308",
};

export function buildWhatsAppLink(courseName: string) {
  const message = `ආයුබෝවන් CGmaster! මට "${courseName}" පාඨමාලාවට ඇතුළත් වීමට කැමතියි. වැඩිදුර විස්තර දෙන්න.`;
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

// ---------------------------------------------------------------------------
// Central place to edit site-wide settings.
// ---------------------------------------------------------------------------

export const SITE = {
  name: "CGmaster.lk",
  tagline: "Sri Lanka Creative පාඨමාලා",
  logo: "/cgmaster-logo.png",
  logoWhite: "/cgmaster-logo.png", // We will use the same logo and apply white filter in the footer if needed, or point it to the local file for fallback.
  // WhatsApp number courses "Join Now" buttons message goes to.
  // Format: country code + number, no + sign, no spaces.
  whatsappNumber: "94766621518",
};

export function buildWhatsAppLink(courseName: string) {
  const message = `ආයුබෝවන් CGmaster! මට "${courseName}" පාඨමාලාවට ඇතුළත් වීමට කැමතියි. වැඩිදුර විස්තර දෙන්න.`;
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

# CGmaster.lk — Next.js Website

## 1. Local Test Karanna (Computer eke Run Karanna)

```bash
npm install
npm run dev
```

Then open: http://localhost:3000

## 2. Edit Karanna Oni Dewal

- **Course details / fee / instructor** → `lib/courses.ts`
- **WhatsApp number** → `lib/site-config.ts`
- **FAQ questions** → `lib/faqs.ts`
- Logo/images currently hotlinked from `cgmaster.lk` wp-content folder. To use your own, drop images in `public/` and update paths.

## 3. Deploy Karanna (Vercel — Free, Recommended)

1. GitHub eke repo ekak hadanna, me code eka push karanna.
2. https://vercel.com walata GitHub account eken login venna.
3. "New Project" → repo eka select karanna → Deploy click karanna.
4. Deploy wela ivara unama, Vercel project Settings → Domains walata gihin `cgmaster.lk` add karanna.
5. Vercel dena DNS records (A / CNAME) Verpex hosting eke DNS settings walata daanna (Verpex cPanel → DNS Zone Editor).
6. DNS propagate wenna පැය කිහිපයක් යා හැක. Ivara unama site eka live wenawa.

## 4. WordPress Hosting Eka

DNS eka Vercel walata point karapu gaman, Verpex eke thibba WordPress site eka backup ekak widihata thiyaganna puluwan (cancel karanna kalin), api anith site eka fully live wela test karala balanna.

## Notes

- Blender course full detail page: `/courses/blender`
- Photoshop/Illustrator/Substance Painter — "coming soon" widihata thiyenne. Ape data structure eke `comingSoon: false` karala `detail` object eka fill karoth ekath full page ekak wenawa (blender eke widihatama).

// ---------------------------------------------------------------------------
// All course catalogue + detail content lives here.
// To add a new full course page: set comingSoon to false and fill `detail`.
// ---------------------------------------------------------------------------

export interface CourseDetail {
  fee: string;
  originalFee?: string;
  duration: string;
  mode: string;
  level: string;
  instructor: {
    name: string;
    role: string;
    bio: string;
  };
  summary: string;
  whatYouLearn: string[];
  curriculum: { week: string; title: string; points: string[] }[];
  requirements: string[];
}

export interface Course {
  slug: string;
  name: string;
  nameEnglish: string;
  shortDesc: string;
  thumbnail: string;
  comingSoon: boolean;
  detail?: CourseDetail;
}

export const courses: Course[] = [
  {
    slug: "blender",
    name: "Blender 3D",
    nameEnglish: "Blender 3D Fundamentals",
    shortDesc: "සුන්‍යයේ සිට 3D මාදිලි නිර්මාණය, ටෙක්ස්චරින් සහ රෙන්ඩරින් දක්වා.",
    thumbnail:
      "https://cgmaster.lk/wp-content/uploads/2026/01/blender-course-thumbnail.png",
    comingSoon: false,
    detail: {
      fee: "Rs. 6,500",
      originalFee: "Rs. 9,500",
      duration: "සති 8 ක් (Weeks 8) · සතියකට පැය 3ක්",
      mode: "සම්පූර්ණයෙන්ම Online — සජීවී Zoom පන්ති + පටිගත වීඩියෝ",
      level: "ආරම්භකයින් සඳහා (No prior experience needed)",
      instructor: {
        name: "[Instructor නම මෙතන එකතු කරන්න]",
        role: "3D Artist & Technical Lead, CGmaster",
        bio: "වසර ගණනාවක අත්දැකීම් සහිත 3D ආර්ටිස්ට් කෙනෙකු විසින් ඔබට Blender මූලික සිද්ධාන්ත සිට Production-level workflow දක්වා පියවරෙන් පියවර උගන්වයි.",
      },
      summary:
        "Blender කියන්නේ නොමිලේ ලබාගත හැකි ලෝකයේ වඩාත්ම ජනප්‍රිය 3D software එක. මෙම පාඨමාලාව හරහා ඔබට Modeling, Sculpting, Texturing, Lighting සහ Rendering යන ක්ෂේත්‍රවල මූලික සිට උසස් දැනුමක් ලබා ගත හැක. Game Development, Product Visualization, Architecture Visualization හෝ Animation ක්ෂේත්‍රයට පිවිසෙන ඕනෑම කෙනෙකුට මෙය පරිපූර්ණ ආරම්භයකි.",
      whatYouLearn: [
        "Blender Interface එක සහ Navigation මූලික සිද්ධාන්ත",
        "3D Modeling — Low poly සිට High poly දක්වා",
        "Sculpting මගින් organic shapes නිර්මාණය කිරීම",
        "UV Unwrapping සහ Texture Painting",
        "Realistic Materials සහ Shading (Node Editor)",
        "Lighting Setup සහ Cycles/Eevee Rendering",
        "Camera Composition සහ Final Render Output",
        "Portfolio-ready ව්‍යාපෘති 2ක් සම්පූර්ණ කිරීම",
      ],
      curriculum: [
        {
          week: "සතිය 1-2",
          title: "Blender Foundations",
          points: [
            "Interface, Navigation, Object Modes",
            "මූලික Modeling Tools (Extrude, Bevel, Loop Cut)",
            "Modifiers හඳුනාගැනීම",
          ],
        },
        {
          week: "සතිය 3-4",
          title: "Advanced Modeling & Sculpting",
          points: [
            "Hard-surface modeling techniques",
            "Sculpt Mode — Brushes සහ Dynatopo",
            "Retopology මූලික සිද්ධාන්ත",
          ],
        },
        {
          week: "සතිය 5-6",
          title: "Texturing & Shading",
          points: [
            "UV Unwrapping strategies",
            "Shader Node Editor — PBR Materials",
            "Texture Painting Blender තුළදීම",
          ],
        },
        {
          week: "සතිය 7-8",
          title: "Lighting, Rendering & Final Project",
          points: [
            "Studio Lighting Setups",
            "Cycles vs Eevee Render Engines",
            "Final Portfolio Project සම්පූර්ණ කිරීම",
          ],
        },
      ],
      requirements: [
        "පරිගණකයක් (Windows/Mac) සහ අන්තර්ජාල සම්බන්ධතාවයක්",
        "Blender (නොමිලේ) — Download link පන්තියේදී ලබා දේ",
        "මූලික පරිගණක දැනුමක් ප්‍රමාණවත්",
        "ඉගෙනීමට ඇති කැමැත්තයි ඕනෑම වයස් සීමාවක් සුදුසුයි",
      ],
    },
  },
  {
    slug: "photoshop",
    name: "Photoshop",
    nameEnglish: "Adobe Photoshop",
    shortDesc: "Photo Editing සිට Digital Art දක්වා සම්පූර්ණ මාර්ගෝපදේශය.",
    thumbnail:
      "https://cgmaster.lk/wp-content/uploads/2026/01/photoshop-course-thumbnail.png",
    comingSoon: true,
  },
  {
    slug: "illustrator",
    name: "Illustrator",
    nameEnglish: "Adobe Illustrator",
    shortDesc: "Vector Graphics, Logo Design සහ Brand Identity නිර්මාණය.",
    thumbnail:
      "https://cgmaster.lk/wp-content/uploads/2026/01/illustrator-course-thumbnail.png",
    comingSoon: true,
  },
  {
    slug: "substance-painter",
    name: "Substance Painter",
    nameEnglish: "Substance Painter",
    shortDesc: "Game-ready Textures සහ PBR Material Workflow ඉගෙනගන්න.",
    thumbnail:
      "https://cgmaster.lk/wp-content/uploads/2026/01/substance-painter-course-thumbnail.png",
    comingSoon: true,
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}

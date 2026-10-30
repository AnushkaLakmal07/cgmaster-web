// ---------------------------------------------------------------------------
// All course catalogue + detail content lives here.
// To add a new full course page: set comingSoon to false and fill `detail`.
// ---------------------------------------------------------------------------

export interface CourseDetail {
  fee: string;
  originalFee?: string;
  duration?: string;
  mode?: string;
  level: string;
  youtubeVideoId?: string;
  instructor: {
    name: string;
    role: string;
    bio: string;
    qualification?: string;
    image?: string;
    experience?: string;
    skills?: string[];
    tools?: string[];
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
  popular?: boolean;
  learnerCount?: number;
  rating?: number;
  detail?: CourseDetail;
}

export const courses: Course[] = [
  {
    slug: "blender",
    name: "Blender 3D",
    nameEnglish: "Blender 3D Modeling",
    shortDesc: "3D Modeling සිට Realistic Rendering දක්වා Blender වල සම්පූර්ණ Production Pipeline එක ප්‍රායෝගිකව ඉගෙන ගන්න.",
    thumbnail: "/blender-thumbnail.jpg",
    comingSoon: false,
    popular: true,
    learnerCount: 100,
    rating: 4.5,
    detail: {
      fee: "Rs. 6,500",
      originalFee: "Rs. 9,500",
      duration: "8 Weeks (30 hours)",
      mode: "Online Live Classes",
      level: "ආරම්භකයින් සඳහා (No prior experience needed)",
      youtubeVideoId: "DBZNrmWjAZo",
      instructor: {
        name: "Mr. M.D.V. Senadeera",
        role: "Technical Artist & CG Instructor",
        experience: "4 Years Industry Experience",
        bio: "Specializing in Game Development & Animation with 4 years of industry experience across 3D production pipelines & game engines.",
        qualification: "BICT (Hons) - Specializing in Game & Animation, University of Kelaniya",
        image: "/instructor-vijitha.png",
        skills: [
          "3D Modeling",
          "Retopology",
          "UV Mapping",
          "Texturing",
          "Rigging",
          "Animation",
          "Lighting & Rendering",
          "Game Optimization",
        ],
        tools: [
          "Blender",
          "Photoshop",
          "After Effects",
          "Spine",
          "Moho",
          "Unity",
          "Unreal Engine",
        ],
      },
      summary:
        "Blender යනු ලෝකයේ වඩාත්ම ජනප්‍රිය නොමිලේ ලබාගත හැකි 3D Software එකයි. මෙම පාඨමාලාව ඔබව Modeling, Sculpting, Texturing, Lighting සහ Rendering පිළිබඳ මූලික සිද්ධාන්තවල සිට උසස් Production Workflow එකක් දක්වා පියවරෙන් පියවර ගෙන යයි. Game Development, Product Visualization, Architecture Visualization හෝ Animation ක්ෂේත්‍රයට පිවිසෙන ඕනෑම කෙනෙකුට මෙය ඔබේ 3D ගමනේ ආරම්භයයි.",
      whatYouLearn: [
        "Blender Interface එක සහ Navigation මූලික සිද්ධාන්ත",
        "3D Modeling - Low poly සිට High poly දක්වා",
        "Sculpting මගින් organic shapes නිර්මාණය කිරීම",
        "UV Unwrapping සහ Texture Painting",
        "Realistic Materials සහ Shading (Node Editor)",
        "Lighting Setup සහ Cycles/Eevee Rendering",
        "Camera Composition සහ Final Render Output",
        "Portfolio Project 2ක් සම්පූර්ණ කිරීම",
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
            "Sculpt Mode - Brushes සහ Dynatopo",
            "Retopology මූලික සිද්ධාන්ත",
          ],
        },
        {
          week: "සතිය 5-6",
          title: "Texturing & Shading",
          points: [
            "UV Unwrapping strategies",
            "Shader Node Editor - PBR Materials",
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
        "පරිගණකයක් සහ අන්තර්ජාල සම්බන්ධතාවයක්.",
        "Blender (නොමිලේ) - Download link පන්තියේදී ලබා දේ.",
        "මූලික පරිගණක දැනුමක් ප්‍රමාණවත්.",
        "ඉගෙනීමට ඇති කැමැත්තයි ඕනෑම වයස් සීමාවක් සුදුසුයි.",
      ],
    },
  },
  {
    slug: "illustrator",
    name: "Illustrator",
    nameEnglish: "Adobe Illustrator",
    shortDesc: "Adobe Illustrator භාවිතයෙන් Vector Graphics, Logo Design සහ Brand Identity නිර්මාණය.",
    thumbnail: "/illustrator-thumbnail.jpg",
    comingSoon: true,
  },
  {
    slug: "moho",
    name: "Moho",
    nameEnglish: "Moho 2D Animation",
    shortDesc: "Moho භාවිතයෙන් 2D character animation, rigging සහ storytelling ඉගෙනගන්න.",
    thumbnail: "/course-moho.svg",
    comingSoon: true,
  },
  {
    slug: "photoshop",
    name: "Photoshop",
    nameEnglish: "Adobe Photoshop",
    shortDesc: "Photo editing, compositing සහ digital art නිර්මාණය Adobe Photoshop සමඟ ඉගෙනගන්න.",
    thumbnail: "/course-photoshop.svg",
    comingSoon: false,
    popular: true,
    learnerCount: 100,
    rating: 4.5,
    detail: {
      fee: "Rs. 5,000",
      originalFee: "Rs. 7,000",
      duration: "8 Weeks",
      mode: "Online Live Classes",
      level: "ආරම්භකයින් සඳහා (No prior experience needed)",
      instructor: {
        name: "Mr. M.D.V. Senadeera",
        role: "Technical Artist & CG Instructor",
        experience: "4 Years Industry Experience",
        bio: "Specializing in Game Development & Animation with 4 years of industry experience across 3D production pipelines & game engines.",
        qualification: "BICT (Hons) - Specializing in Game & Animation, University of Kelaniya",
        image: "/instructor-vijitha.png",
        skills: [
          "Photo Editing",
          "Image Compositing",
          "Digital Painting",
          "Layer-based Workflow",
          "Masking & Selection",
          "Color Correction",
          "Typography & Layout",
          "Creative Design",
        ],
        tools: [
          "Photoshop",
          "Blender",
          "After Effects",
          "Illustrator",
          "Moho",
        ],
      },
      summary:
        "Adobe Photoshop භාවිතයෙන් ඡායාරූප සංස්කරණය, image compositing සහ digital artwork නිර්මාණය කිරීමේ මූලික සිට ප්‍රායෝගික workflow දක්වා ඉගෙනගන්න. පියවරෙන් පියවර කරන පාඩම් සහ project මඟින් ඔබේ නිර්මාණශීලී අදහස් polished visual designs බවට පත් කරගැනීමට අවශ්‍ය දැනුම ලබාගන්න.",
      whatYouLearn: [
        "Photoshop workspace, tools සහ document setup භාවිතය",
        "Layers, selections සහ non-destructive editing workflow",
        "Layer masks සහ image compositing",
        "Photo retouching සහ color correction",
        "Typography සහ social media graphic design",
        "Brushes භාවිතයෙන් digital painting මූලික කරුණු",
        "Export settings සහ web-ready image formats",
        "ප්‍රායෝගික Photoshop portfolio projects නිර්මාණය",
      ],
      curriculum: [
        {
          week: "සතිය 1",
          title: "Photoshop Foundations",
          points: [
            "Workspace, tools සහ panels හඳුනාගැනීම",
            "Documents, image size සහ resolution",
            "Layers සහ basic editing workflow",
          ],
        },
        {
          week: "සතිය 2",
          title: "Selections & Layer Masks",
          points: [
            "Selection tools සහ subject isolation",
            "Layer masks භාවිතයෙන් non-destructive edits",
            "Background replacement මූලික කරුණු",
          ],
        },
        {
          week: "සතිය 3",
          title: "Photo Retouching",
          points: [
            "Healing සහ retouching tools",
            "Portrait cleanup මූලික workflow",
            "Adjustment layers භාවිතය",
          ],
        },
        {
          week: "සතිය 4",
          title: "Color & Image Correction",
          points: [
            "Brightness, contrast සහ color balance",
            "Curves සහ tonal adjustments",
            "Images අතර color consistency",
          ],
        },
        {
          week: "සතිය 5",
          title: "Creative Compositing",
          points: [
            "Images එකට blend කිරීම",
            "Lighting සහ shadows ගැළපීම",
            "Depth සහ visual focus නිර්මාණය",
          ],
        },
        {
          week: "සතිය 6",
          title: "Typography & Graphic Design",
          points: [
            "Type tools සහ text formatting",
            "Social media graphics සහ layouts",
            "Color සහ composition මූලික කරුණු",
          ],
        },
        {
          week: "සතිය 7",
          title: "Digital Art & Effects",
          points: [
            "Brushes සහ painting workflow",
            "Creative effects සහ finishing touches",
            "Design refinement සහ feedback",
          ],
        },
        {
          week: "සතිය 8",
          title: "Final Project & Export",
          points: [
            "සම්පූර්ණ Photoshop project එකක් කිරීම",
            "Project files සංවිධානය කිරීම",
            "Web සහ presentation සඳහා export කිරීම",
          ],
        },
      ],
      requirements: [
        "Photoshop ධාවනය කළ හැකි පරිගණකයක් සහ අන්තර්ජාල සම්බන්ධතාවයක්.",
        "Adobe Photoshop ස්ථාපනය කරගැනීම; setup තොරතුරු පන්තියේදී ලබා දේ.",
        "මූලික පරිගණක දැනුමක් ප්‍රමාණවත්.",
        "ආරම්භකයින්ටද සහභාගී විය හැක.",
      ],
    },
  },
  {
    slug: "ai",
    name: "AI",
    nameEnglish: "AI for Creatives",
    shortDesc: "නිර්මාණශීලී වැඩ සඳහා AI tools භාවිතා කරන ආකාරය ඉගෙනගන්න. සම්පූර්ණ පාඨමාලා විස්තර ළඟදීම.",
    thumbnail: "/course-ai.svg",
    comingSoon: true,
  },
  {
    slug: "after-effects",
    name: "After Effects",
    nameEnglish: "Adobe After Effects",
    shortDesc: "Motion graphics සහ visual effects නිර්මාණය කිරීමේ මූලික දේ Adobe After Effects සමඟ ඉගෙනගන්න.",
    thumbnail: "/course-after-effects.svg",
    comingSoon: true,
  },
  // {
  //   slug: "substance-painter",
  //   name: "Substance Painter",
  //   nameEnglish: "Substance Painter",
  //   shortDesc: "Game-ready Textures සහ PBR Material Workflow ඉගෙනගන්න.",
  //   thumbnail:
  //     "https://cgmaster.lk/wp-content/uploads/2026/01/substance-painter-course-thumbnail.png",
  //   comingSoon: true,
  // },
];

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}

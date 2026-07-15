import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F5FB",
        paper2: "#EFEDF9",
        ink: "#15121F",
        inkSoft: "#4A4560",
        violet: {
          DEFAULT: "#6D28D9",
          light: "#8B5CF6",
          dark: "#4C1D95",
        },
        magenta: {
          DEFAULT: "#DB2777",
          light: "#F472B6",
        },
        amber: {
          DEFAULT: "#F59E0B",
          dark: "#D97706",
        },
        mist: "#E3DFF5",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        sinhala: ["var(--font-sinhala)", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(109, 40, 217, 0.25)",
        card: "0 10px 30px -12px rgba(21, 18, 31, 0.15)",
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        counterOrbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spinSlow: {
          "0%": { transform: "rotateY(0deg) rotateX(-18deg)" },
          "100%": { transform: "rotateY(360deg) rotateX(-18deg)" },
        },
      },
      animation: {
        orbit: "orbit 18s linear infinite",
        counterOrbit: "counterOrbit 18s linear infinite",
        float: "float 4s ease-in-out infinite",
        spinSlow: "spinSlow 14s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

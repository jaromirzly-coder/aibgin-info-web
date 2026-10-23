import type { Config } from "tailwindcss";

// aibeva.com palette (v3.2, 22 Oct 2026). Site accent for aibgin.info: amber.
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#070c1a",
        surface: "#0f1830",
        tint: "#111d3a",
        rule: "#1f2c4d",
        ink: "#f3f6fc",
        soft: "#a9b5cc",
        faint: "#75829e",
        primary: { DEFAULT: "#4d8bff", hover: "#2f6bff", light: "#8fb6ff" },
        accent: { DEFAULT: "#ffc04d", ink: "#1a1200" },
      },
      fontFamily: {
        sans: ['"Segoe UI Variable Text"', '"Segoe UI Variable Display"', '"Segoe UI"', "system-ui", "-apple-system", '"Helvetica Neue"', "Arial", "sans-serif"],
        display: ['"Segoe UI Variable Display"', '"Segoe UI"', "system-ui", "-apple-system", '"Helvetica Neue"', "Arial", "sans-serif"],
      },
      borderRadius: { card: "20px" },
    },
  },
  plugins: [],
};

export default config;

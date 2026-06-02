import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#1a3a6b",
          cyan: "#00b4d8",
          light: "#e8f4fd",
        },
      },
    },
  },
  plugins: [],
};

export default config;

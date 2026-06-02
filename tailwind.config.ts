import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#060912",
          900: "#0a0f1e",
          800: "#111827",
          700: "#1f2937",
        },
        brand: {
          indigo: "#6366f1",
          cyan:   "#06b6d4",
          violet: "#8b5cf6",
          emerald:"#10b981",
          pink:   "#ec4899",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-mesh": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.35), transparent), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(6,182,212,0.2), transparent)",
        "card-shine": "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)",
      },
      animation: {
        "fade-up":   "fadeUp 0.6s ease both",
        "fade-in":   "fadeIn 0.5s ease both",
        "float":     "float 6s ease-in-out infinite",
        "pulse-slow":"pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "shimmer":   "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeUp:  { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn:  { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        float:   { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
        "glow-indigo": "0 0 40px rgba(99,102,241,0.25)",
        "glow-cyan":   "0 0 40px rgba(6,182,212,0.2)",
        "card-hover":  "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;

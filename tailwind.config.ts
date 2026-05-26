import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        night: "#06080f",
        accent: "#3b82f6",
        violetflare: "#8b5cf6",
        ink: "#dbeafe",
      },
      boxShadow: {
        glow: "0 0 80px rgba(59,130,246,.35)",
        violet: "0 0 70px rgba(139,92,246,.28)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;

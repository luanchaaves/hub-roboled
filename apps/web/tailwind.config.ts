import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0d14",
        surface: "#121824",
        "surface-border": "#1e293b",
        primary: {
          50: "#e0f2fe",
          500: "#0284c7",
          600: "#0284c7",
          700: "#0369a1",
        },
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
        accent: {
          blue: "#3b82f6",
          cyan: "#06b6d4",
          purple: "#a855f7",
          gold: "#eab308"
        }
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'glow-cyan': 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
      }
    },
  },
  plugins: [],
};
export default config;

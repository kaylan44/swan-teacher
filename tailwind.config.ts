import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#fff5f7",
          100: "#ffe9ef",
          200: "#ffd6e1",
          300: "#f9b5c7",
          400: "#ef8cac",
          500: "#e06c91",
          600: "#C45A73",
          700: "#B04E68",
          800: "#8A394E",
          900: "#662A39",
          950: "#44161f",
        },
        neutral: {
          700: "#2D2D2D",
          800: "#2D2D2D",
          900: "#2D2D2D",
        },
        rose: {
          soft: "#e8525a",
        },
        cream: "#fdfaf7",
        sand: "#f5f0e8",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

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
        green: {
          primary: "#2f7d4e",
        },
        yellow: {
          primary: "#edc920",
        },
        cream: "#fcfaf2",
        "light-yellow": "#fff3bc",
        "text-dark": "#2c2c2c",
        "text-heading": "#1a1a1a",
        "text-gray": "#6b6b6b",
        red: {
          accent: "#ea6d62",
        },
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
        serif: ["Noto Serif JP", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: "var(--font-inter)",
        mono: "var(--font-work-sans)",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        bgprimary: "var(--bg-primary)",
        bgsecondary: "var(--bg-secondary)",
        bgtertiary: "var(--bg-tertiary)",
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;

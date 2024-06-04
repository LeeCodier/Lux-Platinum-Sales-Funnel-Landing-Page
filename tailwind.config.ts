import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        navbreakpoint: "1017px",
      },
      fontFamily: {
        heading: ["Cinzel"],
      },
      colors: {
        page_bg: "#0E0F0D",
        primary: "#3A3A3A",
        secondary: "#C0C0C0",
        text: "#F0F0F0",
        text_gray: "#A3A3A3",
      },
    },
  },
  plugins: [],
};
export default config;

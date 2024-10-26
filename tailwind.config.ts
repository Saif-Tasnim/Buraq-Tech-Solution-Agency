import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          "2xl": "1440px",
        },
      },
      colors: {
        "header-bg": "#405d4c",
        heading1: "",
        primary: "#c27729",
        secondary: "",
        danger: "",
      },
    },
  },
	plugins: [],
};
export default config;

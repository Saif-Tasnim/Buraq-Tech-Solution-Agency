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
        "header-bg": "#7e22ce",
        heading1: "",
        primary: "rgb(8 145 178)",
        secondary: "",
        danger: "",
      },
    },
  },
	plugins: [],
};
export default config;

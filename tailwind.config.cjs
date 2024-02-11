const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      aspectRatio: {
        thumbnail: "1.5",
      },
      fontFamily: {
        // sans: ["Rubik", ...defaultTheme.fontFamily.sans],
        // Eerst serif
        sans: ["eb-garamond", ...defaultTheme.fontFamily.serif],
      },
      // backgroundColor
      colors: {
        "brand-white": "#F1F1F1",
        "brand-sage": "#BCBC82",
        "brand-copper": "#C2783F",
        "brand-orange": "#E28F50",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

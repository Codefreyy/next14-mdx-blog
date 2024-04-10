/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themePink: "#d22d68",
        darkPink: "#ea3578",
        themeBlack: "#10141a",
        darkThemePink: "#ea3578",
      },
    },
    fontFamily: {},
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}

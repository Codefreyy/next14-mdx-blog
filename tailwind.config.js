/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {},
    colors: {
      themePink: "#db2777",
      white: "#fff",
      black: "#121212",
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.{md,html}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};



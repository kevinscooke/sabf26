/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html","./content/**/*.{md,html}","./assets/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

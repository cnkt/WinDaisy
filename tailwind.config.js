/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./themes/**/*.{html,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: true, // all themes are enabled
  }
}

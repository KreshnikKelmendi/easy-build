/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['ZonaPro', 'sans'],
        custom1: ['ZonaPro II', 'sans'],
      },
    },
  },
  plugins: [],
}
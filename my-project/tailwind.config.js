/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ff6c0f",
        "secondary": "#060000",
      },
      height: {
        "80": "20rem",
        "100": "25rem",
        "120": "30rem",
        "140": "35rem",
        "160": "40rem",

      }
    },
  },
  plugins: [],
}

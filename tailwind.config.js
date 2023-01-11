/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./dist/**/*.{html,js}",
      './dist/index.html',

  ],
  theme: {
    extend: {
        height: {
            "cajasH": "30vh",
        },
    },
  },
  plugins: [],
}

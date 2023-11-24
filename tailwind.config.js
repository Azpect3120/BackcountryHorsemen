/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.html", "./**/**/*.html"],
  theme: {
    extend: {
      colors: {
        "body-background": "#171616",
        "orange-text": "#f27a24",
      },
    },
  },
  plugins: [],
};

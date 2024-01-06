/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.html", "./**/**/*.html"],
  theme: {
    extend: {
      colors: {
        "body-background": "#171616",
        "body-background-light": "#212020",
        "orange-text": "#f27a24",
        "yellow-text": "#faf20a",
        "almond": "#EED9C4",
        "tuscan": "#FAD6A5",
        "meadow": "#7ccf0f",
        "forest": "#326309"
      },
    },
    fontFamily: {
      serif: ["Georgia", "ui-serif"],
    },
  },
  plugins: [],
};

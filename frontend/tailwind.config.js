export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sytem-ui"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}

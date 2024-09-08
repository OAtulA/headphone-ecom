/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
      colors: {
        secondary: "#9D9FA1",
        background: "#0F0F10",
        "card-bg": "#323334",
        "gradient-text": "linear-gradient(to bottom, #9D9FA1, #3A3A3B)",
      },
    },
  },
  plugins: [daisyui, require("@tailwindcss/forms")],
};

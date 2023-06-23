/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["var(--primary-font)"],
      },
      spacing: {
        20: "20px",
        30: "30px",
        40: "40px",
        50: "50px",
        100: "100px",
        130: "130px",
        150: "150px",
      },
      keyframes: {
        "bg-move": {
          "0%": { "background-position-x": "0" },
          "100%": { "background-position-x": "389px" },
        },
        wave: {
          "0%": { transform: "rotate(2deg)" },
          "50%": { transform: "rotate(-2deg)" },
          "100%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        "bg-move": "bg-move 5s linear infinite",
        "wave-3": "wave 3s ease infinite",
        "wave-5": "wave 5s ease infinite",
      },
    },
  },
  plugins: [],
});

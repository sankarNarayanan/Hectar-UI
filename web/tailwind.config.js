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
    screens: {
      sm: "540px",
      // => @media (min-width: 540px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1140px",
      // => @media (min-width: 1140px) { ... }

      "2xl": "1600px",
      // => I dont need this anymore
    },

    container: {
      center: true,
    },
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
    },
  },
  plugins: [],
});

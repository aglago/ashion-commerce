/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        borderColor: "#CA1515"
      },
      keyframes: {
        borderOut: {
          "0%, 100%": {
            borderB: "0px"
          },
          "50%": {
            borderColor: "currentColor"
          }
        }
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" },
          "100%": { transform: "translateY(0)" },
        },
        drift: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(30px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        drift: "drift 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FD9E76",
        blue: "#070079",
        green: "#31E021",
        bgcolor: "#FFF4EF",
        green2: "#37964B",
        liner: "#DFFFE6",
        orangedark: "#FF8058",
      },
    },
    animation: {
      blink: "blink 1s ease-in-out infinite", // Custom blink animation
    },
    keyframes: {
      blink: {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0 },
      },
    },
  },
  plugins: [],
};

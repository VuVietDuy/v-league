/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#37003c",
        secondary: "#FFDD00",
        success: "#4CAF50",
        error: "#E90052",
        warning: "#FFC107",
        info: "#2196F3",
        background: "#121212",
        surface: "#FFFFFF",
        onPrimary: "#FFFFFF",
        onSecondary: "#000000",
      },
    },
  },
  plugins: [],
};

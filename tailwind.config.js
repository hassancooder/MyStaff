/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#f0f5fc",
          100: "#e0ebf7",
          200: "#c2d6f0",
          300: "#9bbae4",
          400: "#6d96d4",
          500: "#4a75c4",
          600: "#1a56a7", // Primary brand color
          700: "#174d91",
          800: "#174176",
          900: "#183763",
        },
        yellow: {
          400: "#ffc73a", // Accent color
          500: "#e9a500",
        },
      },
      fontFamily: {
        myfont: ["MyFont", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
    },
  },
  plugins: [],
};

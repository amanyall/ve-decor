/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F3F0E9",
        bone: "#E8E2D8",
        ink: "#171714",
        muted: "#656158",
        stone: "#A99F91",
        charcoal: "#181816",
        paper: "#F5F2EA",
        clay: "#B56F4A",
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Manrope"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widecaps: "0.08em",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        slowZoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.07)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slowZoom: "slowZoom 18s ease-in-out infinite",
        fadeUp: "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

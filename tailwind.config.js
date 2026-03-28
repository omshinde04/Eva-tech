/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005db5",
        "primary-light": "#d6e3ff",
        "primary-dark": "#0052a0",

        secondary: "#566069",
        "secondary-light": "#dae4ee",

        background: "#f8f9fa",
        surface: "#ffffff",

        text: "#2b3437",
        "text-light": "#586064",

        border: "#dbe4e7",
        outline: "#737c7f",

        error: "#9f403d",
      },

      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
        medium: "0 8px 30px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
    },
  },
  plugins: [],
};
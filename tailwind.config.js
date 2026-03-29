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
        // 🤍 BASE (NOT PURE WHITE)
        primary: "#F9FAFB",        // main background
        secondary: "#F3F4F6",      // section bg
        surface: "#FFFFFF",        // cards

        // 🎯 ACCENT (LIMITED USE)
        accent: "#2563EB",         // premium blue
        accentSoft: "#1D4ED8",

        // 📝 TEXT
        textPrimary: "#111827",
        textSecondary: "#4B5563",
        textMuted: "#9CA3AF",

        // 🧊 UI
        borderSubtle: "#E5E7EB",
        borderStrong: "#D1D5DB",

        // STATES
        error: "#DC2626",
        success: "#16A34A",
      },

      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.05)",
        medium: "0 10px 30px rgba(0,0,0,0.08)",
        subtle: "0 0 0 1px rgba(0,0,0,0.04)",
      },

      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
    },
  },
  plugins: [],
};
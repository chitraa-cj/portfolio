const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["bg-transparent", "bg-[#f0f0f0]"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    fontWeight: {
      400: 400,
      500: 500,
      600: 600,
      700: 700,
    },
    extend: {
      colors: {
        White: "#FFFFFF",
        WhiteMuted: "#CBCCCD",
        Black: "#000000",
        Ascent1: "#E02BF0",
        Ascent2: "#6AA5FF",
        Success: "#4BFFFF",
        SuccessAscent1: "#ACFF6A",
        SuccessAscent2: "#2BCDF0",
        Warning: "#FFC6C6",
        WarningAscent1: "#D3D715",
        WarningAscent2: "#FAFF00",
        Danger: "#FB7171",
        DangerDark: "#D52121",
        Theme: "#2B3555",
        Body: "#2B3555",
        TextColor: "#FFFFFF",
        theme: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
    },
  },
  plugins: [addVariablesForColors],
};

// Plugin to add Tailwind colors as global CSS variables
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

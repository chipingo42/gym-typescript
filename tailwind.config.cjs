/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4E8",
        "gray-50": "#EFE6E8",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "seconary-400": "#FFCD58",
        "seconary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/react.svg')",
      }),
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      content: {
        sparkle: "url('./assets/Sparkles.png')",
        envole: "url('./assets/evolve.png')",
        abstractwave: "url('./assets/wave.png')"
      },
      fontSize: {
        "50": "30px",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      maxWidth: {
        fullWidth: "var(--maxWidth)",
      },
      listStyleImage: {
        checkmark: 'url("./src/assets/images/paanlist.png")',
      },
      colors:{
        "customGreen":{
          50:"rgba(51, 185, 96, 0.025)",
          100:"rgba(51, 185, 96, 0.1)",
          200:"rgba(51, 185, 96, 0.2)",
          300:"rgba(51, 185, 96, 0.3)",
          400:"rgba(51, 185, 96, 0.4)",
          500:"rgba(51, 185, 96, 0.5)",
          600:"rgba(51, 185, 96, 0.6)",
          700:"rgba(51, 185, 96, 0.7)",
          800:"rgba(51, 185, 96, 0.8)",
          900:"rgba(51, 185, 96, 0.9)",
          full:"rgba(51, 185, 96, 1)",
          

        }
      }
    },
  },
  plugins: [],
}


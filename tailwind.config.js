/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "hsl(185, 75%, 39%)",
        },
        secondary: {
          500: "hsl(227, 10%, 46%)",
          700: "hsl(229, 23%, 23%)",
        },
        neutral: "hsl(0, 0%, 59%)",
      },
      backgroundImage: {
        "bg-pattern-top": "url('/bg-pattern-top.svg')",
        "bg-pattern-bottom": "url('/bg-pattern-bottom.svg')",
        "card-pattern": "url('/bg-pattern-card.svg')",
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Georgia", "Times", "serif"],
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        "air-dark-grey": {
          50: "#333333",
          100: "#666666",
        },
        "air-grey": "#DCDCDC",
        "air-light-grey": "#EFEFEF",
        "air-dark-blue": "#112467",
        "air-blue": "#9BC1EF",
        "air-cyan": "#33DBDB",
      },
      width: {
        "562-px": "562px",
        "980-px": "980px",
      },
      margin: {
        "165-px": "165px",
      },
    },
  },
  plugins: [],
};

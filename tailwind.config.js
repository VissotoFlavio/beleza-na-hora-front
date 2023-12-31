/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aston: ["aston"],
        ephesis: ["ephesis"],
      },
    },
  },
  plugins: [],
};

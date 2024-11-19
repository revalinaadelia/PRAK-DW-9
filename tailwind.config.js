/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src//*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#9OEE9O',
        secondary: '#2E8B57'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
} 
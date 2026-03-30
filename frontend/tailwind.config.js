/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nature: {
          50: '#f4f9f4',
          100: '#e3f1e5',
          200: '#c7e0cb',
          300: '#9dc7a5',
          400: '#72a97c',
          500: '#4f8c5b',
          600: '#3a6f44',
          700: '#2f5837',
          800: '#27462d',
          900: '#213a26',
        },
        earth: {
          light: '#d2b48c',
          DEFAULT: '#8b5a2b',
          dark: '#5c3a21',
        },
        floral: {
          light: '#fdf3f6',
          DEFAULT: '#f4c2d7',
          dark: '#e38bb0',
        }
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}
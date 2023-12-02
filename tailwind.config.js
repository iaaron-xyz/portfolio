/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chillaxLight: ['Chillax-Light', 'sans-serif'],
        chillaxRegular: ['Chillax-Regular', 'sans-serif'],
        chillaxMedium: ['Chillax-Medium', 'sans-serif'],
        chillaxSemibold: ['Chillax-Semibold', 'sans-serif'],
        chillaxBold: ['Chillax-Bold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


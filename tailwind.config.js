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
        satoshiLight: ['Satoshi-Light', 'sans-serif'],
        satoshiLightItalic: ['Satoshi-LightItalic', 'sans-serif'],
        satoshiRegular: ['Satoshi-Regular', 'sans-serif'],
        satoshiItalic: ['Satoshi-Italic', 'sans-serif'],
        satoshiMedium: ['Satoshi-Medium', 'sans-serif'],
        satoshiBold: ['Satoshi-Bold', 'sans-serif'],
        satoshiBlack: ['Satoshi-Black', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


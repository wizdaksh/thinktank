/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'cloudy': '#a7a8a4',
      'white': '#ffffff',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black': '#000000',
      'transparent': 'transparent',
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)'},
          to: { transform: 'translateX(-70%)'},
        }
      }
    },
  },
  plugins: [],
}


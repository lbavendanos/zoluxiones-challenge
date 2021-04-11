const colors = require('tailwindcss/colors')
const forms = require('@tailwindcss/forms')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      'c-acian': {
        100: '#6769FF',
      },
      'c-gray': {
        50: '#F7F8FC',
        100: '#C5CBE0',
        150: '#A3ABCC',
        200: '#676F8F',
        300: '#494F66',
      },
      'c-red': {
        100: '#EF3340',
      },
      'c-green': {
        100: '#43B748',
      },
    },
    extend: {
      backgroundImage: (theme) => ({
        'hero-pattern': "url('./../images/background.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [forms],
}

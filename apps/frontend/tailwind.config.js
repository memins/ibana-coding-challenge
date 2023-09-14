const HeadlessUi = require('@headlessui/tailwindcss')
const { join } = require('path')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [join(__dirname, '/src/**/*.{vue,js,ts,jsx,tsx}'), join(__dirname, './index.html')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        black: '#212427',
        primary: '#042228',
        primaryHover: '#0a3d4e',
        accent: '#D6F06F',
        'accent-soft': '#314832',
        'green-10': '#f9f9f8',
        'green-100': '#F4F4F2',
        'green-400': '#CCCCC4',
        'green-50': '#ECF4CD',
        'blue-600': '#102137',
        'blue-200': '#22CBFB',
        'green-light-text': '#6f6f65',
        'blue-light-text': '#ADBDCC',
        'gray-100': '#D8DCE1',
        'gray-200': '#D1D1D1',
        'gray-400': '#888888',
        modalgrey: '#0000004d'
      }
    }
  },
  plugins: [HeadlessUi]
}

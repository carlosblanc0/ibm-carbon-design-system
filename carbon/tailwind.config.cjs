/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      'xs': '0.875rem',
      'sm': '1rem',
      'md': '1.125rem',
      'lg': '1.25rem',
      'xl': '1.5rem',
      '2xl': '2rem',
    },
    colors: {
      'black': '#161616',
      'gray-900': '#202024',
      'gray-800': '#262626',
      'gray-400': '#7C7C8A',
      'gray-100': '#C4C4CC',
      'gray-200': '#F1F1F1',

      'cyan-500': '#0F62FE',
      'cyan-300': '#78A9FF',

    },
    extend: {
      fontFamily: {
        sans: 'IBM Plex Sans, sans-serif'
      },
    },
  },
  plugins: [],
}

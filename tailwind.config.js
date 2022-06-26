/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B69F9',
        },
        red: {
          DEFAULT: '#FF4738',
        },
        'bg-dark': {
          DEFAULT: '#383A4C',
          page: '#343646',
        },
        'bg-light': {
          DEFAULT: '#DEE4E7',
          page: '#FFFFFF',
        },
        'text-dark': {
          DEFAULT: '#FFFFFF',
          300: '#9C9DA6',
        },
        'text-light': {
          DEFAULT: '#000000',
          300: '#00000080',
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      primary: '#18181C',
      grey: {
        DEFAULT: '#4F4F4F'
      },
      white: '#fff',
      black: {
        DEFAULT: '#000',
        light: '#4f4f4fbd'
      }
    },
    extend: {
      backgroundImage: {
        colorfull: 'linear-gradient(to right , #F0FBB9, #FBB3A0, #BFA2FD, #A4D0FC, #9FE9E2, #9FFACE)'
      },
      lineHeight: {
        header: '1.2'
      },
      fontSize: {
        header: '58px',
      },
      fontFamily: {
        'sans': ['"sans-serif"', ...defaultTheme.fontFamily.sans],
        'mulish': ['Mulish']
      },
      border: {
        video: '3px 0 0 0 linear-gradient(to right, #AB96F8, #FF99D0)'
      },
      boxShadow: {
        colorfull: '-10px 1px 20px 1px red , 10px 1px 20px 1px blue,  5px 6px 15px 1px yellow'
      }
    },
  },
  plugins: [],
}


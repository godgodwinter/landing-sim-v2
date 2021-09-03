// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    listStyleType: {
      none: 'none',
     disc: 'disc',
     decimal: 'decimal',
     square: 'square',
     roman: 'upper-roman',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
     '50%': '50%',
     'manual': '50%',
     '16': '4rem',
    },
    backgroundPosition: {
      bottom: 'bottom',
     'pos-setting': 'left -4rem top -4rem',
     'bottom-4': 'left -10rem top -14rem',
      center: 'center',
      left: 'left',
     'left-bottom': 'left bottom',
     'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
     'top-4': 'center top 1rem',
    },
    extend: {
      // backgroundImage: theme => ({
      //  'hero': "url('/public/img/rectangle.svg')",
      // }),
      colors:{
        'true-gray': colors.trueGray,
        'emerald': colors.emerald,
        'teal': colors.teal,
        'light-blue': colors.lightBlue,
        'rose': colors.rose,
        'lime': colors.lime,
        'cyan': colors.cyan,
        'thm1pinklighter': '#fff6f6',
        'thm1pink': '#FFB6B9',
        'thm1white': '#FAE3D9',
        'thm1bluelighter': '#BBDED6',
        'thm1bluedarker': '#61C0BF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

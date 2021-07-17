const { spacing, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', ...fontFamily.sans]
      },
      colors: {
        primary: {
          '50': '#fefdfb',
          '100': '#fdfbf6',
          '200': '#f8edd8',
          '300': '#f2dfba',
          '400': '#edd09c',
          '500': '#e5bc71',
          '600': '#dca641',
          '700': '#c68e24',
          '800': '#a4751e',
          '900': '#745315',
        },
        gray: {
          '50': '#f9faf9',
          '100': '#f1f1f1',
          '200': '#dfdedf',
          '300': '#bcbbbc',
          '400': '#909291',
          '500': '#72706b',
          '600': '#5a554f',
          '700': '#453f3b',
          '800': '#292525',
          '900': '#1c191a',
        },
      },
    }
  },
  variants: {
    imageRendering: ['responsive'],
    typography: ['dark'],
    extend: {
      textDecoration: ['focus-visible'],
      textColor: ['visited'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-accessibility'),
    require('tailwindcss-image-rendering')(),
  ]
};

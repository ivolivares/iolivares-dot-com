const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

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
        golden: {
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
        grey: {
          '50': '#110112112',
          '100': '#f8f7f7',
          '200': '#c7c1c1',
          '300': '#958989',
          '400': '#605757',
          '500': '#282424',
          '600': '#262222',
          '700': '#231f1f',
          '800': '#1d1b1b',
          '900': '#1b1818',
        },
      },
      // typography: (theme) => ({
      //   DEFAULT: {
      //     css: {
      //       color: theme('colors.gray.800'),
      //       a: {
      //         color: theme('colors.blue.500'),
      //         '&:hover': {
      //           color: theme('colors.blue.700')
      //         },
      //         code: { color: theme('colors.blue.400') }
      //       },
      //       'h2,h3,h4': {
      //         'scroll-margin-top': spacing[32]
      //       },
      //       code: { color: theme('colors.pink.500') },
      //       'blockquote p:first-of-type::before': false,
      //       'blockquote p:last-of-type::after': false
      //     }
      //   },
      //   dark: {
      //     css: {
      //       color: theme('colors.gray.300'),
      //       a: {
      //         color: theme('colors.blue.400'),
      //         '&:hover': {
      //           color: theme('colors.blue.600')
      //         },
      //         code: { color: theme('colors.blue.400') }
      //       },
      //       blockquote: {
      //         borderLeftColor: theme('colors.gray.700'),
      //         color: theme('colors.gray.300')
      //       },
      //       'h2,h3,h4': {
      //         color: theme('colors.gray.100'),
      //         'scroll-margin-top': spacing[32]
      //       },
      //       hr: { borderColor: theme('colors.gray.700') },
      //       ol: {
      //         li: {
      //           '&:before': { color: theme('colors.gray.500') }
      //         }
      //       },
      //       ul: {
      //         li: {
      //           '&:before': { backgroundColor: theme('colors.gray.500') }
      //         }
      //       },
      //       strong: { color: theme('colors.gray.300') },
      //       thead: {
      //         color: theme('colors.gray.100')
      //       },
      //       tbody: {
      //         tr: {
      //           borderBottomColor: theme('colors.gray.700')
      //         }
      //       }
      //     }
      //   }
      // })
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

const { spacing, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', ...fontFamily.sans],
      },
      colors: {
        primary: {
          // '50': '#fefdfb',
          // '100': '#fdfbf6',
          // '200': '#f8edd8',
          // '300': '#f2dfba',
          // '400': '#edd09c',
          // '500': '#e5bc71',
          // '600': '#dca641',
          // '700': '#c68e24',
          // '800': '#a4751e',
          // '900': '#745315',
          '50': '#f1f7f7',
          '100': '#d6f0f6',
          '200': '#a7e3ec',
          '300': '#71c7d4',
          '400': '#5cb0c1',
          '500': '#278796',
          '600': '#226f7b',
          '700': '#1e5460',
          '800': '#163945',
          '900': '#0f2330',
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
        'khaby-lame': '#c2c2c2',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.primary.800'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
              code: {
                color: theme('colors.primary.800'),
              },
            },
            'h1,h2,h3,h4': {
              color: theme('colors.gray.800'),
              'scroll-margin-top': spacing[32],
            },
            code: {
              color: theme('colors.pink.500'),
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.100'),
            a: {
              color: theme('colors.primary.800'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
              code: {
                color: theme('colors.primary.800'),
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
            },
            'h1,h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32],
            },
            hr: {
              borderColor: theme('colors.gray.700'),
            },
            ol: {
              li: {
                '&:before': {
                  color: theme('colors.gray.500'),
                },
              },
            },
            ul: {
              li: {
                '&:before': {
                  backgroundColor: theme('colors.gray.200'),
                },
              },
            },
            strong: {
              color: theme('colors.gray.300'),
            },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
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
  ],
}

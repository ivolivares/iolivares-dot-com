module.exports = {
  extends: ['standard', 'standard-react', 'prettier'],
  plugins: ['async-await', 'react'],
  env: {
    'browser': true,
    'node': true,
    'es6': true
  },
  rules: {
    'async-await/space-after-async': 2,
    'async-await/space-after-await': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'no-unused-vars': [1, { varsIgnorePattern: '^h$' }],
    'jsx-quotes': [2, 'prefer-double'],
    'no-cond-assign': 1,
    semi: 0,
    camelcase: 0,
    'comma-style': 2,
    'comma-dangle': [2, 'never'],
    indent: ['error', 2],
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
    'no-tabs': 1,
    'no-trailing-spaces': [2, { skipBlankLines: true }],
    'space-before-function-paren': 0,
    'max-nested-callbacks': [2, 4],
    'no-eval': 2,
    'no-implied-eval': 2,
    'no-new-func': 2,
    'guard-for-in': 2,
    eqeqeq: 2,
    'no-else-return': 2,
    'no-redeclare': 2,
    'no-dupe-keys': 2,
    radix: 2,
    strict: [2, 'never'],
    'no-shadow': 0,
    'callback-return': [1, ['callback', 'cb', 'next', 'done']],
    'no-delete-var': 2,
    'no-undef-init': 2,
    'no-shadow-restricted-names': 2,
    'handle-callback-err': 0,
    'no-lonely-if': 2,
    'keyword-spacing': 2,
    'constructor-super': 2,
    'no-this-before-super': 2,
    'no-dupe-class-members': 2,
    'no-const-assign': 2,
    'prefer-spread': 2,
    'no-useless-concat': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-arrow-callback': 2,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/newline-after-import': ['error', { count: 1 }],
    'react/display-name': 0,
    'react/forbid-prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react/no-string-refs': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'always',
        children: true,
        spacing: {
          objectLiterals: 'never'
        }
      }
    ],
    eqeqeq: ['error', 'always'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'lifecycle',
          'everything-else',
          'render',
          '/^_render.+$/'
        ]
      }
    ],
    'react/jsx-sort-props': [
      1,
      {
        callbacksLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true
      }
    ],
    'react/jsx-no-duplicate-props': [1, { ignoreCase: false }],
    'react/no-unused-prop-types': [
      1,
      { skipShapeProps: true }
    ],
    'react/no-unknown-property': [1],
    'react/prop-types': [1],
    'react/require-default-props': [1, { forbidDefaultForRequired: true }],
    'react/sort-prop-types': [
      'warn',
      {
        callbacksLast: true,
        ignoreCase: true,
        requiredFirst: false,
        sortShapeProp: true
      }
    ],
    'prefer-const': ['error'],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'no-debugger': ['off']
  }
}
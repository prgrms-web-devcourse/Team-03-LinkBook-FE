module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser', // @typescript-eslint/parser
  extends: [
    'next/core-web-vitals',
    'plugin:react/recommended', // eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // eslint-plugin-prettier
  ],
  plugins: [
    'react', // eslint-plugin-react
    '@typescript-eslint', // @typescript-eslint/eslint-plugin
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    'jsx-a11y/img-has-alt': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'consistent-return': 'off',
    'no-undef': 'off',
    'import/no-unresolved': 'off',
    'no-underscore-dangle': 'off',
    'react/react-in-jsx-scope': 0,
  },
  ignorePatterns: ['*.config.js'], // 제외하려는 파일
};

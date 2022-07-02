module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'prettier' // Add "prettier" last. This will turn off eslint rules conflicting with prettier. This is not what formats the code.
  ],
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2],
    quotes: [2, 'single', { avoidEscape: true }],
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
  },
}
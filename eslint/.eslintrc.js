module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'eslint:standard',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    quotes: 0,
    semi: 0,
    'no-console': 1,
    'space-before-function-paren': 0,
  },
}

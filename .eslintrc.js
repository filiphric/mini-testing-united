module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:cypress/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'cypress', ],
  rules: {
    'brace-style': ['error', 'stroustrup'],
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-pause': 'error',
    'quotes': ['error', 'single']
  }
};

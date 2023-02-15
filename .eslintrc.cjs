module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': ['off'],
    'prettier/prettier': ['error', { singleQuote: true }],
  },
  globals: {
    module: true,
  },
  settings: {
    /*
     * Disable react version checking for eslint-plugin-react
     * required by eslint-config-airbnb
     */
    react: {
      version: '18.2.0',
    },
  },
};

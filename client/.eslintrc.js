module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-unused-vars': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'react/jsx-no-constructed-context-values': 0,
    'no-restricted-globals': 0,
    'no-param-reassign': 0,
  },
};

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    "react/react-in-jsx-scope": 0
  }
};

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [`plugin:react/recommended`, `airbnb`],
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: `latest`,
    sourceType: `module`,
  },
  plugins: [`react`, `@typescript-eslint`],
  rules: {
    "implicit-arrow-linebreak": false,
    "linebreak-style": 0,
    quotes: [`error`, `backtick`],
    "react/jsx-filename-extension": [
      1,
      { extensions: [`.js`, `.jsx`, `.ts`, `.tsx`] },
    ],
    "import/extensions": [`error`, `never`],
  },
  settings: {
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};

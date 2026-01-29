module.exports = {
  // TS/TSX → ESLint + Prettier
  '**/*.{ts,tsx}': ['eslint --max-warnings=0 --fix --no-warn-ignored', 'prettier --write'],

  // SCSS/CSS → Stylelint + Prettier
  '**/*.{css,scss}': ['stylelint --max-warnings=0 --fix', 'prettier --write'],

  // JSON, MD → Prettier
  '**/*.{json,md}': ['prettier --write'],
};

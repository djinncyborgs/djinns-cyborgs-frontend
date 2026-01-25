export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order'],

  rules: {
    // camelCase classes
    'selector-class-pattern': ['^[a-z][a-zA-Z0-9]+$', {message: 'Use camelCase for class names'}],

    // General rules
    'color-named': 'never',
    'color-hex-length': 'short',
    'length-zero-no-unit': true,
    'unit-no-unknown': true,
    'function-no-unknown': true,
    'media-feature-name-no-unknown': true,

    // Limitations
    'selector-max-id': 1,
    'selector-max-type': 2,
    'selector-max-universal': 1,
    'max-nesting-depth': [3, {ignore: ['blockless-at-rules', 'pseudo-classes']}],

    // Duplicates
    'no-duplicate-selectors': true,
    'declaration-block-no-duplicate-properties': true,
  },

  ignoreFiles: ['node_modules/**/*', 'build/**/*', 'dist/**/*', '**/*.min.css'],
};

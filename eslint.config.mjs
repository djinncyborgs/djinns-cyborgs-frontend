import storybook from 'eslint-plugin-storybook';
import nextCore from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import {defineConfig} from 'eslint/config';
import tseslint from 'typescript-eslint';
import tanstackQuery from '@tanstack/eslint-plugin-query';
import boundaries from 'eslint-plugin-boundaries';

export default defineConfig([
  {
    ignores: ['.storybook/**', '*.config.*', '.next/**', 'out/**', 'build/**', 'node_modules/**', 'coverage/**'],
  },
  ...nextCore,
  ...nextTs,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...tanstackQuery.configs['flat/recommended'],
  ...storybook.configs['flat/recommended'],
  prettierConfig,
  {
    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },

    plugins: {
      prettier: eslintPluginPrettier,
      'simple-import-sort': simpleImportSort,
      '@tanstack/query': tanstackQuery,
      boundaries,
    },

    settings: {
      'boundaries/elements': [
        {type: 'app', pattern: 'src/app/**'},
        {type: 'pages', pattern: 'src/pages/**'},
        {type: 'widgets', pattern: 'src/widgets/**'},
        {type: 'features', pattern: 'src/features/**'},
        {type: 'entities', pattern: 'src/entities/**'},
        {type: 'shared', pattern: 'src/shared/**'},
      ],
    },

    rules: {
      // Next
      '@next/next/no-img-element': 'error',

      // TS
      '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_', varsIgnorePattern: '^_'}],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',

      // React
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // A11y
      'jsx-a11y/anchor-ambiguous-text': 'error',
      'jsx-a11y/control-has-associated-label': 'error',

      // Imports
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/no-cycle': 'error',

      // Code quality
      'no-restricted-syntax': [
        'error',
        {selector: 'TSEnumDeclaration', message: 'Enums are not allowed. Use union types instead.'},
      ],
      'no-magic-numbers': ['warn', {ignore: [0, 1, -1], ignoreArrayIndexes: true, enforceConst: true}],

      // Console
      'no-console': ['warn', {allow: ['warn', 'error']}],

      // Prettier
      'prettier/prettier': 'warn',

      // Boundaries
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            {from: 'app', allow: ['pages']},
            {from: 'pages', allow: ['widgets', 'features', 'entities', 'shared']},
            {from: 'widgets', allow: ['features', 'entities', 'shared']},
            {from: 'features', allow: ['entities', 'shared']},
            {from: 'entities', allow: ['shared']},
            {from: 'shared', allow: []},
          ],
        },
      ],
    },
  },
  {
    files: ['src/app/layout.tsx'],
    rules: {
      'boundaries/element-types': [
        'error',
        {default: 'disallow', rules: [{from: 'app', allow: ['pages', 'widgets', 'features', 'entities', 'shared']}]},
      ],
    },
  },
]);

import nextCore from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import {defineConfig} from 'eslint/config';
import tseslint from 'typescript-eslint';
import tanstackQuery from '@tanstack/eslint-plugin-query';

export default defineConfig([
  {
    ignores: ['*.config.*', '.next/**', 'out/**', 'build/**', 'node_modules/**', 'coverage/**'],
  },

  ...nextCore,
  ...nextTs,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...tanstackQuery.configs['flat/recommended'],
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
    },

    rules: {
      // Next
      '@next/next/no-img-element': 'error',

      // TS
      '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_', varsIgnorePattern: '^_'}],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

      // A11y
      'jsx-a11y/anchor-ambiguous-text': 'error',
      'jsx-a11y/control-has-associated-label': 'error',

      // Imports
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // Console
      'no-console': ['warn', {allow: ['warn', 'error']}],

      // Prettier
      'prettier/prettier': 'warn',
    },
  },
]);

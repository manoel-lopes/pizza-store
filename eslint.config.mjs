// @ts-check

import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'
import tseslint from 'typescript-eslint'
import eslint from '@eslint/js'
import vitest from '@vitest/eslint-plugin'

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...neostandard({
    ignores: resolveIgnoresFromGitignore(),
  }),
  {
    plugins: {
      'react-hooks': eslintPluginReactHooks,
      vitest,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    languageOptions: {
      globals: {
        React: true,
        window: true,
        document: true,
        localStorage: true,
        sessionStorage: true,
        ...vitest.environments?.env?.globals,
      },
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      'simple-import-sort/imports': ['warn', {
        groups: [
          [
            '^react$',
            'react',
            '^\\w',
            '^@',
          ],
          [
            '^\\.',
            '^@/',
            '^\\./',
            '\\.css$',
          ],
        ],
      }],
      'simple-import-sort/exports': 'warn',
      'unused-imports/no-unused-imports': 'warn',
      'no-useless-constructor': 'off',
      'no-unused-vars': 'off',
      'no-var': 'error',
      'no-console': ['error', { allow: ['error'] }],
      '@stylistic/max-len': 'off',
      '@stylistic/function-paren-newline': 'off',
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
      }],
      '@stylistic/multiline-ternary': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-useless-constructor': 'warn',
      '@stylistic/padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },
        { blankLine: 'never', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: '*', next: 'function' },
        { blankLine: 'always', prev: 'function', next: '*' },
        { blankLine: 'never', prev: ['const', 'let', 'var'], next: 'return' },
        { blankLine: 'always', prev: 'function', next: 'return' },
      ],
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
    },
  },
]

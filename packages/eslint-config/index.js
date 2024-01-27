module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  plugins: [
    'jest',
    'import',
    'unused-imports',
    'sort-keys-fix',
    'sort-destructure-keys',
    'typescript-sort-keys',
    'testing-library',
    'unicorn',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        // alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
  },
  rules: {
    'no-console': 'error',
    'sort-keys-fix/sort-keys-fix': 'error', // オブジェクトリターンのソート
    'sort-destructure-keys/sort-destructure-keys': 'error', // オブジェクト引数のソート
    'typescript-sort-keys/interface': ['error', 'asc', { natural: true }],
    'typescript-sort-keys/string-enum': ['error', 'asc', { natural: true }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'never',
      },
    ],
    'import/no-cycle': 'error',
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-null': 'off',
    'import/no-relative-parent-imports': 'off',
  },
  overrides: [
    {
      files: ['*.test.ts'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      rules: {
        'unicorn/no-empty-file': 'off',
        'jest/no-commented-out-tests': 'off',
        'jest/consistent-test-it': ['error', { fn: 'it' }],
      },
    },
    {
      files: ['index.ts', 'index.mock.ts'],
      plugins: ['sort-exports'],
      rules: {
        'sort-exports/sort-exports': ['error', { sortDir: 'asc' }],
      },
    },
  ],
}
module.exports = {
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'no-undef': 'off',
    'no-debugger': 'off',
    'no-unused-vars': 'warn',
    'prettier/prettier': 'error',
    'react/jsx-sort-props': ['warn', { ignoreCase: true, callbacksLast: true }],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}

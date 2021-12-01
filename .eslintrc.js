module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: '.',
  },
  settings: {
    'import/resolver': {
      node: {},
    },
  },
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'import/prefer-default-export': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
  },
  env: {
    node: true,
    es6: true,
    es2017: true,
    jest: true,
  },
};

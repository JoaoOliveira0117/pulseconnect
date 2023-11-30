module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 0,
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'indent': [ 'error', 2, { 'MemberExpression': 1 }],
    'no-multi-spaces': ['error'],
    'newline-per-chained-call': [
      'error',
      {
        'ignoreChainWithDepth': 2
      }
    ]
  },
}

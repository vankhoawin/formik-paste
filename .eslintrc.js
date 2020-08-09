module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['twilio-react', 'twilio-ts'],
  parserOptions: {
    project: './tsconfig.lint.json',
  },

  env: {
    node: true,
    browser: true,
    jest: true,
  },

  rules: {
    'react/jsx-pascal-case': 0,
    'import/no-unused-modules': 0,
  },

  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        'no-alert': 0,
        'react/display-name': 0,
        'react/no-multi-comp': 0,
      },
    },
  ],
};

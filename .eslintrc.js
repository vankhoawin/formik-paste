module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['twilio-react', 'twilio-ts'],

  env: {
    node: true,
    browser: true,
    jest: true,
  },
};

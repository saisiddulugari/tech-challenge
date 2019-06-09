module.exports = {
    env: {
      browser: true,
      es6: true
    },
    extends: ['eslint:recommended', 'plugin:vue/base'],
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 2018
    },
    rules: {
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      'vue/html-self-closing': 'off'
    }
  };
  
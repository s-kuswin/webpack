module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'linebreak-style': 'off',
    'vue/html-self-closing': ['error', { html: { void: 'always', normal: 'never', component: 'always' }, svg: 'always', math: 'always' }],
    'vue/max-attributes-per-line': ['warn', { singleline: 3, multiline: 8 }],
    'no-unused-vars': ['warn'],
    'comma-dangle': 'ignore',
    quotes: ['warn'],
  },
};

import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  prettier,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'eol-last': ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      eqeqeq: ['error', 'always'],
      'prefer-const': 'error',
      'linebreak-style': ['error', 'unix'],
    },
  },
];

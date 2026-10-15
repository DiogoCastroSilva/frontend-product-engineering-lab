import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import sharedConfig from '../../eslint.config.mjs';

export default defineConfig([
  ...sharedConfig,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-roles': 'error',
      'jsx-a11y/button-has-type': 'error',
    },
  },
]);

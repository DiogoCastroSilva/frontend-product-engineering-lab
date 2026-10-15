// packages/design-system/eslint.config.mjs
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

const RAW_PALETTE =
  '\\b(?:bg|text|border|ring|outline|fill|stroke|from|to|via)-' +
  '(?:white|black|slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)\\b';

export default defineConfig([
  globalIgnores(['**/node_modules/**', '**/dist/**']),
  ...tseslint.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  reactHooks.configs.flat.recommended,
  {
    files: ['src/**/*.tsx'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: `Literal[value=/${RAW_PALETTE}/]`,
          message:
            'Use semantic token utilities (bg-primary, text-text-muted), not raw palette colors.',
        },
        {
          selector: `Literal[value=/-\\[var\\(--color/]`,
          message:
            'Use the generated utility (bg-primary) instead of an arbitrary var() value.',
        },
      ],
    },
  },
]);

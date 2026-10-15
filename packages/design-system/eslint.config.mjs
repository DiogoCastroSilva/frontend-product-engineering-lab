import jsxA11y from "eslint-plugin-jsx-a11y";
import sharedConfig from "../../eslint.config.mjs";

export default [
  ...sharedConfig,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: { "jsx-a11y": jsxA11y },
    rules: {
      // Accessibility — catch common a11y mistakes.
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-role": "error",
    },
  },
];

import baseConfig from "@diogozx-org/eslint-config";
import reactHooks from "eslint-plugin-react-hooks";

/**
 * Inline ESLint rule that prevents arbitrary Tailwind CSS values
 * (e.g. `var(--color-x)` or `[var(--x)]`) inside className strings.
 * Components should use named utility classes from the design system
 * token palette exclusively.
 */
const tailwindNoArbitrary = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Prevent arbitrary Tailwind values such as var(--...) in className strings.",
    },
    messages: {
      arbitrary:
        "Avoid arbitrary values (var(--...)) in className. Use named utility classes from the token palette instead.",
    },
    schema: [],
  },
  create(context) {
    return {
      JSXAttribute(node) {
        if (node.name.name !== "className") return;
        const valueNode = node.value;
        if (!valueNode) return;

        // Handle: className="string-literal"
        if (
          valueNode.type === "Literal" &&
          typeof valueNode.value === "string"
        ) {
          if (/\bvar\(-/.test(valueNode.value)) {
            context.report({ node: valueNode, messageId: "arbitrary" });
          }
        }

        // Handle: className={`template ${x}`} — check for literal var(-- fragments
        if (valueNode.type === "TemplateLiteral") {
          for (const tpl of valueNode.quasis) {
            if (/\bvar\(-/.test(tpl.value.raw)) {
              context.report({ node: tpl, messageId: "arbitrary" });
            }
          }
        }
      },
    };
  },
};

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/storybook-static/**",
      "**/coverage/**",
    ],
  },
  ...baseConfig,
  {
    plugins: {
      "react-hooks": reactHooks,
      tailwind: { rules: { "no-arbitrary-values": tailwindNoArbitrary } },
    },
    files: ["**/*.{ts,tsx}"],
    rules: {
      // React hooks — catch invalid hook usage & dependency mistakes.
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Design system constraints — prevent arbitrary Tailwind values.
      "tailwind/no-arbitrary-values": "error",

      // TypeScript hygiene.
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
];

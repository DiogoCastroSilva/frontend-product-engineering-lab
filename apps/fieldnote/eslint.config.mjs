import nextConfig from "@diogozx-org/eslint-config/next";
import sharedConfig from "../../eslint.config.mjs";

/**
 * Extends the shared root config (react-hooks, tailwind constraints, TS hygiene)
 * with the @diogozx-org/eslint-config Next.js preset, which composes the
 * shared TypeScript/Prettier config with Next.js Core Web Vitals + TypeScript
 * rules and the standard global ignores (.next, out, build, next-env.d.ts).
 */
const eslintConfig = [...sharedConfig, ...nextConfig];

export default eslintConfig;

import type { StorybookConfig } from "@storybook/react-vite";
import path from "node:path";

// Resolve Storybook framework and addons from this workspace explicitly.
// This avoids preset lookup failures in npm workspaces/monorepos.
const _require = typeof require === "undefined" ? import.meta : require;
const getAbsolutePath = (packageName: string): string =>
  path
    .dirname(_require.resolve(path.join(packageName, "package.json")))
    .replace(/^file:\/\//, "");

const config: StorybookConfig = {
  stories: ["../../packages/design-system/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;

import { createRequire } from "node:module";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import type { StorybookConfig } from "@storybook/react-vite";

const require = createRequire(import.meta.url);

// Resolve Storybook framework and addons explicitly. This avoids preset lookup
// failures caused by package resolution from the root of an npm workspace.
const getAbsolutePath = (packageName: string): string =>
  path.dirname(require.resolve(path.join(packageName, "package.json")));

const config: StorybookConfig = {
  stories: ["../../../packages/design-system/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  async viteFinal(viteConfig) {
    viteConfig.plugins ??= [];
    viteConfig.plugins.push(tailwindcss());
    return viteConfig;
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;

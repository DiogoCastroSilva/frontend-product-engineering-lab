import storybook from "eslint-plugin-storybook";
import sharedConfig from "../../eslint.config.mjs";

export default [...sharedConfig, ...storybook.configs["flat/recommended"]];

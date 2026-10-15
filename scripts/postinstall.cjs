#!/usr/bin/env node
/**
 * Ensures Rollup's native binary for the current platform is installed.
 *
 * npm has a known bug (github.com/npm/cli/issues/7279) where optional
 * dependencies are not installed in workspace monorepos. This affects
 * @rollup/rollup-linux-x64-gnu, causing Storybook builds to fail on Linux CI.
 *
 * This script detects the platform and installs the matching Rollup native
 * binary if it's missing. Uses --ignore-scripts to avoid infinite loops.
 */
const { execSync } = require("child_process");
const os = require("os");

const platform = os.platform();
const arch = os.arch();
const pkg = `@rollup/rollup-${platform}-${arch}`;

// Map platform/arch to the correct npm package name
let packageName;
if (platform === "linux" && arch === "x64") {
  packageName = "@rollup/rollup-linux-x64-gnu";
} else if (platform === "linux" && arch === "arm64") {
  packageName = "@rollup/rollup-linux-arm64-gnu";
} else if (platform === "darwin" && arch === "arm64") {
  packageName = "@rollup/rollup-darwin-arm64";
} else if (platform === "darwin" && arch === "x64") {
  packageName = "@rollup/rollup-darwin-x64";
} else if (platform === "win32" && arch === "x64") {
  packageName = "@rollup/rollup-win32-x64-msvc";
} else {
  console.log(`⚠ Skipped native binary install for ${platform}-${arch}`);
  process.exit(0);
}

// Check if the package is already installed
try {
  require.resolve(packageName);
  console.log(`✓ ${packageName} is already installed`);
  process.exit(0);
} catch {
  // Not installed — proceed to install
}

// Install with --ignore-scripts to prevent postinstall from re-triggering
// Extract version from rollup's optionalDependencies
let version;
try {
  const rollupPkg = require("rollup/package.json");
  version =
    rollupPkg.optionalDependencies[packageName] ||
    Object.values(rollupPkg.optionalDependencies).find((v) =>
      v.startsWith("4."),
    ) ||
    "4.64.7";
} catch {
  version = "4.64.7";
}
console.log(
  `⏳ Installing missing Rollup native binary: ${packageName}@${version}`,
);
execSync(
  `npm install ${packageName}@${version} --no-save --ignore-scripts --no-package-lock`,
  {
    stdio: "inherit",
  },
);
console.log(`✓ ${packageName} installed successfully`);

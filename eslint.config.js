import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist/**", "storybook-static/**", "node_modules/**"]),

  {
    files: ["src/**/*.js"],
    extends: [js.configs.recommended],

    languageOptions: {
      globals: globals.browser,
    },

    rules: {
      "no-unused-vars": "warn",
    },
  },

  {
    files: ["*.config.js", ".storybook/**/*.js"],

    languageOptions: {
      globals: globals.node,
    },
  },

  eslintConfigPrettier,
]);

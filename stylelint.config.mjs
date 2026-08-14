/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"],

  ignoreFiles: ["dist/**", "storybook-static/**", "node_modules/**"],

  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
};

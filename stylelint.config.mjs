/** @type {import("stylelint").Config} */
import propertyGroups from "stylelint-config-recess-order/groups";

const majorGroupStarts = new Set([
  "position", // Layout
  "inline-size", // Size / Spacing
  "font", // Typography
  "appearance", // Interaction
  "background", // Appearance
  "transform", // Motion
]);

const groupedProperties = [];

let currentGroup = [];

for (const group of propertyGroups) {
  const firstProperty = group.properties[0];

  if (majorGroupStarts.has(firstProperty) && currentGroup.length > 0) {
    groupedProperties.push(currentGroup);
    currentGroup = [];
  }

  currentGroup.push(...group.properties);
}

if (currentGroup.length > 0) {
  groupedProperties.push(currentGroup);
}

export default {
  extends: ["stylelint-config-standard"],

  plugins: ["stylelint-order"],

  rules: {
    "declaration-empty-line-before": null,

    "selector-class-pattern": [
      "^(?:[A-Z][A-Za-z0-9]*(?:__[A-Za-z0-9]+)?(?:--[A-Za-z0-9]+)?|--[A-Z][A-Za-z0-9]*|is-[a-z0-9]+(?:-[a-z0-9]+)*)$",
      {
        message: "クラス名はプロジェクトの命名規則に従ってください",
      },
    ],

    "order/properties-order": [
      groupedProperties.map((properties, index) => ({
        properties,
        emptyLineBefore: index === 0 ? "never" : "always",
        noEmptyLineBetween: true,
      })),
      {
        unspecified: "bottomAlphabetical",
      },
    ],
  },
};

const fs = require("fs");
const path = require("path");
const lodash = require("lodash");

const SVG_ICONS_PATH = "src/assets/icons";

const files = fs.readdirSync(path.resolve(SVG_ICONS_PATH));
const fileNames = files
  .filter((p) => path.extname(p) === ".svg")
  .map((p) => path.basename(p, path.extname(p)))
  .sort();

const componentMapping = {};
const componentNames = [];
const iconNames = [];

for (const fileName of fileNames) {
  const componentName = lodash.upperFirst(lodash.camelCase(fileName));
  componentNames.push(componentName);
  iconNames.push(fileName);
  componentMapping[fileName] = componentName;
}

const output = `
/**
 * THIS FILE IS AUTO-GENERATED. PLEASE DO NOT MODIFY IT.
 */

${Object.entries(componentMapping)
  .map(
    ([fileName, componentName]) =>
      `import {ReactComponent as ${componentName}} from './${fileName}.svg'`
  )
  .join("\n")}

export const iconNames = [
  ${iconNames.map((iconName) => `'${iconName}'`).join(",")}
] as const
export type IconName = typeof iconNames[number]

export const iconComponentsMap = {
  ${Object.entries(componentMapping)
    .map(([iconName, componentName]) => `'${iconName}': ${componentName}`)
    .join(",")}
}
`;

fs.writeFileSync(path.resolve(SVG_ICONS_PATH, "index.ts"), output);

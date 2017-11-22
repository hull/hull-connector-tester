const fs = require("fs");

module.exports = function checkPackageEngines() {

  const packageJson = JSON.parse(fs.readFileSync(`${process.cwd()}/package.json`, "utf-8"));
  const { yarn, npm, node } = packageJson.engines;
  if (node === "6.12.x"
    && npm === "3.10.x"
    && yarn === "1.3.x") {
    return true;
  }

  if (node === "8.9.x"
    && npm === "5.5.x"
    && yarn === "1.3.x") {
    return true;
  }

  return `\`engines\` param has following value:
  ${JSON.stringify(packageJson.engines)},
  should be:
  {"node": "6.12.x","npm": "3.10.x","yarn": "1.3.x"}
  or
  {"node": "8.9.x","npm": "5.5.x","yarn": "1.3.x"}`;
};

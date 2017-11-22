const fs = require("fs");

module.exports = function checkPackageEngines() {

  const packageJson = JSON.parse(fs.readFileSync(`${process.cwd()}/package.json`, "utf-8"));
  const { hull } = packageJson.dependencies;
  if (hull === "0.13.5") {
    return true;
  }

  if (hull === "0.12.7") {
    return true;
  }

  if (hull === "0.11.13") {
    return true;
  }

  return `\`hull-node\` version is ${hull},
  should be 0.13.5, 0.12.7 or 0.11.13`;
};

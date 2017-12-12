const fs = require("fs");

module.exports = function checkPackageEngines() {

  const allowedVersions = ["0.13.9", "0.12.7", "0.11.13"];

  const packageJson = JSON.parse(fs.readFileSync(`${process.cwd()}/package.json`, "utf-8"));
  const { hull } = packageJson.dependencies;

  if(allowedVersions.includes(hull)) {
    return true;
  }

  return `\`hull-node\` version is ${hull},
  should be one of the following: ${allowedVersions.join(",")}`;
};

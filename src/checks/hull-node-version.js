const fs = require("fs");

/**
 * This check enforces latest hull-node version
 * @return {boolean|string}
 */
module.exports = function checkHullNodeVersion() {

  const allowedVersions = ["0.13.16"];

  const packageJson = JSON.parse(fs.readFileSync(`${process.cwd()}/package.json`, "utf-8"));
  const { hull } = packageJson.dependencies;

  if(allowedVersions.includes(hull)) {
    return true;
  }

  return `\`hull-node\` version is ${hull},
  should be one of the following: ${allowedVersions.join(",")}`;
};

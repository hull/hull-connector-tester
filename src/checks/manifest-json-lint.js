const fs = require("fs");
const jsonlint = require("jsonlint");

module.exports = function lintManifestJson() {
  const manifestJson = fs.readFileSync(`${process.cwd()}/manifest.json`, "utf-8");
  try {
    jsonlint.parse(manifestJson);
  } catch (error) {
    return error.message;
  }
  return true;
};
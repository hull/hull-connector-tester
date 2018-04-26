const fs = require("fs");
const jsonlint = require("jsonlint");


/**
 * This check make sure that the manifest.json file is a valid json
 * @return {boolean|string}
 */
module.exports = function checkManifestJsonLint() {
  const manifestJson = fs.readFileSync(`${process.cwd()}/manifest.json`, "utf-8");
  try {
    jsonlint.parse(manifestJson);
  } catch (error) {
    return error.message;
  }
  return true;
};
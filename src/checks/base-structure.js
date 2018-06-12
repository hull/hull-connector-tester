// require("babel-register");
const fs = require("fs");
const path = require("path");

/**
 * This check enforces latest hull-node version
 * @return {boolean|string}
 */
module.exports = function checkHullNodeVersion() {
  const serverPath = path.join(process.cwd(), "server/server.js");
  const indexPath = path.join(process.cwd(), "server/index.js");
  if (!fs.existsSync(serverPath)) {
    return "missing server/server.js file";
  }

  if (!fs.existsSync(indexPath)) {
    return "missing server/index.js file";
  }

  // const server = require(serverPath);

  // if (typeof server !== "function") {
  //   return "server/server.js file must return a function";
  // }

  return true;
};

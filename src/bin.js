#!/usr/bin/env node
// const bot = require("circle-github-bot").create();

const checks = require("./checks");

const results = checks.map(check => {
  return check();
});

const errors = results.filter(result => result !== true);

if (errors.length > 0) {

  const message = `\n * ${errors.join("\n *")}`;
  console.log(message);
  process.exit(1);

  // bot.comment(`
  // <h3>There are following errors</h3>
  // ${message}
  // `);
}

process.exit(0);

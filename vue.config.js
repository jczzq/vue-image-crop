// const path = require("path");

console.log(process.env.outputDir);

module.exports = {
  outputDir: process.env.outputDir,
  configureWebpack: {}
};

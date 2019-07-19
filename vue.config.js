// const path = require("path");

console.log(process.env.outputDir);

module.exports = {
  baseUrl: "./",
  outputDir: process.env.outputDir,
  configureWebpack: {}
};

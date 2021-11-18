const lib = process.argv.pop() === "lib";
module.exports = {
  pages: {
    index: {
      entry: lib ? "examples/main.js" : "packages/index.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  outputDir: lib ?"lib":"dist",
};

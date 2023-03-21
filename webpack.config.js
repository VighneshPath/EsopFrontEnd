const path = require("path");

module.exports = {
  context: path.join(__dirname, "/"),
  entry: ["/js/index.js"],
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
    publicPath: "/build",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
};

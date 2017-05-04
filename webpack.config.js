const PrepackPlugin = require("prepack-webpack-plugin").default;

module.exports = {
  entry: "./index.js",
  output: { filename: "build.js" },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          plugins: [["transform-react-jsx", { pragma: "h" }]]
        }
      }
    ]
  },
  plugins: [new PrepackPlugin()]
};

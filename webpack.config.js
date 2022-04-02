// webpack.config.js
const Dotenv = require("dotenv-webpack");

module.exports = {
  target: "node",
  resolve: {
    fallback: { path: false },
  },
  //   ...
  plugins: [new Dotenv()],
  //   ...
};

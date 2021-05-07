const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

module.exports = merge(baseConfig, {
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, "dist"),
        watchContentBase: true,
    },
    target: "web",
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
});

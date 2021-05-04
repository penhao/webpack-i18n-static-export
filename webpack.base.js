const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const StaticI18nHtmlPlugin = require("webpack-static-i18n-plugin");
const RemovePlugin = require("remove-files-webpack-plugin");
const isDev = process.env.NODE_ENV !== "production";

module.exports = {
    entry: {
        app: [path.resolve(__dirname, "wwwroot", "src", "App.js")],
        styles: [path.resolve(__dirname, "wwwroot", "styles", "all.scss")],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].bundle.[fullhash:8].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            {
                test: /\.(s[ac]|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "resolve-url-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                    "postcss-loader",
                ],
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            context: path.resolve(__dirname, "wwwroot"),
                            name: "[path][name].[ext]",
                            esModule: false,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new RemoveEmptyScriptsPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].bundle.[fullhash:8].css",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "wwwroot", "i18n/index.html"),
            filename: "index.html",
            chunks: ["app", "styles"],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "wwwroot", "i18n/zh/index.html"),
            filename: "zh/index.html",
            chunks: ["app", "styles"],
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: "./wwwroot/assets", to: "assets" }],
        }),
    ],
};

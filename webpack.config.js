const webpack = require("webpack");
const path = require("path");
const glob = require("glob")
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require("assets-webpack-plugin");
process.traceDeprecation = true;

module.exports = {
    entry: {
        main: path.join(__dirname, "src", "index.js"),
        contact: path.join(__dirname, "src", "contact.js"),
    },

    output: {
        path: path.join(__dirname, "dist"),
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(jpg)|(jpeg)|(gif)|(ico))(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader",
                options: {
                    name: '[name].[ext]',
                },
            },

            { test: /\.json$/, loader: "json-loader" },

            {
                loader: "babel-loader",
                test: /\.js?$/,
                exclude: /node_modules/,
            },

            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            fetch: "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
        }),

        new AssetsPlugin({
            filename: "webpack.json",
            path: path.join(process.cwd(), "site/data"),
            prettyPrint: true
        }),

        new CopyPlugin({
            patterns: [
                { from: "./src/img/", to: "img" },
                { from: "./src/fonts/", to: "fonts" },
            ],
        }),

    ]
};

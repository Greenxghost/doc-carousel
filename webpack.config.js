const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dir_build = path.resolve(__dirname, 'dist');
const webpack = require('webpack');
const dir_js = path.resolve(__dirname, 'js');
const dir_html = path.resolve(__dirname, 'html');
const dir_assets = './src/assets/';

module.exports = {
    mode: "development",
    entry: [
        './src/main.js'
    ],
    output: {
        path: dir_build,
        filename: "carousel.js",
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300, // Process all changes which happened in this time into one rebuild
        poll: 1000, // Check for changes every second,
        ignored: /node_modules/,
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        watchContentBase: true,
        hot: true,
        open: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'assets/images',
                            name: "[name].[ext]",
                        },
                    },
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts'
                    },
                },
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: {
                    loader: "html-loader",
                },
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: dir_assets,
                to: "assets",
            },
            {
                from: "./*.html",
                to: dir_build,
            },
        ]),
        new HtmlWebpackPlugin({
            title: 'Doc Carousel',
            template: path.resolve('./src/index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css' ,
        }),
    ],
    stats: {
        colors: true
    },

    devtool: 'source-map',
};
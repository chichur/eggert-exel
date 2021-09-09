const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: './app/index.js',
    module: {
    rules: [
        { test: /\.svg$/, use: 'svg-inline-loader' },
        { test: /\.css$/, use: [ MiniCssExtractPlugin.loader, 'css-loader' ] },
        { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
    },
    devServer: {
        port: 8080,
        watchFiles: ['app/**/*'],
        hot: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './app/index.html',
            cache: false
        })
    ],
}
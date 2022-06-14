const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, '../build'),
        compress: true,
        port: 8084,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env',
                        '@babel/react', {
                            'plugins': ['@babel/plugin-proposal-class-properties']
                        }]
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../src/index.html"),
    }),
    new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
    })]
})
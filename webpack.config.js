var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'app/index.html'),
    filename: 'index.html',
    inject: 'body',
}); 

module.exports = {
    entry: [
        './app/index.jsx'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'budle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [HTMLWebpackPluginConfig],
};


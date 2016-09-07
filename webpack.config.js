var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './app/index.jsx'
    ],
    output: {
        path: path.resolve(__dirname, 'app/build'),
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
    }
};


var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEMP_PATH = path.resolve(ROOT_PATH, 'template');

module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'index.js'),
        mobile: path.resolve(APP_PATH, 'mobile.js'),
        vendors: ['jquery', 'moment']
    },
    output: {
        path: BUILD_PATH,
        filename: "[name]_[hash].js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: APP_PATH
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url?limit=40000'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hello World app',
            template: path.resolve(TEMP_PATH, 'index.html'),
            filename: 'index.html',
            chunks: ['app', 'vendors'],
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            title: 'Hello Mobile Page',
            template: path.resolve(TEMP_PATH, 'mobile.html'),
            filename: 'mobile.html',
            chunks: ['mobile', 'vendors'],
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'app': './js/app.js'
    },
    output: {
        path: './build',
        filename: '[hash:8].js'
    },
    module: {
        loaders: [
            // {
            //     test: /\.(?:ftl)$/,
            //     loader: 'html-loader'
            // },
            {
                test: /\.css$/,
                loader: ExtractTextWebpackPlugin.extract("style-loader", "css-loader")
            },
            // {
            //     test: /\.png|gif$/,
            //     loader: 'url-loader?limit=100000'
            // },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?&name=[path]____root___[hash:8].[ext]'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: '首页',
            filename: 'app.html',
            template: 'html!./template/app.ejs',
            inject: 'body',
            favicon: './css/favicon.ico'
        }),
        new ExtractTextWebpackPlugin("[name]_[contenthash:8].css")
    ]
}

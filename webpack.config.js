var path = require('path');
var webpack = require('webpack');
//
//var myReaddir = require("./src/imageCopier");
//myReaddir.myReaddir('./images/');

module.exports = {
    devtool: 'eval',
    entry: [ './src/index' ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'static/bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /bootstrap\/js\//,
                loader: 'imports?jQuery=jquery'
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)$/,
                loader: 'url-loader?limit=30000&name=[name].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif|jpg)$/,
                loader: 'file-loader?name=images/[name].[ext]'
            }
        ]
    },
    node: {
        fs: 'empty',
    }
};
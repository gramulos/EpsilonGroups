var path = require('path');
var webpack = require('webpack');
var CompressionPlugin = require("compression-webpack-plugin");
var node_modules_dir = path.resolve(__dirname, 'node_modules');
//
//var myReaddir = require("./src/imageCopier");
//myReaddir.myReaddir('./src/images/');
//copyStaticFiles('src/images', 'dist/images', /\.(jpe?g|png|gif)$/);

var config = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new CompressionPlugin({
            asset: "{file}.gz",
            algorithm: "gzip",
            regExp: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
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
                loader: 'url-loader?limit=30000&name=fonts/[name].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif|jpg)$/,
                loader: 'file-loader?name=images/[name].[ext]'
            }
        ]
    },
    node: {
        console: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};

module.exports = config;
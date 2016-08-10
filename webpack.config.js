/**
 * Created by sonnguyent1 on 10/08/2016.
 */
var HTMLWebPackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebPackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        HTMLWebpackPluginConfig
    ]
};
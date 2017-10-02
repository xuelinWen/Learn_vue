var path = require('path');

var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : path.resolve(__dirname , './src/js/main.js'),
    output : {
        path : path.resolve(__dirname , './dist'),
        filename : 'bundle.js'
    },
    plugins : [
        new htmlWebpackPlugin({
            template : path.resolve(__dirname , './src/index.html'),
            filename : 'index.html'
        })
    ],
    module : {
        rules : [
            {test : /\.css$/ , use : ['style-loader' , 'css-loader']},
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            { test: /\.(png|jpg|gif)$/, use: 'url-loader'},
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }
};
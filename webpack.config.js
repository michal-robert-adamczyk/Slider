const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './assets/js/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.min.js',
    },
    module: {
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './assets/index.html',
            filename: 'index.html'
        })
    ]
}
const path = require('path');
module.exports = {
    entry: './assets/js/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.min.js',
    },
    module: {
        rules: []
    },
}
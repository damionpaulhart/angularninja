var path = require('path');

module.exports = {
    entry: './app/js/app.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "app"),
        compress: true,
        port: 9000
    }
};


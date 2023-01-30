const path = require('path');

const config = {
    entry: './src/index.js',
    mode: process.env.MODE || 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: [
            {
                directory: path.join(__dirname, 'public')
            }
        ],
        watchFiles: ["src/*.js", "public"],
        compress: true,
        port: 3000,
        allowedHosts: 'all',
        client: {
            overlay: true
        }
    }
};

module.exports = config;
const path = require('path');

const config = {
    entry: './src/index.js',
    mode: process.env.MODE || 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    devServer: {
        static: [
            {
                directory: path.join(__dirname, 'public')
            },
            {
                directory: path.join(__dirname, 'dist'),
                publicPath: '/dist'
            }
        ],
        compress: true,
        port: 3000,
        allowedHosts: 'all',
        client: {
            overlay: true
        }
    }
};

module.exports = config;
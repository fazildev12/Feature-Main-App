const path = require('path');

module.exports = {
    mode:'development',
    entry: './src/components/Sample.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'sample.bundle.js',
        library: 'Sample',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
        ],
    },
}
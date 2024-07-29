const path = require('path');

module.exports = {
    mode:'development',
    entry: './src/components/LabTabs.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'feature.bundle.js',
        library: 'MyComponent',
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
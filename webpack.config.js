var path = require('path');

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'AddressCard.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
            }
        ]
    },
    externals: {
        'react': 'commonjs react'
    }
};
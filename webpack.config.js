const webpack = require('webpack');
const pkg = require('./package.json');
const path = require('path');

const libraryName = pkg.name;

module.exports = {
    mode: process.env.NODE_ENV || "production",
    devtool: "source-map",
    entry: "",
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "AddressCard.js",
        library: libraryName,
        libraryTarget: "umd",
        publicPath: "/dist/",
        umdNamedDefine: true
    },
    node: {
        net: "empty",
        tls: "empty",
        dns: "empty"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        "react": path.resolve(__dirname, "./node_modules/react"),
        "react-dom": path.resolve(__dirname, "./node_modules/react-dom")
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    }
}
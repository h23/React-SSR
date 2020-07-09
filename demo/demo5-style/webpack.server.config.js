const path = require('path');
const nodeExternals = require('webpack-node-externals');
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

process.env.BABEL_ENV = 'node';//设置babel的运行环境

module.exports = {
    entry: resolvePath('./src/server/index.js'),//入口文件
    output: {
        filename: 'app.js',
        path: resolvePath('./dist/server')
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                loader: 'ignore-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'ignore-loader'
            }
        ]
    },
    mode:'development',
    target: 'node'
};

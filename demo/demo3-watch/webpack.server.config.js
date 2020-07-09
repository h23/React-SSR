const path = require('path');
const nodeExternals = require('webpack-node-externals');
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

process.env.BABEL_ENV = 'node';//设置babel的运行环境

module.exports = {
    entry: resolvePath('./app.js'),//入口文件
    output: {
        filename: 'app.js',
        path: resolvePath('./dist/server')
    },
    externals: [nodeExternals()],  // 忽略node_modules文件夹中的所有模块,因为Node环境下通过NPM已经安装了这些包，直接引用就可以，不需要额外再打包到代码里
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }
        ]
    },
    mode:'development',
    target: 'node'  // 忽略如path，fs等的Node内置模块。
};

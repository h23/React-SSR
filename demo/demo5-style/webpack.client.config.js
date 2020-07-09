const path = require('path');
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);
//提取css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    mode: 'development',
    entry: resolvePath('./src/client/index.js'),//入口文件
    output: {
        filename: 'index.js',
        path: resolvePath('./dist/static')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader:'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [autoprefixer()]
                        }
                    },
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]' //配置图片的输出路径和名称
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css' //设置名称
        })]
};

const path = require('path')
const HtmlWebpackPlungin = require('html-webpack-plugin')
// node.js中运行需要符合node.js的commonjs语法
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        // 输出的同时清除旧的html
        clean: true
    },
    // 模式:开发模式、生产模式或者none
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },

    // 配置插件
    plugins: [
        // 插件若想使用必须先实例化
        new HtmlWebpackPlungin({
            // 参考模板的文件
            template: './index.html',
            // 输出文件的名字
            filename: 'app.html',
            // 在html中的body标签中生成新的js引入标签
            inject: 'body'

        }),
    ]

}
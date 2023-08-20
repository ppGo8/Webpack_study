const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // 入口
    entry: './src/main.js',    // 相对路径,相对命令行的路径 所以不用更改

    // 输出
    output: {
        // 所有文件输出路径
        // __dirname代表这行代码所在文件的文件夹目录
        // path: path.resolve(__dirname, '../dist'),    // 绝对路径 当前文件所在的绝对路径
        path:undefined, // 因为开发环境不考虑输出
        // 入口文件打包输出文件名
        filename: 'static/js/main.js',
        // clean: true, // 自动将上次打包目录资源清空
    },

    // 加载器
    module: {
        rules: [
            // loader的胚子
        ]
    },

    // 插件
    plugins: [
        // 插件的配置
        new HtmlWebpackPlugin({
            // 以 public/index.html 为模板创建文件
            // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            template: path.resolve(__dirname, "public/index.html"),
        }),
    ],

    // 模式
    mode: 'development',
    // 开发服务器
    devServer: {
        host: "localhost", // 启动服务器域名
        port: "3000", // 启动服务器端口号
        open: true, // 是否自动打开浏览器
    },
}
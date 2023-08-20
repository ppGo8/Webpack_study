const path = require('path')
// node.js中运行需要符合node.js的commonjs语法
module.exports = {
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        filename: 'bundle.js',
        // 此处需要使用绝对路径
        // 使用path模块构建当前路径下的绝对路径
        // 而不是自己直接写死
        path: path.resolve(__dirname, './dist')
    },
    mode: 'none'

}
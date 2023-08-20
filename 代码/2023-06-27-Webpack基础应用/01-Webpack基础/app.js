// 解决作用域问题,编写立即执行函数
; (function () {
    let myName = 'ppgo8'
})()
// 立即执行函数的变量不会暴露在外面,因此不会污染作用域
// console.log(myName);

// 改造上面的代码
// 同时解决 1.作用域问题 2.暴露需要内容
const myName = (function () {
    let myName = 'ppgo8'
    return myName
})()
console.log(myName);
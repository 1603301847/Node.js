// 引入自定义模块
var b = require('./b'); // 注: .js不用写

console.log(b);
// 打印结果: 
// {
//     add: [Function: add],
//     del: [Function: del],
//     edit: [Function: edit],
//     select: [Function: select]
// }

b.add(); // this is add
b.del(); // this is del 
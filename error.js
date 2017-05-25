// 标准的 JavaScript 错误：
// <EvalError> : 当调用 eval() 失败时抛出。
// <SyntaxError> : 当 JavaScript 语法错误时抛出。
// <RangeError> : 当一个值不在预期范围内时抛出。
// <ReferenceError> : 当使用未定义的变量时抛出。
// <TypeError> : 当传入错误类型的参数时抛出。
// <URIError> : 当一个全局的 URI 处理函数被误用时抛出。
// 由底层操作系的触发的系统错误，例如试图打开一个不存在的文件、试图向一个已关闭的 socket 发送数据等。
// 由应用程序代码触发的用户自定义的错误。
// 断言错误是错误的一个特殊的类，每当 Node.js 检测到一个不应该发生的异常逻辑时会触发。 这类错误通常由 assert 模块触发。

// node比较少try catch捕获错误
// try {
// 	const m = 1;
// 	const n = m + z;
// }
// catch (err) {
// 	if (err) {
// 		console.log(1)
// 		console.log(err)
// 	}
// 	else {
// 		console.log(2)
// 	}
// }

// 通常异步方法的回调第一个参数是错误
// const fs = require('fs')

// fs.readFile(path, (err, data) => {
// 	if (err) {
// 		console.error(err)
// 		return
// 	}
// 	console.log(data)
// })

// const myO = {}

// Error.captureStackTrace(myO)
// console.log(myO.stack)


// function MyError() {
//   Error.captureStackTrace(this, MyError);
//   Error.stackTraceLimit = 11 //栈帧数量
// }

// console.log(new MyError().stack)

const err = new Error('错误信息');
console.error(err.message);

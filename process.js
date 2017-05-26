// console.dir(process.env)


// console.log('before nextTick')
// process.nextTick(() => {
// 	console.dir('nextTick')
// })
// console.log('after nextTick')



// 进程事件

// 子进程和集群
// process.on('disconnect', () => {
// 	console.log('disconnect')
// })
// process.connect()
// process.disconnect()
// process.on('message', (message, sendHandle) => {
// 	console.log(message)
// })

// 进程结束后
// process.on('beforeExit', () => {
// 	console.log('beforeExit')
// })
// process.on('exit', (code) => {
// 	console.log('exit', `the code is ${code}`)
// 	setTimeout(() => {
// 		console.log('This will not run');
// 	}, 0);
// })

// 处理Promise
// const unhandledRejections = new Map();
// process.on('unhandledRejection', (reason, p) => {
// 	unhandledRejections.set(p, reason);
// });
// process.on('rejectionHandled', (p) => {
// 	unhandledRejections.delete(p);
// });


// const fs = require('fs')
// // 处理异常错误
// process.on('uncaughtException', (err) => {
//   fs.writeSync(1, `Caught exception: ${err}`);
// });

// setTimeout(() => {
//   console.log('This will still run.');
// }, 500);

// // Intentionally cause an exception, but don't catch it.
// nonexistentFunc();
// console.log('This will not run.');


// const promise = new Promise((resolve, reject) => {
// 	resolve(1)
// })

// process.on('unhandledRejection', (reason, p) => {
//   console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
//   // application specific logging, throwing an error, or other logic here
// });

// promise.then((res) => {
//   return reportToUser(JSON.pasre(res)); // note the typo (`pasre`)
// }); // no `.catch` or `.then`

// function SomeResource() {
//   // Initially set the loaded status to a rejected promise
//   this.loaded = Promise.reject(new Error('Resource not yet loaded!'));
// }

// var resource = new SomeResource();
// // no .catch or .then on resource.loaded for at least a turn

// 警告
// process.on('warning', (warning) => {
// 	console.warn(warning.name);    // Print the warning name
// 	console.warn(warning.message); // Print the warning message
// 	console.warn(warning.stack);   // Print the stack trace
// });

// 可以使用编程触发
// process.emitWarning('err', 'warning');

// Begin reading from stdin so the process does not exit.
// process.stdin.resume();

// process.on('SIGINT', () => {
// 	console.log('Received SIGINT.  Press Control-D to exit.');
// 	process.kill()
// });

// 结束进程
// process.abort()

// console.log(`This processor architecture is ${process.arch}`);

// process.argv.forEach((val, index) => {
// 	console.log(`${index}: ${val}`);
// });

// process.argv0 == process.argv[0]

// console.log(`Starting directory: ${process.cwd()}`);
// try {
// 	process.chdir('/tmp');
// 	console.log(`New directory: ${process.cwd()}`);
// }
// catch (err) {
// 	console.log(`chdir: ${err}`);
// }

// const startUsage = process.cpuUsage();
// const now = Date.now();
// while (Date.now() - now < 500);
// console.log(process.cpuUsage(startUsage));

// process.cwd() 当前node工作位置
// process.env 环境对象

// console.log(process.execArgv)
// console.log(process.execPath)
// console.log(process.exitCode)

// process.exit(1)

// if (process.getegid) {
// 	console.log(`Current gid: ${process.getegid()}`);
// }

// if (process.geteuid) {
// 	console.log(`Current uid: ${process.geteuid()}`);
// }

// if (process.getgid) {
// 	console.log(`Current gid: ${process.getgid()}`);
// }


// process.on('SIGHUP', () => {
// 	console.log('Got SIGHUP signal.');
// });

// setTimeout(() => {
// 	console.log('Exiting.');
// 	process.exit(0);
// }, 100);

// process.kill(process.pid, 'SIGHUP');


// console.log(process.memoryUsage());

// console.log('start');
// process.nextTick(() => {
// 	console.log('nextTick callback');
// });
// console.log('scheduled');

// console.log(process.release)


// process.stdin.setEncoding('utf8');

// process.stdin.on('readable', () => {
// 	var chunk = process.stdin.read();
// 	if (chunk !== null) {
// 		process.stdout.write(`data: ${chunk}`);
// 	}
// });

// process.stdin.on('end', () => {
// 	process.stdout.write('end');
// });


// /*1:声明变量*/
// var num1, num2;
// /*2：向屏幕输出，提示信息，要求输入num1*/
// process.stdout.write('请输入num1的值：');
// /*3：监听用户的输入*/
// process.stdin.on('data', function (chunk) {
//     if (!num1) {
//         num1 = Number(chunk);
//         /*4：向屏幕输出，提示信息，要求输入num2*/
//         process.stdout.write('请输入num2的值');
//     } else {
//         num2 = Number(chunk);
//         process.stdout.write('结果是：' + (num1 + num2));
//     }
// });


// const newmask = 0o022;
// const oldmask = process.umask(newmask);
// console.log(
//   `Changed umask from ${oldmask.toString(8)} to ${newmask.toString(8)}`
// );

console.log(process.uptime())

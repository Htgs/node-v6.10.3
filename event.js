const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()
// myEmitter.on('event', function(a, b) {
// 	// console.log('一个事件')
// 	console.log(a, b, this)
// 	setImmediate(() => {
// 		console.log('async')
// 	});
// })
// myEmitter.emit('event', 'arg1', 'arg2')

// let m = 0;
// myEmitter.once('event', () => { // 只触发一次
// // myEmitter.on('event', () => {
// 	console.dir(++m)
// })
// myEmitter.emit('event')
// myEmitter.emit('event')

// 防止错误 导致node进程崩溃
// process.on('uncaughtException', (err) => {
// 	console.error('error')
// })
// myEmitter.on('error', (err) => {
// 	console.log('error')
// })

// myEmitter.emit('error', new Error('whoops!'))


// myEmitter.once('newListener', (event, listener) => {
// 	if (event === 'event') {
// 		myEmitter.on('event', () => {
// 			console.log('B')
// 		})
// 	}
// })

// myEmitter.on('event', () => {
// 	console.log('A')
// })

// myEmitter.prependListener('event', () => {
// 	console.log('C')
// })

// myEmitter.prependOnceListener('event', () => {
// 	console.log('D')
// })

// const cb = () => {
// 	console.log('E')
// }

// myEmitter.on('event', cb)

// myEmitter.emit('event')

// myEmitter.removeListener('event', cb);

// myEmitter.emit('event')

// console.log(myEmitter.emit('event')) // 返回true
// console.log(myEmitter.emit('eve')) // 返回false

// myEmitter.on('evet', () => {
// 	console.log('evet')
// })

// myEmitter.removeAllListeners(myEmitter.eventNames())

// console.log(myEmitter.eventNames()); // myEmitter.eventNames() 返回 Array
// console.log(myEmitter.getMaxListeners());
// console.log(myEmitter.listenerCount(myEmitter.eventNames())); // 只接受string symbol
// console.log(myEmitter.listeners(myEmitter.eventNames())); // 只接受string symbol
 
const callbackA = () => {
  console.log('A');
  // myEmitter.removeListener('event', callbackB);
  return this  // 返回this可以被链式调用
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA)
	.on('event', callbackB);

// myEmitter.on('event', callbackB);

// callbackA 移除了监听器 callbackB，但它依然会被调用。
// 触发是内部的监听器数组为 [callbackA, callbackB]
myEmitter.emit('event');

// callbackB 被移除了。
// 内部监听器数组为 [callbackA]
// myEmitter.emit('event');

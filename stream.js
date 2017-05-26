const stream = require('stream')

// Node.js 中有四种基本的流类型：

// Readable - 可读的流 (例如 fs.createReadStream()).
// Writable - 可写的流 (例如 fs.createWriteStream()).
// Duplex - 可读写的流 (例如 net.Socket).
// Transform - 在读写过程中可以修改和变换数据的 Duplex 流 (例如 zlib.createDeflate()).
 
//  Node.js API 创建的流对象都只能操作 strings 和 Buffer 对象
 
// http 流

// const http = require('http')
// const server = http.createServer( (req, res) => {
// 	let body = '';
// 	req.setEncoding('utf8');

// 	req.on('data', (chunk) => {
// 		console.log(chunk)
// 		body += chunk
// 	})

// 	req.on('end', () => {
// 		try {
// 			const data = JSON.parse(body)
// 			res.write(typeof data)
// 			res.end()
// 		}
// 		catch (er) {
// 			res.statusCode = 400
// 			return res.end(`error: ${er.message}`)
// 		}
// 	})
// })
// server.listen(1337, () => {
// 	console.log('it works')
// })

// const myStream = getWritableStreamSomehow();
// myStream.write('some data');
// myStream.write('some more data');
// myStream.end('done writing data');
// console.log(myStream)

// 可写流

// fs.createFileSteam为例

// const fs = require('fs')

// const writable = fs.createWriteStream('./steam.txt')

// writable.on('close', () => {
// 	console.log('ws close')
// })
// writable.on('err', () => {
// 	console.log('err')
// })

// // writable.end() 调用后才触发finish
// writable.on('finish', () => {
// 	// 先于close事件
// 	console.log('finish')
// })

// writable.on('pipe', (src) => {
// 	// src 为可读流
// 	console.log('pipe')
// })

// writable.on('unpipe', (src) => {
// 	// src 为可读流
// 	console.log('unpipe')
// })

// // 如果调用 stream.write(chunk) 方法返回 false，流将在适当的时机触发 'drain' 事件，这时才可以继续向流中写入数据。
// // 向可写流中写入数据一百万次。
// // 需要注意背压 （back-pressure）。
// // function writeOneMillionTimes(writer, data, encoding, callback) {
// // 	let i = 1000000;
// // 	write();
// // 	function write() {
// // 		var ok = true;
// // 		do {
// // 			i--;
// // 			if (i === 0) {
// // 				// 最后 一次
// // 				writer.write(data, encoding, callback);
// // 			} else {
// // 				// 检查是否可以继续写入。 
// // 				// 这里不要传递 callback， 因为写入还没有结束！ 
// // 				ok = writer.write(data, encoding);
// // 			}
// // 		} while (i > 0 && ok);
// // 		if (i > 0) {
// // 			// 这里提前停下了， 
// // 			// 'drain' 事件触发后才可以继续写入  
// // 			writer.once('drain', write);
// // 		}
// // 	}
// // }

// // writable.end([chunk][, encoding][, callback])
// // writable.setDefaultEncoding(encoding)
// // writable.write(chunk[, encoding][, callback])

// // writable.cork();
// // writable.write('some ', 'utf8');
// // writable.write('data ', 'utf8');
// // process.nextTick(() => writable.uncork());
// // writable.end()

// function write (data, cb) {
// 	if (!writable.write(data)) {
// 		writable.once('drain', cb)
// 	} else {
// 		process.nextTick(cb)
// 	}
// }

// // Wait for cb to be called before doing any other write.
// write('hello', () => {
// 	console.log('write completed, do more writes now')
// })



// 可读流分flowing 和 paused 两种模式
// paused ----> flowing
// 1.监听 'data' 事件。
// 2.stream.resume()
// 3.stream.pipe()
// flowing ----> paused
// 1.stream.pause()
// 2.可以通过取消 'data' 事件监听，并调用 stream.unpipe()
// const readable = fs.createReadStream('./steam.txt')

// console.log(readable._readableState.flowing) // 可读流的状态

// readable.on('close', () => {
// 	console.log('close')
// })

// readable.on('data', (chunk) => {
// 	console.log(chunk)
// 	console.log(readable.isPaused())
// 	readable.pause();
// 	console.log(readable.isPaused())
// 	console.log('There will be no additional data for 1 second.');
// 	setTimeout(() => {
// 		console.log('Now data will start flowing again.');
// 		readable.resume();
// 		console.log(readable.isPaused())
// 	}, 1000);
// })

// readable.on('end', () => {
// 	console.log('There will be no more data.');
// });

// readable.on('error', (err) => {
// 	console.log(err);
// });

// readable.on('readable', () => {
// 	console.log('readable:', readable.read());
// });

// readable.pipe(writable)
// readable.read([size])
// readable.setEncoding(encoding)
// readable.unpipe([destination])
// readable.unshift(chunk)
// readable.wrap(stream)

// const OldReader = require('./old-api-module.js').OldReader;
// const Readable = require('stream').Readable;
// const oreader = new OldReader;
// const myReader = new Readable().wrap(oreader);

// myReader.on('readable', () => {
//   myReader.read(); // etc.
// });

// Duplex 流与 Transform 流
// stream.Duplex 类 同时实现了 Readable 和 Writable 接口的流
// stream.Transform 类 是一种 Duplex 流。它的输出与输入是通过某种方式关联的。

const Writable = stream.Writable
// es6
// class MyWritable extends Writable {
// 	constructor (options) {
// 		super(options)
// 	}
// }

// pre-es6
// const MyWritable = new Writable({
// 	write(chunk, encoding, callback) {
// 		if (chunk.toString().indexOf('a') >= 0) {
// 			callback(new Error('chunk is invalid'));
// 		} else {
// 			callback();
// 		}
// 	}
// })


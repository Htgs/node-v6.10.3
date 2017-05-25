// const stream = require('stream')

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


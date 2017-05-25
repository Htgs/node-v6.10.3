# Node api自学

##global

1.global是node中的全局变量

2.包含__dirname、__filename、process、require、module等属性和对象


##module

1.module是node的模块加载系统

2.优先加载核心模块

3.简单实用方式

```
 	// ex.js
	function a () {
		console.dir('a')
	}

	function b () {
		console.dir('b')
	}

	// module.exports 设置后 exports无效
	module.exports = {
		fnA: a,
		fnB: b
	}

	// exports.fna = a
	// exports.fnb = b

```

```
	// ex1.js
	const ex = require('ex')
	
	console.log(ex.fnA())
	console.log(ex.fnB())

```

##timer

1.定时器主要用setTimeout、setInterval、setImmediate

2.setTimeout、setInterval用法与javascript一样

3.setImmediate无需延迟毫秒,执行顺序优先于setTimeout、setInterval

```
	const delay = 200

	setTimeout(() => {
		// clearTimeout(timer);
		console.log('setTimeout')
	}, delay)

	setInterval(() => {
		// clearInterval(timer);
		console.log('setInterval')
	}, delay)

	setImmediate(() => {
		// clearImmediate(immediate);
		console.log('setImmediate')
	})

```

##path

1.需要引入核心模块 require('path')

2.注意操作系统的分隔符 path.sep

```
	const path = require('path')

	console.dir(path.basename("E:\\a.txt"))
	console.dir(process.env.PATH)
	console.dir(process.env.PATH.split(path.delimiter))
	console.dir(path.dirname(__dirname))
	console.dir(path.extname('a.txt'))

	// 如果提供了 pathObject.dir，则 pathObject.root 会被忽略
	// 如果提供了 pathObject.base 存在，则 pathObject.ext 和 pathObject.name 会被忽略
	var p = path.format({
	  root: 'F:\\path\\dir',
	  dir: 'F:\\path\\dir',
	  base: 'file.txt',
	  name: '\\weds',
	  ext: '.txt'
	});
	console.dir(p)
	console.dir(path.isAbsolute('F:\\'))
	console.dir(path.join(__dirname, 'home/'))
	console.dir(path.parse('F:\\x\\home\\main.js'))
	console.dir(path.relative('F:\\x\\pj', 'F:\\x\\node\\home\\user'))
	console.dir(path.resolve('F:\\x', 'F\\node\\home\\user'))
	console.dir(__dirname.split(path.sep))
	console.dir(path.win32)

```

##querystring

1.需要引入核心模块 require('querystring')

2.编码和解码escape、unescape

3.对象化和字符串化parse、stringify

```
	const querystring = require('querystring')

	const url = 'q=2333&b=Ewe2#das&b=waw'

	const escape = querystring.escape(url)
	console.log(escape)

	const parse = querystring.parse(url)
	console.log(parse)

	const urlObj = {
		az: ['bb', 'cc'],
		qp: ['bas', 'few']
	}

	const stringify = querystring.stringify(urlObj)
	console.log(stringify)

	// const unescape = querystring.unescape(url)
	const unescape = querystring.unescape(escape)
	console.log(unescape)

```

##Buffer

1.由于是node6+，使用的是Buffer类来生成buffer，node6之前的版本使用new Buffer已经废弃

2.不需要引入核心模块

3.注意使用字符编码

```
	// 生成buffer的方法
	const buf1 = Buffer.alloc(10)
	const buf2 = Buffer.allocUnsafe(10)
	const buf3 = Buffer.from([1, 2, 3])

	// buffer的遍历方式
	const buf = Buffer.from([1, 2, 3])
	// for (let b of buf) {
	// for (let b of buf.keys()) {
	// for (let b of buf.values()) {
	for (let b of buf.entries()) {
		console.log(b)
	}



	// Buffer类的方法
	Buffer.byteLength(buffer)
	Buffer.compare(buf1, buf2) 比较buffer
	Buffer.concat(list[, totalLength]) list为Array 给出总长度时运行速度更快
	Buffer.isBuffer(obj)
	Buffer.isEncoding(encoding)

	// buffer实例的方法
	buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])
	buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
	buf.equals(otherBuffer)
	buf.fill(value[, offset[, end]][, encoding])
	buf.indexOf(value[, byteOffset][, encoding])
	buf.includes(value[, byteOffset][, encoding])
	buf.lastIndexOf(value[, byteOffset][, encoding])
	buf.slice([start[, end]])
	buf.toString([encoding[, start[, end]]])
	buf.toJSON()
	buf.write(string[, offset[, length]][, encoding])

```

##stringdecoder

1.需要引入核心模块 require('string_decoder')

2.主要用于对buffer实例与字符之间进行转换

```
	const StringDecoder = require('string_decoder').StringDecoder;

	const decoder = new StringDecoder('utf8')

	const cent = Buffer.from([0xC2, 0xA2]);
	console.log(decoder.write(cent));

	const euro = Buffer.from([0xE2, 0x82, 0xAC]);
	console.log(decoder.write(euro));

	stringDecoder.end([buffer])
	decoder.write(buffer)

```

##event

1.单独使用时需要引入核心模块 require('events') 并把创建一个构造函数，使用时需要进行实例化

2.在node大部分api中都会存在异步事件驱动，在使用这些api时无需引入events模块

```
	const EventEmitter = require('events')

	class MyEmitter extends EventEmitter {}
	
	// 绑定事件时使用on方法，触发事件时使用emit方法
	// 绑定事件的回调函数作为一个监听器， 每个事件最多只有10个监听器，可以通过myEmitter.setMaxListeners(n)进行修改
	const myEmitter = new MyEmitter()
	myEmitter.on('event', function(a, b) {
		// console.log('一个事件')
		console.log(a, b, this)
		setImmediate(() => {
			console.log('async')
		});
	})
	myEmitter.emit('event', 'arg1', 'arg2')
	
	// myEmitter实例的内置方法
	myEmitter.eventNames()
	myEmitter.removeAllListeners(myEmitter.eventNames())
	myEmitter.getMaxListeners()
	myEmitter.listenerCount(myEmitter.eventNames())
	myEmitter.listeners(myEmitter.eventNames())

```

##error

1.node有四种错误分类:

 标准的 JavaScript 错误
 由底层操作系的触发的系统错误，例如试图打开一个不存在的文件、试图向一个已关闭的 socket 发送数据等。
 由应用程序代码触发的用户自定义的错误。
 断言错误是错误的一个特殊的类，每当 Node.js 检测到一个不应该发生的异常逻辑时会触发。 这类错误通常由 assert 模块触发。

2.由于node使用的api大部分都是异步事件驱动，所以在回调函数中通常第一个参数是错误参数

3.node比较少try catch捕获错误

```
	// 自定义错误
	const err = new Error('错误信息');
	console.error(err.message);

```

#TODO

1. process

2.steam

3.file
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

* 标准的 JavaScript 错误
 
* 由底层操作系的触发的系统错误，例如试图打开一个不存在的文件、试图向一个已关闭的 socket 发送数据等。
 
* 由应用程序代码触发的用户自定义的错误。
 
* 断言错误是错误的一个特殊的类，每当 Node.js 检测到一个不应该发生的异常逻辑时会触发。 这类错误通常由 assert 模块触发。

2.由于node使用的api大部分都是异步事件驱动，所以在回调函数中通常第一个参数是错误参数

3.node比较少try catch捕获错误

```
	// 自定义错误
	const err = new Error('错误信息');
	console.error(err.message);

```


##file

1.需要引入核心模块require('fs')

2.除了创建文件流外，基本每一个api都有异步版本和同步版本

3.同步版本是在异步api的名称后加上Sync后缀，而且同步api是没有回调函数的


##process

1.在全局变量中，无需引入

2.包含系统信息、一些全局的处理事件（异常和promise失败）、使用i/o流、进程通讯等 

```
	// 环境信息等
	console.dir(process.env)
	console.dir(process.argv)
	console.dir(process.cwd())

	// 处理异常错误
	process.on('uncaughtException', (err) => {
	  fs.writeSync(1, `Caught exception: ${err}`);
	});

	// 处理Promise
	const unhandledRejections = new Map();
	process.on('unhandledRejection', (reason, p) => {
		unhandledRejections.set(p, reason);
	});
	process.on('rejectionHandled', (p) => {
		unhandledRejections.delete(p);
	});

	// 输入和输出
	// process.stdin
	// process.stdout
	
	// 延迟触发
	process.nextTick(() => {
		console.log('nextTick callback');
	});

```

##os

1.需要引入require('os')

2.操作系统相关的api


##url

1.需要引入require('url')

2.主要针对url地址进行转换

```
	const url = require('url')
	const urlObject = url.parse('Https://hs:bs@www.LL.me:9394/bs?q=e2&d=dd#spa', true, true)
	const urlString = url.format(urlObject)

```

##util

1.需要引入require('util')

2.util模块主要用于支持 Node.js 内部 API 的需求


##assert

1.需要引入require('assert')

2.主要用于测试不变量


##stream

1.stream包含了writable、readable、Duplex和Transform，创建新stream时需要引入require('stream')

2.可写流和可读流分别有自己的事件和各自的方法

3.创建构造函数继承stream上writable、readable、Duplex和Transform四种类，来创建自定义流


##readline

1.需要引入require('readline')

2.主要有interface类实现

```
	const readline = require('readline')

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		prompt: '请输入> '
	})

	rl.prompt();

	rl.on('line', (line) => {
		switch(line.trim()) {
			case 'hello':
				console.log('world!');
				break;
			default:
				console.log(`你输入的是：'${line.trim()}'`);
				break;
		}
		rl.prompt();
	}).on('close', () => {
		console.log('再见!');
		process.exit(0);
	});

```


##repl

1.需要引用require('repl')

2.可以自定义终端的命令已经设计出对话

```
	
	const repl = require('repl')

	const r = repl.start('> ')
	
	initializeContext(r.context);
	function initializeContext(context) {
		context.m = 'test';
	}

	r.on('reset', initializeContext);

	r.on('exit', () => {
		console.log('从 REPL 接收到 "exit" 事件！');
		process.exit();
	})

	r.defineCommand('sayhello', {
		help: '打招呼',
		action: function(name) {
			this.lineParser.reset();
			this.bufferedCommand = '';
			console.log(`你好，${name}！`);
			this.displayPrompt();
		}
	});
	r.defineCommand('saybye', function() {
		console.log('再见！');
		this.close();
	});

```

#TODO

1.child processes

2.http(s)


#unfinished

1.cluster

2.crypto

3.dns

4.net

5.TLS

6.UDP

7.VM

8.ZLIB

const fs = require('fs')
const path = require('path')
const assert = require('assert')
// 小文件拷贝
// function copy(src, dst) {
// 	console.log(src)
// 	console.log(dst)
// 	var red = fs.readFileSync(src)
// 	console.dir(red)
// 	fs.writeFileSync(dst, red)
// }

// 大文件拷贝
// function copy(src, dst) {
// 	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
// }

// function main(argv) {
// 	copy(argv[0], argv[1])
// }

// main(['E:\\a.txt', path.join(process.cwd(), 'b.txt')])
// main(['E:\\XX-Net-3.1.19.zip', 'F:\\xxnet.zip'])
// console.dir(process.cwd())

// console.log(fs.constants) 文件常量

// 增加或这修改文件
// fs.appendFile('./file/appendFile.txt', 'this is a appendFile', 'utf8', (err) => {
// 	if (err) throw err
// })

// fs.access('./file/appendFile.txt', fs.constants.R_OK | fs.constants.W_OK, (err) => {
// 	if (err) console.log(err)
// })

// const rs = fs.createReadStream('./file/appendFile.txt')

// rs.on('data', (chunk) => {
// 	console.log(chunk, `Received ${chunk.length} bytes of data.`);
// })

// rs.on('end', () => {
// 	console.log('rs end')
// })

// rs.on('close', () => {
// 	console.log('rs close')
// })

// rs.on('readable', () => {
// 	console.log('rs readable')
// })

// rs.on('error', (er) => {
// 	if (er) 
// 	console.log(er, 'rs error')
// })

// const ws = fs.createWriteStream('./file/write.txt')

// ws.on('pipe', (src) => {
// 	console.error('something is piping into the writer');
//   	assert.equal(src, rs); // src 为rs
// })

// rs.pipe(ws)

// console.dir(rs)
// console.dir(ws)

// console.log(fs.readFileSync('./file/write.txt', 'utf8'))

// const fd = fs.openSync('./file/write.txt', 'r+')

// // 保留多少个字节的数据
// fs.ftruncate(fd, 25, (err) => {
// 	assert.ifError(err);
//   	console.log(fs.readFileSync('./file/write.txt'));
// })

// fs.link('./file/write.txt', './home/b.txt', (err) => {
// 	if (err) throw err
// })

// 创建文件夹
// fs.mkdir('./file1', (err) => {
// 	if (err) throw err
// })

// const tmpDir = '.\\';
// const { sep } = require('path');
// fs.mkdtemp(`${tmpDir}${sep}`, (err, folder) => {
// 	if (err) throw err
// 	console.log(folder)
// })



// fs.readdir('./file/', (err, files) => {
// 	if (err) console.log(err)
// 	console.log(files)
// })

// fs.readFile('./file/write.txt', 'utf8',(err, data) => {
// 	if (err) throw err
// 	console.log(data)
// })

// 不知道怎么用
// fs.readlink(process.cwd(), (err, linkString) => {
// 	if (err) throw err
// 	console.log(linkString)
// })

// fs.realpath('./file/write.txt', (err, resolvedPath) => {
// 	if (err) throw err
// 	console.log(resolvedPath)
// })

// fs.rename('./file/write.txt', './file1/w.txt', (err) => {
// 	if (err) throw err
// })

// fs.rmdir('./9itNxV', (err) => {
// 	if (err) throw err
// })

// fs.stat('./file/wirte.txt', (err, stats) => {
// 	if (err) throw err
// 	console.log(stats)
// })

// // 复制该目录下全部文件到一个不存在的文件夹上
// fs.symlink('./file', './f', 'dir',(err) => {
// 	if (err) throw err
// })

// // 把一个文件复制到另外一个不存在的文件上
// fs.symlink('./file/wirte.txt', './e', (err) => {
// 	if (err) throw err
// })

// // 新生成的w文件夹会无法操作
// fs.symlink('./file/wirte.txt', './w', 'dir', (err) => {
// 	if (err) throw err
// })

// // 前5截取字节
// fs.truncate('./file/wirte.txt', 5, (err) => {
// 	if (err) throw err
// })

// const watcher = fs.watch('./file/wirte.txt', (eventType, filename) => {
// 	console.log(`事件类型是: ${eventType}`); // rename 和 change
// 	if (filename) {
// 		console.log(`提供的文件名: ${filename}`);
// 		watcher.close()
// 	} else {
// 		console.log('未提供文件名');
// 	}
// })

// fs.open('./file/write.txt', 'r+', (err, fd) => {
// 	if (err) throw err
// 	console.dir(fd) //这个不知道怎么来的
	
// 	// fs.read(fd, Buffer.from([fd]), 0, fd.length, 0, (err, bytesRead, buffer) => {
// 	// 	if (err) throw err
// 	// 	console.log(bytesRead)
// 	// 	console.log(buffer)
// 	// })
	
// 	// 重写fd文件中的内容
// 	// fs.write(fd, 'this woo', (err, written, string) => {
// 	// 	if (err) throw err
// 	// 	console.log(written)
// 	// 	console.log(string)
// 	// })
// })

// fs.writeFile('./file/write.txt', 'the new text', (err) => {
// 	if (err) throw err
// 	console.log('write file')
// })

const rs = fs.createReadStream('./file/write.txt')
const ws = fs.createWriteStream('./file/write.txt')
console.log(rs)
console.log(ws)

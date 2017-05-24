const fs = require('fs')
const path = require('path')

// 小文件拷贝
// function copy(src, dst) {
// 	console.log(src)
// 	console.log(dst)
// 	var red = fs.readFileSync(src)
// 	console.dir(red)
// 	fs.writeFileSync(dst, red)
// }

// 大文件拷贝
function copy(src, dst) {
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv) {
	copy(argv[0], argv[1])
}

// main(['E:\\a.txt', path.join(process.cwd(), 'b.txt')])
main(['E:\\XX-Net-3.1.19.zip', 'F:\\xxnet.zip'])
// console.dir(process.cwd())
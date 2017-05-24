function a () {
	console.dir('a')
}

function b () {
	console.dir('b')
}

// module.exports 设置后 exports无效
// module.exports = {
// 	fna: a,
// 	fnb: b
// }

exports.fna = a
exports.fnb = b
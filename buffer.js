// const buf1 = Buffer.alloc(10)
// console.dir(buf1)
// const buf2 = Buffer.alloc(10, 1)
// console.dir(buf2)
// const buf3 = Buffer.allocUnsafe(10)
// console.dir(buf3)
// const buf4 = Buffer.from([1, 2, 3])
// console.dir(buf4)
// const buf5 = Buffer.from('test')
// console.dir(buf5)
// const buf6 = Buffer.from('tést')
// console.dir(buf6)
// const buf7 = Buffer.from('tést', 'UTF-8')
// console.dir(buf7)

// const buf = Buffer.from('hello world', 'ascii')

// console.log(buf)
// console.log(buf.toString('hex'))
// console.log(buf.toString('base64'))
// console.log(buf.toString('latin1'))

// const arr = new Uint16Array(2)

// arr[0] = 5000;
// arr[1] = 4000;

// // 拷贝 `arr` 的内容
// const buf1 = Buffer.from(arr);

// // 与 `arr` 共享内存
// const buf2 = Buffer.from(arr.buffer);

// // 输出: <Buffer 88 a0>
// console.log(buf1);

// // 输出: <Buffer 88 13 a0 0f>
// console.log(buf2);

// arr[1] = 6000;

// // 输出: <Buffer 88 a0>
// console.log(buf1);

// // 输出: <Buffer 88 13 70 17>
// console.log(buf2);

// const buf = Buffer.from([1, 2, 3])

// // for (let b of buf) {
// // for (let b of buf.keys()) {
// // for (let b of buf.values()) {
// for (let b of buf.entries()) {
// 	console.log(b)
// }

// const bufalc = Buffer.alloc(10)
// console.log(bufalc)
// const bufalcu = Buffer.allocUnsafe(10)
// bufalcu.fill(0)
// console.log(bufalcu)

// console.dir(Buffer.byteLength(bufalcu))
// console.dir(Buffer.byteLength('test'))

// Buffer.compare(buf1, buf2) 比较buffer
// Buffer.concat(list[, totalLength]) list为Array 给出总长度时运行速度更快
// Buffer.isBuffer(obj)
// Buffer.isEncoding(encoding)


// const buf1 = Buffer.from('buffer');
// const buf2 = Buffer.from(buf1);

// buf1[0] = 0x61;

// // 输出: auffer
// console.log(buf1.toString());

// // 输出: buffer
// console.log(buf2.toString()); 

// const str = 'node.js'
// const buf = Buffer.allocUnsafe(str.length)
// for (let i = 0; i < str.length; i++) {
// 	buf[i] = str.charCodeAt(i)
// }

// console.dir(buf.toString('utf8'))


// buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])
// buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
// buf.equals(otherBuffer)
// buf.fill(value[, offset[, end]][, encoding])
// buf.indexOf(value[, byteOffset][, encoding])
// buf.includes(value[, byteOffset][, encoding])
// buf.lastIndexOf(value[, byteOffset][, encoding])
// buf.slice([start[, end]])
// buf.toString([encoding[, start[, end]]])

// buf.toJSON()
const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer'
    ? Buffer.from(value.data)
    : value;
});

// 输出: <Buffer 01 02 03 04 05>
console.log(copy);

// buf.write(string[, offset[, length]][, encoding])
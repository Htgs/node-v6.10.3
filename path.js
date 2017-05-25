const path = require('path')

// console.dir(path.basename("E:\\a.txt"))

// console.dir(process.env.PATH)
// console.dir(process.env.PATH.split(path.delimiter))
// console.dir(path.dirname(__dirname))
// console.dir(path.extname('a.txt'))

// 如果提供了 pathObject.dir，则 pathObject.root 会被忽略
// 如果提供了 pathObject.base 存在，则 pathObject.ext 和 pathObject.name 会被忽略
var p = path.format({
  root: 'F:\\path\\dir',
  dir: 'F:\\path\\dir',
  base: 'file.txt',
  name: '\\weds',
  ext: '.txt'
});

// console.dir(p)
// console.dir(path.isAbsolute('F:\\'))
// console.dir(path.join(__dirname, 'home/'))

// console.dir(path.parse('F:\\szh\\home\\main.js'))

// console.dir(path.relative('F:\\szh\\pj', 'F:\\szh\\node\\home\\user'))
// console.dir(path.resolve('F:\\szh', 'F\\node\\home\\user'))
// console.dir(__dirname.split(path.sep))
console.dir(path.win32)

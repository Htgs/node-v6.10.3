console.dir(process.cwd())
console.dir(process.argv)
console.dir(process.env)


console.log('before nextTick')
process.nextTick(() => {
	console.dir('nextTick')
})
console.log('after nextTick')

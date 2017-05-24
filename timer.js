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
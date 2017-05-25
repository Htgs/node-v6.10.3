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

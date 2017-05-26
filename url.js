const url = require('url')
// url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
const urlObject = url.parse('Https://hs:bs@www.LL.me:9394/bs?q=e2&d=dd#spa', true, true)
// const urlObject = url.parse('Https://hs:bs@www.LL.me:9394/bs/sad?q=e2&d=dd#spa')
console.log(urlObject)
url.resolve('http://example.com/', '/one')    // 'http://example.com/one'
const urlString = url.format(urlObject)
console.log(urlString)

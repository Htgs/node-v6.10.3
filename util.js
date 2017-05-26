const util = require('util')

const debuglog = util.debuglog('foo');

debuglog('hello from foo [%d]', 123);

exports.puts = util.deprecate(function() {
	for (var i = 0, len = arguments.length; i < len; ++i) {
		process.stdout.write(arguments[i] + '\n');
	}
}, 'util.puts: 使用 console.log 代替');

console.log(util.format('%s:%s', 'foo', 'bar', 'baz'));

console.log(util.inspect(util, { showHidden: true, depth: null }));

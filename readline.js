const readline = require('readline')

// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// })

// rl.question('what the f\n', (answer) => {
// 	console.log(`thx, ${answer}`)
// 	rl.close()
// })

// rl.on('close', () => {
// 	console.log('close')
// })

// rl.on('line', (input) => {
// 	console.log(`接收到：${input}`);
// 	rl.setPrompt('貌似输错了')
// 	rl.prompt()
// })

// rl.on('pause', (input) => {
// 	console.log('Readline 被暂停。');
// })

// rl.on('resume', (input) => {
// 	console.log('Readline 被恢复。');
// })

// rl.on('SIGINT', () => {
// 	rl.question('确定要退出吗？', (answer) => {
// 		if (answer.match(/^y(es)?$/i)) rl.pause();
// 	});
// });

// rl.close()
// rl.pause()
// rl.prompt()
// rl.question()
// rl.resume()
// rl.write()

// readline.clearLine()
// readline.clearScreenDown()
// readline.createInterface()
// readline.cursorTo()
// readline.moveCursor()
// readline.emitKeypressEvents()

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: '请输入> '
})

rl.prompt();

rl.on('line', (line) => {
	switch(line.trim()) {
		case 'hello':
			console.log('world!');
			break;
		default:
			console.log(`你输入的是：'${line.trim()}'`);
			break;
	}
	rl.prompt();
}).on('close', () => {
	console.log('再见!');
	process.exit(0);
});


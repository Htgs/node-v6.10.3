const repl = require('repl')

// var msg = 'msg'

// repl.start('> ').context.m = msg

// const r = repl.start({prompt: '>', eval: myEval, writer: myWriter});

// function myEval(cmd, context, filename, callback) {
//   callback(null,cmd);
// }

// function myWriter(output) {
//   return output.toUpperCase();
// }




var r = repl.start({prompt: '>'});
initializeContext(r.context);
function initializeContext(context) {
  context.m = 'test';
}

r.on('reset', initializeContext);

r.on('exit', () => {
  console.log('从 REPL 接收到 "exit" 事件！');
  process.exit();
})

r.defineCommand('sayhello', {
  help: '打招呼',
  action: function(name) {
    this.lineParser.reset();
    this.bufferedCommand = '';
    console.log(`你好，${name}！`);
    this.displayPrompt();
  }
});
r.defineCommand('saybye', function() {
  console.log('再见！');
  this.close();
});

let http = require('http');

// 启动一个 http 服务
const server = http.createServer((req, res) => {
  res.write('hello\n');
  // 打断点
  debugger;
  res.write('new break\n');
  // 结束请求
  res.end('world');
});

server.listen(8888, () => {
  console.log('start server');
});

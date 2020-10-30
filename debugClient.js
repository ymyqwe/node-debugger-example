const net = require('net');

// 建立一个TCP连接, 监听5858的所有输入
const socket = net.createConnection(5858, '127.0.0.1');
socket.on('data', (data) => {
  console.log(data.toString())
});

// 在程序运行的控制台监听输入
process.stdin.on('data', (data) => {
  const json = data.toString();
  const msg = `Content-Length: ${Buffer.byteLength(json, 'utf8')}\r\n\r\n${json}`;
  socket.write(msg, 'utf8');
});
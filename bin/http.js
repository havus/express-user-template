const http = require('http');
const app = require('../app');
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen( PORT , () => {
  console.log('\x1b[33m\x1b[1m', ' * * * * * * * * * * * * * * * * * * * * * * * *');
  console.log(
    '\x1b[33m\x1b[1m', ' *',
    '\x1b[37m\x1b[1m', `Exclusive connected to port >>>>>> ${PORT}!`,
    '\x1b[33m\x1b[1m', ' *','\x1b[34m\x1b[1m');
  console.log('\x1b[33m\x1b[1m', ' * * * * * * * * * * * * * * * * * * * * * * * *');
});

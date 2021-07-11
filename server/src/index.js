const Koa = require('koa');
const http = require('http');
const socket = require('socket.io');

const app = new Koa();
const server = http.createServer(app.callback());
const io = socket(server, {
    cors: {
        origin: '*'
    }
});

const SERVER_PORT = 8080;
const SERVER_HOST = 'localhost';

io.on('connection', socket => {
    console.log('[IO] Server has a new connection');

    socket.on('chat.message', (data) => {
        io.emit('chat.message', data);
    });

    socket.on('disconnect', () => {
        console.log('[IO] A connection was been lost');
    });
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log("Server Active in port " + SERVER_PORT);
});
import io from 'socket.io-client';

const socket = io('http://localhost:8080');
socket.on('connect', () => console.log('[IO] Connection has been established'));

export default socket;

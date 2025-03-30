const { WebSocketServer } = require('rust-websocket-server');

const wss = new WebSocketServer(8080);

wss.start().then(() => {
    console.log('WebSocket server running on ws://localhost:8080');
}).catch(console.error);

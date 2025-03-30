const { WebSocketServer } = require('rust-websocket-server');

async function main() {
  const wss = new WebSocketServer(8080);
  await wss.start();
  console.log('WebSocket server running on ws://localhost:8080');
}

main().catch(console.error);

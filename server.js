const http = require('http');

const PORT = process.env.PORT || 3000;
const SHIP_TOKEN = process.env.SHIP_TOKEN || 'SHIP-BOOTCAMP-2026';

const server = http.createServer((req, res) => {
  if (req.url === '/token') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ token: SHIP_TOKEN }));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>M4 Ship-It Application Running</h1>');
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
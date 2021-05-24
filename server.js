const http = require('http');
const app = require('./app.js');
const { PORT } = require('./config');

const server = http.createServer(app);

server.listen(PORT, () => console.log(`App started on port: ${PORT}`));

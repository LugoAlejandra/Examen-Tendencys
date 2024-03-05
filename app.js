const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');

const app = express();

app.use(express.static(path.join(__dirname, 'client/index.html')));
const server = http.createServer(app);
const io = socketIo(server);

const routes = require(path.join(__dirname, 'server/routes/shipment.routes.js'));

app.use('/', routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
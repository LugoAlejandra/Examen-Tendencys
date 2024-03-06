const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'));
});

const server = http.createServer(app);
const io = socketIo(server);

const routes = require(path.join(__dirname, './server/routes/shipments.routes'));


app.use('/', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
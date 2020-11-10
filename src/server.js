require('dotenv/config');

const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(process.env.PORT, () => console.log("Server started at LOCALHOST: ", process.env.PORT));
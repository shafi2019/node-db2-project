const express =  require('express');
const server = express();


server.use(express.json());
const carsRouter = require('../cars/cars-router.js');
server.use('/api/cars', carsRouter)

server.get('/', (req, res) => {
    res.send(`<h2>Lets Make A DataBase </h2>`)
});

module.exports = server;
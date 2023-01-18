const express = require('express');
const cors = require('cors');
const {socketController} = require('../sockets/controller.js');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths = {}

        // Middlewares
        this.middleware();

        // Rutas de mi aplicacion
        this.routes();

        // WebSockets
        this.sockets();
    }

    middleware() {
        // Cors
        this.app.use(cors())

        // Directorio Publico
        this.app.use(express.static('public'));

    }

    routes(){

        // this.app.use(this.paths.auth, routerAuth);
        
    }

    sockets(){
        this.io.on('connection', socketController)
    }

    listen(){
        this.server.listen(this.port,() => {
            console.log(`Escuchando en https:localHost:${this.port}`)
        })
        
    }

}

module.exports = Server;
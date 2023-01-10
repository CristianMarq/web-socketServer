import express from "express";
import cors from 'cors';

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {}

        // Middlewares
        this.middleware();

        // Rutas de mi aplicacion
        this.routes();
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

    listen(){
        this.app.listen(this.port,() => {
            console.log(`Escuchando en https:localHost:${this.port}`)
        })
        
    }

}

export{Server}
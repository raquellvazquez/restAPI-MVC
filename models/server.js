const express = require('express');
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users';

        /**
         * Midellware
         */
       this.middlewares();

       /**
        * Rutas
        */
        this.routes()
    }

    routes() {
       this.app.use(this.userPath, require('../routes/user.routes'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('escuchando en puerto', this.port)
        })
    }

    middlewares() {
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }
}

module.exports = Server;
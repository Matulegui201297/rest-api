const express = require('express');
const config = require ('../../config');

class ExpressServer {
    
    constructor() {
        this.app = express();
        this.port = config.port;
        this._middlewares();
        this.pathUsers = config.api.prefix;
        this._routes();

    }    

    _middlewares() {
        this.app.use(express.json());
    }

    _routes() {
        this.app.use(`${this.pathUsers}/users`, require('../../routes/users'));
    }

    async start() {
        this.app.listen(this.port, (error) => {
            if(error) {
                console.log(err);
                process.exit();
                return;
                }
            });
        }
}


module.exports = ExpressServer
const express = require('express');
const morgan = require ('morgan');
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
        this.app.use(morgan('tiny'));
    }

    _routes() {

        this.app.head("/status", (req,res) => {
            res.status(200).end();
        });

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
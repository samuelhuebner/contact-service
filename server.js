require('dotenv').config();

const Express = require('express');
const bodyParser = require('body-parser');

class Server {
    constructor(routes) {
        this.app = new Express();

        this.app.listen(process.env.SVC_PORT, () => console.log(`${process.env.SVC_NAME} listening to port ${process.env.SVC_PORT}`));
    }
}

module.exports = new Server();
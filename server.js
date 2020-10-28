/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable global-require */

require('dotenv').config();

const Express = require('express');
const bodyParser = require('body-parser');

const { error, debug, jwtAuth, cors } = require('./middleware');

class Server {
    constructor(routes) {
        this.app = new Express();
        this.app.use(bodyParser.json({ limit: '50mb' }));
        if (Number.parseInt(process.env.DEBUG)) {
            this.app.use(debug);
        }
        this.app.use(jwtAuth);
        this.app.use(cors);
        this.app.use(routes);
        this.app.use(error);
        this.app.listen(process.env.SVC_PORT, () => console.log(`${process.env.SVC_NAME} listening to port ${process.env.SVC_PORT}`));
    }
}

module.exports = new Server(require('./routes'));
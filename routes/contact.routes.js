const { Router } = require('express');
const { ContactController } = require('../controllers');

class ContactRoutes {
    constructor() {
        this.router = new Router();
        this.controller = new ContactController();

        this.router.post('/public', this.createPublicContactHandler.bind(this));
        this.router.post('/public/:id', this.updatePublicContactHandler.bind(this));
        this.router.get('/public', this.queryPublicContacts.bind(this));
    }

    async createPublicContactHandler(req, res, next) {
        this.controller.createNewContact(req.body)
            .then((result) => res.send(result))
            .catch((error) => next(error));
    }

    async updatePublicContactHandler(req, res, next) {
        this.controller.updateExistingContact(req.body, req.params.id)
            .then((result) => res.send(result))
            .catch((error) => next(error));
    }

    async queryPublicContacts(req, res, next) {
        this.controller.queryContacts()
            .then((result) => res.send(result))
            .catch((error) => next(error));
    }
}

module.exports = {
    url: '/api/contacts',
    router: new ContactRoutes().router
};
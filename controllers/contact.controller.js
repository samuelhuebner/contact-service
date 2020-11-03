const { NotFoundError } = require('../errors');
const db = require('../models');
const { parseNumber } = require('../utils');

class ContactController {
    async createNewContact(data) {
        delete data.id;
        const newContact = await db.contact.create(data);
        return newContact;
    }

    async updateExistingContact(data, updateId) {
        const id = parseNumber(updateId, 'updateId', true);

        const existingContact = await db.contact.findByPk(id);

        if (!existingContact) {
            throw new NotFoundError('Not found');
        }

        const keys = Object.keys(data);
        keys.forEach((key) => {
            existingContact[key] = data[key];
        });

        await existingContact.save();
        return existingContact;
    }

    async queryContacts(publicContacts = true) {
        if (!publicContacts) {
            // do something
        }

        return db.contact.findAll();
    }
}

module.exports = ContactController;
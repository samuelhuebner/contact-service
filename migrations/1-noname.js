
/* eslint-disable */
'use strict';

const Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "contacts", deps: []
 *
 **/

const info = {
    "revision": 1,
    "name": "noname",
    "created": "2020-10-28T13:45:46.135Z",
    "comment": ""
};

const migrationCommands = [{
    fn: "createTable",
    params: [
        "contacts",
        {
            "id": {
                "type": Sequelize.INTEGER,
                "field": "id",
                "autoIncrement": true,
                "primaryKey": true
            },
            "firstname": {
                "type": Sequelize.STRING,
                "field": "firstname",
                "allowNull": false
            },
            "middlename": {
                "type": Sequelize.STRING,
                "field": "middlename",
                "defaultValue": "",
                "allowNull": true
            },
            "lastname": {
                "type": Sequelize.STRING,
                "field": "lastname",
                "allowNull": false
            },
            "isInternal": {
                "type": Sequelize.TINYINT(1),
                "field": "isInternal",
                "defaultValue": 0,
                "allowNull": false
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize) {
        let index = this.pos;
        return new Promise((resolve, reject) => {
            function next() {
                if (index < migrationCommands.length) {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else {
                    resolve();
                }
            }
            next();
        });
    },
    info
};

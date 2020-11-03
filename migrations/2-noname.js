
/* eslint-disable */
'use strict';

const Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "privateUserId" to table "contacts"
 * addColumn "isGlobal" to table "contacts"
 *
 **/

const info = {
    "revision": 2,
    "name": "noname",
    "created": "2020-11-03T09:17:01.766Z",
    "comment": ""
};

const migrationCommands = [{
        fn: "addColumn",
        params: [
            "contacts",
            "privateUserId",
            {
                "type": Sequelize.INTEGER,
                "field": "privateUserId",
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "contacts",
            "isGlobal",
            {
                "type": Sequelize.TINYINT(1),
                "field": "isGlobal",
                "defaultValue": 1,
                "allowNull": false
            }
        ]
    }
];

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

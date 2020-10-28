module.exports = (sequelize, DataTypes) => {
    const contact = sequelize.define('contact', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        middlename: {
            type: DataTypes.STRING(),
            allowNull: true,
            defaultValue: ''
        },
        lastname: {
            type: DataTypes.STRING(),
            allowNull: false
        },
        isInternal: {
            type: DataTypes.TINYINT(1),
            allowNull: false,
            defaultValue: 0
        }
    }, {
        getterMethods: {
            fullname() {
                let fullName;
                if (this.firstname) {
                    fullName = `${this.firstname} ${this.middlename} ${this.lastname}`;
                } else {
                    fullName = `${this.middlename} ${this.lastname}`;
                }
                // removes whitespaces (adapted from: https://stackoverflow.com/questions/7635952/javascript-how-to-remove-all-extra-spacing-between-words)
                fullName = fullName.replace(/\s+/g, ' ');
                return fullName;
            }
        }
    });

    return contact;
};
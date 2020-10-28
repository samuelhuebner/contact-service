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
    });

    return contact;
};
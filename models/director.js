module.exports = (sequelize, type) => {
    const Director = sequelize.define('directors', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: type.STRING,
        },
        lastName: {
            type: type.STRING,
        },
        status: {
            type: type.BOOLEAN,
        },
    })
    return Director;
};
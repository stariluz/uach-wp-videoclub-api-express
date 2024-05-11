module.exports = (sequelize, type) => {
    const User = sequelize.define('users', {
        id: { type: type.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: type.STRING },
        lastName: { type: type.STRING },
        email: { type: type.STRING },
        password: { type: type.STRING },
    });
    return User;
};
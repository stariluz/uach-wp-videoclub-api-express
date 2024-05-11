const AddressType = {
    memberId: type.INTEGER,
    number: type.STRING,
    suburb: type.STRING,
    zipCode: type.STRING,
    city: type.STRING,
    state: type.STRING,
    country: type.STRING,
}

module.exports = (sequelize, type) => {
    const Member = sequelize.define('members', {
        id: { type: type.INTEGER, primaryKey: true, autoIncrement: true },
        name: type.STRING,
        lastName: type.STRING,
        phone: type.STRING,
        address: {
            type: AddressType
        },
    });
    return Member;
};
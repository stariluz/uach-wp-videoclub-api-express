module.exports = (sequelize, type) => {
    const WaitingList = sequelize.define('waiting_lists', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        memberId: { type: type.INTEGER },
        movieId: { type: type.INTEGER },
        entryDate: { type: type.DATE },
        status: { type: type.BOOLEAN },
    });
    return WaitingList;
}
module.exports = (sequelize, type) => {
    const Loan = sequelize.define('loans', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        memberId: { type: type.INTEGER },
        copyId: { type: type.INTEGER },
        startDate: { type: type.DATE },
        endDate: { type: type.DATE },
    });
    return Loan;
}
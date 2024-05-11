module.exports = (sequelize, type) => {
    const MemberFavoriteDirector = sequelize.define('members_favorite_directors', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        memberId: { type: type.INTEGER },
        directorId: { type: type.INTEGER },
    });
    return MemberFavoriteDirector;
}
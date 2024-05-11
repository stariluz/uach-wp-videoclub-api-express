module.exports = (sequelize, type) => {
    const MemberFavoriteActor = sequelize.define('members_favorite_actors', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        memberId: { type: type.INTEGER },
        actorId: { type: type.INTEGER },
    });
    return MemberFavoriteActor;
}
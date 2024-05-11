module.exports = (sequelize, type) => {
    const MemberFavoriteGenre = sequelize.define('members_favorite_genres', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        memberId: { type: type.INTEGER },
        genreId: { type: type.INTEGER },
    });
    return MemberFavoriteGenre;
}
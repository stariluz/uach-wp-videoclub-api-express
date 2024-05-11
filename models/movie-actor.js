module.exports = (sequelize, type) => {
    const MovieActor = sequelize.define('movies_actors', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        movieId: { type: type.INTEGER },
        actorId: { type: type.INTEGER },
    });
    return MovieActor;
}
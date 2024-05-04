const Sequelize = require('sequelize');
const genreModel = require('./models/genre');
const directorModel = require('./models/director');
const movieModel = require('./models/movie');

// 1) Database name
// 2) User
// 3) Password
// 4) Configuration object of the ORM

const sequelize = new Sequelize('wp_videoclub', 'root', 'abcd1234', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3307
});

const Genre = genreModel(sequelize, Sequelize);
const Director = directorModel(sequelize, Sequelize);
const Movie = movieModel(sequelize, Sequelize);

// A genre can have many movies.
Genre.hasMany(Movie, { as: 'movies' });
// A movie must have a genre.
Movie.belongsTo(Genre, { as: 'genre' });

// A director can have many movies.
Director.hasMany(Movie, { as: 'movies' });
// A movie must have a director.
Movie.belongsTo(Director, { as: 'director' });


sequelize.sync({
    force: true,
}).then(() => {
    console.log("Restored database");
});

module.exports = { Genre, Director, Movie }
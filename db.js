const Sequelize = require('sequelize');
const actorModel = require('./models/actor');
const copyModel = require('./models/copy');
const directorModel = require('./models/director');
const genreModel = require('./models/genre');
const loanModel = require('./models/loan');
const memberFavoriteActorModel = require('./models/member-favorite-actor');
const memberFavoriteDirectorModel = require('./models/member-favorite-director');
const memberFavoriteGenreModel = require('./models/member-favorite-genre');
const memberModel = require('./models/member');
const movieActorModel = require('./models/movie-actor');
const movieModel = require('./models/movie');
const userModel = require('./models/user');
const waitingListModel = require('./models/waiting-list');

// 1) Database name
// 2) User
// 3) Password
// 4) Configuration object of the ORM

const sequelize = new Sequelize('wp_videoclub', 'root', 'abcd1234', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3307
});

const Actor = actorModel(sequelize, Sequelize);
const Copy = copyModel(sequelize, Sequelize);
const Director = directorModel(sequelize, Sequelize);
const Genre = genreModel(sequelize, Sequelize);
const Loan = loanModel(sequelize, Sequelize);
const MemberFavoriteActor = memberFavoriteActorModel(sequelize, Sequelize);
const MemberFavoriteDirector = memberFavoriteDirectorModel(sequelize, Sequelize);
const MemberFavoriteGenre = memberFavoriteGenreModel(sequelize, Sequelize);
const Member = memberModel(sequelize, Sequelize);
const MovieActor = movieActorModel(sequelize, Sequelize);
const Movie = movieModel(sequelize, Sequelize);
const User = userModel(sequelize, Sequelize);
const WaitingList = waitingListModel(sequelize, Sequelize);


// A movie can have many copies.
Movie.hasMany(Copy, { as: 'copies' });
// A copy must have just one movie.
Copy.belongsTo(Movie, { as: 'movie' });


// A genre can have many movies.
Genre.hasMany(Movie, { as: 'movies' });
// A movie must have a genre.
Movie.belongsTo(Genre, { as: 'genre' });


// A director can have many movies.
Director.hasMany(Movie, { as: 'movies' });
// A movie must have a director.
Movie.belongsTo(Director, { as: 'director' });


// A copy can have many loans.
Copy.hasMany(Loan, { as: 'loans' });
// A loan must have a copy.
Loan.belongsTo(Copy, { as: 'copy' });


// A members can have many loans.
Member.hasMany(Loan, { as: 'loans' });
// A loan must have a members.
Loan.belongsTo(Member, { as: 'member' });


// A movie can be in many waiting lists.
Movie.hasMany(WaitingList, { as: 'waitingLists' });
// A waiting list must have a movie.
WaitingList.belongsTo(Movie, { as: 'movie' });


// A member can have many waiting lists.
Member.hasMany(WaitingList, { as: 'waitingLists' });
// A waiting list must have a member.
WaitingList.belongsTo(Member, { as: 'member' });


// An actor participates in many movies
MovieActor.belongsTo(Actor, { foreingKey: 'actorId' });
Actor.belongsToMany(Movie, {
    foreingKey: 'movieId',
    as: 'actors',
    through: 'movies_actors'
});

// In a movie many actors participate
MovieActor.belongsTo(Movie, { foreingKey: 'movieId' });
Movie.belongsToMany(Actor, {
    foreingKey: 'actorId',
    as: 'movies',
    through: 'movies_actors'
});


// An actor can be favorite of many members
MemberFavoriteActor.belongsTo(Actor, { foreingKey: 'actorId' });
Actor.belongsToMany(Member, {
    foreingKey: 'memberId',
    as: 'actors',
    through: 'members_favorite_actors'
});

// A member can have many favorite actors
MemberFavoriteActor.belongsTo(Member, { foreingKey: 'memberId' });
Member.belongsToMany(Actor, {
    foreingKey: 'actorId',
    as: 'members',
    through: 'members_favorite_actors'
});


// An director can be favorite of many members
MemberFavoriteDirector.belongsTo(Director, { foreingKey: 'directorId' });
Director.belongsToMany(Member, {
    foreingKey: 'memberId',
    as: 'directors',
    through: 'members_favorite_directors'
});

// A member can have many favorite directors
MemberFavoriteDirector.belongsTo(Member, { foreingKey: 'memberId' });
Member.belongsToMany(Director, {
    foreingKey: 'directorId',
    as: 'members',
    through: 'members_favorite_directors'
});


// An genre can be favorite of many members
MemberFavoriteGenre.belongsTo(Genre, { foreingKey: 'genreId' });
Genre.belongsToMany(Member, {
    foreingKey: 'memberId',
    as: 'genres',
    through: 'members_favorite_genres'
});

// A member can have many favorite genres
MemberFavoriteGenre.belongsTo(Member, { foreingKey: 'memberId' });
Member.belongsToMany(Genre, {
    foreingKey: 'genreId',
    as: 'members',
    through: 'members_favorite_genres'
});




sequelize.sync({
    force: true,
}).then(() => {
    console.log("Restored database");
});

module.exports = {
    Actor,
    Copy,
    Director,
    Genre,
    Loan,
    MemberFavoriteActor,
    MemberFavoriteDirector,
    MemberFavoriteGenre,
    Member,
    MovieActor,
    Movie,
    User,
    WaitingList,
}
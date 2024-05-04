const { FOREIGNKEYS } = require("sequelize/lib/query-types");
const director = require("./director");

module.exports = (sequelize, type) => {
    const Movie = sequelize.define('movies', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: type.STRING,
        },
    })
    return Movie;
};
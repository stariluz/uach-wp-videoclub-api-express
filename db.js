const Sequelize = require('sequelize');
const genreModel = require('./models/genre');

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

sequelize.sync({
    force: true,
}).then(() => {
    console.log("Restored database");
});

module.exports={Genre}
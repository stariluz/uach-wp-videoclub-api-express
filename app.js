const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const { expressjwt } = require('express-jwt');

const jwtKey = "c2c3416e440dc7ad082c788352d983be";

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const rolesRouter = require('./routes/roles');
const permissionsRouter = require('./routes/permissions');

// mongodb://<db_user>?:<db_password>?@<url>:<port>/<db_name>
const port = "21000";
const url = `mongodb://localhost:${port}/video-club`
mongoose.connect(url);
const db = mongoose.connection;

db.on('open', () => {
  console.log("Connection to database sucessful!");
});

db.on('error', () => {
  console.error("Couldn't connect to database");
});


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // Static resourses middleware

app.use(expressjwt({ secret: jwtKey, algorithms: ['HS256'] }).unless({
  path: ['/login'],
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/roles', rolesRouter);
app.use('/permissions', permissionsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const PORT = process.env.PORT || 5000
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/view')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.listen(PORT,() => console.log(`listening on port ${PORT}`));
module.exports = app;

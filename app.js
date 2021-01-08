var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var cors = require('cors')

require('dotenv').config();
var indexRouter = require('./routes/index');


var app = express();


//Mongoose Configuration
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let uri = 'mongodb://siso:'+encodeURIComponent('cl!o&-9uPesu-a=rlgev')+'@siso-api.miraclesoft.com/siso'
// process.env.MongoURI

// dont stop prod uri emails will trigger

mongoose.connect(process.env.MongoURI,function(err,db){
  if(db){
    console.log("Connect to Mongo Db");  
  } else {
    console.log("error connection to Mongo db",err);   
  }
});

app.use('/api', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

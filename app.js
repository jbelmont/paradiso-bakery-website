'use strict';

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Load Environment Variables
require(path.join(__dirname, 'config/config'))['loadEnvironmentVars'];

const routes = require('./routes/index');
const payments = require('./payments/stripePayments');
const admin = require('./admin/enableAdmin');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(favicon(path.join(__dirname, 'static/images', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'static')));

app.use('/', routes);
// Load payments api and admin interface api.
app.use('/api/v1/payments', payments);
app.use('/api/v1/admin', admin);

/**
 * catch 404 and forward to error handler
 */
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 * development error handler
 * will print stacktrace
 */
if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

/**
 * production error handler
 * no stacktraces leaked to user
 * */
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

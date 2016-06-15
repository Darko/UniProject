var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

var config = require('./config');

module.exports = function (app) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
}

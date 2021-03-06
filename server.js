/* server.js */

'use strict'

console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV);

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Make sure that the Mongoose configuration file is loaded first
// so that any module that is loaded after this module can use
// the User model without having to load it by itself.
var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(3000);

console.log('Server running at http://localhost:3000/');

module.exports = app;




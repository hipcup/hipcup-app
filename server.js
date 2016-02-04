// set up ======================================================================
var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var request = require('request');
var Q = require('q');
var mongoose = require('mongoose');
var database = require('./config/database');
var google_api_key = require('./server/keys/config.js').google_api_key;
var port = process.env.PORT || 3468;

 // configuration ===============================================================
mongoose.connect(database.url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("successfully connected to database");
});

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.sendStatus(204);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/client')));

// routes ======================================================================
var routes = require('./app/routes')(app);

// listen ======================================================================
app.listen(port);
console.log('Listening on port ' + port + '...');

var path = require('path');
var Q = require('q');
var request = require('request');

// models ======================================================================
var coffeeRun = require('./controllers/coffeeRun.js');
var coffeeOrder = require('./controllers/coffeeOrder.js');
var googleApi = require('./googleApiStoreData.js');

// routes ======================================================================

  module.exports = function(app) {
  // Database Queries ---------------------------------------------------------
  // add a coffee run
    app.post('/createRun', coffeeRun.createRun);

  // add a coffee order to a coffee run
    app.post('/placeOrder', coffeeOrder.placeOrder);


  // Google APIs -------------------------------------------------------------
  // Get user's geolocation 
    app.post('/google', function(req, res, next){
      googleApi.apiGeolocationData().then(function(data){
        return googleApi.apiPlacesData(data)
      }).then(function(data){
        return googleApi.formatCoffeeShopsData(data);
      }).then(function(data) {
        res.send(data);
      })
    });

 // application -------------------------------------------------------------
  // res.sendFile(path.join(__dirname, 'index.html')
  // app.get('/', function(req, res, next) {
  //     console.log("inside GET for INDEX request")
  //     res.sendFile(path.join(__dirname, 'client/index.html')); 
  // });

}; 

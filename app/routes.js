var path = require('path');
var Q = require('q');
var request = require('request');

// models ======================================================================
var coffeeRun = require('./controllers/coffeeRun.js');
var coffeeOrder = require('./controllers/coffeeOrder.js');
var fetchCoffeeShops = require('./fetchCoffeeShops.js');

// routes ======================================================================

  module.exports = function(app) {
  // Database Queries ---------------------------------------------------------
  // add a coffee run
    app.post('/createRun', coffeeRun.createRun);

  // fetch a coffee run 
    app.post('/fetchRun', coffeeRun.fetchRun);

  // add a coffee order to a coffee run
    app.post('/placeOrder', coffeeOrder.placeOrder);

  // Google APIs -------------------------------------------------------------

    // Fetch nearby coffee stores by coffee store name and address
    app.post('/fetchcoffeeshopnearaddress', function(req, res, next){
      fetchCoffeeShops.apiGeocodedAddress(req.body).then(function(data) {
        return fetchCoffeeShops.apiSpecificStoreData(data)
      }).then(function(data) {
        return fetchCoffeeShops.formatCoffeeShopsData(data);
      }).then(function(data) {
        return fetchCoffeeShops.apiDistanceData(data);
      }).then(function(data) {
        return fetchCoffeeShops.formatDistanceData(data);
      }).then(function(data) {
          console.log("FINAL DATA:", data)
        res.send(data);
      })
    });

  // Fetch nearby coffee stores by user's geolocation
    app.post('/fetchnearbycoffeestores', function(req, res, next){
      fetchCoffeeShops.apiGeolocationData().then(function(data) {
        return fetchCoffeeShops.apiPlacesData(data)
      }).then(function(data) {
        return fetchCoffeeShops.formatCoffeeShopsData(data);
      }).then(function(data) {
        return fetchCoffeeShops.apiDistanceData(data);
      }).then(function(data) {
        return fetchCoffeeShops.formatDistanceData(data);
      }).then(function(data) {
        res.send(data);
      })
    });

 // application -------------------------------------------------------------
    app.get('/', function(req, res, next) {
      res.sendFile(path.join(__dirname, 'index.html')); 
    });
    
    // send back the index.html page for all route requests
    // react-router will handle routing client-side 
    app.get('*', function (req, res){
      res.sendFile(path.resolve(__dirname, '../client', 'index.html'))
    })
}; 

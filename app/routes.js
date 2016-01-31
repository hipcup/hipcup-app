var path = require('path');
var Q = require('q');
var request = require('request');

// models ======================================================================
var coffeeRun = require('./models/coffeeRun.js');
var google_api_key = require('../server/keys/config.js').google_api_key;

// routes ======================================================================

  module.exports = function(app) {
  console.log("INSIDE APP ROUTES");
  // api ---------------------------------------------------------------------
  // add a CoffeeRun


  // Google APIs -------------------------------------------------------------
  // Get user's geolocation 
    app.post('/google', function(req, res, next){
      var apiGeolocationData = function(){
        var deferred = Q.defer();

        request.post({url:'https://www.googleapis.com/geolocation/v1/geolocate?key='+google_api_key}, function(err, res, body){
          if(err){
            console.log("error:", err);
            deferred.reject("error within google geolocation POST request");
          }
          if(!err && res.statusCode === 200){
            deferred.resolve(JSON.parse(body))
          }
          else {
            deferred.reject("alt error");
          }
        });

        return deferred.promise;
      };

     // Fetch stores based on user's lat and long 
      var apiStoreData = function(data){
        var lat = data.location.lat;
        var lng = data.location.lng;

        var deferred = Q.defer();

        request('https://maps.googleapis.com/maps/api/place/textsearch/json?query=coffee&location='+lat+','+lng+'&radius=5000&key='+google_api_key, function(err, res, body){
           if(err){
             console.log("error:", err);
             deferred.reject("error within googleplaces GET request");
           }
           if(!err && res.statusCode === 200){
             deferred.resolve({stores: JSON.parse(body), lat: lat, lng: lng})
           }
           else {
             deferred.reject("alt error");
           }
         });

         return deferred.promise;
      };

      apiGeolocationData().then(function(data){
        return apiStoreData(data)
      }).then(function(data){
        console.log("DATA:", data)
        res.send(data);
      });

    });

 // application -------------------------------------------------------------
  // res.sendFile(path.join(__dirname, 'index.html')
  // app.get('/', function(req, res, next) {
  //     console.log("inside GET for INDEX request")
  //     res.sendFile(path.join(__dirname, 'client/index.html')); 
  // });

}; 

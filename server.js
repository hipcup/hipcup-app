var express = require('express');
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');
var Q = require('q');
var google_api_key = require('./server/keys/config.js').google_api_key;

var app = express();

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

var jsonParser = bodyParser.json();
var port = process.env.PORT || 3468;

app.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/google', jsonParser, function(req, res, next){

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
    res.send(data);
  });

});

app.use(express.static(path.join(__dirname, './client')));

app.listen(port);
console.log('Listening on port ' + port + '...');

var Q = require('q');
var request = require('request');

var google_api_key = require('../server/keys/config.js').google_api_key;


exports.apiGeolocationData = function(){
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
exports.apiPlacesData = function(data){
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


exports.formatCoffeeShopsData = function(data) {
  var deferred = Q.defer();
  var storeData = data.stores.results.map(function(store) {
    var storeInfo = {};
    storeInfo.name = store.name;
    storeInfo.place_id = store.place_id; 


    if(store.formatted_address) {
      storeInfo.formatted_address = store.formatted_address;
    }

    if(store.geometry) {
      storeInfo.lat = store.geometry.location.lat;
      storeInfo.lng = store.geometry.location.lng;
    }

    if(store.opening_hours) {
      storeInfo.open_now = store.opening_hours.open_now; 
    } 
    return storeInfo; 
  });


  if(storeData){
    deferred.resolve({stores: storeData, lat: data.lat, lng: data.lng})
  } else {
    deferred.reject("alt error");
  }

  return deferred.promise;
}  

exports.apiDistanceData = function(data) {
  var lat = data.lat;
  var lng = data.lng;
  var stores = data.stores;

  console.log('!!!!!  !!!! !!!!! !!!!!',data);
  var deferred = Q.defer();

  var cordStr = stores.reduce(function(newStr, store) {
    var lat = store.lat;
    var lng = store.lng;
    var currStr = lat+','+lng+'|';
    return newStr+currStr; 
  }, '');

  var cordStr = cordStr.slice(0, -1);
  console.log('URL STRING', cordStr);
  request('https://maps.googleapis.com/maps/api/distancematrix/json?origins='+lat+','+lng+'&destinations='+cordStr+'&key='+google_api_key, function(err, res, body){
    if(err){
      console.log("error:", err);
      deferred.reject("error within googleDistance GET request");
    }
    if(!err && res.statusCode === 200){
      deferred.resolve({stores: stores, lat: lat, lng: lng, distance: JSON.parse(body)})
    }
    else {
      deferred.reject("alt error");
    }
   });


  return deferred.promise;
};

exports.formatDistanceData = function(data) {
  var lat = data.lat;
  var lng = data.lng;
  var stores = data.stores;
  var distances = data.distance.rows[0].elements;

  var deferred = Q.defer();

  var distances = distances.map(function(store) {
    var obj = {};
    obj.distance = store.distance.text;
    obj.time = store.duration.text;
    return obj;
  });

  if(distances){
    deferred.resolve({stores: stores, lat: lat, lng: lng, distances: distances})
  } else {
    deferred.reject("alt error");
  }

  return deferred.promise;
};

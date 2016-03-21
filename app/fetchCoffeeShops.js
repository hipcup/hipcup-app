var Q = require('q');
var request = require('request');
var helper = require('./helperfunctions').serverHelperFunctions;

var google_api_key = require('../server/keys/config.js').google_api_key;


// Fetch coffee shop by name and address 
exports.apiGeocodedAddress = function(data){
  console.log('Data', data);
  var location = data.location.split(' ').join('+');
  var deferred = Q.defer();

  request.post({url:'https://maps.googleapis.com/maps/api/geocode/json?address='+location+'&key='+google_api_key}, function(err, res, body){
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

// Fetch user's geolocation server-side
// exports.apiGeolocationData = function(){
//   var deferred = Q.defer();

//   request.post({url:'https://www.googleapis.com/geolocation/v1/geolocate?key='+google_api_key}, function(err, res, body){
//     if(err){
//       console.log("error:", err);
//       deferred.reject("error within google geolocation POST request");
//     }
//     if(!err && res.statusCode === 200){
//       deferred.resolve(JSON.parse(body))
//     }
//     else {
//       deferred.reject("alt error");
//     }
//   });

//   return deferred.promise;
// };

// Fetch stores near location
exports.apiSpecificStoreData = function(data){
  var deferred = Q.defer();
  var lat = data.results[0].geometry.location.lat;
  var lng = data.results[0].geometry.location.lng;

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


// Fetch stores based on user's lat and long 
exports.apiPlacesData = function(lat, lng){
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
    storeInfo.name = helper.formatNames(store.name);
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

  var deferred = Q.defer();

  var cordStr = stores.reduce(function(newStr, store) {
    var lat = store.lat;
    var lng = store.lng;
    var currStr = lat+','+lng+'|';
    return newStr+currStr; 
  }, '');

  var cordStr = cordStr.slice(0, -1);

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

  var storesWithDistances = stores.map(function(store, index) {
    var newStore = {};
    newStore.name = store.name;
    newStore.place_id = store.place_id;
    newStore.formatted_address = store.formatted_address;
    newStore.lat = store.lat;
    newStore.lng = store.lng;
    newStore.open_now = store.open_now;

    newStore.distance = distances[index].distance;
    newStore.time = distances[index].time;

    return newStore;
  });

  var storesSortedByDistance = storesWithDistances.sort(function(a,b){
    var aTimeStr = a.time;
    var bTimestr = b.time;
    var aTimeNum = aTimeStr.match(/\d+/)[0];
    var bTimeNum = bTimestr.match(/\d+/)[0];
    return aTimeNum - bTimeNum;
  });

  if(distances){
    deferred.resolve({stores: storesSortedByDistance, lat: lat, lng: lng})
  } else {
    deferred.reject("alt error");
  }

  return deferred.promise;
};

var mongoose = require('mongoose');
var CoffeeRun = require('./models/coffeeRun.js');

module.exports = {
  findExpiredRuns: function(currTime) {
    CoffeeRun
    .find({ coffeeRunExpired: false, timeOfRun: {$lt: currTime} }, function(err, coffeeRuns) {
      // insert logic to notify users here
      console.log("coffee runs to notify users", coffeeRuns);
    });
  },
  markExpiredRuns: function(currTime) {
    // to do: does not return updated documents 
    CoffeeRun
    // if a run has not been marked as expired, but the run time has expired
    .where({ coffeeRunExpired: false, timeOfRun: {$lt: currTime} })
    // allow multiple documents to be updated
    .setOptions({ multi: true })
    .update({ coffeeRunExpired: true }) 
    .exec(function(err, coffeeRuns) {
       if (err) return handleError(err);
       console.log("expired coffee runs", coffeeRuns);
    });
  },
  deleteExpiredRuns: function() {
    CoffeeRun.remove({ coffeeRunExpired: true}, function(err) {
      if (err) return handleError(err);
      console.log("expired coffee runs have been deleted");
    });
  }
}

var mongoose = require('mongoose');
var CoffeeRun = require('./models/coffeeRun.js');

module.exports = {
  markExpiredRuns: function() {
    var now = new Date();
    // to do: does not return updated documents 
    CoffeeRun
    // if a run has not been marked as expired, but the run time has expired
    .where({ coffeeRunExpired: false, timeOfRun: {$lt: now} })
    // allow multiple documents to be updated
    .setOptions({ multi: true })
    .update({ coffeeRunExpired: true }) 
    .exec(function(err, coffeeRuns) {
      // logic for notifiying user of coffee run expiration here 
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

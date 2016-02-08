var CoffeeRun = require('../models/coffeeRun.js');
var moment = require('moment');

exports.createRun = function(req, res) {
  
  // calculate coffee run time
  var timeOfRun = formatTimeUntilRun(req.body.timeAmount, req.body.timeUnit);

  var coffeeRun = new CoffeeRun({
    runnerName:  req.body.runnerName,
    timeStamp:   req.body.timeStamp, 
    coffeeShop:  req.body.coffeeShop,
    maxOrders:   req.body.maxOrders,
    slackChannel:req.body.slackChannel,
    timeOfRun: timeOfRun
  });

  console.log('coffeeRun:', coffeeRun);
  coffeeRun.save(function(err, coffeeRun) {
    if (err) {
      res.send({
        err: err,
        success: false
      });
    } else {
        res.json({
        success: true,
        message: 'Coffee Run has been created',
      });
    }
  });
}


function formatTimeUntilRun(amount, unit) {
  return moment().add(amount, unit); 
}
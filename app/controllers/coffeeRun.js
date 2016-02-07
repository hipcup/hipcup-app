var CoffeeRun = require('../models/coffeeRun.js');
var moment = require('moment');

exports.createRun = function(req, res) {
  
  // calculate time until run
  var timeOfRun = formatTimeUntilRun(req.body.amount, req.body.unit);
  console.log("timeOfRun:", timeOfRun);

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
    console.log('coffeeRun was saved:', coffeeRun);
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
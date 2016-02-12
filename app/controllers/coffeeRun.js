var CoffeeRun = require('../models/coffeeRun.js');
var moment = require('moment');

exports.createRun = function(req, res) {
  
  // calculate coffee run time
  var timeOfRun = formatTimeUntilRun(req.body.timeAmount, req.body.timeUnit);

  var coffeeRun = new CoffeeRun({
    coffeeRunID: req.body.coffeeRunID,
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

exports.fetchRun = function(req,res) {
  CoffeeRun.findOne({ "coffeeRunID": req.body.coffeeRunID}, function (err, coffeeRun) {
    console.log("coffeeRun inside fetchRun:", coffeeRun)
    if (err) {
      res.send({
        err: err,
        success: false
      });
    } else if (!coffeeRun) {
      res.send({
        err: 'coffee run does not exist',
        success: false
      });
    } else {
        res.json({
          coffeerun: {
            coffeeRunID: req.body.coffeeRunID,
            runnerName:  coffeeRun.runnerName,
            timeStamp:   coffeeRun.timeStamp, 
            coffeeShop:  coffeeRun.coffeeShop,
            maxOrders:   coffeeRun.maxOrders,
            slackChannel:coffeeRun.slackChannel,
            timeOfRun:   coffeeRun.timeOfRun
          },
          success: true,
          message: 'Coffee Run was fetched successfully'
      });
    }
  });
}


function formatTimeUntilRun(amount, unit) {
  return moment().add(amount, unit); 
}


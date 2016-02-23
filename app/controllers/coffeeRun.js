var CoffeeRun = require('../models/coffeeRun.js');
var helper = require('../helperfunctions.js').serverHelperFunctions;
var moment = require('moment');

exports.createRun = function(req, res) {
  // calculate coffee run time
  var timeOfRun = formatTimeUntilRun(req.body.timeAmount, req.body.timeUnit);

  var coffeeRun = new CoffeeRun({
    coffeeRunID: req.body.coffeeRunID,
    runnerName:  req.body.runnerName,
    address:     req.body.address,
    timeStamp:   req.body.timeStamp, 
    coffeeShop:  req.body.coffeeShop,
    maxOrders:   req.body.maxOrders,
    slackChannel:req.body.slackChannel,
    timeOfRun: timeOfRun
  });

  console.log('coffeeRun:', coffeeRun);
  coffeeRun.save(function(err, coffeeRun) {
    if (err) {
      helper.sendErrorResponse(res, err);
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
      helper.sendErrorResponse(res, err);
    } else if (!coffeeRun) {
      helper.sendErrorResponse(res, 'coffee run does not exist');
    } else {
        res.json({
          coffeerun: {
            coffeeRunID: req.body.coffeeRunID,
            runnerName:  coffeeRun.runnerName,
            coffeeShop:  coffeeRun.coffeeShop,
            address:     coffeeRun.address,
            timeStamp:   coffeeRun.timeStamp, 
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

exports.fetchResults = function(req, res) {
  CoffeeRun.findOne({"coffeeRunID": req.body.coffeeRunID}, function(err, coffeeRun) {
    console.log('coffeeRun inside fetchResults', coffeeRun);
    if (err) {
      helper.sendErrorResponse(res, err);
    } else if (!coffeeRun) {
      helper.sendErrorResponse(res, 'coffee run does not exist');
    } else {
        res.json({
          coffeerun: {
            orders:           coffeeRun.orders,
            numOrdersPlaced:  coffeeRun.numOrdersPlaced,
          },
          success: true,
          message: 'Coffee Results was fetched successfully'
      });
    }
  })
}

function formatTimeUntilRun(amount, unit) {
  return moment().add(amount, unit); 
}

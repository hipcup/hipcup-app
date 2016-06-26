var ObjectId = require('mongoose').Types.ObjectId; 
var CoffeeOrder = require('../models/coffeeOrder.js');
var CoffeeRun = require('../models/coffeeRun.js');
var helper = require('../helperfunctions.js').serverHelperFunctions;

exports.placeOrder = function(req, res) {

  var coffeeOrder = new CoffeeOrder ({
    coffeeRunID:     req.body.coffeeRunID,
    caffeinatorName: helper.formatNames(req.body.caffeinatorName),
    drinkOrder:      req.body.drinkOrder,
    drinkSize:       req.body.drinkSize,
    modifications:   req.body.modifications
  });

  CoffeeRun.findOne({ "coffeeRunID": coffeeOrder.coffeeRunID}, function (err, coffeeRun) {
    if (err) {
      return console.error(err);
    }
      
    // send error if coffee run with coffeeRunID cannot be found
    if(!coffeeRun) {
      helper.sendErrorResponse(res,"Sorry, no coffee run exists at this URL. Try creating a coffee run or double check the url provided.");
      return;
    } 

    // send error if time before run has been exceeded
    if(coffeeRun.coffeeRunExpired) {
        helper.sendErrorResponse(res,"Sorry, this coffee run has expired. Try creating a new run!");
        return;
    }
      
    // send error if max num of orders has been exceeded
    if(coffeeRun.numOrdersPlaced >= coffeeRun.maxOrders) {
      helper.sendErrorResponse(res,"Sorry, the number of orders for this coffee run has been exceed. Your order cannot be placed.");
      return;
    } 

    // update coffee run with new coffee order
    coffeeRun.orders.push(coffeeOrder);
    var newNumOfCoffeeOrder = coffeeRun.numOrdersPlaced + 1; 
    coffeeRun.numOrdersPlaced = newNumOfCoffeeOrder;
    // save to database
    coffeeRun.save(function (err) {
      if (err) {
        console.log("error saving coffee order in coffee run", err);
      }
      helper.sendSuccessResponse(res,"Coffee Order has been placed.");
    });
    
  });
}

